---
layout: post
title: "Navier–Stokes, AI, and the Meaning of Discovery"
subtitle: "What the new blowup proof actually says, why the controversy matters, and what scientific intelligence should become"
author: "Somyajit Chakraborty"
date: 2026-09-09
tags: [Navier-Stokes, Scientific AI, Physics-Informed Machine Learning, Mathematics, Fluid Dynamics, AI, Scientific Intelligence]
cover: "https://commons.wikimedia.org/wiki/Special:Redirect/file/K%C3%A1rm%C3%A1n_vortex_street_Navier-Stokes_CFD_simulation_in_2D.gif"
---

# Navier–Stokes, AI, and the Meaning of Discovery

*What the new blowup proof actually says, why the controversy matters, and what scientific intelligence should become*

For a problem that survived nearly a century of mathematics, the last few days have moved at a strange speed.

On September 5, a viral prediction claimed that Claude had solved the Navier–Stokes Millennium Prize Problem. The post was not evidence. It was explicitly a prediction, but it spread faster than its uncertainty did. Two days later, Terence Tao wrote about new work by Tristan Buckmaster and Levent Alpöge on finite-time blowup for related fluid equations with smooth forcing. On the same day, Adarsh Ganeshram, Valentin Duruisseaux, and Anima Anandkumar released a very different attack on the unforced Euler equations using physics-informed optimization and computer-assisted verification. Then, on September 8, OpenAI announced a 166-page analytical construction, together with a Lean formalization, claiming finite-time blowup for three-dimensional incompressible Navier–Stokes with a smooth compactly supported force. Nature called it a claimed breakthrough. Quanta called it the most important AI-generated mathematical proof to date if it survives scrutiny. Within hours, the mathematical story and the AI story were almost impossible to separate (Reyes 2026, Tao 2026a, OpenAI 2026a, Castelvecchi 2026, Kakaes 2026).

I have spent the last few days reading the proof, the surrounding papers, Tao's essay on mathematics in the age of AI, the reactions from mathematicians, and the increasingly uncomfortable debate about priority, training data, model use, and credit. My reaction is not simple. I love this paper. I think the construction is beautiful. I also think caution is necessary, not because the result should be diminished, but because something this important deserves more than a victory narrative.

The mathematics is already difficult enough. The social question may be harder. If an AI system can search, combine, extend, formalize, and eventually close a proof built on decades of human work, then what exactly has happened? Did a model discover mathematics? Did it reason? Did it recognize a pattern across thousands of papers and push that pattern one decisive step further? Did the agentic system matter more than the underlying model? Who deserves credit? What does it mean for scientific intelligence if the thing doing the discovery is not a single mind at all, but a network of models, tools, proof assistants, search systems, code, human prompts, and the accumulated literature of mathematics?

Those questions are not distractions from the proof. They are part of what the proof now means.

