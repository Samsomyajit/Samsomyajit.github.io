---
layout: post
title: "Inside PIBERT: A Conversation on Physics-Informed Fourier-Wavelet Transformers for Multiscale CFD"
date: 2026-07-02
tags: [PIBERT, CFD, Scientific-ML, Transformers, Fourier, Wavelets, Physics-Informed-ML]
---

> **TL;DR.** PIBERT is a physics-informed transformer for computational fluid dynamics that combines global Fourier representations, localized wavelet features, physics-biased attention, and self-supervised pretraining. Its central idea is not merely to add a physics penalty to a neural network, but to build physical reasoning into the representation, information-routing mechanism, and learning objectives of the model.

![PIBERT architecture and multiscale CFD surrogate modeling overview](/assets/img/PIBERT-2.png)
<video width="640" height="360" controls>
  <source src="/assets/pibert-cfd-surrogate-web.mp4" type="video/mp4">
</video>


## A lecture on why multiscale CFD needs more than a conventional transformer
_This lecture is a series of conversation that was transcripted during an interview._

**Sam:** Welcome to *Advanced Topics in Scientific Machine Learning*. Today's lecture is on the paper **“A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling”** by Somyajit Chakraborty, Ming Pan, and Xizhong Chen at Shanghai Jiao Tong University.

We have seen a growing trend of adapting transformers to scientific problems. Models such as BCAT and GeoTransolver illustrate how attention can help represent complex physical systems. This work pushes the idea further. It does not simply place a transformer on top of CFD data. Instead, it integrates physics into the model's input representation, attention mechanism, pretraining tasks, and fine-tuning objective.

That distinction matters because fluid dynamics is fundamentally multiscale. A flow can contain large coherent structures, intermediate wake dynamics, boundary layers, sharp gradients, and small vortical features at the same time. Accurately resolving all of them with conventional numerical solvers requires fine meshes and small time steps, which becomes expensive when we need repeated simulations, parameter sweeps, optimization, uncertainty quantification, or near-real-time prediction.

**Noah:** Is the main distinction therefore the focus on multiscale modeling? Other transformer-based PDE solvers also claim to handle complex systems. What specific gap is PIBERT trying to fill?

**Sam:** The gap is in **how the physics is represented and enforced**.

Many scientific machine-learning models fall into one of two broad categories:

- **Data-driven operator learners**, such as the Fourier Neural Operator, efficiently learn mappings between physical fields but may smooth localized, high-frequency structures.
- **Physics-constrained models**, such as Physics-Informed Neural Networks, insert the PDE residual into the loss function but can struggle with stiff systems, chaotic dynamics, complicated solution manifolds, and multiscale optimization.

PIBERT seeks a more unified architecture. It embeds physics at several levels:

1. **Representation:** Fourier and wavelet branches jointly encode global and local structures.
2. **Information routing:** attention scores are biased using physical-residual diagnostics.
3. **Pretraining:** the model learns physical priors from masked reconstruction and equation-consistency tasks.
4. **Fine-tuning:** reconstruction is combined with divergence, Laplacian, and boundary regularization.

The goal is a surrogate that does not merely fit data and then receive an external physical correction. Instead, the network is designed to process information in a physics-aware manner from the beginning.

---

## Research question 1: Can Fourier and wavelet representations work together?

**Noah:** The hybrid Fourier-wavelet input sounds interesting. Why is one transform not enough?

**Sam:** Because the two transforms see different aspects of the flow.

A Fourier representation is global. It is very effective for periodic structures, large-scale modes, and long-range organization. However, localized events are spread across many Fourier coefficients. Sharp gradients, thin shear layers, near-wall structures, and wake irregularities can therefore be difficult to preserve when the spectrum is truncated.

Wavelets are localized in both space and frequency. They are naturally suited to boundaries, transients, discontinuities, and high-wavenumber details. PIBERT therefore uses two parallel branches:

- a **Fourier branch** based on a real two-dimensional FFT and per-frequency channel mixing;
- a **tight-frame wavelet branch** based on translation-invariant local filters.

The outputs are fused using a learned scalar softmax gate:

$$
y_{\mathrm{fuse}}
= \alpha_F y_{\mathrm{Fourier}}
+ (1-\alpha_F)y_{\mathrm{Wavelet}}.
$$

The learned gate allows the model to adaptively decide how much global spectral information and how much localized wavelet information are needed for a particular input.

**Noah:** So the gate could emphasize Fourier modes for globally organized flow and wavelets near sharp boundaries or transient structures?

**Sam:** Exactly. The design is deliberately complementary rather than competitive. The paper also develops stability arguments for these components. The Fourier mixing is designed to be non-expansive under unitary conditions, while the tight-frame wavelet filters satisfy a Parseval-style energy partition. For a fixed gate, the fusion remains non-expansive. These properties do not guarantee perfect learning, but they provide a mathematically motivated foundation for stable multiscale representation.

---

## Research question 2: Can attention be made physically selective?

**Noah:** A standard transformer decides attention using query-key similarity. How is PDE knowledge introduced into that process?

