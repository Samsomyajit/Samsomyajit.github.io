---
layout: post
title: "Do Better Scores Mean Better Physics? What We Learned from Sim2Real Neural Operators"
subtitle: "Why a lower prediction error can still hide a worse physical forecast"
author: "Somyajit Chakraborty"
date: 2026-10-04
tags: [NeurIPS, XAI4Science, AI4Science, Scientific Machine Learning, Neural Operators, Sim2Real, CFD, Explainable AI]
cover: "/assets/img/do-better-scores-blog-cover.svg"
---

# Do Better Scores Mean Better Physics?

*Why a lower prediction error can still hide a worse physical forecast*

There is a question that keeps coming back whenever machine learning is used for scientific prediction:

> **If one model gets a lower error score, is it actually a better model of the physics?**

At first glance, the answer seems obvious. If the prediction is closer to the measured data, then surely the model must be better.

Our recent work suggests that the answer is more complicated.

In **“Do Better Scores Mean Better Physics? Physics-Grounded Explanations for Sim2Real Neural Operators,”** Xizhong Chen and I study a Sim2Real forecasting problem for flow around a NACA4418 airfoil. The paper has been accepted at the **NeurIPS 2026 XAI4Science Workshop: Knowledge Discovery and Trust through Interpretable Foundation Models** and is available as **arXiv:2610.00415**.

The central result is simple to state:

> **A model can improve its velocity-field prediction score while becoming worse on a physically meaningful fluctuation-energy diagnostic.**

That does not mean benchmark metrics are wrong. It means that a single scalar score cannot tell us everything we may want to know about a scientific forecast.

![Blog cover: Do Better Scores Mean Better Physics?](/assets/img/do-better-scores-blog-cover.svg)

## The problem: one number can hide many kinds of error

Suppose two AI models forecast an unsteady flow field.

Model A has a slightly higher average field error.

Model B has a lower field error, so by the usual benchmark it appears to be the better model.

But now we ask a different question: **does the model reproduce the fluctuation energy of the flow?**

That quantity matters because unsteady fluid motion is not only about the mean velocity. The fluctuations carry information about wake dynamics, shear, separation, mixing, and other structures that can be important in engineering interpretation.

In our study, the answer can reverse.

A model that looks better under the global velocity-field metric can look substantially worse under the fluctuation-energy metric.

This is the core reason for the title of the paper.

**Better scores do not automatically imply better physics.**

More precisely, better performance on one aggregate benchmark metric does not guarantee better agreement with every physically meaningful statistic of the flow.

## What we studied

The task comes from the NeurIPS 2026 RealPDE Competition Sim-to-Real Transfer Learning setting.

The data contain paired:

- **CFD simulations**, providing velocity and pressure fields;
- **experimental PIV measurements**, providing measured in-plane velocity fields.

The physical system is flow around a **NACA4418 airfoil** over a range of angles of attack and Reynolds numbers.

Each forecasting sample uses:

**20 observed PIV frames → 20 future PIV frames.**

We evaluated four neural-operator families under the same analysis protocol:

- a hybrid Fourier-wavelet reference model;
- FNO;
- CNO;
- Transolver.

The paper does not propose a new forecasting architecture. Instead, it asks how these models should be **explained and evaluated**.

That distinction matters. We are not trying to win by building a larger network. We are asking whether the metrics we use to declare one scientific model “better” actually agree with the physical behavior we care about.

## A physics-grounded intervention

To look inside the models' behavior, we constructed a simple intervention on the observed flow history.

For every 20-frame input sequence, we calculate a history fluctuation-energy map,

[
k_{mathrm{hist}}(x,y)
=
rac{1}{2}
leftlangle
(u-ar{u})^2 + (v-ar{v})^2
ightangle_{mathrm{hist}}.
]

This map tells us which observed spatial regions contain the strongest temporal fluctuations.

We then create three kinds of equal-area masks:

1. the **highest-energy** region;
2. a **random** region;
3. the **lowest-energy** region.

Inside a selected mask, we remove the temporal velocity fluctuations while preserving the local temporal mean.

In plain language, we ask the model:

> **What changes in your future forecast if I remove the unsteady part of the flow from this region, while leaving its average motion intact?**

