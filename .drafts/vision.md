---
title: "Cathedral: Requirements Engineering for Software That Has to Be Right"
description: "Requirements are the sick part of software engineering, the one discipline where decades of tooling progress have left practitioners no better off. Cathedral is the answer: a formal, multi-persona requirements platform that gives every agent (human or AI) a canonical source of truth."
date: 2026-02-21
---

# Cathedral: Requirements Engineering for Software That Has to Be Right

Most software projects fail not because of the code, but because of what came before the code: requirements that were ambiguous, incomplete, inconsistent, or simply never written down. That problem is decades old. Every other discipline in software engineering (design, programming, testing) has undergone enormous tooling progress in that time. Requirements engineering has not. It remains, in most organizations, the one step still governed by informal prose, tribal knowledge, and tools no more sophisticated than a word processor or a ticket system.

Cathedral is a Requirements Engineering and Management platform built to redress that imbalance: a formally grounded, multi-persona [knowledge base](https://en.wikipedia.org/wiki/Knowledge_base) (KB) that gives every agent in your project, human or AI, a canonical source of truth about what the system must do and why. Its relevance predates LLMs. But if you are shipping AI-generated code today without a formal requirements layer, the cost of that omission is no longer deferred. It is compounding in production, at machine speed, with no structural mechanism to detect it.

---

## The Problem Has Always Been Requirements

> *"If a system is a solution, requirements state the problem. Since a solution to the wrong problem is useless, stating the problem is as important as building the solution. Hence the centrality of requirements engineering in information technology. Good requirements are among the most treasurable assets of a project. Bad requirements hamper it at best and doom it at worst. In software development as practiced today, requirements are more often bad than good... on the problem side, requirements remain the sick part of software engineering."*
>
> *[Bertrand Meyer](https://en.wikipedia.org/wiki/Bertrand_Meyer)*

In 1968, [a NATO conference](https://en.wikipedia.org/wiki/NATO_Software_Engineering_Conferences) coined a phrase: the [*Software Crisis*](https://en.wikipedia.org/wiki/Software_crisis). We could not build software fast enough, correctly enough, or cheaply enough. [Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) diagnosed the structural cause in his [1972 Turing Award lecture](https://www.cs.utexas.edu/~EWD/transcriptions/EWD03xx/EWD340.html): *"The major cause of the software crisis is that the machines have become several orders of magnitude more powerful. As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem."* Capability outran method.

The industry responded on two fronts. Technically: structured programming, object orientation, type systems, continuous integration. Organizationally: Scrum, DevOps, SAFe, Extreme Programming: frameworks designed as much to coordinate the people building software as the software itself. The crisis was never resolved. To put in another way: it didn't so much go away as got swept under the rug. Progress was real; the fundamental problem was deferred.

The data reflects this honestly. [The Standish Group](https://www.standishgroup.com/) has tracked project outcomes across thousands of organizations for three decades in their [CHAOS Report](https://web.archive.org/web/20211007050508/https://www.projectsmart.co.uk/white-papers/chaos-report.pdf). Success rates for medium, large, and grand projects (the kind most organizations actually run) collapse to 6–12%. The failure cascade is consistent across every post-mortem: a project comes in late; if not late, over budget; if not over budget, short of its requirements; and if it met requirements, those requirements turned out to be wrong. That last rung is the most commonly reached and the least addressed.

Frederick Brooks named the root cause in 1986 and it has not changed: *"The hardest single part of building a software system is deciding precisely what to build. No other part of the work so cripples the resulting system if done wrong. No other part is more difficult to rectify later."*

Notice what these diagnoses have in common: none of them are about AI. They are about a structural deficit in how the industry has always worked. Design has patterns and proven methodologies. Programming has type systems, compilers, and static analysis. Testing has coverage tools, property-based frameworks, and CI pipelines. Requirements have a word processor and a meeting.

AI does not create this problem. It accelerates and amplifies it. We are now entering the most consequential phase of this long-standing crisis: not because something new has gone wrong, but because the code-generation step has become cheap and fast enough that the cost of inadequate requirements is no longer absorbed gradually; it is catastrophic, immediate, and difficult to reverse. If you can generate 10,000+ lines of code per day, generating the *wrong* 10,000+ lines per day is a qualitatively different kind of failure than it was before.

---

## Why the Obvious Fixes Are Making It Worse

### Natural Language Is Not a Specification Medium

The promise of AI-assisted development is intoxicating: describe what you want in plain English and get working code. The gap between intent and implementation appears to have collapsed.

It hasn't. It has been moved, obscured, and made substantially worse.

Successive generations of programming languages (from assembly through structured languages to object orientation to declarative systems) added *abstraction*: semantic compression that hides irrelevant detail while preserving structure. Natural language prompts represent something categorically different: not abstraction, but *indirection*: an extra interpretive layer that hides structure behind statistical inference rather than elevating it behind a cleaner interface. Abstraction raises altitude; indirection removes the map entirely.

The new artifacts of software intent have names: `CLAUDE.md`, `.cursorrules`, `copilot-instructions.md`, `AGENTS.md`, etc.. They are markdown files, committed to repositories alongside source code, and the industry has called them specifications. They are not. They are wishful thinking in plaintext: unconstrained by formalism, unverifiable by any tool, incomplete by construction, and inconsistent by accident.

The industry has noticed the problem and begun to respond. Tools like [Spec Kit](https://github.com/github/spec-kit) (GitHub's own open-source SDD toolkit) may represent one of the most serious current attempts: they add workflow discipline around specification, with governed phases (constitution, specify, plan, tasks, implement), AI-assisted checklist analysis, and explicit separation of functional intent from technical implementation. This is a meaningful improvement over a raw `CLAUDE.md` file. But the substrate is unchanged. Every artifact in these workflows is structured natural language in a markdown file. Consistency is checked by asking an LLM to interpret prose, not by evaluating structural invariants. Traceability is a convention, not a typed link. The checklist is interpreted by the same model that may have been told not to follow it elsewhere. As [one Thoughtworks engineer observed](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) after evaluating three of these tools, the parseable specifications of earlier model-driven development approaches at least provided "tool support to write valid, complete and consistent specs," something that LLM-interpreted natural language cannot replicate. Dijkstra's insight applies here with full force: adding process discipline around natural language does not change what natural language is. The nonsense remains; it is now organized nonsense.

The pattern is visible even among the discipline's most experienced practitioners. [Robert Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) (author of [*Clean Code*](https://en.wikipedia.org/wiki/Clean_Code), originator of the [SOLID](https://en.wikipedia.org/wiki/SOLID) principles) recently [described encountering this wall directly](https://x.com/unclebobmartin/status/2018706386058649843): AI-assisted changes caused fragility, where edits to one part of the system broke others unpredictably. His diagnosis was that the AI "fixes" unit tests freely, because it has no understanding of which tests represent contractual obligations. His solution was a [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) framework in a markdown file, with the AI "not allowed to edit" those tests. A prohibition is not a structure. It works until deadline pressure, context drift, or a new agent silently relaxes it.

Bertrand Meyer (creator of [Eiffel](https://en.wikipedia.org/wiki/Eiffel_(programming_language)), co-inventor of [Design by Contract](https://en.wikipedia.org/wiki/Design_by_contract)) has described AI coding assistants as producing work "not as works of logic, but as [works of words](https://cacm.acm.org/blogs/blog-cacm/273577-ai-does-not-help-programmers/fulltext)": statistically plausible outputs with no guarantee of correctness. A [2026 randomized controlled trial by Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills) made the downstream cost quantitative: participants using AI assistance scored 17% lower on comprehension (nearly two letter grades) compared to those who coded by hand (p=0.01). The largest gap was on *debugging*, precisely the skill required to catch errors in AI-generated code. The researchers note the effect is likely more pronounced for agentic tools. The tool generates; the understanding disappears. The industry is moving from code with obviously no errors to code with no obvious errors.

This is not a problem of tools being insufficiently capable. It is a problem of medium. Natural language is inherently lossy, ambiguous, and interpretation-dependent. Requirements written in prose systematically commit what have been identified as the *seven sins of the specifier*: noise, remorse (adding constraints on a concept away from where it was defined, as if the specifier suddenly regretted the original definition), silence, contradiction, overspecification, ambiguity, forward reference, and wishful thinking. A `CLAUDE.md` file (or its brethren) are not written to avoid these sins; it is written to ship. The tools that consume it have no mechanism to detect or reject any of them.

Dijkstra wrote a short essay on exactly this premise in 1978, [*"On the foolishness of natural language programming"*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html), long before LLMs existed. His summary:

> *"The naturalness with which we use our native tongues boils down to the ease with which we can use them for making statements the nonsense of which is not obvious."*

The essay was written nearly fifty years ago. The industry has forgotten it. LLMs have made forgetting feel like progress.

### Existing Tools Don't Cover This Layer

The multi-persona problem compounds the specification problem. A requirements model serves many constituencies simultaneously. A business analyst wants goals and outcome hierarchies. An architect wants interface constraints and integration boundaries. A developer wants precise behavioral specifications: preconditions, postconditions, invariants. A QA engineer wants verifiable acceptance criteria. A compliance reviewer wants traceability to regulatory obligations, and so on.

These are not different documents. They are different *views* of the same underlying model.

This is a solved problem in adjacent domains. For example, the [C4 model](https://c4model.com/) applies exactly this [view-model](https://en.wikipedia.org/wiki/View_model) principle to software *architecture*: one underlying model, four levels of abstraction, each a projection suited to a different audience. C4's own FAQ explicitly names what it does not cover: "business processes, workflows, state machines, domain models, data models." That exclusion list is almost exactly the territory that requirements engineering owns. C4 gives you a view model for the architecture of what was built. Few, if any, have given practitioners a view model for the requirements of what should be built and why.

The consequence when LLMs enter this vacuum is severe. A language model given a flat requirements document uses *all* of it indiscriminately, weighted by proximity in the context window rather than relevance to the current task. A formal invariant written for a kernel developer becomes an instruction to a UI code-generation agent. A business goal statement written for an executive becomes a database schema specification. Not because the model is wrong; there is no structure to deliver the right information to the right agent.

---

## Cathedral

There is a creed attributed to medieval stonemasons: *"We who cut mere stones must always be envisioning cathedrals."* It is a reminder that even the most routine task (shaping one stone) is inseparable from the structure it serves. The stonemason who has forgotten the cathedral cuts faster, perhaps, but cuts wrong. This is the condition of most software development today: an industry of (hopefully) skilled stone-cutters with no shared vision of what they are building together.

Requirements engineering is how you hold the vision of the cathedral while cutting the stones: strategy derived from principles, so that every tactical decision about the stones has a structure to answer to. Cathedral is the tool that makes that vision formal, shared, and verifiable.

Cathedral is a Computer-Aided Software Engineering platform ([CASE](https://en.wikipedia.org/wiki/Computer-aided_software_engineering)) built around a single organizing principle: **a requirements model is a knowledge base, and every agent (human or artificial) interacts with it through a viewpoint suited to their concerns**. Not a document. Not a ticket backlog. Not a markdown file fed into a context window. A structured, formally grounded, multi-layer knowledge base from which every persona in a project queries the authoritative form of the requirements relevant to their work.

### A Single Model Across Three Layers

Cathedral's requirements model is organized across three interwoven layers, each expressing the same underlying truth through a different mode:

- **Formal layer**: requirements expressed as typed objects with defined semantics: classes, contracts, preconditions, postconditions, invariants, and more. This layer is precise, machine-checkable, and unambiguous. It is the layer that LLMs query when they need a behavioral specification, and the layer that consistency checkers operate on.
- **Graphical layer**: structural and relational diagrams that make the architecture of the requirements model comprehensible at a glance: inheritance hierarchies, dependency graphs, traceability maps.
- **Natural-language layer**: prose that explains rationale, records the history of decisions, and makes requirements accessible to stakeholders without formal training. This layer is derived from and validated against the formal layer; it is not its source.

These are not separate documents maintained in parallel. They are projections of a single model. A change to any layer propagates through to the others. The formal layer is authoritative; the graphical and natural-language layers are views of it, generated and validated by tooling.

### Requirements as Object-Oriented Contracts

Within the formal layer, Cathedral models requirements as objects: typed, structured, composable, and inheritable. A requirement is not a string. It is an object with a classification (goal, constraint, functional requirement, environmental assumption), a formal statement expressed as a contract (preconditions, postconditions, invariants), a verification condition, stakeholder attribution, priority, and bidirectional traceability links to every other artifact in the project.

This structure provides two properties that no flat requirements format can deliver:

**Consistency enforcement**: requirements that contradict each other are detectable as invariant violations in the model. A contradiction is structurally unsound, not just textually confusing.

**Seamless traceability**: every artifact, from a high-level business goal to a test case or a line of implementation code, carries a typed link back to the requirement it satisfies. Both directions matter: up-traceability (every artifact follows from some requirement) and down-traceability (every requirement has some consequence in some artifact) are checkable structural invariants of a well-formed project, not aspirations.

### Multi-View by Design

Cathedral is a view model for requirements. Business stakeholders query goal hierarchies and scenario maps. Developers query interface specifications and formal invariants. QA engineers query verification conditions and test oracles derived from postconditions. Architects query integration constraints and environmental assumptions. Compliance reviewers query traceability reports linking every regulatory requirement to its implementation evidence.

These viewpoints are typed projections of a single internally consistent model. Changing a goal propagates through the model and surfaces inconsistencies with downstream requirements. Changing a formal invariant triggers a review of every artifact that traces to it. The model's coherence is structural, not editorial.

### AI as Reviewer, Not Author

Cathedral inverts the vibe-coding model at the workflow level. In current practice, AI writes code and humans (hopefully) review it: the quality gate is at the end, on an artifact already expensive to change.

> *"A computer can never be held accountable. Therefore a computer must never make a management decision."*
>
> [*IBM*](https://xcancel.com/mlhaufe/status/1604907759509667848)

Cathedral moves the gate upstream. Requirements pass through a governed lifecycle before becoming active, analyzed rigorously by both human judgment and AI-assisted methods to surface ambiguity, broken traceability, and gaps in completeness before any implementation begins. AI governs the quality of requirements; the requirements govern the behavior of the code. That is the structural opposite of vibe coding. The AI coding agent working within a Cathedral-backed project does not read a markdown file and improvise; it queries a model and receives the exact formal behavioral specification it needs, scoped to its task.

### Requirements as a Source of Truth and a Source of Artifacts

A requirements model built to these standards is also a *source*. Traditional code generators, test harness builders, and schema tools can derive artifacts directly from a formal specification expressed as typed contracts. LLMs given a precise, consistent requirements model as context (rather than ad-hoc prose) produce far more reliable outputs, because the verified specification becomes the prompt.

This is Requirements Driven Development in the full sense. The formal requirements model is upstream of everything; everything downstream traces back to it. Where generations of programming languages have progressively raised the level of abstraction at which programmers work, Cathedral addresses the layer beneath them all: the one that has always been assumed or implicitly relied upon and never been solved.

### Antifragile by Design

The [configurancy problem](https://electric-sql.com/blog/2026/02/02/configurancy) (keeping a system intelligible to every agent that touches it) is, at its foundation, a requirements problem. Systems become unintelligible not because code degrades, but because intent is never formally captured. The invariant "obvious at the time" is never written down. The environmental assumption buried in a configuration file is never made explicit. Language models accelerate this entropy: because they synthesize plausible-sounding intent from partial context, they allow teams to defer formal specification indefinitely.

Cathedral makes change legible. Every modification to the system is grounded in a modification to the requirements model. Every behavioral invariant has a requirements object that declares it.

More than resilient, a Cathedral-backed requirements model is *antifragile*: it improves under stress. Every contradiction the consistency checker surfaces makes the model more complete. Every ambiguity forced into a typed contract strengthens the specification. Every traceability gap exposed becomes a link that now exists. Documentation tools degrade under change pressure; they fall behind and become unreliable at precisely the moment they are needed most. A formal requirements model subjected to the same pressure grows more precise. Consider the diagnostic: could any member of your team, returning after thirty days away, accurately predict your system's behavior from its specifications alone, without reading the code? For most projects in 2026, the honest answer is no. Under AI development tempos, it becomes *no faster*.

---

## What This Looks Like in Practice

Cathedral does not require a process overhaul. It requires a decision: to treat the formation of requirements as a first-class engineering activity.

**Incremental adoption.** You do not need to model every requirement before Cathedral delivers value. A practical starting point is the behavioral invariants of a single critical service (the assertions that, if violated, cause the most expensive failures). Capture those first. Trace them to your existing test suite. The value of formal traceability becomes tangible within days.

**Compatible with your existing stack.** Cathedral occupies the requirements layer your current tools assume exists but do not provide. Your ticket system references requirements; it does not define them. Your CI/CD pipeline verifies requirements; it does not specify them. Your AI coding agents implement requirements; they do not understand them. Cathedral gives each of those tools the formal anchor they have been operating without. Existing artifacts (C4 diagrams, test suites, architecture documentation) remain in place; they gain traceability to the requirements model that motivated them.

**Accessible formalism.** Cathedral's formal layer is scaffolded, not imposed. Product owners and business analysts work in the natural-language layer, guided by completeness checks that surface gaps before they become bugs. Architects and tech leads work in the contract layer, where consistency checking flags contradictions before they reach implementation. Developers and AI agents query the specification for the precise behavioral contract governing their component. No team member needs a background in formal methods to get value. The formalism is there when you need it; it stays out of the way when you do not.

**Shift-left, for real.** The industry has embraced shift-left testing, catching defects where they cost less to fix. The same principle applied to requirements is an order of magnitude more powerful. A contradiction caught by the consistency checker before a line of code is written costs nothing. The same contradiction discovered after six weeks of implementation costs a sprint. Cathedral makes shift-left a structural property of the project, not an aspiration.

**Valuable from day one.** Requirements work is most effective, and least expensive, before implementation begins. Cathedral is designed to support the pre-code conversations that capture decisions, constraints, and goals that would otherwise exist only in the heads of the people in the room. It is equally useful as a living reference throughout the project's life: every future agent (human or AI) who needs to understand what the system promises can query the model rather than excavating the codebase.

---

## The Stakes

The original Software Crisis produced software engineering as a discipline. Structured programming, formal methods, CASE tools, and decades of hard-won methodological practice. All from one honest reckoning with a capability that had outrun its method.

The question now is whether the industry responds to the AI moment with the same seriousness, or whether the response is reactive: a generation of cleanup tooling built on top of accumulated chaos, shipped fast and understood by no one.

LLMs are not the enemy of requirements engineering. They are its greatest potential beneficiary: agents with extraordinary generative capability that have always been constrained by the informality of the context they receive. Give them a formal model. Give them structured truth. Stop asking them to infer your system's intent from a markdown file and instead give them the actual verified model of what you mean to build.

A decade ago, one of the architects of the modern internet observed that fixing the software crisis would require, among other things, a concerted effort to "move formal verification techniques out of ivory tower academia and into the center of the practical developer's work flow." Cathedral is that effort, applied specifically to requirements: formal structure made accessible, multi-persona by design, and built for the world where informal specification is no longer merely a cost; it is an existential risk.

That is what Cathedral is for.

---

## Stay Informed

Cathedral is under active development. If you are building systems where correctness matters, or if you are watching the industry's AI-driven regression with the same concern we are, join the mailing list. We will keep you informed as the platform develops and as we open access to early collaborators.

::HubSpotForm
::

---

## Further Reading

- Frederick P. Brooks Jr., [*No Silver Bullet: Essence and Accident in Software Engineering*](https://worrydream.com/refs/Brooks_1986_-_No_Silver_Bullet.pdf) (1986): The foundational paper establishing that requirements are the irreducible hard part of software: "The hardest single part of building a software system is deciding precisely what to build... No other part of the work so cripples the resulting system if done wrong." Written three years before the World Wide Web existed, it remains the most accurate description of why AI code generation cannot solve the core problem.

- Bertrand Meyer, ["The Formal Picnic Approach to Requirements"](https://bertrandmeyer.com/2018/12/17/formal-picnic-approach-requirements/) (2018): The foundational methodology underlying Cathedral's approach to formalism: start in natural language, take a mathematical detour to force precision and expose contradictions, return with natural language that has been purified by the process. The "seven sins of the specifier" named here describe, with uncanny accuracy, the defects of every AI spec file written in 2025 and 2026.

- Bertrand Meyer, ["Multirequirements"](https://se.ethz.ch/~meyer/publications/requirements/multirequirements.pdf), in *Modelling and Quality in Requirements Engineering* (Martin Glinz Festschrift), MV Wissenschaft, 2013: The architectural foundation for Cathedral's multi-layer model: requirements expressed simultaneously in formal, graphical, and natural-language layers, interwoven and mutually consistent, structured as object-oriented contracts with Design by Contract semantics. The paper demonstrates, in self-referential form, how traceability: both up (every artifact follows from a requirement) and down (every requirement has a consequence in some artifact), becoming a checkable structural invariant rather than an editorial aspiration.

- Judy Hanwen Shen and Alex Tamkin (Anthropic), [*How AI assistance impacts the formation of coding skills*](https://www.anthropic.com/research/AI-assistance-coding-skills) (2026): A randomized controlled trial finding that AI coding assistance produced a statistically significant 17% decrease in mastery (nearly two letter grades), with the largest gap on debugging (the skill most needed to oversee AI-generated code). Efficiency gains were not statistically significant. The authors note that agentic coding tools are expected to produce more pronounced effects. The empirical grounding for the observation that AI assistance, used as a cognitive offload mechanism rather than a learning aid, degrades the very skills required to govern it.

- Chip Morningstar, ["Software Crisis: The Next Generation"](https://habitatchronicles.com/2016/10/software-crisis-the-next-generation/) (Habitat Chronicles, 2016): Co-creator of the first graphical virtual world and longtime distributed systems architect makes the perpetual crisis argument a decade before this article: "the crisis didn't so much go away as got swept under the rug." His proposed solution explicitly names the path forward: move formal verification techniques out of the ivory tower and into the center of the practical developer's workflow. Written in 2016, it reads as a direct precursor to Cathedral's mission.

- Baldur Bjarnason, ["Software Crisis 2.0"](https://www.baldurbjarnason.com/2021/software-crisis-2/) (2021): The most rigorous available treatment of the Standish Chaos Report data, including the project-size breakdown that reveals a 6–12% success rate for medium, large, and grand projects and the 2015 redefinition of success to require a satisfactory result. Also contains the sharpest encapsulation of the requirements failure cascade: a project comes in late; if not late, over budget; if it met budget, short of requirements; and if it met requirements, the requirements were wrong.

- Birgitta Böckeler, ["Understanding Spec-Driven Development: Kiro, spec-kit, and Tessl"](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) (Martin Fowler, 2025): The sharpest practitioner analysis of the current SDD tool landscape. Böckeler independently identifies the central gap: earlier model-driven development approaches, for all their flaws, provided "tool support to write valid, complete and consistent specs" that LLM-interpreted natural language cannot replicate. Her observation that spec-as-source may inherit "the downsides of both MDD and LLMs: inflexibility and non-determinism" is the clearest available articulation of what the current generation of SDD tools is still missing.

