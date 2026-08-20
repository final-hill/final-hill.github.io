# Cathedral UX & Positioning Strategy

> **Status:** Draft for stakeholder review
> **Date:** 2026-08-09
> **Audience:** Business stakeholders, product, engineering
> **Purpose:** Align the organization on Cathedral's UX direction and go-to-market positioning

---

## TL;DR

Cathedral's current user experience is a polished version of an outdated paradigm — form-driven requirements entry — while the industry is temporarily enamored with a different incomplete paradigm: chat-driven everything. Neither is right for a CASE tool serving the full SDLC. The path forward is twofold:

1. **Positioning:** Cathedral becomes the **system of record (the hub)**, with Jira, Azure DevOps, Slack, Claude, etc. as **spokes** that ingest into and project from it — not the reverse.
2. **UX:** The web application becomes a **visual, direct-manipulation oversight surface** for the accountability state that no spoke can show. This is what makes the hub worth visiting.

The visual UX is not decoration on top of an integration strategy. It is the thing that *replaces* the "fly-on-the-wall" integration strategy with a "hub" strategy, because it gives people a reason to make Cathedral the center.

---

## 1. The Situation

### 1.1 The market problem we exist to solve

Most projects fail (~75%). They fail on deadlines, budget, scope, and stakeholder satisfaction. The root cause traces back to requirements: inadequately defined, misunderstood, or mishandled. Formal methods for requirements engineering exist but are underutilized due to lack of awareness, training, and — critically — **usable tools**.

The bottleneck in software development has moved from *writing code* to *specifying what should exist*. AI accelerates code production but makes the specification gap more dangerous, not less: "dark factories" produce shippable software from markdown specs, but the specs themselves remain unstructured prose that neither humans can audit nor machines can reliably check. Experienced developers are measurably *slower* with AI because they're stuck reading every diff with no return channel for quality.

### 1.2 The two competing UX paradigms — and why both are incomplete

| Paradigm | Strengths | Fatal limitation for a CASE tool |
|---|---|---|
| **Form-driven** (DOORS, Jira, Modern Requirements, Cathedral today) | Structured data entry, explicit fields, auditable | Optimizes for *transcription*, which is the activity nobody does. Requires too much discovery. No visual model of relationships. |
| **Chat-driven** (LLM plugins, MCP tools, Slack bots) | Low friction, meets people where they are, bulk generation | A chat is a *transient reasoning scratchpad*, not a durable knowledge substrate. No persistence, no formal model, no checks, no provenance, no lifecycle, no enforcement. Cannot produce an evidence pack or block a merge. |

Cathedral's current web UI is a better form of the form-driven paradigm. Our GTM has been to integrate into the chat-driven paradigm via MCP, plugins, and bots. **Both positions are second-class:** the form UI optimizes for a workflow we've already declared secondary ("no one has to sit down and author requirements — Cathedral derives them from artifacts the team is already producing"), and the chat integration makes Cathedral a fly-on-the-wall inside tools that are themselves transient.

### 1.3 The intellectual foundation