**Sam:** PIBERT modifies the attention logits. In a standard transformer, the score between token $i$ and token $j$ is represented by $L_{ij}$. PIBERT subtracts a physics-derived penalty:

$$
\widetilde{L}_{ij}
= L_{ij} - \lambda_{\mathrm{att}}R_{ij}.
$$

Here, $R_{ij}$ is a residual proxy that measures physical inconsistency. In the practical implementation, the proxy is key-dependent:

$$
R_{ij}=r_j.
$$

This means that a token associated with a larger physical violation receives a lower attention score, regardless of which query is attending to it.

**Noah:** Does this require evaluating the full PDE residual for every pair of tokens? That would seem expensive.

**Sam:** No. That is precisely why the separable, key-dependent form is important. The residual diagnostics are computed on the grid, pooled to the token level, and attached to the key token. The model does not construct a different PDE residual for every query-key pair.

For incompressible flow, the diagnostics include quantities such as the divergence residual

$$
R_{\mathrm{div}} = |\nabla\cdot\mathbf{u}|,
$$

and a momentum-style residual

$$
R_{\mathrm{mom}} =
\left\|
\partial_t\mathbf{u}
+ (\mathbf{u}\cdot\nabla)\mathbf{u}
+ \frac{1}{\rho}\nabla p
- \nu\Delta\mathbf{u}
\right\|_2.
$$

The mechanism therefore tells the transformer: **route less information through states that appear physically inconsistent**.

This is stronger than using a residual only as a final loss term. The residual influences the internal communication pattern of the network itself.

---

## Research question 3: Can a CFD model learn physics before supervised training?

**Noah:** This sounds similar to foundation-model pretraining. What are the physics equivalents of masked language modeling?

**Sam:** PIBERT uses two self-supervised objectives.

### Masked Physics Prediction

In **Masked Physics Prediction (MPP)**, parts of the continuous physical field are hidden. The model reconstructs the missing values using the surrounding spatial and physical context.

The masking strategy follows an 80-10-10 structure:

- 80% of selected values are removed;
- 10% are replaced by physics-aware noise;
- 10% remain unchanged.

This prevents the model from relying on a trivial interpolation rule and encourages it to learn long-range physical relationships.

### Equation Consistency Prediction

In **Equation Consistency Prediction (ECP)**, the model acts as a physics critic. It distinguishes between:

- physically valid states produced by a numerical solver;
- physically invalid states created by perturbing valid solutions.

**Noah:** Would random noise make the classification task too easy?

**Sam:** It could. The paper therefore uses more difficult negative examples, including gradient-based adversarial perturbations. These hard negatives may look plausible while violating the governing physics in subtle ways. The model must learn deeper features of equation consistency rather than simply detecting obvious corruption.

The combination of MPP and ECP gives PIBERT a useful pretraining curriculum:

- MPP teaches **contextual physical reconstruction**;
- ECP teaches **physical discrimination**.

---

## What happens during fine-tuning?

The self-supervised model is subsequently fine-tuned using labeled CFD data. The total objective combines field reconstruction with physics-inspired regularization:

$$
\mathcal{L}_{\mathrm{total}}
= \mathcal{L}_{\mathrm{recon}}
+ \lambda_{\mathrm{div}}\mathcal{L}_{\mathrm{div}}
+ \lambda_{\mathrm{lap}}\mathcal{L}_{\mathrm{lap}}
+ \lambda_{\mathrm{bnd}}\mathcal{L}_{\mathrm{bnd}}.
$$

The components encourage:

- accurate next-step field reconstruction;
- approximate incompressibility;
- physically reasonable spatial smoothness;
- adherence to boundary conditions.

The important point is that physics does not enter only here. By the time fine-tuning begins, the input representation, attention mechanism, and pretraining objectives have already introduced physics-aware inductive biases.

---

## What do the benchmark results show?

**Noah:** Architectural ideas are interesting, but do they actually improve CFD prediction?

**Sam:** The paper evaluates PIBERT on two RealPDEBench datasets: **cylinder-real** and **FSI-real**. The common task is next-step velocity-field prediction on resized $64\times64$ inputs. Baselines include FourierFlow, FNO2d, PITT, DeepONet2d, and PINN.

| Benchmark | PIBERT result | Main interpretation |
|---|---:|---|
| Cylinder-real, all-channel NMSE | **0.05875** | Best aggregate accuracy across the full velocity representation |
| Cylinder-real, all-channel LPCC | **0.97019** | Strong correlation with the reference flow |
| Cylinder near-body slice wins | **86.9%** | Strong recovery of boundary-adjacent and high-gradient structures |
| FSI-real, all-channel NMSE | **2.70 × 10^-4** | Lower than FourierFlow at 4.02 × 10^-4 |
| FSI near-body / wake-core / far-wake wins | **87.9% / 76.3% / 91.4%** | Consistent fidelity across spatially distinct flow regions |
| Inference time | **5.85 ms per sample** | Higher computational cost than lighter baselines |

### Cylinder flow

On cylinder-real, PIBERT achieved the best aggregate performance. Its advantage was especially clear for the cross-stream velocity component and for localized regions near the body and in the wake.