The model is frozen. There is no retraining after the intervention.

We then compare the new forecast with the original forecast using field-response and fluctuation-energy-response diagnostics.

## Result 1: energetic regions matter more to the model's forecast

For the reference surrogate, removing fluctuations from the energetic 10% of the observed region produced a larger change in the future forecast than removing fluctuations from an equal-area random region.

For the fluctuation-energy response, the energetic-minus-random contrast was approximately:

- **0.351** on the selection subset;
- **0.346** on the calibration subset.

All 23 trajectory-level aggregates were positive on both subsets.

We also repeated the same basic test with FNO, CNO, and Transolver. At the 10% mask size, all three independently showed a positive energetic-over-random response.

That tells us that the observation is not unique to one architecture.

But there is an important limitation.

The high-energy mask and random mask have the same **area**, but they do not remove the same **amount of fluctuation energy**. By construction, the energetic mask usually removes more.

So this experiment should be interpreted as a **model-sensitivity diagnostic**, not as proof that we have identified a causal physical region.

That is an important distinction, and it is one of the main directions for improving this framework in future work.

## Result 2: lower field error can come with higher fluctuation-energy error

This is the result that motivated the strongest version of the paper's question.

Compared with the reference model, CNO achieved a **lower field error** on both analysis subsets.

On the selection subset, the trajectory-balanced difference was

[
Delta e_{mathrm{Rel-L2}} = -0.0189.
]

On calibration it was

[
Delta e_{mathrm{Rel-L2}} = -0.0191.
]

Negative is better here: CNO improved the velocity-field metric.

But the fluctuation-energy result moved in the opposite direction.

The CNO-reference differences were

[
Delta e_{mathrm{TKE}} = +0.1196
]

on selection and

[
Delta e_{mathrm{TKE}} = +0.1232
]

on calibration.

Positive is worse.

So the same model comparison says:

**Field metric:** CNO is better.

**Fluctuation-energy metric:** CNO is worse.

The opposite ranking appeared in 18 of the 23 trajectory aggregates on each subset.

This is not a philosophical thought experiment. It appears directly in the measured-model comparison.

## What do we mean by “TKE” here?

A technical clarification is important.

The experimental PIV data provide the two in-plane velocity components (u) and (v). Therefore the paper's “TKE” diagnostic is the **two-component PIV-resolved fluctuation energy**,

[
k(x,y)
=
rac{1}{2}
leftlangle
(u-ar u)^2+(v-ar v)^2
ightangle_t.
]

It is not the full three-component turbulent kinetic energy that would require the out-of-plane velocity component as well.

We retain the competition terminology because it is the metric used in the benchmark, but the physical interpretation should remain precise.

## Result 3: even improving the TKE benchmark can worsen total fluctuation energy

We also ran a controlled output-side stress test.

The forecast fluctuations were slightly attenuated while preserving the temporal mean. This reduced both the field error and the benchmark TKE error.

If we looked only at those two numbers, we might conclude that the forecast had improved.

However, the reference forecast was already under-energetic.

Its domain-summed fluctuation-energy ratio was approximately

[
R_E approx 0.815.
]

After attenuation, it fell further to approximately

[
R_E approx 0.756.
]

So the benchmark TKE error improved while the total fluctuation-energy deficit became larger.

Again, neither diagnostic is “wrong.”

They answer different questions.

The benchmark TKE error averages separately normalized spatial residuals over samples. The energy ratio pools the predicted and measured fluctuation energy over the domain. Those two summaries do not have to rank forecasts in the same way.

That is exactly the point.

## Accuracy is not the same thing as physical fidelity

Scientific machine learning often inherits the language of ordinary prediction tasks.

We train a model. We compute an error. The error goes down. We call the model better.

For many tasks that is a useful first approximation.

But physics contains structure that a single average can hide:

- conservation behavior;
- coherent structures;
- spatial localization;
- fluctuation amplitudes;
- spectra;
- transport rates;
- boundary behavior;
- integral quantities;
- responses to physically meaningful perturbations.

A surrogate can improve one of these and degrade another.

This means the question “Which model is better?” is incomplete until we specify:

> **Better for what physical purpose?**

That question becomes particularly important in Sim2Real settings.

