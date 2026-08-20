# Marketing Page Redesign: Copy & Pillars

> **Status:** Draft for stakeholder review
> **Date:** 2026-08-09
> **Audience:** Marketing, product, business stakeholders
> **Purpose:** Define how final-hill.com must change to reflect Cathedral's revised positioning and UX direction
> **Companion to:** `docs/ux-and-positioning-strategy.md`

---

## TL;DR

The current marketing page is honest but vague. It describes a problem (projects fail, requirements are mishandled), a vision (structured requirements as guiding pillars), and a solution (a platform called Cathedral with tools for requirements engineering). What it does *not* do is tell a buyer **why Cathedral and not Jira, why Cathedral and not ChatGPT, and what they will actually see when they use it.** The page reads like a research mission statement, not a product positioning document. This document defines the marketing pillars and the copy changes required to fix that.

---

## 1. What the Current Page Gets Wrong

### 1.1 The tagline is generic

> *"Constructing Solutions, Crafting Legacies"*

This could be any consulting firm, any construction company, any B2B SaaS. It communicates nothing about requirements engineering, accountability, or the specific value of Cathedral. It does not survive the "could a competitor say this?" test — DOORS, Jira, and a project management consultancy could all claim this.

### 1.2 The feature strip is process-oriented, not value-oriented

> *Discovery — Gather, elicit, and document requirements from stakeholders*
> *Analysis — Analyze and refine requirements to ensure clarity and coherence*
> *Versioning — Track changes and manage requirements over time*
> *Traceability — Link requirements across the lifecycle to ensure alignment and coverage*

These describe *what Cathedral does* (activities), not *what the buyer gets* (outcomes). A buyer does not want "versioning"; a buyer wants "proof of what was decided and when, for the auditor." The features are also indistinguishable from every other requirements tool's feature list. There is no mention of the check engine, the endorsement lifecycle, the visual model, or the hub-and-spoke architecture — the things that are actually differentiating.

### 1.3 The Problem section is correct but incomplete

The current Problem section correctly identifies project failure rates and the root cause in requirements. It does not name the *current* failure mode that Cathedral specifically addresses: **the accountability vacuum created when teams adopt AI coding tools without a specification substrate.** This is the pain that is acute *now*, and it is the pain Cathedral is uniquely positioned to address. The page was written before this was the dominant industry conversation; it needs updating.

It also misses the most counterintuitive and compelling piece of evidence: **experienced developers are measurably slower with AI, while believing they are faster.** A recent RCT showed experienced developers were 19% slower with AI assistance, while believing they were 20% faster. That is not a capability problem — it is a feedback-loop problem. The developers couldn't see their own quality gap because nothing was checking their work. This is the single most concrete, shareable piece of evidence for why Cathedral's check engine matters, and it is absent from the page.

**The sharper framing — cheap creation creates expensive complexity:**

The problem is not just "requirements are mishandled." It's an **economic asymmetry**: the cost of creating software is collapsing (LLMs generate code in minutes), but the cost of *understanding, maintaining, and being responsible for* that software is not decreasing at all. A developer can say "the LLM produced this in 20 minutes" — but the organization may have to operate it for ten years. This asymmetry is what makes vibe coding dangerous: you can generate 100,000 lines of plausible code without anyone understanding the resulting system.

The RCT evidence proves this empirically: developers were 19% slower with AI while *believing* they were 20% faster. The capability increased; the understanding didn't keep up. That's the asymmetry in action.

**The scarce resource is coherence, not code:**

When implementation is cheap, the limiting factor is not code production — it's **coherence**: maintaining coherence between business intent, architecture, domain model, APIs, data, security assumptions, tests, operational behavior, documentation, regulatory constraints, dependencies, and user expectations. An LLM can generate code. It cannot maintain coherence across a system it doesn't understand. That's what Cathedral does — it's the coherence layer that makes the system understandable, checkable, and accountable as agents continuously modify it.

### 1.4 The Solution section undersells and mischaracterizes

> *"a platform that is both comprehensive and user-friendly"*

