# Final Hill — Marketing Copy

> Proposed replacement for the current pages at
> [final-hill.com](https://final-hill.com/) and `final-hill.com/solutions/cathedral`.
> Reflects the strategic position laid out in
> [agent-native-vision.md](https://github.com/final-hill/cathedral/blob/master/_docs/strategy/agent-native-vision.md) and the roadmap in
> [agent-native-implementation-plan.md](https://github.com/final-hill/cathedral/blob/master/_docs/strategy/agent-native-implementation-plan.md).
>
> Three pages are drafted below, in priority order: a refreshed **home page**,
> a substantive **Cathedral product page** (replacing the current 404 / stub),
> and a short **For regulated industries** sub-page. Tone is direct, technical,
> and unfashionably honest — the audience is engineering leaders, BAs, and
> compliance owners, not consumer LLM enthusiasts.

---

## Page 1 — Home (`final-hill.com/`)

### Hero

> # The knowledge base beneath the chat box.
>
> Your developers ship code with Claude, Cursor, and Copilot. Cathedral
> derives the use cases, glossary, stakeholders, and invariants implied by
> what they actually built — and tells them, in the same chat or pull
> request, what isn't yet good enough to ship.

**Primary CTA:** *Connect Cathedral to your agent* → install / docs.
**Secondary CTA:** *See it run on a real repo* → demo video.

### The shift

Software is increasingly written by people who never write a requirement.
A developer prompts an agent, accepts the diff, opens a pull request, and
moves on. The use case, the stakeholder list, the invariants, and the
glossary terms implied by that change are never written down — by anyone.

The result is more software, of lower epistemic clarity, produced faster, by
less experienced authors. Traceability, justifiability, consistency, and
stakeholder accountability aren't being skipped on purpose. Nothing in the
new workflow ever asks for them.

That gap is the entire problem.

### Where the existing tools fall short

- **Pure-chat tools** (Lovable, generic copilots) ship code fast and leave
  behind no durable record of what was decided or why. The conversation is
  the artifact, and conversations don't graph, diff, or audit.
- **Traditional CASE tools** (DOORS, Jama, Polarion, Visual Paradigm) own a
  knowledge base, but they're invisible to a developer who never leaves their
  agent. Form-and-table UX loses to "ask the chat box."
- **General-purpose wikis** (Confluence, Notion, SharePoint) accept anything
  and validate nothing. The "knowledge" they hold is unstructured prose that
  LLMs can't reliably reason over and humans can't reliably audit.

No one is positioned to be the formal, machine-checkable knowledge base that
sits *beneath* the chat. That is the position we are building for.

### What Final Hill is building

**Cathedral** — a structured, versioned, checkable requirements knowledge
base that derives requirements from the artifacts your team already produces
(code, agent sessions, pull requests, documents) and surfaces the gaps as
diagnostics in the same surface the work was done in.

[Learn more about Cathedral →](/solutions/cathedral)

### Vision

Requirements quality should not depend on whether the person at the keyboard
remembered to write one down. The substrate should be unavoidable, the
checks should be automatic, and the audit trail should already exist by the
time anyone asks for it.

### Mission

Make formal requirements engineering the default substrate of agent-native
software development — without asking developers to change how they work.

---

## Page 2 — Cathedral (`final-hill.com/solutions/cathedral`)

### Hero

> # Cathedral
> ## The requirements knowledge base for agent-native development.
>
> Your team writes code with Claude, Cursor, or Copilot. Cathedral writes
> the requirements — by deriving them from the work itself — and tells the
> agent what's missing before a human stakeholder ever sees it.

**Above-the-fold CTAs:**

- **Install for Claude / Cursor / Copilot** (one-click MCP install)
- **Add the GitHub Action** (works without an agent)
- **Read the docs**

### What it does, concretely

Cathedral hooks into agent-native workflows at four points. **None of them
require a developer to author a single requirement by hand.**

| Capture surface | Trigger | What it derives |
|---|---|---|
| **Repository sweep** (`analyze_code`) | On schedule or on every pull request — *no agent cooperation needed*. | Glossary terms from entities and DB tables. Use Cases from HTTP routes, GraphQL resolvers, RPC handlers. Stakeholders from RBAC checks. Invariants from validators, DB constraints, guard clauses. Acceptance criteria from BDD test names. |
| **PR-gate** (`analyze_pull_request`) | Every PR opens or pushes — *runs in CI, no agent cooperation needed*. | Posts the derived requirements as a PR comment with full provenance back to the diff. In `Production` mode, blocks merge until quality diagnostics are resolved. |
| **In-session reflection** (`analyze_session`) | The agent calls it at natural "done" moments. | The agent types its own session against the schema: utterances → Goals/Invariants, new endpoints → Use Cases, auth roles → Stakeholders. |
| **Document ingestion** (`analyze_document`) | On demand. | Same lifecycle, but for prose: Confluence pages, Notion docs, Jira tickets, requirements PDFs, interview transcripts. |

Every derived requirement enters the knowledge base as a low-commitment
`Finding`, carries full provenance back to the artifact it came from, and
moves through a `Proposed → Review → Active` lifecycle that your supervising
PM or BA actually controls.

### What makes the substrate work

- **Versioned by construction.** Single Table Inheritance plus Version
  Normal Form: every fact in Cathedral is effective-dated. There is no
  concept of an unrecorded change. The audit trail is not a feature; it is
  the data model.
- **Thirteen independent quality dimensions.** Identification,
  justifiability, traceability, consistency, correctness, completeness,
  delimitedness, abstractness, non-ambiguity, and more — each a separate
  endorsement state per requirement. Strictly more expressive than any
  aggregate "maturity level."
- **PEGS facets** (Project, Environment, Goals, System) give every
  requirement a uniform semantic position regardless of which capture
  surface it came from.
- **Checks become diagnostics, not reports.** Every Cathedral tool that
  writes returns a structured `Diagnostic[]` in the same response. Agents
  see the quality gap they just created, in the same conversation, and can
  iterate on it without anyone asking. This is the moat pure-chat tools
  cannot replicate, because they have no formal model to check against.
- **Progressive enforcement.** Each solution carries an `enforcementLevel`:
  - `Exploratory` — diagnostics are advisory.
  - `Developing` — `error`-severity diagnostics require explicit
    acknowledgement (the default for new solutions).
  - `Production` — `error`-severity diagnostics hard-block writes and PR
    merges; every override is recorded.

  The same engine serves a prototyping team and a regulated medical-device
  supplier.

### Where Cathedral lives

Cathedral is built on the official Model Context Protocol (MCP) plus the
MCP Apps standard (SEP-1865). That means:

- **Inside any major agent.** Claude Desktop, Claude Code, Claude CoWork,
  Cursor, Windsurf, and VS Code Copilot can all read from and write to
  Cathedral with one install. Inline UI widgets — requirement cards, check
  reports, coverage reports — render directly inside the chat.
- **Inside your CI.** A `cathedral` CLI plus a GitHub Action (and GitLab
  template) wraps the PR-gate so teams whose agent isn't Cathedral-aware
  still get derivation and diagnostics on every PR.
- **In a browser.** A web app for the supervising PM / BA — audit history,
  Maturity Dashboard, evidence-pack export, manual authoring for the cases
  that warrant it. Not a chat. The chat already exists; we don't need
  another one.

### Honest about limits

We don't claim to derive everything. Business rationale and goals live in
the prompt and the PR description, not in code. Non-technical stakeholders
("regulator", "billing department") almost never appear in code. Cross-
cutting business invariants are usually scattered across many files.

Cathedral makes those gaps *visible* — "missing rationale" is a diagnostic,
not a failure. Your supervising BA fills them in once and the substrate
remembers, forever, who said so and when.

### Built for three buyers

- **Engineering teams** shipping with LLM agents who need accountability
  without slowing down → start with `Developing` enforcement and the GitHub
  Action.
- **Regulated suppliers** (medtech, fintech, defense, automotive, public
  sector) who can't ship vibe-coded specs without traceable provenance →
  start with `Production` enforcement, self-hosted, and evidence-pack
  exports. [Read the regulated-industries page →](/solutions/cathedral/regulated)
- **Multi-agent organizations** who want one neutral requirements layer
  rather than a different tool per agent platform → MCP plus distribution
  packs for every major host.

### What Cathedral is *not*

- **Not another chat box.** The agent you already use is the chat box. We
  are the substrate it writes into.
- **Not a code-generation tool.** We do not write your software. We type
  what was written.
- **Not a canvas / whiteboard tool.** PEGS visualizations are projections
  of structured data, not free-form authoring surfaces.
- **Not a foundation model.** Model capability is not the moat; formal
  structure and accountability are.

### Roadmap (12-month picture)

- **Q1** — Brownfield ingestion foundation (`Product` entity, `CodeAnalysis`,
  `DocumentAnalysis`); unified MCP tool surface; remote MCP transport.
- **Q2** — Standardized `Diagnostic` shape; per-solution `enforcementLevel`;
  first MCP Apps (`requirement-card`, `check-report`, `product-card`,
  `coverage-report`); `analyze_session` and `analyze_pull_request`;
  `cathedral` CLI plus GitHub Action.
- **Q3** — Auto-fix tooling; import bridges (Confluence, Notion, Jira,
  GitHub Issues); transcript imports for Claude Code / Cursor / Copilot
  history; Maturity Dashboard; one-click distribution for every major host.
- **Q4** — Telemetry-driven tuning; first regulated-vertical reference
  deployments running in `Production` enforcement; case studies on real
  brownfield codebases.

[Full roadmap and implementation plan →](https://github.com/final-hill/cathedral/blob/master/_docs/strategy/agent-native-implementation-plan.md)

### Get started

- **Try Cathedral against your repo.** Free during early access. *(form)*
- **Install for your agent.** *(per-host install buttons)*
- **Drop the GitHub Action into a workflow.** *(copy-paste YAML)*
- **Talk to us about regulated deployments.** *(contact)*

---

## Page 3 — For regulated industries (`final-hill.com/solutions/cathedral/regulated`)

### Hero

> # Cathedral for regulated software.
> ## The audit trail is the data model. The PR-gate is the compliance gate.

For medical-device, financial-services, defense, automotive, and public-
sector teams that cannot ship vibe-coded specifications without traceable
provenance, stakeholder attribution, and reviewable change history.

### What changes when your enforcement is `Production`

- **`error`-severity diagnostics hard-block writes** at the tool surface and
  hard-block merges at the PR-gate. Every override is recorded with author,
  justification, and timestamp.
- **Every fact is versioned and effective-dated** by construction. There is
  no separate audit log because the data model *is* the audit log.
- **Evidence packs export in one click**: PDF or signed JSON bundling a
  requirement, its full version history, its diagnostic results across all
  thirteen quality dimensions, its stakeholder attribution, and the
  artifacts it was derived from. Suitable for regulator review.
- **Self-hosted deployment** alongside SaaS so security-sensitive
  organizations can run the knowledge base inside their own boundary.
- **Mapping to common compliance frames**: the existing check catalogue maps
  onto EU AI Act risk categories, ISO/IEC/IEEE 29148, IEC 62304, and
  DO-178C, so buyers can see the alignment without reverse-engineering it.

### What this replaces

The "compliance evidence binder assembled by hand the week before audit"
ceases to be a workstream. The PR your developer just merged in
`Production` mode either has reviewable provenance and resolved diagnostics
across all thirteen quality dimensions or it didn't merge.

### Talk to us

*(contact form scoped to regulated programmes — sales engineer follow-up,
not a free-tier signup)*

---

## Cross-cutting copy notes

A few things to keep consistent across the site whenever this lands.

- **Never say "AI-powered."** The product's value is not that it uses AI;
  it's that it *survives* AI being used everywhere else. The agents are the
  user's, not ours.
- **Never say "requirements management platform."** That category is owned
  by tools the new buyer has never heard of and doesn't want. Lead with
  "knowledge base beneath the chat box."
- **Always lead with derivation, not authoring.** The single biggest
  reframing in the strategy is that no one has to sit down and write a
  requirement. Every page should make this visible above the fold.
- **Always show provenance.** Screenshots, diagrams, and example PR
  comments should make it obvious that every derived requirement points
  back to a specific file, line range, session id, or PR number.
- **Don't promise a "smart chat."** The in-app assistant exists to serve
  users who chose the web surface. It is not a strategic differentiator and
  marketing should not treat it as one.
- **Use "developer," "engineering team," "supervising BA / PM," and
  "compliance owner" as the canonical personas.** Avoid "user."

## Suggested replacements for current site copy

| Current page element | Replace with |
|---|---|
| Home tagline "Constructing Solutions, Crafting Legacies" | "The knowledge base beneath the chat box." |
| Home four-icon strip ("Discovery / Analysis / Versioning / Traceability") | Four-icon strip: **Derive** (from code, sessions, PRs, docs), **Check** (13 quality dimensions), **Gate** (progressive enforcement), **Audit** (versioned by construction). |
| "Solution" paragraph (current `/solutions/cathedral` body) | The Cathedral product page above (Page 2). |
| "Our platform is still in the early stages of development. Join the mailing list…" | Replace with the three concrete CTAs (install for agent, add the Action, talk to us about regulated deployments). Mailing list becomes a fourth, smaller option. |
| 404 at `/solutions/cathedral` | Page 2 above. (This is the most urgent fix; the page is currently broken.) |