The older idea that fits: not "live programming" (our artifacts don't execute), but the **direct-manipulation / malleable-systems** tradition — Alan Kay's "Doing With Images Makes Symbols," Smith's Pygmalion, the Glamorous Toolkit lineage. The core principle: **the user's mental model and the tool's representation should be the same picture, and that picture should be the thing you act on** — not a form that *describes* a thing you act on.

For Cathedral, this means: the requirement model *is* a navigable, inspectable, persistent visual artifact. You don't fill out a form to describe a component relationship; you draw the component and the relationship, and the underlying records are created with full versioning. The picture is the substrate.

---

## 2. Strategic Positioning: Hub, Not Spoke

### 2.1 The core decision

> **Cathedral is the system of record. Everything else is an edge.**

| | Fly-on-the-wall (current trajectory) | Hub-and-spoke (target) |
|---|---|---|
| **Where canonical state lives** | Jira/Slack/Claude owns the artifact; Cathedral mirrors | Cathedral owns the versioned, endorsed record; spokes project from it |
| **Cathedral's role** | A cache, quietly gathering | The authority on endorsement, traceability, and compliance state |
| **What spokes do** | Contain the real work | Ingest findings *into* Cathedral; project approved state *out* to tools |
| **Gravity** | Accumulates data, never accumulates gravity — nobody has a reason to visit | Accumulates gravity — the hub is where accountability state is visible |

### 2.2 Why this is viable now, even in a chat-enamored market

None of the spokes can do what Cathedral does, and they all know it at the level of serious/regulated work:

- **Jira** cannot produce an evidence pack for a regulator.
- **Claude** cannot block a merge for missing justification.
- **Slack** has no versioned ontology or endorsement lifecycle.
- **Azure DevOps** has no traceability from feature → use case → stakeholder need.

The spokes are all missing the accountability layer — and that is the one thing that *must* be centralized to be trustworthy. Hub-and-spoke is not "Cathedral competes with Jira"; it's **"Cathedral is the layer Jira can't be, and therefore Jira connects to it."**

### 2.3 What changes in the architecture (for the technical audience)

The backend is already closer to hub-and-spoke than the GTM messaging admits. The `analyze_session`, `analyze_pull_request`, `analyze_code`, and `analyze_document` ingestion paths are *already* ingestion edges. The MCP server is *already* a projection/query edge. The shift is primarily in **positioning and product emphasis**, not a rewrite:

- Ingestion edges (agents, PR analysis, code analysis, document analysis) → **propose** findings into the Cathedral lifecycle.
- The Cathedral lifecycle (Finding → Proposed → Review → Active) → **adjudicates** those proposals.
- Projection edges (Jira sync, Slack notifications, CI gates) → **project** approved state outward.
- The web UI → **the surface where humans curate, endorse, and repair** the model.

### 2.4 The division of labor

> **Agents propose. Cathedral adjudicates. Humans curate via a visual model. Spokes sync.**

- **Agents** do bulk generation and elicitation (the work nobody wants to transcribe by hand).
- **Cathedral's check engine** runs the 13+ quality dimensions and returns diagnostics as a *return channel, not a side report*.
- **Humans** do the curation, endorsement, and structural repair that requires judgment — and they do it *via the visual model*, because that's the representation where judgment is possible.
- **Spokes** sync approved state back to the tools teams already use day-to-day.

---

## 3. Go-To-Market Insights

### 3.1 The market mood is temporarily warped

The industry is currently enamored with chat-oriented approaches to everything. This is real and it affects selling. But it is *temporary*: the value of a chat scratchpad degrades the moment an auditor arrives, a stakeholder disputes a decision, or a team needs to prove what was known and when. The warp will correct as organizations accumulate un-auditable, un-traceable, vibe-coded systems and discover the cost.

### 3.2 The positioning principle

> **Don't try to be the hub for the "ocean of Vibers" — they don't value it yet. Be the hub for the people who are about to get hurt, and let the hurt do the marketing.**

This is not cynicism; it's segmentation. The buyers who value accountability *now* are the ones already exposed to its absence: regulated industries, safety-critical systems, organizations with audit obligations, teams inheriting brownfield codebases with no documentation. They are not the loudest market segment, but they are the one whose pain maps directly onto Cathedral's moat. They will become reference customers. The Vibers will follow when the cost of not having a substrate becomes visible — and it will.

### 3.3 What we stop saying and start saying

| Stop saying | Start saying |
|---|---|
| "Cathedral lives inside your chat" | "Cathedral is the system of record your chat and tools report into" |
| "We integrate into your existing workflow" | "Your existing tools are projections of Cathedral's canonical model" |
| "AI-powered requirements management" | "Machine-checkable requirements with a human-curated visual model" |
| "Better forms for requirements" | "The accountability layer your other tools structurally cannot provide" |

### 3.4 The GTM risk we accept

Hub-and-spoke requires the user to *choose* Cathedral as the center — a harder sell than "it just appears in your chat." But the fly-on-the-wall strategy carries a worse risk: **we accumulate data but never accumulate gravity**, because nobody has a reason to look at us. A hub nobody visits is a database. We prefer the harder sell with real gravity over the easy install with no gravity.

---

## 4. UX Direction: A Visual Model for Each Facet

### 4.1 The unifying principle

> **The visualization should be isomorphic to the structure of the data.**

- Spatial data → canvas (System architecture)
- Temporal data → timeline (Schedule, Milestones)
- Categorical-state data → board (Tasks by status)
- Two-axis tradeoff data → matrix (Risks by probability × impact)
- Relational/justification data → directed graph (Goals, traceability)
- Declarative data → structured list with inline state (Technical Mandates, Technology Elements)

One interaction model across all facets: **everything is a collapsible node that expands into its relationships.** A card collapses to a summary; it expands to reveal its slots (typed fields) and its links (edges to related requirements). Endorsement state colors the node; check-engine violations show as broken or missing edges. This is consistent with the STI + VNF data model, where every requirement is a versioned instance with slots and foreign-key links — an Object Diagram is a near-isomorphic rendering of what is actually in the database.

### 4.2 Per-facet metaphors

#### System facet → Editable C4 diagrams (lowest risk, highest familiarity)

C4 (Context → Container → Component → Code) maps almost directly onto existing `system-component`, `interface`, `system-interface`, and `environment-interface` types. It is an industry standard users already know — we adopt it rather than invent a novel visual language. The differentiator: the diagram is **editable in place** (drag a component, draw an interface line, rename inline) and mutates the underlying requirement records with full versioning. That is where we beat draw.io exports.

#### Environment facet → Context map (system-in-its-environment)

The Environment facet is about *what surrounds and constrains the system*: external systems, regulatory bodies, platforms, constraints, assumptions. The right metaphor is a **context diagram** (Yourdon/DeMarco tradition): the system as a central node, surrounded by the actors, external systems, regulations, and platforms that constrain it, with constraint/assumption edges. This gives invariants and constraints a natural home as edges and annotations rather than form fields.

#### Goals facet → Justification / traceability graph (highest leverage, most differentiated)

The Goals facet is really a **value/justification graph**: outcomes justify features; features are realized by use cases; use cases trace to stakeholder needs; behaviors constrain use cases. The right metaphor is a directed graph with:

- Goals at the top, fanning down to outcomes → features → use cases.
- **Endorsement and coverage state rendered as node color.**
- **Missing justification rendered as a broken edge the check engine flags red.**

This is the facet where the *check engine becomes visible*: a node that is "Active but has no tracing use case" glows a warning color. A form cannot show you "three features have no justification path to a goal"; a graph can, instantly. **This is the facet where Cathedral's accountability moat is most legible — and therefore the facet that most justifies coming to the hub at all.** It is the recommended first prototype.

#### Project facet → Multiple visualizations, not one forced metaphor

The Project facet contains structurally different data types; do not force one metaphor:

| Requirement type | Visualization | Why |
|---|---|---|
| Tasks (P.4) | Kanban (by status) / Gantt (by time) — toggle | Categorical-state and temporal data |
| Schedule & Milestones (P.3) | Timeline | Temporal data |
| Risks & Mitigations (P.6) | Risk matrix (probability × impact scatter) | Two-axis tradeoff data — a real, well-known metaphor |
| Personnel & Roles (P.1) | RACI matrix / org-style graph | Relational role data — already in the domain |
| Technical Mandates (P.2) | Stacked cards → expandable Object Diagram | Declarative with relationships |
| Technology Elements (P.5) | Stacked cards → expandable Object Diagram | Declarative with relationships |

#### List-shaped things → Stacked cards expandable to UML Object Diagram

For requirement types that are genuinely list-shaped but still have relationships (Technical Mandates, Technology Elements):

- **Collapsed:** a stack of cards, each card = one requirement instance. Header shows name + endorsement badge + MoSCoW priority. The stack offset and count badge signal "there are more like me" and invite expansion.
- **Expanded:** the card unfolds into an Object Diagram box — instance name at top, slots below (typed fields: `statement`, `rationale`, `priority`, `effectiveDate`, `version`), and **links drawn as edges** to related instances. A Technology Element links to the System Component that requires it; a Technical Mandate links to the Role that issued it.
- **The payoff:** a Technical Mandate with *no* link to any responsible role is immediately a visible broken edge — diagnostics made spatial, for free, in the representation.

#### Glossary facet → Stacked cards expandable to a Topic Map

The glossary is the one place where the initial recommendation ("keep it a flat list") was wrong, and Topic Maps (ISO 13250, Steve Pepper's *The TAO of Topic Maps*) is the reason. A glossary is not fundamentally a flat list — it is a **degenerate topic map**: a topic map in which only one type of occurrence (the definition) is of interest and is therefore inlined. A glossary with `see` and `see also` references is already a topic map with typed associations. Keeping the glossary as a flat list is keeping it in its degenerate form — the right *default view* for lookup, but the wrong *ceiling* for the representation.

The Topic Map conceptual model maps onto Cathedral's glossary almost directly:

| Topic Map concept | Cathedral glossary equivalent |
|---|---|
| **Topic** | A glossary term (a reified subject) |
| **Topic type** | Conceptual category — domain concept, stakeholder type, system element, external entity |
| **Topic names / variants** | Synonyms, abbreviations, context-specific names (the synonym/homonym problem) |
| **Associations** | `see also`, `broader term`, `narrower term`, `used for`, and custom typed relationships between terms |
| **Occurrences** | Where the term is *used* across the PEGS model — the use case, the system component, the stakeholder, the constraint |
| **Scope** | The View Model perspective — "Actor" means something different to a Planner vs a Designer vs a Builder |
| **Subject identity** | Merging "Actor (stakeholder)" and "Actor (system boundary)" when they are the same subject, or keeping them distinct when they are not |

The Occurrences axis is the one that matters most for Cathedral. In a traditional topic map, occurrences point to documents. In Cathedral, **occurrences point to requirements**. The glossary topic map becomes a traceability surface: "show me every requirement that uses the term 'Actor' and in what role." A term with zero occurrences is an orphan concept nobody uses; a requirement using a term not in the glossary is a broken edge. That is the check engine made visible — the accountability value the moat depends on.

This also resolves the tension in issue #477 ("too much is being shoved into the Glossary box"). The Glossary entry stays lightweight (term + definition + type); the *relationships* live in the expanded view, not in the entry itself. The domain model is not shoved into the glossary — the glossary is *unfolded* into the domain model.

The glossary therefore has two views, not one:

1. **Collapsed (default):** the flat, searchable term/definition list. The right view for lookup — "what does 'Actor' mean?" Forcing someone to navigate a graph to look up a definition is the discovery problem we are trying to eliminate.
2. **Expanded (topic map):** the same terms rendered as a graph of typed associations, with occurrences linking to where each term is used across the PEGS model. The right view for *understanding the domain* and for *traceability* — "show me the conceptual neighborhood of 'Actor' and every requirement that depends on it."

This fits the unified interaction model (everything is a collapsible node that expands into its relationships) and upgrades the glossary from a dictionary to a domain model without abandoning the dictionary view that stakeholders need.

**Scope = the View Model.** Pepper's scope concept — themes that limit the validity of a characteristic assignment — maps almost directly to Perspectives. The same term, scoped differently per perspective: a Planner sees "Actor" as a person with a role/responsibility (RACI); a Designer sees "Actor" as a system-boundary interactant (use case); a Builder sees "Actor" as an interface contract (system interface). The glossary topic map may be the cleanest place to first implement the Perspective switch, because terms are the one thing every perspective touches.

**Adopt the conceptual model, not the interchange standard.** Do not build a full ISO 13250 Topic Maps engine with XTM syntax, TMQL, TMCL, and published-subject identifiers. Cathedral already has a typed ontology (the PEGS req types). Render the existing glossary terms and their cross-references as a topic-map-style graph — topics as nodes, typed associations as edges, occurrences as links to requirement instances. The metaphor is the product; the ISO standard is not.

### 4.3 The View Model (Perspectives × Views) — the differentiator we haven't implemented

Cathedral's philosophy includes a View Model: Perspectives (Planner, Owner, Designer, Builder) × Views (Project, Environment, Goals, System). The current UX implements a View without a Perspective — the URL is `/[pegs]/` and the page is "list of req types in this facet."

The visual redesign is the moment to implement the View Model for real: **the same underlying graph rendered differently per perspective.**

- **Planner** sees schedule, risks, and resourcing front and center.
- **Owner** sees goals, coverage, and endorsement state.
- **Designer** sees system architecture and interfaces.
- **Builder** sees components, interfaces, and tasks.

If we do the visual metaphor per-facet but keep one canonical layout, we will have built a prettier CRUD app. If we make the *perspective* switch the rendered representation of the same data, we will have built the thing the marketing page actually claims: *"see requirements from their chosen perspective while allowing others to see them from theirs."* **This is the differentiator, and it is currently unimplemented. Prioritize it over polish on any single facet.**

---

## 5. Tactical Priorities

### 5.1 Decisions to make first

1. **Is the web UI an authoring surface, an oversight surface, or both?**
   Recommendation: **oversight-first, authoring-secondary.** Agents and ingestion do bulk authoring; the web UI does curation, endorsement, and structural repair via direct manipulation of the visual model. This splits the labor correctly and is consistent with the agent-native thesis.

2. **Is Cathedral the hub or a spoke?**
   Recommendation: **Hub.** This is a positioning decision, not a rewrite — the backend ingestion/projection edges already exist. The change is in product emphasis and messaging.

### 5.2 Prototype sequence (highest leverage first)

| Priority | Prototype | Rationale |
|---|---|---|
| 1 | **Goals facet as justification/traceability graph** with check-engine state as node color | Highest differentiation; the facet where "spokes can't show this" is most obvious; most aligned with the accountability moat; most justifies visiting the hub |
| 2 | **System facet as editable C4** | Lowest risk; industry-standard metaphor users already know; maps cleanly to existing types |
| 3 | **Perspective switch** as a real view-model toggle on the same data | The unimplemented differentiator from our own philosophy; turns a prettier CRUD app into the product the marketing page claims |
| 4 | **Project facet visualizations** (risk matrix, RACI, timeline, kanban/gantt toggle) | Individually well-understood metaphors; lower novelty risk |
| 5 | **Stacked-card → Object Diagram** for list-shaped types | Consistent interaction model; surfaces relationships that lists hide |
| 6 | **Glossary → Topic Map** (collapsed list / expanded graph) | Resolves issue #477; scope mechanism is a natural fit for the Perspective switch; occurrences = traceability to requirements |

### 5.3 What we explicitly do not do

- **Do not build a blank infinite canvas.** A Miro-style canvas with no structure is *more* discovery, not less. The cure for discovery is strong defaults + a navigable overview + drill-down. C4's zoom levels constrain the view at each level — preserve that constraint.
- **Do not force a diagram onto data that isn't spatial/relational.** Glossary terms have a collapsed list view for lookup — but the expanded Topic Map view is available because glossary terms *are* relational (associations, occurrences, scope). The principle holds: the collapsed view is for lookup; the expanded view is for relationships.
- **Do not optimize the web UI for transcription.** That is what agents and ingestion are for. The web UI optimizes for *reading the accountability state and repairing it*.
- **Do not cite "live programming" as the public ancestor.** Our artifacts don't execute. The honest intellectual home is the direct-manipulation / malleable-systems tradition. Use "direct-manipulation of a persistent model" externally.

---

## 6. The One-Paragraph Version for Stakeholders

Cathedral's value is durable, inspectable, enforceable accountability for requirements — the layer that Jira, Slack, and Claude structurally cannot provide. Today our UX is a better form of an outdated paradigm and our GTM makes us a second-class citizen inside tools that are themselves transient. The path forward is to make Cathedral the **system of record** that agents propose into, humans curate via a **visual model**, and other tools sync from — with the web application as the oversight surface where accountability state becomes legible as graphs, diagrams, and matrices rather than forms. We sell to the organizations already exposed to the cost of not having a substrate — regulated, safety-critical, audit-bound, brownfield — and let the hurt do the marketing. The visual UX is not a nice-to-have on top of an integration strategy; it is the thing that replaces "fly-on-the-wall" with "hub," because it gives people a reason to make Cathedral the center.

---

## Appendix: Source References

- **Issue #1008** — Cathedral as Agent-Native Formal Layer (inject into agents as a versioned, checkable knowledge base)
- **Issue #1157** — Argument against large context windows and world models as competitors (capability ≠ accountability)
- **Issue #1152** — The dark factory, developer slowdown, and the specification bottleneck (check engine as return channel)
- **PEGS Model** (Bertrand Meyer) — A Solution describes: a Project is executed, in an Environment, to achieve Goals, by developing a System
- **View Model** — Perspectives (Planner, Owner, Designer, Builder) × Views (Project, Environment, Goals, System)
- **Marketing page** — final-hill.com (Vision, Mission, Solution)