"Comprehensive and user-friendly" is table stakes, not a differentiator. The one differentiating claim — "support a view model of requirements, allowing users to see requirements from their chosen perspective while allowing others to see them from theirs" — is buried in the last sentence and stated in the abstract. The page does not mention:
- The check engine (machine-checkable requirements)
- The endorsement lifecycle (Finding → Proposed → Review → Active)
- The visual model (graphs, diagrams, direct manipulation)
- The hub-and-spoke positioning (Cathedral as system of record; Jira/Slack/Claude as edges)
- The agent-native ingestion (derive requirements from artifacts teams already produce)

### 1.5 There is no "why not just use ChatGPT / Jira / World Models" section

The buyer's first question is not "what does Cathedral do?" — it is "why not just use what I already have?" The current page does not answer this. Given that the industry is enamored with chat-driven approaches, this omission is the single biggest conversion risk.

The risk is growing as the AI industry pivots from "bigger context windows" to **"world models"** as the next capability narrative. The world-model objection is stronger than the context-window objection because it appeals to *deep understanding* rather than raw capacity: "If AI develops robust world models, it will eventually model the 'world' of your software project — the domain, the stakeholders, the constraints, the business rules — as an internal representation. The model itself becomes the specification." This is becoming the new industry push, and the marketing page needs an answer for it — because it is a more seductive objection than "just use a bigger context window," and it fails for architectural reasons that are less obvious to a buyer.

### 1.6 There is no audience segmentation

The page speaks to "individuals and organizations" — everyone and no one. Cathedral's actual early market is specific: regulated industries, safety-critical systems, audit-bound organizations, teams inheriting brownfield codebases. The page does not speak to them directly or name their pain.

---

## 2. Marketing Pillars

Marketing pillars are the 3–5 themes that every piece of copy, every section, and every visual on the page reinforces. They are the load-bearing claims. Everything else is evidence for one of these pillars.

### Pillar 1: Accountability, not capability

**The claim:** Model capability is not the moat; formal structure and accountability are. Cathedral is the layer your other tools structurally cannot provide — whether the capability narrative is "bigger context windows" or "better world models."

**Why it matters:** This is the answer to "why not just use ChatGPT / Claude?" — and, increasingly, "why not just wait for world models?" Both objections share the same structural error: they conflate capability with accountability. More tokens or better prediction makes the AI more capable, but capability is not the product Cathedral sells.

**On context windows:** A chat is a transient reasoning scratchpad, not a durable knowledge substrate. Scaling from 200K → 1M → 10M tokens does not add a single one of the following: persistence, formal model, automated checks, provenance, traceability, lifecycle, or enforcement. When the conversation ends, the auditor arrives, or the team switches agents — the chat is gone. Cathedral is what remains.

**On world models:** A world model is a predictive engine for physical environments — compressing sensor data into latent representations and predicting how the environment changes in response to actions. The sophisticated objection: "If AI develops robust world models, it will eventually model the 'world' of your software project as an internal representation. The model itself becomes the specification." This fails for architectural reasons:
- **Domain mismatch.** World models predict physical state changes from sensor data. Requirements engineering is about social, organizational, and contractual artifacts — stakeholders, goals, use cases, invariants, MoSCoW priorities, RACI assignments, regulatory compliance. These are *constructed social facts*, not physical phenomena predictable from sensor data.
- **Latent representations are the opposite of auditable artifacts.** World models compress observations into opaque, continuous-valued embeddings — the entire point is to *not* represent the world in human-readable form. Cathedral's value proposition is the opposite: requirements are inspectable, diffable, auditable, human-reviewable artifacts. You can show a Requirement to a regulator. You cannot show a latent vector to a regulator.
- **Prediction is not accountability.** A world model can predict what the system will do. It cannot tell you whether what the system does is *justified* (traces to a stakeholder need), *endorsed* (the right human approved it), *complete* (all use cases have scenario steps), *consistent* (no two requirements contradict), or *compliant* (satisfies a regulatory standard). Prediction answers "what will happen?" Accountability answers "why is this the right thing to happen, who approved it, and can you prove it?"
- **No formal model to check against.** World models have no schema, no ontology, no check engine. They optimize for prediction error in latent space — not for conformance to a formal requirements model.