A model may be trained or developed with simulation data but ultimately used against experimental measurements. Numerical accuracy is then only one layer of trust. We also need to understand how the model behaves when the measured flow contains structures, fluctuations, and imperfections that differ from the simulation domain.

## What this paper does not prove

I think the limitations are as important as the positive results.

### The intervention is not an energy-matched causal test

The energetic and random masks have equal area, but they do not remove equal fluctuation energy.

A stronger future experiment would compare energetic and control perturbations that remove matched amounts of energy.

### The masked histories are diagnostic inputs

When we modify an observed history, we do not have an experimentally measured or CFD-generated future corresponding to that exact artificial intervention.

So we can measure **how the model responds**, but not yet whether the response is the physically correct counterfactual future.

A stronger version would generate physically realizable interventions through a numerical solver or controlled experiment.

### The two subsets are not trajectory-disjoint

The 184-window selection subset and 768-window calibration subset use different windows, but both are drawn from the same **23 experimental trajectories**.

Their agreement is therefore a replication check within the analyzed support, not evidence of generalization to unseen trajectories or all 100 released trajectories.

### Sharp masks may interact with spectral models

Hard spatial boundaries can inject high-frequency content. That could matter especially for Fourier- or other spectral-based operators.

Smooth-mask controls are therefore another important next step.

These limitations do not erase the observed metric disagreement. They define what we can claim from it and what a stronger follow-up study should test.

## Why I think this matters beyond this airfoil problem

The broader issue is not specific to CNO, FNO, Transolver, or one NACA airfoil.

Scientific AI is increasingly used as a surrogate for systems where the output is not merely a label. It is a physical field.

In those settings, a model may be judged by a convenient scalar score even though the scientific decision depends on something more specific.

For example:

- an aerodynamic model may need the correct wake or near-wall behavior;
- a heat-transfer surrogate may need the correct transport rate;
- a multiphase model may need realistic bubble dynamics;
- a structural model may need accurate stress concentrations;
- a climate surrogate may need correct extremes rather than only average error.

A model can be numerically impressive and still be wrong in the part of the solution that matters scientifically.

That is why I increasingly think scientific AI evaluation should look less like a leaderboard with one number and more like a **diagnostic profile**.

Prediction error should remain part of that profile.

It just should not be the whole profile.

## Where we want to take this next

The current workshop paper is deliberately focused.

The next stage is to turn the diagnostic idea into a stronger physical validation framework.

The experiments I am most interested in are:

1. **Energy-matched interventions** — compare regions while controlling the amount of fluctuation energy removed.
2. **Smooth masks** — reduce possible spectral artifacts from hard boundaries.
3. **Physically realizable interventions** — modify initial or boundary conditions in a solver and compare the model response with a genuine numerical future.
4. **Trajectory-disjoint validation** — test whether the conclusions persist on genuinely unseen trajectories and flow conditions.
5. **Additional physical systems** — ask whether metric disagreement appears in heat transfer, multiphase flow, and other scientific surrogate problems.
6. **Model selection and training** — test whether physically grounded diagnostics can actually help choose or train more reliable scientific AI models.

The larger question is not simply whether we can detect disagreement between metrics.

It is whether we can use that disagreement to build **better scientific models and better scientific evaluation practices**.

## Final thought

The title of the paper is intentionally simple because the question is simple:

> **Do better scores mean better physics?**

Our answer is not “no.”

It is:

> **Not necessarily. A better score tells us that one metric improved. Scientific trust requires asking what happened to the physics we actually care about.**

That is the direction I want to keep exploring.

---

## Paper links

- [Read the paper on arXiv](https://arxiv.org/abs/2610.00415)
- [OpenReview record](https://openreview.net/forum?id=swbkiw3whb)
- [Permanent publication page](https://samchakraborty.me/publications/do-better-scores/)
- [Research project page](https://samchakraborty.me/research/sim2real-physics/)

## Citation

Chakraborty, S. and Chen, X. (2026). *Do Better Scores Mean Better Physics? Physics-Grounded Explanations for Sim2Real Neural Operators.* NeurIPS 2026 XAI4Science Workshop. arXiv:2610.00415.

*This work was accepted as a non-archival workshop paper at the NeurIPS 2026 XAI4Science Workshop.*