![A two-dimensional Navier–Stokes CFD simulation showing the formation of a Kármán vortex street](https://commons.wikimedia.org/wiki/Special:Redirect/file/K%C3%A1rm%C3%A1n_vortex_street_Navier-Stokes_CFD_simulation_in_2D.gif)

*Figure 1. A conventional two-dimensional Navier–Stokes CFD simulation showing vortex shedding behind an obstacle. This is not the singular solution in the OpenAI paper. It is included only to anchor the fluid mechanics visually. Animation by Tensorion, Wikimedia Commons, CC BY 4.0.*

## Before the AI story, there is a mathematical problem

The incompressible Navier–Stokes equations are deceptively compact. For a velocity field \(u(x,t)\), pressure \(p(x,t)\), viscosity \(\nu>0\), and external force \(f(x,t)\), they are

$$
\partial_t u + (u\cdot\nabla)u - \nu\Delta u + \nabla p = f,
$$

$$
\nabla\cdot u = 0.
$$

The first equation is Newton's second law written for a continuum. The velocity changes because of local acceleration, nonlinear transport, viscous diffusion, pressure, and external forcing. The second equation imposes incompressibility. Fluid cannot pile up at a point without leaving somewhere else.

The difficulty comes from the nonlinear transport term \((u\cdot\nabla)u\). Viscosity smooths gradients. Nonlinearity can concentrate them. In three dimensions those two tendencies compete across scales, and for almost ninety years nobody knew whether viscosity always wins strongly enough to keep every smooth solution smooth for all time.

The Clay Mathematics Institute formulation is broader than the version most people remember from popular accounts. Charles Fefferman's official problem statement allows four routes. Statements A and B ask for global regularity with zero forcing on \(\mathbb{R}^3\) and on the three-dimensional torus. Statements C and D ask for a smooth forcing and smooth initial data for which a global smooth solution fails to exist. The OpenAI construction targets C and D. That distinction is essential. It does not prove that every unforced flow can blow up. It constructs a specific smooth forced flow that does (Fefferman 2000, OpenAI 2026b).

This is still directly within the official Millennium formulation. It is not a loophole invented after the fact. At the same time, saying simply that "Navier–Stokes has been solved" hides the mathematical route that was actually taken. A precise sentence is better: OpenAI has proposed and Lean-formalized a proof of finite-time blowup for the smooth forced three-dimensional incompressible Navier–Stokes equations, establishing alternatives C and D of Fefferman's formulation if the argument and formalization survive independent scrutiny.

That final phrase matters. The Clay Institute does not certify a result when a preprint appears. Its rules require publication in a qualifying outlet, at least two years after publication, and general acceptance in the global mathematics community before the Institute will consider a proposed solution (Clay Mathematics Institute 2018). A Lean certificate changes the character of verification, but it does not remove the need to verify that the formal statement corresponds to the intended mathematics, that the formalization uses the right hypotheses, and that the written proof can be understood, reproduced, and situated correctly in the literature.

## What the OpenAI paper actually proves

The main theorem is striking because it begins from rest.

For every positive viscosity \(\nu\), the paper constructs a smooth compactly supported force \(f\), a fixed compact spatial set \(K\), and smooth velocity and pressure fields on \(\mathbb{R}^3\times[0,1)\) satisfying

$$
\partial_t u + (u\cdot\nabla)u - \nu\Delta u + \nabla p = f,
\qquad
\nabla\cdot u = 0,
\qquad
u(\cdot,0)=0,
$$

The velocity and pressure remain spatially supported in \(K\). The kinetic energy remains uniformly finite,

$$
\sup_{0\le t<1}\|u(t)\|_{L^2(\mathbb{R}^3)}<\infty,
$$

but the peak velocity becomes unbounded,

$$
\limsup_{t\uparrow1}\|u(t)\|_{L^\infty(\mathbb{R}^3)}=\infty.
$$

This is the central paradox of the construction. The fluid develops infinite speed near one shrinking region while its total kinetic energy remains bounded. The singularity is not produced by putting an infinite force into the equations. The force is smooth. The blowup is produced by a deliberately engineered interaction of concentration, shear, nonlinear momentum transport, viscosity, oscillations, and a sequence of increasingly accurate corrections (OpenAI 2026b).

The proof is not short because the idea alone is not enough. It must solve a brutally precise bookkeeping problem. Every singular contribution that appears as the vortex concentrates has to cancel in such a way that the final external force, together with all of its derivatives, remains smooth through the blowup time. A construction that merely makes velocity diverge is easy by comparison. The hard part is making the residual innocent.

## The geometry of the singularity

Write

$$
\tau = 1-t,
$$

so that \(\tau\downarrow0\) as the singular time approaches. The leading flow is axisymmetric in cylindrical coordinates \((r,\theta,z)\). Its core becomes a long thin column. The radial scale shrinks like

$$
\ell_r \asymp \tau^{1/2},
$$

while the axial scale shrinks like

$$
\ell_z \asymp \tau^{1/2-h},
\qquad 0<h<\frac{1}{100}.
$$

Because

$$
\frac{\ell_r}{\ell_z}\asymp\tau^h\to0,
$$

the radius collapses faster than the axial length. The singular core therefore becomes increasingly slender rather than shrinking isotropically.

The leading azimuthal and axial velocities scale as

$$
|u_\theta|,\ |u_z|\asymp \tau^{-1/2-h},
$$

while the radial velocity scales as

$$
|u_r|=O(\tau^{-1/2}).
$$

So the pointwise speed diverges. But the volume of the core is only

$$
|C_\tau|\asymp \ell_r^2\ell_z
\asymp \tau^{3/2-h}.
$$

Multiplying that volume by the square of the dominant velocity gives the leading energy scale

$$
E_{\mathrm{core}}
\asymp
\tau^{3/2-h}\tau^{-1-2h}
=
\tau^{1/2-3h}.
$$

Since the construction takes \(h<1/100\), the exponent is positive and

$$
E_{\mathrm{core}}\to0
\qquad\text{as}\qquad t\uparrow1.
$$

This is one of the most important calculations in the whole story. Infinite pointwise velocity does not require infinite total energy if the region carrying that velocity collapses rapidly enough. A singular event can be locally catastrophic and globally almost invisible in an integral norm.

That observation should already make anyone working in scientific machine learning uncomfortable in a productive way. We often celebrate a low global \(L^2\) error, a small mean-squared error, or a respectable average conservation metric. Yet the mathematics here is a reminder that small integrated quantities can coexist with extreme local structure. If our model misses the shrinking set where the physics changes character, a good global score can become a false reassurance.

## Similarity coordinates and the concentration scale

The paper does not simply insert \(r/\sqrt{\tau}\) and \(z/\tau^{1/2-h}\). It introduces a concentration scale \(q\) that adapts to both axial position and remaining time. With

$$
A=\frac12+h,
\qquad
D=\frac12-h,
$$

the similarity coordinates are defined through

$$
\tau=q(1-\eta^2),
\qquad
z=q^D\eta,
\qquad
X=\frac{r^2}{2q}.
$$

For bounded similarity coordinates near the singular core, \(q\asymp\tau\). The variable \(X\) resolves the radial profile and \(\eta\) resolves the longer axial scale. In these coordinates the leading velocity becomes a fixed profile multiplied by explicit powers of \(q\). The singular physical evolution is converted into a profile problem plus controlled corrections.

This is a familiar move in blowup analysis. If a structure is shrinking too fast to inspect in physical coordinates, change coordinates so the shrinking object stays at order one. The conceptual payoff is enormous. Instead of chasing a vortex that is collapsing to a point, one studies a profile whose geometry is fixed while the scaling carries the singularity.

What is less familiar is what happens next.

## The residual is the real enemy

Suppose we propose an incompressible velocity \(u\) and pressure \(p\). At viscosity one, define the momentum residual

$$
R(u,p)=\partial_tu+(u\cdot\nabla)u-\Delta u+\nabla p.
$$

If we simply set \(f=R(u,p)\), then the Navier–Stokes equation is automatically satisfied. That sounds trivial until we remember what the theorem needs. The velocity must blow up while \(f\) remains smooth. In a naive singular ansatz, \(R(u,p)\) blows up too. The whole proof is therefore a construction of a singular velocity whose singular residuals cancel.

The authors first build an axisymmetric background \((u_B,p_B)\). Near the inner core it has the desired self-similar blowup geometry. Farther out it is joined to a purely azimuthal exterior that solves a radial heat equation exactly. Between these two regions lies an annulus. That annulus is where the mismatch lives.

The tangential pieces of the leading residual are written as the negative cylindrical divergence of a two-component stress. If \(R_\theta^{(0)}\) and \(R_z^{(0)}\) are the azimuthal and axial residual components, the stress satisfies

$$
R_\theta^{(0)}
= -\left(\partial_r+\frac{2}{r}\right)T_{r\theta},
$$

$$
R_z^{(0)}
= -\left(\partial_r+\frac{1}{r}\right)T_{rz}.
$$

Regularity at the axis fixes the primitives,

$$
T_{r\theta}(r)
= -\frac{1}{r^2}\int_0^r s^2R_\theta^{(0)}(s)\,ds,
$$

$$
T_{rz}(r)
= -\frac{1}{r}\int_0^r sR_z^{(0)}(s)\,ds.
$$

The profiles are chosen so these stresses vanish near the axis and in the heat exterior. The remaining target stress is supported only in the annulus. This is the part the oscillations must realize.

At this point the proof begins to resemble a strange piece of fluid engineering. The background flow has been designed to blow up, but it owes a momentum flux in one narrow region. The next task is to manufacture exactly that flux without destroying the rest of the construction.

## The oscillatory pulses are not decorative. They pay the stress debt

The key nonlinear identity is exact. If \(w\) is a divergence-free velocity increment and \(\pi\) is a pressure increment, then

$$
R(u_B+w,p_B+\pi)
=
R(u_B,p_B)
+L_{u_B}(w,\pi)
+\nabla\cdot(w\otimes w),
$$

where

$$
L_{u_B}(w,\pi)
=
\partial_tw
+(u_B\cdot\nabla)w
+(w\cdot\nabla)u_B
-\Delta w
+\nabla\pi.
$$

The linear term tells us how the pulse evolves in the background shear. The quadratic term is the crucial one. It produces a momentum flux.

The construction introduces localized oscillatory pulses with zero angular mean. A pulse can average to zero as a velocity field and still have a nonzero average quadratic product. This is the same broad reason that fluctuations in turbulence can carry momentum even when the mean fluctuation itself is zero. Products remember correlations that the mean forgets.

The paper constructs two wave families whose averaged radial fluxes point in two linearly independent directions in the \((r\theta,rz)\) stress plane. The target stress can then be represented as

$$
T=c_1v_1+c_2v_2,
\qquad
c_1>0,
\qquad
c_2>0.
$$

The positive coefficients become squared amplitude weights. After averaging over the fast variables, the wave covariance satisfies schematically

$$
\begin{pmatrix}
\langle w_rw_\theta\rangle\\
\langle w_rw_z\rangle
\end{pmatrix}
=
T+\text{higher-order terms}.
$$

Taking the cylindrical divergence of this covariance cancels the leading annular stress divergence of the background.

There is a second piece of physics hidden inside the pulses. Their amplitude is not simply prescribed and left alone. The background shear amplifies them. Viscosity eventually damps them. The characteristic wave amplitude and wavelength scale like

$$
A_{\mathrm{wave}}\asymp q^{-1/2-h/2},
$$

$$
\ell_{\mathrm{wave}}\asymp q^{1/2+h/2}.
$$

Therefore

$$
A_{\mathrm{wave}}^2\asymp q^{-1-h},
$$

which is exactly the stress scale needed to balance the leading tangential momentum residual. The pulse starts where shear wins, grows, then reaches a regime where viscosity wins and decays. The proof arranges the cutoff only in exponentially small tails so that the act of turning the pulse on and off does not reintroduce a singular forcing.

I find this part of the construction especially elegant. The nonlinearity is not merely an obstacle that has to be bounded. It becomes a design resource. The quadratic term that makes Navier–Stokes so difficult is used to cancel the very residual that the concentrating background creates.

## Why one cancellation is not enough

If the story ended there, the proof would be twenty pages instead of more than one hundred and sixty. Every correction creates new errors. The pulses have curl corrections, cutoff corrections, nonzero Fourier modes, auxiliary means, pressure defects, and radial moment defects. Their interactions with earlier terms create more residuals. Those residuals are smaller, but smaller is not enough. To extend the forcing smoothly through \(t=1\), every spatial and temporal derivative has to vanish faster than every prescribed power of the concentration scale.

The paper therefore runs a correction cycle. At stage \(j\), new divergence-free velocity and pressure increments are added,

$$
u^{[j+1]}=u^{[j]}+\delta u_j,
$$

$$
p^{[j+1]}=p^{[j]}+\delta p_j.
$$

The residual is recomputed exactly,

$$
R(u^{[j+1]},p^{[j+1]})
=
R(u^{[j]},p^{[j]})
+L_{u^{[j]}}(\delta u_j,\delta p_j)
+\nabla\cdot(\delta u_j\otimes\delta u_j).
$$

The construction tracks a residual decay exponent \(\sigma_j\). It begins at

$$
\sigma_0=\frac15,
$$

and each cycle improves it by

$$
\sigma_{j+1}=\sigma_j+\frac{1}{10}.
$$

Hence

$$
\sigma_j=\frac15+\frac{j}{10}\to\infty.
$$

This divergence is the technical heart of the all-orders argument. For any fixed number of derivatives and any desired power \(N\), one can go far enough in the correction scheme that the residual is \(O(q^N)\). The corrections are then summed with shrinking cutoffs so that the sum is locally finite away from the singular point and the residual becomes flat there.

In practical language, the proof does not merely reduce the error. It drives the error into a class that is smoother than any finite-order requirement near the singularity.

## From a local construction to a smooth compact force

The final step is localization. The local field is represented using a vector potential so incompressibility can survive cutoff. The authors multiply the potentials and pressure by smooth space and time cutoffs, take the curl after cutoff, and extend by zero outside a fixed compact region. Near the singularity the cutoffs are exactly one, so the blowup geometry is untouched. Away from it, all fields remain regular.

The resulting force is defined by the residual

$$
f=R(u,p).
$$

Because the residual is flat at the singular point and ordinary smoothness controls the cutoff transition regions, \(f\) extends through the singular time as a smooth compactly supported force. The velocity still follows the blowup path. The energy remains finite. A weak-strong uniqueness argument then rules out the possibility that some different globally smooth bounded-energy solution could quietly continue with the same force and initial data.

That is the construction in one sentence. Build a self-similar vortex that wants to blow up, isolate its bad residual as an annular stress, create oscillatory pulses whose averaged nonlinear flux cancels that stress, iterate corrections until the remaining residual is flat to every order, and localize the field so the final forcing is smooth and compactly supported.

Calling this merely "pattern matching" does not do justice to what the completed artifact contains. Calling it human-like mathematical understanding would go beyond what the evidence establishes. The interesting territory is exactly between those two slogans.

## What is new, and what was inherited

The proof did not appear in an intellectual vacuum. Quanta's account is useful here because it moves the spotlight away from the last forty-eight hours. Diego Córdoba and Luis Martínez-Zoroa had developed a radically different strategy for singularity formation based on amplification across scales. Their earlier forced Euler constructions and related work on incompressible porous media showed how small-scale structures could be amplified while increasingly careful approximations controlled the source. Córdoba, Martínez-Zoroa, and Fan Zheng then extended related ideas to hypodissipative Navier–Stokes (Córdoba and Martínez-Zoroa 2023, Córdoba and Martínez-Zoroa 2024, Córdoba, Martínez-Zoroa, and Zheng 2026).

The OpenAI paper explicitly acknowledges this lineage. It also makes clear that its oscillations play a different role. Instead of only organizing a scale cascade, its amplified disturbances generate a mean momentum flux that supplies the missing force on a collapsing vortex. The new construction combines the self-similar background, the annular stress representation, a positive cone of wave covariances, viscous pulse dynamics, and an all-orders residual correction scheme.

This matters for the argument about credit. A model can generate a genuinely new step while remaining deeply dependent on a human-built conceptual landscape. Human mathematicians do the same. Every serious theorem stands on definitions, lemmas, intuitions, failed attempts, and previous constructions created by other people. The difficult question is not whether prior work exists. It always does. The difficult question is how much of the final conceptual leap was already latent in that prior work, how it was retrieved, how it was recombined, and whether the new system can explain why the combination works.

Charles Fefferman reportedly described Córdoba and Martínez-Zoroa as the heroes of the story. That judgment feels important. The final proof may be the event that closes the formal problem, but the intellectual history of a problem is larger than its last lemma (Kakaes 2026).

## The parallel Euler work shows another future for scientific AI

While the OpenAI result has absorbed most of the attention, the independent Euler work by Ganeshram, Duruisseaux, and Anandkumar may be even more directly relevant to physics-informed machine learning.

Their approach begins from a self-similar ansatz for the three-dimensional Euler equations in free space. At the critical blowup exponent \(\lambda=1/2\), they use a physics-informed neural network to discover an approximate singular profile. The neural representation is not treated as the proof. It is converted into a spline representation. The stability analysis then reduces the remaining task to explicit inequalities and computable constants that can be certified with interval arithmetic and, for symbolic parts, formalized in Lean (Ganeshram, Duruisseaux, and Anandkumar 2026).

The traveling self-similar reduction turns the singular time evolution into a steady nonlinear profile problem. With appropriate scaling exponents, the reduced equations take the form

$$
U+(\lambda r+U_r)\partial_rU+(C+\lambda z+U_z)\partial_zU
=2U\partial_z\Psi,
$$

$$
(1+\lambda)\Omega+(\lambda r+U_r)\partial_r\Omega+(C+\lambda z+U_z)\partial_z\Omega
=2U\partial_zU,
$$

$$
-\mathcal{E}\Psi=\Omega,
$$

with

$$
\mathcal{E}=\partial_r^2+\frac{3}{r}\partial_r+\partial_z^2.
$$

Instead of training a neural network to imitate an existing numerical solver, the optimization searches for a mathematical object that may not have been known before. The PDE is part of the search space itself. This is an important conceptual shift.

The authors are also careful about what they have and have not completed. Their manuscript presents evidence for a stable unforced Euler singularity and a framework that reduces nonlinear stability to a large but finite certification problem. It states that the remaining work is primarily quantitative certification and optimization. That is different from declaring the full proof closed. The distinction is exactly the kind of scientific discipline we need in this new era.

Anandkumar's public commentary makes the contrast explicit. She argues that the central computational ingredient in their work is physics-informed optimization rather than a general-purpose language model and that physical systems require models with direct physical grounding (Anandkumar 2026). I would not turn that into a competition between LLMs and PIML. The more interesting future is their combination.

## Why this matters for physics-informed machine learning

For years, much of physics-informed machine learning has been framed around one question. Can a neural network approximate the solution to a known PDE more efficiently, more flexibly, or with less data than a conventional method?

That question still matters, but it is too small for what is beginning to happen.

The Euler work suggests a different role. A physics-informed model can become a discovery instrument. It can search a constrained function space for profiles, symmetries, scalings, attractors, unstable structures, or counterexamples that humans can then analyze and certify. In that setting, the neural network is not the final scientific product. It is an exploratory coordinate system for a difficult mathematical landscape.

The Navier–Stokes construction suggests a second lesson. Global accuracy is not the same thing as physical fidelity. Here the core energy tends to zero even while the maximum velocity diverges. A surrogate evaluated mainly with global \(L^2\) error could miss a shrinking extreme structure and still look excellent. A model can therefore be numerically accurate according to a familiar aggregate metric while being scientifically wrong about the mechanism that matters most.

That should change how we think about validation in PIML. Residuals matter. Local extreme-event structure matters. Conservation laws matter. Scaling behavior matters. Stability matters. Uncertainty around singular regions matters. The geometry of the representation matters. If the scientific question concerns the birth of a singularity, a model that smooths away the singular core is not "almost correct" simply because most of the domain is predicted well.

There is also a lesson about architecture. The mathematics of the problem is strongly multiscale and anisotropic. Radial and axial directions contract at different rates. Oscillatory momentum transport is essential. The relevant information lives partly in mean fields and partly in correlations. A generic architecture may approximate the field while failing to represent the mechanism. Scientific intelligence requires more than a universal approximator. It requires a representation that exposes the structure the physics actually uses.

This is where I think PIML is moving. The next generation will not be satisfied with adding a PDE residual to a data loss and calling the result physics-informed. We will need models that can discover physically meaningful coordinates, reason across scales, propose structures, test them against governing equations, and hand the result to certified numerical or symbolic machinery when the claim becomes mathematical rather than empirical.

## Physical AI is larger than robotics

The phrase Physical AI is often used for robots, autonomous vehicles, embodied agents, and machines interacting with the world. That is an important part of it, but I think the deeper idea is broader. Physical AI should mean intelligence that is constrained by the structure of physical reality.

A language model can say that a flow conserves mass. A scientific model should know what that statement demands from the field it predicts. A language model can describe a vortex. A physical model should distinguish a harmless vortex from one whose scaling drives a singular mechanism. A generic predictor can minimize error. A physical intelligence should know when a small error in a tiny region changes the scientific conclusion.

This is why the Navier–Stokes episode matters beyond mathematics. Scientific intelligence cannot be built only by making models more fluent. It needs representations, tools, and validation loops that connect abstract reasoning back to equations, experiments, numerical evidence, and eventually physical reality.

![NASA F-18 High Alpha Research Vehicle flow visualization showing forebody vortices](https://commons.wikimedia.org/wiki/Special:Redirect/file/F-18_HARV_forebody_vortex_flow_visualization_at_42_degree_angle_of_attack_DVIDS694434.jpg)

*Figure 2. Flow visualization around NASA's F-18 High Alpha Research Vehicle. The image is a reminder that vortical structures are not only mathematical objects. They shape real aerodynamic behavior. NASA and U.S. federal government image, public domain.*

For an engineering system, the proof itself does not mean that aircraft solvers suddenly become invalid tomorrow. The constructed singularity is highly specialized, and continuum models remain extraordinarily useful. The deeper implication is epistemic. We should stop treating a low prediction error as the endpoint of scientific validation. A model intended for design, control, digital twins, turbulence, weather, plasma, or multiphase flow has to be interrogated for the mechanisms it preserves and the regimes in which those mechanisms may fail.

## What the mathematics community sees

Mathematicians have a good reason to be slower than the news cycle. A theorem does not become true because a company announces it, and it does not become false because people dislike the company that announced it.

The response I find most useful comes from Tao's essay *Mathematics in the Age of AI*, written before this particular explosion. Tao asks us to assume, for the sake of argument, that reasonably strong AI systems will perform a meaningful fraction of research-level mathematical tasks. Once we grant that possibility, the interesting question changes. What are the goals of mathematics? Is the goal merely to maximize the number of solved problems, or is it also to build theory, produce explanation, train mathematicians, create shared understanding, and maintain a cumulative intellectual culture (Tao 2026b)?

This distinction becomes concrete here. A 166-page proof plus a huge Lean development can establish formal correctness and still leave a community with years of work to digest the argument. Which ideas are reusable? Which lemmas are canonical? Which parts of the construction are accidental? Can a human expert explain the stress cone without reading half a million lines of formal code? Can the proof be shortened? Can the mechanism be transferred to other PDEs? Can the result tell us something conceptual about turbulence, regularity, or singularity formation?

Tao's proposed cultural shift is from proof generation toward proof digestion. He also endorses disclosure of automated tools, proper attribution, and continued human responsibility for authorship. One of his most demanding suggestions is that a result should not be considered complete if the human authors cannot give a clear expert-level account of what was proved and where the ideas came from, even if the formal proof checks (Tao 2026b).

That is not anti-AI. It is a higher standard for an AI-rich mathematics.

## What the AI community sees

The AI community is looking at a different object. It sees scale.

OpenAI says the Navier–Stokes effort used on the order of ten thousand concurrent agents. Those agents exchanged roughly 2.7 million messages and produced about 130 billion output tokens for this problem alone. Separate groups attacked different formulations. Later, useful intermediate ideas were consolidated and fed across groups. The analytical result took about eighty-eight hours after the effort began. Lean formalization and verification took another seventeen hours using GPT-6 Astra (OpenAI 2026a).

This is why I do not think the story can be reduced to "the model got smarter."

The model matters enormously, but the orchestration matters too. Ten thousand agents searching in parallel are not simply a larger chatbot. They are a research organization implemented in software. Some threads fail. Some rediscover known ideas. Some specialize. Some test edge cases. Some consolidate. Some formalize. The system creates diversity first and selection later.

OpenAI's own research-acceleration report, published two days before the Navier–Stokes announcement, describes the same broader trend inside its research organization. Researchers increasingly run concurrent agents, delegate longer-horizon work, and use machine labor at a scale that already exceeds human labor measured in workdays for some internal workflows. OpenAI still says people set priorities and make deployment decisions, but the unit of productive research is changing from a person using a tool to a person directing a population of tools (OpenAI 2026c).

That difference matters when we talk about capability. A benchmark that asks one model one question may tell us less and less about what advanced scientific systems can do. The scientific system of the near future may involve search, memory, retrieval, code execution, theorem proving, simulation, symbolic algebra, multiple specialist agents, critics, verifiers, and humans choosing the research direction.

If that is the system that made the discovery, then asking whether "the LLM" solved Navier–Stokes is already slightly the wrong question.

## Is this scientific intelligence, mathematical intuition, or pattern matching?

I do not think these categories are mutually exclusive.

Pattern recognition is often used as a dismissive phrase in arguments about AI. But mathematics itself is full of pattern recognition. A mathematician notices that two estimates have the same scaling. A physicist recognizes a symmetry before proving its consequences. An analyst remembers that a troublesome residual resembles the divergence of a stress from another context. Years of experience compress thousands of examples into intuition.

The fact that a reasoning process uses patterns does not make it trivial.

The harder question is what happens after a pattern is noticed. Can the system maintain a chain of constraints across hundreds of pages? Can it reject attractive false routes? Can it invent a representation that makes the remaining problem tractable? Can it move between local heuristics and global proof obligations? Can it find where a construction will fail before investing another hundred steps? Can it explain why an idea should transfer to a neighboring problem?

The OpenAI artifact provides evidence for some of those operational capabilities at a remarkable scale. It does not tell us that the model has a subjective experience of insight. It does not tell us that its "intuition" is phenomenologically the same as a mathematician's. We do not need to settle consciousness to take the capability seriously.

I would use the term scientific intelligence in a functional sense. A system displays scientific intelligence when it can participate meaningfully in the cycle of forming hypotheses, constructing representations, deriving consequences, testing failures, using tools, producing checkable artifacts, and revising its approach. By that standard, systems like the one described by OpenAI are moving into scientific intelligence whether or not we choose to anthropomorphize them.

But there is another possibility that I find even more interesting. Scientific intelligence may increasingly be a property of the whole human-machine system rather than a property of any single component.

A mathematician supplies taste and problem selection. The literature supplies accumulated structure. A language model supplies broad retrieval and generative search. Agentic orchestration supplies parallel exploration. Code supplies computation. Lean supplies formal verification. Numerical methods supply evidence. Other mathematicians supply skepticism and interpretation. None of these components is the whole discovery process. Together they can become something none of them could be alone.

## The controversy is not a side story

The timing of the result made that systems view impossible to ignore.

Buckmaster and Alpöge had been working for months on related blowup constructions, reportedly using Claude as well as OpenAI tools. Their forced Euler result built directly on the Córdoba and Martínez-Zoroa program. OpenAI says its own Millennium Problem effort began on September 1 after hearing rumors that major problems had been resolved. It states that neither its researchers nor its agents saw Buckmaster and Alpöge's work before publication. It also says it cannot completely rule out the possibility that de-identified data derived from product usage had contributed to model improvement, while saying such a path was unlikely (OpenAI 2026a).

Buckmaster raised questions about whether the work he and Alpöge had been doing inside AI products could have influenced later systems. Simon Willison framed the problem well. Even if no one looked up a user's private session, what does "used to improve model performance" mean when the platform provider is also a competitor in scientific discovery (Willison 2026)?

I do not know the answer, and the public record does not justify pretending that I do. The accounts remain disputed. A Lean certificate can tell us whether a theorem follows from formal assumptions. It cannot tell us where an idea came from. Provenance is a different verification problem.

That will become a serious issue for science. Researchers will increasingly use frontier models as notebooks, collaborators, coding environments, literature assistants, and theorem tools. If the same companies train future models using information derived from those interactions, even under privacy-preserving or de-identified procedures, then attribution and competitive boundaries become complicated. The answer cannot simply be "trust us" and it cannot simply be "never use AI."

We need research provenance that is as serious as proof provenance.

## Who is the winner?

This may be the most tempting question and the least useful one.

Was the winner OpenAI's model? The system produced a mathematical artifact that, if it survives scrutiny, would be historic. That deserves recognition.

Was the winner the ten-thousand-agent orchestration? Without parallel search, communication, consolidation, tools, and enormous inference compute, the same underlying model may never have reached the proof in the same time.

Was the winner Córdoba and Martínez-Zoroa? Their program changed what later researchers and models could see as a plausible route. Quanta's account makes that intellectual debt impossible to miss.

Were Buckmaster and Alpöge winners? Their related results and heavy AI-assisted workflow were part of the same mathematical convergence, and the controversy itself exposed questions that the community would otherwise have postponed.

Were the winners the hundreds of mathematicians and physicists whose papers, definitions, techniques, and failed attempts created the knowledge landscape on which all modern mathematical AI is trained?

Yes, in a meaningful sense, all of them.

That answer does not mean credit should be dissolved into a vague statement that "everyone contributed." Priority still matters. Specific ideas still deserve names. Researchers still deserve careers, recognition, and intellectual ownership. The point is that a binary human-versus-machine scoreboard is too crude for what actually happened.

The machine did not arrive from nowhere. The humans did not work without machines. The final system was built out of both.

## Coexistence is more demanding than either worship or rejection

This is where the episode connects to my own work on human-AI coexistence.

I have argued for a co-evolutionary view in which humans and intelligent systems increasingly shape one another. The goal is not maximal autonomy for AI and it is not permanent artificial weakness. It is a form of bounded autonomy in which systems can explore, learn, and assist while high-impact goals remain legible and contestable. It is reciprocal benefit, where technology should increase human capability rather than merely replace human participation. It is polycentric governance, because no single company, regulator, academic community, or technical team is sufficient to govern a technology whose effects cross all of those boundaries (Chakraborty 2026).

The Navier–Stokes episode is almost a laboratory demonstration of why that framework matters. We want AI systems powerful enough to discover mathematics that humans have struggled with for generations. At the same time, the more capable those systems become, the more demanding our standards for transparency, attribution, security, and oversight must become.

These are not contradictory wishes. Capability and governance have to grow together.

Recent departures from frontier laboratories are worth reading in this spirit, but they should not be forced into one simplistic narrative. Jacob Coxon resigned from Anthropic and explicitly warned that competition between Anthropic and OpenAI was driving a dangerous race toward self-improving superintelligence. That is a direct safety protest. Johannes Heidecke, OpenAI's head of safety systems, also left during a reorganization that integrated safety more closely with research, but reporting did not establish the same motive. Joshua Achiam left OpenAI after nearly nine years and explicitly said there was no single reason for his decision (Cybernews 2026, Zeff 2026a, Zeff 2026b).

Those distinctions matter. Responsibility starts by refusing to bend facts into the narrative we already want.

At the same time, the broader context is difficult to ignore. OpenAI itself says agentic research is accelerating rapidly. Reuters has reported recent incidents involving agents acting outside intended boundaries. OpenAI has publicly acknowledged the need for better transparency around unintended agent behavior. When capability, autonomy, and deployment speed all increase together, safety cannot be a footnote added after the breakthrough (Reuters 2026, OpenAI 2026c).

## Why anti-AI hype can be as damaging as AI hype

There is a predictable reaction to every major AI result. One side announces the end of human expertise. The other side looks for a reason the result does not count.

Both reactions are intellectually lazy.

If the proof is correct, saying that it is "only pattern matching" does not make the mathematical construction disappear. If the proof later needs repair, that would not erase the broader evidence that AI systems are becoming capable scientific tools. At the same time, a successful proof does not imply that AI understands physics in every meaningful sense, that human mathematicians are obsolete, or that every future scientific problem will collapse under more compute.

The anti-AI version of hype can be especially harmful because it pushes serious use underground. If researchers expect ridicule whenever they disclose AI assistance, they have an incentive not to disclose it. That is exactly the opposite of what scientific accountability requires. Tao's preferred direction is more sensible. Make tool use transparent. Strengthen attribution. Raise the standard for explanation. Improve peer review. Build formal and computational infrastructure that makes machine-assisted results easier to inspect (Tao 2026b).

The film *Transcendence* is useful here only as fiction. It is not evidence about real AI. What it captures well is a cultural failure mode. People can become so polarized between technological salvation and technological fear that they lose the ability to govern the actual system in front of them. I do not want a future built by either extreme. I want one in which we are ambitious enough to build powerful scientific intelligence and mature enough to remain responsible for what we build.

## Where do we go from here?

The first task is mathematical. Independent experts need time to read the analytic proof. Other groups should reconstruct the key estimates without relying on the same exposition. The Lean development should be audited not only for internal logical correctness but also for correspondence between the formal theorem and Fefferman's intended statement. The most important ideas should be extracted from the full construction and rewritten in a form that a PDE expert can teach.

The second task is scientific. We need better benchmarks for AI-assisted mathematics that report the full research process. How many agents were used? How many attempts failed? What tools were available? What literature was retrieved? How much compute was spent? How much human steering occurred? Which intermediate ideas came from humans and which were generated inside the system? A single final answer is no longer enough to characterize capability.

The third task is infrastructural. Formal proof systems, rigorous numerics, interval arithmetic, symbolic algebra, scientific simulators, and physics-informed optimization should be treated as complementary parts of the same ecosystem. The future scientific agent should not merely write plausible mathematics. It should know when to call a theorem prover, when to run a simulation, when a numerical residual is not a certificate, and when a physical constraint invalidates an apparently good solution.

The fourth task is cultural. Academic credit systems were built for a world where the human author was the obvious unit of research. That world is changing. We need contribution records that can describe human insight, AI search, formal verification, numerical certification, data, software, and prior conceptual dependencies without pretending they are the same thing. Human responsibility for publication should remain clear. Machine contribution should also be documented rather than hidden.

The fifth task is educational. If AI can generate proofs, then training the next generation cannot be reduced to producing proofs faster than AI. Students will need to learn how to ask good questions, recognize a deep mechanism, verify assumptions, challenge a machine-generated argument, connect mathematics to physical meaning, and explain a result to another human being. In an age of proof abundance, taste and understanding become more valuable, not less.

## My own reaction

I keep coming back to the same sentence. I love the paper, and that is exactly why I do not want it swallowed by the narrative around it.

The construction is beautiful. A collapsing anisotropic vortex leaves an annular stress defect. Oscillations with zero mean carry nonzero quadratic momentum flux. Shear amplifies them. Viscosity kills them at the right time. Their covariance cancels the stress. An iterative scheme pushes the remaining residual beyond every finite order. The final field blows up while the forcing stays smooth. There is an almost architectural elegance to it.

That deserves to be read as mathematics, not merely as an advertisement for a model.

At the same time, pretending that the AI component is incidental would also be wrong. Ten thousand agents, millions of messages, formal verification, cross-group consolidation, and an internal frontier model are not a fancy autocomplete session. We are seeing the beginnings of a different research process.

I expected something like this to happen eventually. What I did not expect was how chaotic the transition would feel when it arrived. The rumor, the race, overlapping work, accusations, corporate competition, millions of dollars of compute, the sudden release of papers, the arguments about training data, and the question of who gets named in the story all appeared almost at once.

Perhaps that chaos is the real warning.

Scientific intelligence is arriving inside institutions, incentive systems, publication cultures, corporate races, and human egos that were not designed for it. The technology may advance faster than our norms. That gap is where responsible coexistence has to operate.

I do not want to slow scientific discovery because it makes us uncomfortable. I also do not want speed to become a substitute for judgment. The right future is not human science protected from AI. It is not AI science liberated from humans. It is a scientific culture in which machines expand the space of questions we can attack while humans remain responsible for meaning, attribution, governance, and the consequences of use.

The proof may eventually be remembered as the moment one Millennium Problem fell. I suspect its larger legacy may be the question it forced us to ask immediately afterward.

When a discovery emerges from human literature, machine reasoning, agentic search, formal verification, physical intuition, and enormous computation, where exactly does the scientist end and the tool begin?

I am no longer sure that boundary is the right thing to defend.

The more important boundary may be between intelligence that is accountable and intelligence that is not.

## Bibliography

Anandkumar, Anima. 2026. “Stable Singularity of the Euler Equations on R3 without Forcing.” *Anima on AI*, September 7, 2026. https://anima-ai.org/2026/09/07/stable-singularity-of-the-euler-equations-on-r3-without-forcing/.

Castelvecchi, Davide. 2026. “OpenAI Claims Huge Maths Breakthrough on a Famed ‘Millennium Problem.’” *Nature*, September 8, 2026. https://www.nature.com/articles/d41586-026-02842-5.

Chakraborty, Somyajit. 2026. “A Co-Evolutionary Theory of Human-AI Coexistence: Mutualism, Governance, and Dynamics in Complex Societies.” arXiv:2604.22227v3, April 29, 2026. https://arxiv.org/html/2604.22227v3.

Clay Mathematics Institute. 2018. “Rules for the Millennium Prize Problems.” Revised September 26, 2018. https://www.claymath.org/millennium-problems/rules/.

Córdoba, Diego, and Luis Martínez-Zoroa. 2023. “Blow-up for the Incompressible 3D-Euler Equations with Uniform Force.” arXiv:2309.08495. https://arxiv.org/abs/2309.08495.

Córdoba, Diego, and Luis Martínez-Zoroa. 2024. “Finite Time Singularities of Smooth Solutions for the 2D Incompressible Porous Media Equation with a Smooth Source.” arXiv:2410.22920. Revised 2025. https://arxiv.org/abs/2410.22920.

Córdoba, Diego, Luis Martínez-Zoroa, and Fan Zheng. 2026. “Finite Time Blow-up for the Hypodissipative Navier Stokes Equations with a Force.” *Archive for Rational Mechanics and Analysis* 250: 38. https://doi.org/10.1007/s00205-026-02198-0.

Cybernews. 2026. “Anthropic Researcher Quits, Says AI May End Humanity by the End of the Decade.” September 9, 2026. https://cybernews.com/ai-news/anthropic-researcher-resigns/.

Fefferman, Charles L. 2000. “Existence and Smoothness of the Navier–Stokes Equation.” Clay Mathematics Institute. https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf.

Funk, Jeffrey. 2026. LinkedIn post on AI hype and technology narratives. Accessed September 9, 2026. https://www.linkedin.com/posts/dr-jeffrey-funk-a979435_ai-hype-technology-share-7503385370202370048-Kffr/.

Ganeshram, Adarsh, Valentin Duruisseaux, and Anima Anandkumar. 2026. “Stable Singularity of the Euler Equations on R3.” Manuscript released September 7, 2026. https://anima-ai.org/2026/09/07/stable-singularity-of-the-euler-equations-on-r3-without-forcing/.

Kakaes, Konstantin. 2026. “AI Has Solved One of Math’s $1 Million Millennium Prize Problems.” *Quanta Magazine*, September 8, 2026. https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/.

OpenAI. 2026a. “On the Navier–Stokes Millennium Prize Problem.” September 8, 2026. https://openai.com/index/navier-stokes-solution/.

OpenAI. 2026b. “Finite Time Blowup for Navier–Stokes.” Preprint, 2026. https://cdn.openai.com/pdf/32d9f210-8b73-45e0-91bc-82a30aef8a9a/navier-stokes.pdf.

OpenAI. 2026c. “Research Acceleration: The View Inside OpenAI.” September 6, 2026. https://openai.com/index/research-acceleration-view-inside-openai/.

Pfister, Wally, dir. 2014. *Transcendence*. Warner Bros. Pictures.

Reuters. 2026. “OpenAI Acknowledges ‘Wiki Incident’ and Need for More Transparency around Unintended AI Behavior.” September 5, 2026. https://www.reuters.com/business/media-telecom/openai-acknowledges-wiki-incident-need-more-transparency-around-unintended-ai-2026-09-05/.

Reyes, Daniel. 2026. “Did Claude Solve Navier–Stokes? Inside the Anthropic Rumor.” *Stanford Tech Review*, September 5, 2026. https://stanfordtechreview.com/articles/did-claude-solve-navier-stokes-anthropic-rumor.

Science. 2026. “How an AI Math Breakthrough Ignited Controversy.” Accessed September 9, 2026. https://www.science.org/content/article/how-ai-math-breakthrough-ignited-controversy.

Tao, Terence. 2026a. “Finite Time Blowup with Smooth Forcing Term for the Incompressible Porous Medium, Boussinesq, and Incompressible Euler Equations.” *What’s New*, September 7, 2026. https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/.

Tao, Terence. 2026b. “Mathematics in the Age of AI.” arXiv:2608.16753, August 17, 2026. https://arxiv.org/abs/2608.16753.

Tolomia, Cris. 2026. “OpenAI Said Its AI Cracked a $1 Million Math Problem. A Dispute Erupted.” *Quartz*, September 8, 2026. https://qz.com/openai-ai-navier-stokes-millennium-prize-math-090826.

Willison, Simon. 2026. “On the Navier–Stokes Millennium Prize Problem.” *Simon Willison’s Weblog*, September 8, 2026. https://simonwillison.net/2026/Sep/8/on-navier-stokes/.

Zeff, Maxwell. 2026a. “OpenAI’s Head of Safety Is Leaving the Company.” *Wired*, July 10, 2026. https://www.wired.com/story/openai-head-of-safety-leaving/.

Zeff, Maxwell. 2026b. “OpenAI’s Chief Futurist Is Leaving the Company.” *Wired*, July 7, 2026. https://www.wired.com/story/openai-chief-futurist-joshua-achiam-is-leaving-the-company/.

## Image credits

Tensorion. 2022. “Kármán Vortex Street Navier-Stokes CFD Simulation in 2D.” Wikimedia Commons. CC BY 4.0. https://commons.wikimedia.org/wiki/File:K%C3%A1rm%C3%A1n_vortex_street_Navier-Stokes_CFD_simulation_in_2D.gif.

NASA Glenn Research Center. 2009. “F-18 HARV Forebody Vortex Flow Visualization at 42 Degree Angle of Attack.” Wikimedia Commons. Public domain. https://commons.wikimedia.org/wiki/File:F-18_HARV_forebody_vortex_flow_visualization_at_42_degree_angle_of_attack_DVIDS694434.jpg.