A world model could actually *feed* Cathedral — as an elicitation source, generating findings about system behavior that Cathedral formalizes into requirements. The world model predicts what the system does; Cathedral records, checks, and enforces what the system should do and why.

**The one-line version for marketing:** *A world model is a brilliant architect with perfect memory and zero accountability. Cathedral is the system that makes that architect's understanding durable, inspectable, checkable, and enforceable.*

**Evidence to show:**
- The 13+ check categories (correctness, completeness, consistency, traceability, justifiability, etc.)
- The endorsement lifecycle (Finding → Proposed → Review → Active)
- Provenance chains (file/line/session/PR references)
- Evidence-pack exports for regulators
- Enforcement tiers (Exploratory / Developing / Production)

### Pillar 2: The system of record your tools report into

**The claim:** Cathedral is the hub. Jira, Azure DevOps, Slack, and Claude are spokes that ingest into and project from it — not the reverse.

**Why it matters:** This is the answer to "how does this fit into my existing workflow?" It reframes Cathedral from "another tool to adopt" to "the layer that makes your existing tools trustworthy." Jira cannot produce an evidence pack. Claude cannot block a merge for missing justification. Slack has no versioned ontology. The spokes are all missing the accountability layer, and that layer must be centralized to be trustworthy.

**Evidence to show:**
- Hub-and-spoke diagram (Cathedral at center; Jira/Slack/Claude/Azure DevOps as edges)
- Ingestion paths (analyze code, analyze PR, analyze session, analyze document)
- Projection paths (Jira sync, Slack notifications, CI gates)
- "Agents propose. Cathedral adjudicates. Humans curate. Spokes sync."

### Pillar 3: See what your tools can't show you

**The claim:** Cathedral's visual model makes accountability state legible — as graphs, diagrams, and matrices rather than forms. This is why the hub is worth visiting.

**Why it matters:** This is the answer to "what will I actually see?" and the bridge between the positioning and the product. The visual UX is not decoration; it is the thing that makes the hub worth being the center of. A form cannot show you "three features have no justification path to a goal." A graph can, instantly.

**Evidence to show:**
- Goals facet as a justification/traceability graph with check-engine state as node color
- System facet as editable C4 diagrams
- Glossary as a topic map (collapsed list / expanded domain graph)
- Risk matrix, RACI, timeline, kanban — the right visualization for the right data
- The Perspective switch (same data, different view per role)

### Pillar 4: Derived, not transcribed

**The claim:** No one has to sit down and author requirements. Cathedral derives the implied requirements from artifacts the team is already producing — code, PRs, sessions, documents.

**Why it matters:** This is the answer to "I don't have time to write requirements" — the #1 objection to every requirements tool ever built. Cathedral's agent-native ingestion paths mean the requirements emerge from the work, not from a separate transcription activity nobody does.

**Evidence to show:**
- `analyze_code`, `analyze_pull_request`, `analyze_session`, `analyze_document`
- Finding → Proposed → Review → Active lifecycle (findings are proposed, not transcribed)
- Brownfield-first commitment ("the world is overwhelmingly brownfield")

### Pillar 5: Built for the cost of not having it

**The claim:** Cathedral is for organizations already exposed to the cost of un-auditable, un-traceable, vibe-coded systems. Let the hurt do the marketing.

**Why it matters:** This is the segmentation pillar. It tells the right buyer "this is for you" and tells the wrong buyer "not yet." It is honest about who benefits now and avoids the trap of trying to be everything to everyone.

**Evidence to show:**
- Named audiences: regulated industries, safety-critical systems, audit-bound organizations, brownfield inheritors
- The cost of not having a substrate (auditor arrives, stakeholder disputes, team switches agents)
- Quotes from Brooks, Dijkstra, Wirfs-Brock (the problem is not new; the tools have been missing)
- **The bifurcation:** small/simple systems → 1 human + AI; large/critical systems → small autonomous teams + AI. The middle (traditional mid-size teams that Scrum was built for) is what's being disrupted. Cathedral serves both ends of the bifurcation — the individual who needs coherence for their agent swarm, and the small team that needs accountability for regulated work.

