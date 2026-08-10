---
title: Cathedral
description: The coherence layer for software development — machine-checkable requirements that survive the conversation.
date: 2025-10-19
---

::UPageHeader{title="Cathedral" description="Requirements that survive the conversation."}
::

Cathedral is the coherence layer for software development — the system of record for
machine-checkable requirements that Jira, Slack, and Claude structurally cannot provide.
Agents propose. Cathedral adjudicates. Humans curate via a visual model. Spokes sync.

![Hub-and-spoke architecture: Cathedral at center with Jira, Slack, Claude, and Azure DevOps as labeled edges](/assets/hub-and-spoke.svg)

### The coherence layer

When implementation is cheap, the limiting factor is not code production — it is **coherence**:
maintaining coherence between business intent, architecture, domain model, APIs, data, security
assumptions, tests, operational behavior, documentation, regulatory constraints, dependencies,
and user expectations. An LLM can generate 100,000 lines of plausible code. That does not mean
anyone understands the resulting system.

Coherence is the technical dimension (does the system still make sense). Accountability is the
social dimension (who approved what, can you prove it). Cathedral is the coherence layer — the
PEGS model is a coherence framework, the check engine is a coherence verifier, the visual model
is a coherence surface.

### The AI-native SDLC

Traditional SDLC asks: "What steps do humans follow to produce this software?" AI-native SDLC
asks: "What properties must remain true as agents continuously modify this software?" The SDLC
does not disappear — it moves upward. Cathedral is the AI-native SDLC: not the implementation
part (agents do that), but the part that moves upward — specification, constraints,
architecture, invariants, automated verification, observability, provenance, reproducibility.

### The endorsement lifecycle

Requirements are not transcribed — they are derived and endorsed:

**Finding → Proposed → Review → Active**

An agent (or a human) produces a Finding from an artifact. Cathedral formalizes it into a Proposed
requirement. A reviewer endorses it through Review. It becomes Active when checks pass and the right
human approves. Every transition is versioned with provenance — file, line, session, PR.

### See what your tools can't show you

Cathedral's visual model makes coherence state legible as graphs, diagrams, and matrices —
not forms. Goals as a justification graph. System as editable C4 diagrams. Glossary as a topic map.
Risks as a probability × impact matrix. The same model, rendered differently for a Planner, Owner,
Designer, or Builder.

![Visualization mockups: justification graph, C4 diagram, topic map, and risk matrix](/assets/what-you-see.svg)

### Derived, not transcribed

No one has to sit down and author requirements. Cathedral derives the implied requirements from
artifacts the team is already producing — code, pull requests, sessions, documents. The requirements
emerge from the work, not from a separate transcription activity nobody does.

### Built for the cost of not having it

The market is bifurcating. Small and simple systems: one human plus AI yields enormous leverage.
Large and critical systems: small autonomous teams plus AI yield enormous leverage. The middle —
traditional mid-size teams that Scrum was built for — may shrink dramatically. Cathedral serves
both ends: the individual who needs coherence for their agent swarm, and the small team that needs
accountability for regulated work.

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
