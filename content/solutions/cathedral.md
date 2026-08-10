---
title: Cathedral
description: The accountability layer for software development — machine-checkable requirements that survive the conversation.
date: 2025-10-19
---

::UPageHeader{title="Cathedral" description="Requirements that survive the conversation."}
::

Cathedral is the system of record for requirements — the layer Jira, Slack, and Claude
structurally cannot provide. Agents propose. Cathedral adjudicates. Humans curate via a visual
model. Spokes sync.

![Hub-and-spoke architecture: Cathedral at center with Jira, Slack, Claude, and Azure DevOps as labeled edges](/assets/hub-and-spoke.svg)

### Machine-checkable. Human-curated. Agent-fed.

Requirements are not prose in a document. They are machine-checkable records that a compiler-like
check engine can fail. The engine runs 13+ check categories: correctness, completeness, consistency,
traceability, justifiability, and more. A requirement that passes is Active. One that fails is
flagged — and if enforcement is on, it blocks the merge.

### The endorsement lifecycle

Requirements are not transcribed — they are derived and endorsed:

**Finding → Proposed → Review → Active**

An agent (or a human) produces a Finding from an artifact. Cathedral formalizes it into a Proposed
requirement. A reviewer endorses it through Review. It becomes Active when checks pass and the right
human approves. Every transition is versioned with provenance — file, line, session, PR.

### See what your tools can't show you

Cathedral's visual model makes accountability state legible as graphs, diagrams, and matrices —
not forms. Goals as a justification graph. System as editable C4 diagrams. Glossary as a topic map.
Risks as a probability × impact matrix. The same model, rendered differently for a Planner, Owner,
Designer, or Builder.

![Visualization mockups: justification graph, C4 diagram, topic map, and risk matrix](/assets/what-you-see.svg)

### Derived, not transcribed

No one has to sit down and author requirements. Cathedral derives the implied requirements from
artifacts the team is already producing — code, pull requests, sessions, documents. The requirements
emerge from the work, not from a separate transcription activity nobody does.

### Built for the cost of not having it

Cathedral is for organizations already exposed to the cost of un-auditable, un-traceable,
vibe-coded systems: regulated industries, safety-critical systems, audit-bound organizations, and
teams inheriting brownfield codebases. The evidence pack is exportable, non-proprietary, and
customer-owned. You own the substrate; Cathedral is the layer, not the cage.

![Sample evidence pack export showing requirements with provenance, endorsement status, and check results](/assets/evidence-pack.svg)

---

## Subscribe

Cathedral is in early development. Join the mailing list for early access — prioritized for
regulated, safety-critical, and audit-bound teams.

::HubSpotForm
::