### Pillar 6: The coherence layer (not just accountability)

**The claim:** When implementation is cheap, the scarce resource is not code — it's **coherence**. Cathedral is the coherence layer that maintains the relationship between business intent, architecture, domain model, APIs, data, tests, and regulatory constraints as agents continuously modify the software.

**Why it matters:** "Accountability" is the social/process dimension (who approved what, can you prove it). "Coherence" is the technical/semantic dimension (does the system still make sense, are the invariants intact, is the traceability complete). Together they're the complete answer to "what happens when implementation is cheap but understanding isn't?" Accountability alone is necessary but not sufficient — a system can be fully accountable (every decision endorsed) and still incoherent (the pieces don't fit together). Coherence is what the check engine verifies; accountability is what the endorsement lifecycle enforces.

**The AI-native SDLC framing:** Traditional SDLC asks "what steps do humans follow to produce this software?" AI-native SDLC asks "what properties must remain true as agents continuously modify this software?" Cathedral is the AI-native SDLC — not the implementation part (agents do that), but the part that moves upward: specification, constraints, invariants, automated verification, provenance. The properties that must remain true.

**Evidence to show:**
- The PEGS model as a coherence framework (Project, Environment, Goals, System — each a dimension of coherence)
- The check engine as a coherence verifier (13+ dimensions: correctness, completeness, consistency, traceability, justifiability)
- The visual model as a coherence surface (see the whole system at once, spot what's broken)
- "Requirements that survive the conversation" = coherence that persists beyond the transient chat

---

## 3. Page Structure & Copy Direction

### 3.1 Proposed page sections (top to bottom)

| # | Section | Current state | Required change |
|---|---|---|---|
| 1 | **Hero** | Tagline + 4 feature pills | New tagline; new sub-headline naming the accountability layer; visual showing the hub-and-spoke or a graph view |
| 2 | **The Problem** | Project failure rates + underutilized formal methods | Add the *current* failure mode: AI coding without a specification substrate; the accountability vacuum. Add the RCT evidence: experienced developers 19% slower with AI while believing they were 20% faster — a feedback-loop problem, not a capability problem. |
| 3 | **Why not just ChatGPT / Jira / World Models** | *(does not exist)* | New section. Capability ≠ accountability. Context windows, world models, and ticket trackers all fail the same way. |
| 4 | **The Solution** | Generic "comprehensive and user-friendly" platform | Rewrite around the 5 pillars. Show the check engine, the lifecycle, the visual model, the hub. |
| 5 | **What you see** | *(does not exist)* | New section. Visuals of the graph/diagram/matrix views. "See what your tools can't show you." |
| 6 | **Who it's for** | *(does not exist)* | New section. Named audiences. "Built for the cost of not having it." |
| 7 | **How it fits** | *(does not exist)* | New section. Hub-and-spoke diagram. "Your existing tools are projections of Cathedral's canonical model." |
| 8 | **Vision / Mission** | Current (keep, lightly edit) | Trim verbosity; align language with pillars. Keep the "structured requirements" throughline. |
| 9 | **Subscribe** | Current (keep) | Add context: "early access for regulated, safety-critical, and audit-bound teams." |

### 3.2 Hero section — copy direction

**Current:**
> Constructing Solutions, Crafting Legacies
> Discovery · Analysis · Versioning · Traceability

**Problem:** Generic. Activity-oriented. No differentiator. No reason to keep reading.

**Direction — tagline (selected):**

> *"Requirements that survive the conversation."*

Evocative. Contrasts with the transient chat scratchpad — the "conversation" ends, the requirements *survive*. Works for both the "why not ChatGPT" objection (requirements survive the conversation; the chat doesn't) and the "what is Cathedral" question (it's where requirements survive). Implies durability, persistence, and accountability without using those heavier words.

**Rejected alternatives (for reference):**

1. *"The accountability layer for software development."*
   — Direct, names the moat. Risk: "accountability" can feel heavy to non-regulated buyers.

2. *"The system of record your tools can't be."*
   — Names the hub position. Provocative. Good for the "why not Jira" question.

4. *"Machine-checkable requirements. Human-curated. Agent-fed."*
   — Most specific. Names all three actors in the division of labor. May be too dense for a hero.

**Direction — sub-headline:**

> Cathedral is the system of record for requirements — the layer Jira, Slack, and Claude structurally cannot provide. Agents propose. Cathedral adjudicates. Humans curate via a visual model. Spokes sync.

**Direction — hero visual:** A hub-and-spoke diagram with Cathedral at the center, or a screenshot/mockup of the Goals justification graph with a broken edge flagged red. The visual should immediately communicate "this is not a form tool."

### 3.3 "Why not just ChatGPT / Jira / World Models" — copy direction

This section is the highest-value addition. It directly addresses the objections every buyer will have — and the objections are multiplying as the AI industry pivots from "bigger context windows" to "world models."

**On ChatGPT / Claude (capability ≠ accountability):**

> A chat is a transient reasoning scratchpad, not a durable knowledge substrate. A larger context window does not add persistence, formal model, automated checks, provenance, traceability, lifecycle, or enforcement. When the conversation ends, the auditor arrives, or the team switches agents — the chat is gone. Cathedral is what remains.

**On World Models (the next capability narrative):**

> The next AI push is "world models" — internal representations that predict how an environment changes in response to actions. The claim: if AI can model the 'world' of your software project, the model itself becomes the specification.
>
> It doesn't. A world model predicts what a system will do. It cannot tell you whether what the system does is *justified* (traces to a stakeholder need), *endorsed* (the right human approved it), *complete* (all use cases have scenario steps), or *compliant* (satisfies a regulatory standard). Prediction answers "what will happen?" Accountability answers "why is this the right thing to happen, who approved it, and can you prove it?"
>
> A world model is a brilliant architect with perfect memory and zero accountability. Cathedral is the system that makes that architect's understanding durable, inspectable, checkable, and enforceable.

**On Jira / Azure DevOps (the spokes can't be the hub):**

> Jira tracks tickets. Azure DevOps tracks work items. Slack carries messages. None of them can produce an evidence pack for a regulator, block a merge for missing justification, or trace a feature to the stakeholder need that justified it. They are edges. Cathedral is the layer they connect to — the accountability substrate that makes the work they track trustworthy.

**On the SDLC itself (the process moves upward):**

> Traditional SDLC asks: "What steps do humans follow to produce this software?" AI-native SDLC asks: "What properties must remain true as agents continuously modify this software?"
>
> Cathedral is the AI-native SDLC. Not the implementation part — agents do that. The part that moves upward: specification, constraints, invariants, automated verification, provenance. The properties that must remain true as code generation becomes cheap and continuous.

### 3.4 "What you see" — copy direction

> Cathedral's visual model makes accountability state legible — as graphs, diagrams, and matrices, not forms.
>
> - **Goals** as a justification graph: see which features trace to which outcomes, and which have no justification path (flagged red).
> - **System** as editable C4 diagrams: drag a component, draw an interface, and the underlying records update with full versioning.
> - **Glossary** as a topic map: every term linked to every requirement that uses it. A term with no occurrences is an orphan; a requirement using an undefined term is a broken edge.
> - **Risks** as a probability × impact matrix. **Tasks** as a kanban or timeline. **Personnel** as a RACI matrix.
> - **Perspectives**: the same model, rendered differently for a Planner, Owner, Designer, or Builder.

### 3.5 "Who it's for" — copy direction

> Cathedral is built for organizations already exposed to the cost of not having a specification substrate:
>
> - **Regulated industries** that must produce evidence packs for auditors
> - **Safety-critical systems** where a missing requirement can cause harm
> - **Audit-bound organizations** that need to prove what was known and when
> - **Teams inheriting brownfield codebases** with no documentation
>
> If your biggest problem is writing code faster, you don't need Cathedral yet. If your biggest problem is proving that what you built is what you should have built, and why — you do.

---

## 4. Copy Principles

These principles govern all copy on the page, not just the sections above.

### 4.1 Outcomes, not activities

| Say this | Not this |
|---|---|
| "Proof of what was decided and when" | "Versioning" |
| "Every feature traced to the need that justified it" | "Traceability" |
| "Block a merge for missing justification" | "Enforcement" |
| "See which features have no justification path" | "Analysis" |

### 4.2 Name the contrast

Every section should implicitly or explicitly answer "why not the thing I already use?" The contrast is the selling point. Do not describe Cathedral in isolation; describe it *against* the alternatives.

### 4.3 Concrete, not abstract

The current page is full of abstract nouns: "structured requirements," "clarity and coherence," "guiding pillars." These are not wrong, but they are not *legible* to a buyer who has 10 seconds. Lead with the concrete: "a graph that shows you which features have no justification path to a goal." Follow with the abstract if needed.

### 4.4 Honest about who it's for

Do not pretend Cathedral is for everyone. The "ocean of Vibers" does not value accountability yet. Speak to the people who are about to get hurt, and let the hurt do the marketing. This is segmentation, not exclusion — the Vibers will follow when the cost becomes visible.

### 4.5 No "AI-powered" as a feature

Do not lead with "AI-powered requirements management." AI is an ingestion mechanism, not the product. The product is machine-checkable requirements with a human-curated visual model. AI feeds it; it is not it. Leading with "AI-powered" positions Cathedral as a chat tool, which is exactly the wrong paradigm.

### 4.6 "Specification" is not enough — it must be machine-checkable

The current industry conversation ("specification is the most valuable skill") is half right. Prose specs in a Substack post or a Notion doc are still unstructured prose that LLMs cannot reliably reason over and humans cannot audit. The moat is not writing specs; it is **specs that a compiler-like check engine can fail.** Every mention of "specification" or "requirements" on the page should implicitly or explicitly carry the qualifier *machine-checkable*. The check engine is the return channel that the RCT showed developers are missing — the thing that would have told the 19%-slower-but-thought-they-were-faster developers that their work had a quality gap. Without it, specification is just better-documented ambiguity.

---

## 5. What to Stop Saying

| Stop saying | Start saying |
|---|---|
| "Constructing Solutions, Crafting Legacies" | "Requirements that survive the conversation." |
| "Gather, elicit, and document requirements" | "Derive requirements from the artifacts your team already produces" |
| "Comprehensive and user-friendly" | "Machine-checkable. Human-curated. Agent-fed." |
| "A full array of tools for requirements engineering" | "The accountability layer your other tools structurally cannot provide" |
| "Support a view model of requirements" | "See what your tools can't show you" |
| *(nothing about competitors)* | "Why not just ChatGPT? Why not just Jira?" |
| *(no audience)* | "Built for regulated, safety-critical, and audit-bound teams" |

---

## 6. Visual Direction

The page needs product visuals, not stock illustrations. The current page has none.

1. **Hero:** Hub-and-spoke diagram OR a Goals justification graph with a broken edge flagged red. Must immediately communicate "this is not a form tool."
2. **"What you see" section:** Mockups or screenshots of the graph/diagram/matrix views. Even if the product is early, high-fidelity mockups of the intended visual model are more compelling than feature lists.
3. **"How it fits" section:** Hub-and-spoke architecture diagram with Cathedral at center and Jira/Slack/Claude/Azure DevOps as labeled edges.
4. **"Who it's for" section:** No visuals needed — the copy is the visual. Let the named audiences self-select.
5. **The evidence pack:** Show a sample evidence-pack export. This is Cathedral's "physical evidence" in the marketing-mix sense — the tangible artifact a customer (or their regulator) receives even though the service is intangible. It makes the accountability claim concrete.

---

## 6.5 The Marketing Funnel Complement

The five pillars above are *content* pillars — the claims the page makes. The Marketing Centre's "4 Pillars" model (Define → Find → Win → Keep) is a *funnel* model — the stages of the customer journey those claims serve. The two are complementary. Mapping our content against the funnel surfaces two gaps:

| Funnel stage | What it asks | Our coverage | Gap |
|---|---|---|---|
| **Define** | Who is the customer, and what can the product do for them? | Strong — "Who it's for" section, named audiences, the cost of not having it | — |
| **Find** | How do we reach them, based on their behavior and habits? | Weak — the page is a destination, not a distribution strategy | Where do regulated/safety-critical/audit-bound buyers actually look? (Compliance forums, aerospace/medical conferences, DevOpsSec channels, LinkedIn groups for QA/RA roles) This is out of scope for the *page* but in scope for the *plan*. |
| **Win** | How do we close the sale? | Strong — "Why not ChatGPT/Jira/World Models," the visual model, the check engine | — |
| **Keep** | How do we retain? | Absent from the page, but structurally the strongest pillar for a system of record | Once an organization adopts Cathedral as the hub, the switching cost is enormous (all traceability, endorsement history, and provenance live there). The page should *imply* this — "the system of record" language does — but a retention story (exportable, non-proprietary, owned by the customer) would address the lock-in fear that "system of record" can trigger. |

**Two takeaways for the page:**
1. **The evidence pack is the "Physical Evidence" P.** The 7 Ps model includes "Physical Evidence" — the tangible thing a customer receives from an intangible service. Cathedral's evidence pack (the exportable, auditable artifact a regulator receives) is exactly this. It should be shown, not just described. Added to the visual direction above.
2. **Address the lock-in fear implicitly.** "System of record" is powerful but can read as "vendor lock-in." The page should make clear that the record is *the customer's* — exportable, non-proprietary, portable. This turns a potential objection ("am I locked in?") into a pillar ("you own the substrate; we're the layer, not the cage"). This is a retention play (Keep) that also serves the sale (Win).

---

## 7. The One-Paragraph Version for Stakeholders

The current marketing page describes a research mission. It needs to describe a product position. Cathedral is the coherence layer for software development — the system of record that maintains the relationship between business intent, architecture, domain model, and regulatory constraints as agents continuously modify the software. When implementation is cheap, the scarce resource is not code but coherence: does the system still make sense, are the invariants intact, is the traceability complete? Cathedral is what makes the system understandable, checkable, and accountable. The page must say why not just ChatGPT (capability is not accountability), why not just world models (prediction is not accountability; a world model is a brilliant architect with perfect memory and zero accountability), why not just Jira (tickets are not traceable requirements), what the buyer will actually see (a visual model that makes accountability state legible as graphs and diagrams), and who it is for (organizations already exposed to the cost of not having a substrate). The marketing pillars are: accountability not capability, the system of record your tools report into, see what your tools can't show you, derived not transcribed, built for the cost of not having it, and the coherence layer (the AI-native SDLC — not the implementation part, but the part that moves upward: specification, constraints, invariants, verification, provenance). Every section reinforces one or more of these. The tagline — "Requirements that survive the conversation." — captures the core promise: coherence that persists beyond the transient chat. The Problem section names the economic asymmetry (cheap creation creates expensive complexity) and the RCT evidence (developers 19% slower with AI while believing they were faster). Every mention of "specification" carries the qualifier *machine-checkable*, because prose specs are still unstructured prose. And we speak honestly to the people who are about to get hurt, and let the hurt do the marketing.

---

## Appendix: Source References

- **Current marketing page:** final-hill.com (Problem, Vision, Mission, Solution, Subscribe)
- **UX & Positioning Strategy:** `docs/ux-and-positioning-strategy.md`
- **Issue #1008** — Cathedral as Agent-Native Formal Layer
- **Issue #1157** — Capability ≠ accountability (context windows and world models); world models predict, Cathedral adjudicates
- **Issue #1152** — The dark factory, the specification bottleneck, the check engine as return channel; RCT evidence (19% slower, believed 20% faster)
- **Issue #477** — Domain engineering, glossary vs. topic map, PEGS placement
- **PEGS Model** (Bertrand Meyer) — Project, Environment, Goals, System
- **The TAO of Topic Maps** (Steve Pepper, ISO 13250) — Topics, Associations, Occurrences, Scope
- **The 7 Ps and the 4 Pillars of Marketing** (The Marketing Centre) — funnel complement (Define/Find/Win/Keep) and "Physical Evidence" framing for the evidence pack