The multiscale slice analysis is particularly informative. Rather than reporting only one global error, the authors separate the domain into near-body, wake-core, and far-wake regions. PIBERT won 86.9% of near-body slices, 40.7% of wake-core slices, and 49.7% of far-wake slices.

This supports the claim that the model is not merely reducing an average error. It is preserving physically important structures in regions where advection, shear, recirculation, and boundary effects are strongest.

### Fluid-structure interaction

On FSI-real, PIBERT produced an all-channel NMSE of $2.70\times10^{-4}$, compared with $4.02\times10^{-4}$ for FourierFlow. It also achieved the lowest errors across multiple coarse-to-fine scales, vorticity diagnostics, boundary regions, and directional wavelet details.

The FSI results are important because the flow is geometrically and dynamically more complex. The model's advantage across near-body, wake-core, and far-wake slices suggests that the hybrid representation remains useful when the field contains coupled local and global interactions.

---

## Is PIBERT always the right choice?

**Noah:** The model is more accurate, but it is also more expensive. Is the additional complexity justified?

**Sam:** It depends on the application.

PIBERT is most compelling when localized accuracy matters:

- aerodynamic force prediction near solid boundaries;
- heat-transfer analysis in critical components;
- wake reconstruction and vortex-sensitive design;
- fluid-structure interaction;
- combustion or mixing systems where fine structures affect global behavior;
- simulation-assisted optimization where systematic local errors can mislead the design loop.

A lighter operator model may remain preferable when:

- only large-scale trends are required;
- inference latency is the dominant constraint;
- the geometry and physics are simple;
- the additional multiscale fidelity does not change the engineering decision.

The paper therefore illustrates a familiar scientific-computing tradeoff: **higher physical fidelity in exchange for greater architectural and computational complexity**.

---

## Limitations and open research directions

The authors identify several important limitations.

### Structured-grid dependence

The current implementation operates on tensorized structured grids. Extending the method to irregular meshes, finite-element discretizations, and geometry-aware tokens would increase its value for realistic engineering domains.

### Attention cost

Dense self-attention scales quadratically with the number of tokens. Sparse, local, hierarchical, or multiresolution attention could reduce cost while preserving the physics-aware routing mechanism.

### PDE-specific residual design

The current residual bias is designed around incompressible-flow diagnostics. Compressible flow, reaction-diffusion systems, wave equations, and multiphase systems require different residuals, invariants, and boundary constraints. A promising direction is to develop modular physics-bias adapters for different PDE families.

### Rollout and uncertainty

The main experiments focus on one-step reconstruction. Longer autoregressive rollouts, coupled trajectory prediction, uncertainty calibration, and robustness outside the training distribution remain important tests.

---

## The broader scientific-machine-learning lesson

**Noah:** So the deeper contribution is not just the Fourier-wavelet encoder?

**Sam:** Correct. The broader lesson is architectural integration.

FNO introduced a powerful spectral perspective. PINNs demonstrated that governing equations can guide learning. Transformers showed how global interactions can be modeled through attention. Self-supervised learning showed that useful representations can be learned before labeled fine-tuning.

PIBERT combines these ideas into a single CFD surrogate:

- Fourier modes for global structure;
- tight-frame wavelets for localized detail;
- residual-biased attention for physically selective information flow;
- MPP and ECP for physics-aware pretraining;
- physical regularizers for supervised fine-tuning.

The performance gains do not come from one isolated trick. They come from embedding domain knowledge throughout the machine-learning pipeline.

**Sam:** To conclude, PIBERT offers a pathway toward high-fidelity CFD surrogate modeling in which physics is not merely appended to the loss function. It shapes what the model sees, what it attends to, what it learns before supervision, and how it is optimized afterward.

The price is additional complexity. For low-stakes or strongly latency-constrained applications, a lighter model may be sufficient. For high-stakes scientific and engineering problems where boundary effects, wake organization, vorticity, and multiscale structure matter, that complexity may be justified.

Thanks for reading. Questions and technical discussion are welcome in the comments.

---

## Paper and project links

- [Read the preprint on arXiv](https://arxiv.org/abs/2606.24696)
- [Open the permanent publication page](https://samchakraborty.me/publications/fourier-wavelet-transformer/)
- [Explore the PIBERT research page](https://samchakraborty.me/research/pibert/)

## References

1. Chakraborty, S., Pan, M. and Chen, X., 2026. *A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling.* arXiv:2606.24696.

2. Raissi, M., Perdikaris, P. and Karniadakis, G.E., 2019. *Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations.* Journal of Computational Physics, 378, pp.686–707.

3. Li, Z., Kovachki, N.B., Azizzadenesheli, K., Liu, B., Bhattacharya, K., Stuart, A. and Anandkumar, A., 2021. *Fourier Neural Operator for Parametric Partial Differential Equations.* International Conference on Learning Representations.

4. Hu, P. et al., 2026. *RealPDEBench: A Benchmark for Complex Physical Systems with Real-World Data.* International Conference on Learning Representations.

5. Lorsung, C., Li, Z. and Barati Farimani, A., 2024. *Physics Informed Token Transformer for Solving Partial Differential Equations.* Machine Learning: Science and Technology, 5(1), 015032.
