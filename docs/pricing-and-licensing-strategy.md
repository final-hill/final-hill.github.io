# Pricing & Licensing Strategy

> **Status:** Draft for stakeholder review
> **Date:** 2026-08-09
> **Audience:** Business stakeholders, product, GTM
> **Purpose:** Define a pricing and licensing model aligned with Cathedral's value model and positioning
> **Companion to:** `docs/ux-and-positioning-strategy.md`, `docs/marketing-page-redesign.md`

---

## TL;DR

The standard SaaS pricing models — per-seat, usage-based, flat license — each misalign with Cathedral's value in a specific way. Per-seat charges the wrong axis (Cathedral's value is proportional to accountability coverage, not headcount) and penalizes the agent-native labor division (few humans, many agents). Usage-based pricing creates unpredictable bills that kill B2B deals and penalizes the exact behavior we want to encourage (more ingestion, more checking). Flat licensing ignores the gradient of risk/value across enforcement tiers.

The proposed model: **price on the enforcement tier × the number of Solutions, with bring-your-own-LLM-keys for the variable cost.** This aligns price with risk (what the buyer is paying to mitigate), is stable and predictable (what B2B buyers need), scales with the work being managed (not the headcount), and supports both the 20-person consulting shop (per-Solution, per-client) and the regulated enterprise (Production tier, self-hosted, air-gapped).

---

## 1. Why the Standard Models Don't Fit

### 1.1 Per-seat pricing — charges the wrong axis

Per-seat is the SaaS default because it's simple and maps to "how many people use this." It fails for Cathedral for three reasons:

1. **Value is not proportional to headcount.** A 5-person regulated team gets enormous value from Cathedral (evidence packs, compliance gates, audit defense). A 50-person non-regulated team gets less. Per-seat charges the 5-person team less for more value, and the 50-person team more for less. It inverts the value-to-price relationship.

2. **It penalizes the agent-native labor division.** "Agents propose, Cathedral adjudicates, humans curate." The number of humans *using* Cathedral is small by design — they're the curators and endorsers, not the authors. Per-seat revenue would be small precisely because the product is working as intended. The agents doing the bulk of the work aren't seats.

3. **It shrinks as teams shrink.** If LLMs make teams smaller (the trend the industry is betting on), per-seat revenue declines as the *work being managed* grows. That's a pricing model that bets against the product's own thesis. We should not price on an axis we believe will shrink.

### 1.2 Usage-based pricing — unpredictable and misaligned

Charging per LLM call, per analysis, or per check has two fatal problems:

1. **Unpredictable bills kill B2B deals.** A regulated enterprise needs to budget. "Did we just spend $2,000 analyzing one PR?" is the kind of question that makes a procurement team reject a vendor. B2B buyers will trade a higher fixed cost for a predictable one every time.

2. **It penalizes the behavior we want.** We *want* teams to ingest more (analyze more code, more PRs, more sessions). We *want* the check engine to run on everything. Usage pricing makes the most valuable behavior the most expensive one. It would suppress exactly the adoption that creates gravity.

### 1.3 Flat licensing — ignores the value gradient

A single flat license price treats a team using Cathedral for exploratory prototyping the same as a regulated supplier using it for production compliance. The risk exposure — and therefore the value — differs by orders of magnitude. Flat pricing leaves money on the table at the top and prices out the bottom.

---

## 2. What Cathedral's Value Is Proportional To

Before choosing a pricing axis, identify what the value actually scales with:

| Value driver | Why it scales | Pricing implication |
|---|---|---|
| **Enforcement tier** (Exploratory / Developing / Production) | The buyer's risk exposure. Production = regulated, safety-critical, audit-bound — the cost of not having the substrate is highest here. | This is the primary value axis. Price should rise with enforcement tier. |
| **Number of Solutions** (projects) | Each Solution is a unit of managed work — a project, a client engagement, a product line. More Solutions = more substrate managed. | This is the volume axis. Price per Solution. |
| **Integrations / spokes connected** | Each spoke (Jira, Slack, Claude, CI gate) extends Cathedral's reach and value. More spokes = more of the workflow covered. | Could be a tier differentiator (more integrations at higher tiers) rather than metered. |
| **Evidence pack exports** | The "physical evidence" — the tangible artifact a regulator receives. High value, low marginal cost. | Bundle a generous allowance; overage is soft-capped, not hard. |
| **Check engine coverage** | The 13+ check dimensions running across all requirements. The core value. | Included in all paid tiers — never metered, never gated below Production. |

What is **not** a value driver: the number of humans, the number of LLM calls, or the amount of code analyzed. These are *inputs* to the value, not the value itself.

---

## 3. The Proposed Model: Enforcement Tier × Solution

### 3.1 The tiers

| Tier | Who it's for | What they get | Price axis |
|---|---|---|---|
| **Exploratory** (free) | Individuals, small shops, prototyping teams, open-source projects | Deterministic checks (unlimited), limited Solutions (1–3), limited integrations, community support, no evidence packs, **light managed LLM** (Ollama Free-equivalent: enough to try ingestion a few times) + BYOK for more | Free — the "try it and see" tier |
| **Developing** (per-Solution, monthly/annual) | Serious teams, consulting companies, growing shops | Full check engine, more Solutions (per-Solution pricing), standard integrations, evidence pack exports, email support | Per active Solution per month |
| **Production** (per-Solution, annual, with enterprise add-ons) | Regulated, safety-critical, audit-bound organizations | Everything in Developing + CI gates, SSO/SCIM, advanced integrations, priority support, self-hosted option, dedicated onboarding | Per active Solution per year, with enterprise floor |

### 3.2 Why enforcement tier is the right primary axis

The enforcement tier maps directly to the buyer's **risk tolerance** — which is exactly what they're paying Cathedral to mitigate:

- **Exploratory:** "We're not sure if this is the right thing." Low risk, low price. The buyer is experimenting. Don't gate the deterministic checks — let them feel the value. Include a light managed LLM allowance (Ollama Free-equivalent: enough to try ingestion a few times and feel the "derived, not transcribed" value). When the free allowance is exhausted, ingestion rate-limits — the user upgrades or brings their own keys. Our cost per free user is ~zero (Ollama Free is free; hosting is negligible for a small account).
- **Developing:** "We're building this seriously." Medium risk. The buyer needs traceability and endorsement but isn't yet regulated. Per-Solution pricing lets a consulting company pay per client engagement.
- **Production:** "This is regulated / safety-critical / shipping to users." High risk. The buyer needs evidence packs, CI gates, audit defense. This is where Cathedral's moat is worth the most. Price accordingly.

This is value-based pricing on the axis the buyer themselves perceives: "how much is it going to hurt if this goes wrong?" Cathedral's answer: "less, if you use us at the tier that matches your risk."

### 3.5 Concrete price points (USD, US market, initial launch)

These are **launch price points for the US market**, anchored to value (risk mitigation) and comparable B2B developer/quality tools, not to cost-plus. They are starting points to test, not final answers. All prices are per active Solution.

| Tier | Price | Billing | Target buyer | Rationale |
|---|---|---|---|---|
| **Exploratory** | **Free** | — | Individuals, small shops, prototyping | The B2C funnel. No credit card. Limited to 1–3 Solutions, community support, no evidence packs. **Light managed LLM** (Ollama Free-equivalent: enough to try ingestion a few times). When the free LLM allowance is exhausted, ingestion rate-limits until the session/weekly limit resets — the user upgrades or brings their own keys. Our cost per free user is ~zero (Ollama Free is free). |
| **Developing** | **$49 / Solution / month** | Monthly, cancel anytime | Consulting companies, serious teams, growing shops | Anchored below the cost of a single requirements defect escaping to production (industry estimates: $200–$2,000+ per defect found late). A consulting company passes this through to the client as a line item — at $49/mo per engagement, it's rounding error in a $50K–$500K engagement. Self-serve, no sales call. |
| **Production** | **$499 / Solution / month**, or **$4,990 / Solution / year** (≈2 months free) | Annual | Regulated, safety-critical, audit-bound organizations | Anchored to the cost of a single failed audit or one regulator finding (industry estimates: $10K–$100K+ per finding). At $499/mo, one prevented audit finding pays for years. Includes CI gates, SSO/SCIM, evidence packs, priority support. Sales-assisted. |
| **Self-hosted (Production)** | **$12,000 / Solution / year** (enterprise floor: $50,000/yr minimum) | Annual license | Air-gapped, data-sovereignty, defense/aerospace/medical | Premium over SaaS Production (~2×) reflecting higher support cost and higher value (regulated buyers can't use SaaS at all without this). Enterprise floor captures Fortune-500 value (enormous value from a single Solution). Includes updates, support, BYOK. |

**Annual discount:** ~17% (2 months free) at Production tier to encourage annual commit and reduce churn. Developing stays monthly-only to fit consulting companies' variable client loads.

**Why these numbers, not higher or lower:**

- **Developing at $49/mo, not $99 or $199:** The 20-person consulting shop is the velocity customer. The price must be low enough that passing it through to a client is a non-event ("it's included"), not a budget conversation. At $49/mo, a consulting engagement with 6-month duration costs $294 — invisible in a $50K+ engagement. At $199/mo it becomes a line item the client questions. We want zero friction to adoption; we can raise this once the value is proven and the switching cost is real.
- **Production at $499/mo, not $99 or $1,000:** Production buyers are regulated. They evaluate on *risk reduction*, not cost. But the price must be defensible to procurement. $499/mo is below the cost of a single compliance finding, easy to justify in a budget meeting ("one prevented audit finding pays for a year"), and high enough to signal seriousness (a $99/mo tool is not a compliance-grade tool in a procurement officer's mind). $1,000/mo would trigger a longer sales cycle without adding proportional value at launch.
- **Self-hosted at $12K/Solution/yr with $50K floor:** Self-hosted is the highest-value, highest-cost-to-serve segment. The $50K floor captures the reality that a Fortune 500 gets enormous value from a single Solution and would be underpriced at per-Solution alone. The $12K/Solution price is ~2× SaaS Production, reflecting support cost and the fact that these customers *cannot* use SaaS — the alternative is building it themselves (cost: $500K–$2M+ and 12–24 months).

**What these prices assume:**
- BYOK for LLM costs (the customer's LLM bill is separate and on their existing cloud budget).
- The check engine is unlimited at all paid tiers (not metered).
- Evidence packs are bundled generously (recommend: 50/month on Developing, unlimited on Production and Self-hosted — see open questions).
- Active Solution = any Solution with a change in the last 30 days (see open questions).

**Price testing plan:** Launch at these points. Track conversion rate at each tier and the Exploratory → Developing and Developing → Production conversion. If Developing conversion is >15% of Exploratory users who hit the Solution limit, the price is too low — raise to $79. If Production sales cycle exceeds 90 days, test $399 to see if price is the friction. Revisit quarterly for the first year.

**Geographic note:** These are US launch prices. For international expansion (EU, UK, AU, CA), price in local currency at approximate parity (€49, £49, AU$69, CA$69) rather than USD-converted, to hit the same psychological price points. VAT/sales tax is added on top where applicable. Do not launch with a complex multi-region price matrix — parity pricing first, optimize later.

### 3.3 Why per-Solution is the right volume axis

A Solution in Cathedral's model is a unit of managed work — a project, a client engagement, a product line. Pricing per Solution:

- **Scales with the work being managed**, not the headcount. A 5-person team managing 10 Solutions pays more than a 50-person team managing 2 — because they're getting more value (more substrate managed, more coverage).
- **Fits the consulting company perfectly.** A 20-person consulting firm with 8 active client engagements pays for 8 Solutions. They can pass the cost through to the client ("Cathedral accountability is included in our delivery"). Each client engagement is a clean unit of value.
- **Is stable and predictable.** The buyer knows how many Solutions they have. No surprise bills.
- **Encourages adoption within a Solution.** Once a Solution is paid for, the team can invite as many curators, endorsers, and agents as they want without per-seat anxiety. This encourages the "agents propose, humans curate" model — add all the agents you want; the price doesn't change.

### 3.4 The LLM cost problem — three options, fixed billing guaranteed

Cathedral leverages LLMs behind the scenes for ingestion and elicitation (analyze code, analyze PR, analyze session, analyze document). This creates a variable cost that per-Solution pricing doesn't directly cover. The original BYOK-only approach was too absolute — it puts the LLM procurement burden on every customer, and the velocity customer (20-person consulting shop) doesn't want to manage API keys, monitor token usage, and deal with rate limits across multiple providers.

**The revised model — three LLM options:**

| Option | Who it's for | How it works | Pricing impact |
|---|---|---|---|
| **Managed LLM (resold)** | Most customers — consulting shops, teams without LLM infrastructure | Cathedral resells LLM cloud access (e.g., Ollama Cloud) as a bundled service. Cathedral manages the API keys, rate limiting, and token budget. The customer pays Cathedral; Cathedral pays the provider. | LLM allowance bundled into each tier. Overage is rate-limited (queued), not surprise-billed. Top-ups available. |
| **BYOK** | Sophisticated teams with existing LLM budgets | Customer provides their own API keys (OpenAI, Anthropic, Azure OpenAI, Ollama Cloud). Cathedral uses them; the customer pays the provider directly. | No LLM cost on Cathedral's bill. Cathedral's price is purely the platform + check engine. |
| **Self-hosted LLM** | Air-gapped / data-sovereignty customers | Customer runs their own models (local Ollama, on-prem inference). | No LLM cost on Cathedral's bill. BYOK is the only option here. |

**How to maintain fixed billing while covering variable usage:**

The key insight from Ollama's pricing model: usage is measured by model + tokens (input, cached input, output), not a fixed token cap. Different models consume different amounts of "usage" (level 1 small models to level 4 heavy models). This means Cathedral can:

1. **Bundle a usage allowance per tier** — e.g., Developing includes "Pro-equivalent usage" (enough for day-to-day ingestion of code/PRs/sessions). Production includes "Max-equivalent usage" (enough for heavy sustained analysis).
2. **Rate-limit rather than overcharge** — when the allowance is hit, LLM-powered features (ingestion, semantic checks) slow down (queued, not rejected) rather than producing a surprise bill. Deterministic checks (structural, schema-based) are never rate-limited — they cost us ~nothing.
3. **Offer top-ups** — if a customer needs more LLM usage, they buy a top-up (like Ollama's "extra usage"). This is a predictable, opt-in cost, not a surprise.
4. **Route by complexity** — Cathedral's ingestion pipeline can route: simple document parsing → small model (level 1), complex code analysis → larger model (level 3-4). This optimizes the usage budget.

**The fixed-billing guarantee:** Cathedral's monthly price stays fixed. The LLM allowance is included. If the customer exceeds the allowance, ingestion is rate-limited (queued), not billed. The customer can buy a top-up if they want faster ingestion, but they never get a surprise bill. This is the B2B-friendly model: predictable base cost, opt-in overage, never a surprise.

**Revised tier table with LLM allowance:**

| Tier | Platform price | Managed LLM allowance | LLM overage | BYOK option |
|---|---|---|---|---|
| **Exploratory** | Free | Ollama Free-equivalent (light: enough to try ingestion a few times) | Rate-limited (queued until session/weekly reset) | Yes (bring own keys for more) |
| **Developing** | $49/Solution/mo | Pro-equivalent (~$20/mo cost to us) | Rate-limited or top-up | Yes (platform-only price: $39/Solution/mo) |
| **Production** | $499/Solution/mo | Max-equivalent (~$100/mo cost to us) | Rate-limited or top-up | Yes (platform-only price: $399/Solution/mo) |
| **Self-hosted** | $12K/Solution/yr | N/A (customer runs own models) | N/A | Required |

The LLM allowance is a **cost of revenue** for Cathedral (we pay the LLM provider ~$20-100/mo per Solution), but it's bundled into the platform price. The margin comes from the platform + check engine, not from the LLM resale. The LLM is an inclusion mechanism, not a profit center.

**The check engine has two categories:**
- **Deterministic checks** (structural, schema-based: completeness, traceability, delimitedness, readability, modifiability) — rule-based, cost ~nothing to run, **unlimited at all tiers including Free**.
- **Semantic checks** (require understanding: non-ambiguity, consistency, justifiability, abstractness, correctness) — these use LLMs and are **subject to the tier's LLM allowance**. On Free (BYOK only), the user's own keys cover the cost. On paid tiers, the managed allowance covers it.
- **Ingestion** (analyze_code, analyze_document, analyze_session, analyze_pull_request) — always LLM-based, always subject to the allowance.

So the honest claim is: "Deterministic checks are unlimited. LLM-powered features (ingestion, semantic checks) are subject to your tier's LLM allowance — rate-limited when exceeded, never surprise-billed."

**Why not pass LLM costs through as a usage surcharge?** Because it reintroduces the unpredictability that kills B2B deals (section 1.2). The managed allowance + rate-limiting + top-up model keeps Cathedral's bill fixed and the overage opt-in, not a surprise.

---

## 4. The B2B / B2C Divide

### 4.1 The honest assessment

Cathedral's value is fundamentally **organizational**, not individual. Accountability is a property of a team, a process, an organization — not a single developer. An individual can use Cathedral, but the value (evidence packs, endorsement workflows, CI gates, traceability across a team) only fully materializes when a group adopts it. This means Cathedral is a **B2B product with a B2C entry point.**

The B2C entry point is the Exploratory tier: an individual developer or small shop can use it for free, feel the value, and either convert to a paying team or carry it into their next organization. This is the bottom-of-funnel "Find" strategy from the marketing doc — but the *revenue* is B2B.

### 4.2 The 20-person consulting company — the ideal hybrid customer

The "growing, more powerful smaller shops" the user named are not a edge case — they may be the **ideal early customer**, for several reasons:

1. **They have multiple clients = multiple Solutions.** Per-Solution pricing fits them perfectly. Each client engagement is a Solution; they pay per engagement.
2. **They sell accountability to their clients.** A consulting company that can say "we deliver machine-checkable requirements with full traceability and evidence packs" has a differentiator their competitors don't. Cathedral is a *sales tool for them*, not just an internal tool.
3. **They can pass the cost through.** "Cathedral accountability is included in our delivery" — the per-Solution cost is a line item in the client engagement, not an overhead cost.
4. **They're agile enough to adopt.** A 20-person shop can decide to use Cathedral in a week. A Fortune 500 takes a year. The consulting shop is the GTM velocity customer.
5. **They grow into Production tier naturally.** As their clients become more regulated (and they will, if they're good), the consulting shop upgrades to Production tier per-Solution. The enforcement tier model grows with them.

**Implication for pricing:** the Developing tier should be explicitly designed for this customer — per-Solution, monthly (not annual-only), self-serve, with evidence pack exports they can hand to clients. No sales call required. This is the "Win" funnel stage made self-serve.

### 4.3 The individual developer — the free funnel, not the revenue

An individual developer using Cathedral for a personal project is not a revenue customer, and that's fine. They are the **top of the funnel**:

- They use Exploratory tier for free.
- They feel the check engine catch something.
- They carry Cathedral into their team, their consulting shop, their next job.
- The conversion event is organizational, not individual.

Do not try to monetize the individual. The individual is the distribution channel for organizational adoption. Price the organization.

---

## 5. Self-Hosted Licensing

Self-hosted is not a nice-to-have for Cathedral's target market — it's a **requirement** for a significant segment:

- **Regulated industries** (aerospace, medical, defense) often cannot send code or requirements to a third-party SaaS.
- **Air-gapped environments** have no outbound connectivity.
- **Data sovereignty** requirements (GDPR, ITAR, etc.) may require on-premises data.
- **"You own the substrate"** — the anti-lock-in principle from the marketing doc — is most credible when self-hosted is a real option, not a theoretical one.

### 5.1 Self-hosted pricing model

| Aspect | Approach |
|---|---|
| **License unit** | Per-Solution (annual license), enforced via capacity-capped license key |
| **Enforcement tier** | Self-hosted is Production-tier by default (you don't self-host for Exploratory) |
| **LLM cost** | BYOK — customer runs their own models (local LLMs, on-prem inference) or their own API keys |
| **Updates** | Included in the annual license — the check engine updates matter; don't let self-hosted customers fall behind on checks |
| **Support** | Included — self-hosted customers are the highest-value, highest-needs segment |
| **Price** | Premium vs. SaaS Production tier — self-hosted is more expensive to support and higher-value to the customer |

### 5.1.1 The enforcement problem: how to count Solutions on a self-hosted instance

A self-hosted customer controls their own infrastructure. If pricing is per-Solution, they could create unlimited Solutions and we would have no way to know. Each enforcement option has tradeoffs:

| Option | How it works | Why it fails (or succeeds) |
|---|---|---|
| **Phone-home / telemetry** | Instance reports Solution counts to a license server | **Rejected.** Air-gapped customers *cannot* phone home by definition. Non-air-gapped self-hosted buyers chose self-hosted *because* they don't want data leaving their network. A self-hosted tool that phones home is a contradiction in terms and will be rejected by exactly the buyers who need self-hosted. |
| **Honor system / audit rights** | Trust the customer's reported count, with audit rights in the contract | **Workable but weak.** Enforceable via contract but adversarial, relies on manual processes, and only surfaces problems after the fact. Acceptable as a *backstop* (contract clause), not as the primary mechanism. |
| **Capacity-capped license key** | The license key unlocks a maximum number of active Solutions. The binary enforces the cap locally — no phone-home needed. | **Recommended.** This is the right answer. Don't try to count what they create; limit what they *can* create. |

**How the capacity-capped license key works in practice:**

1. **The license key encodes the entitlement** — e.g., "Production tier, 10 active Solutions, expires 2026-12-31." The key is cryptographically signed by Final Hill; the instance verifies the signature locally.
2. **The instance enforces the cap locally** — when a user attempts to create or activate a Solution beyond the licensed cap, the instance refuses and surfaces a clear message ("License allows 10 active Solutions; contact Final Hill to upgrade"). No network call required.
3. **"Active" is defined locally** — same as SaaS: a Solution is active if it has had any change in the last 30 days. The instance tracks this in its own database; it does not report it anywhere.
4. **Archived Solutions don't count** — a Solution can be archived (read-only, evidence-pack-exportable) and it frees up a slot. This supports the consulting-company use case (finish an engagement, archive it, start a new one) and the retention use case (keep the record for audit without paying for it as active).
5. **Upgrades are re-keying, not re-deployment** — to add capacity, the customer requests a new license key (via the account portal or support), receives it, and applies it to the instance. No reinstall, no phone-home.
6. **Annual renewal = new key** — the key has an expiry date. Renewal issues a new key for the next year. If the customer doesn't renew, the instance continues to run in read-only mode (existing data is accessible, no new Solutions, no new changes) — this preserves the "you own the substrate" principle: we don't brick your data, we just stop providing the active service.

**Why this works for air-gapped:** the entire enforcement is local. The signature verification uses Final Hill's public key (bundled in the binary). The license key is a small text file the customer receives out-of-band (email, secure portal download, USB for true air-gapped). No outbound connection is ever required.

**Why this works for the buyer:** the cap is transparent — they know exactly how many Solutions they're licensed for, and the enforcement is deterministic (not "we might audit you"). Upgrading is a self-serve re-key, not a sales negotiation (unless they want to negotiate, for large capacity). The read-only-on-expiry behavior means they never lose their data — they lose the *active service*, which is what they're paying for.

**The honor-system / audit-rights backstop:** the contract should still include audit rights (the right to request, once per year, a report of active Solution counts from the instance's admin panel) — not because the technical enforcement is insufficient, but because it's standard for enterprise software licensing and gives procurement something to point at. The technical cap is the primary enforcement; the audit right is the legal backstop.

**What this means for the price points:** the $12,000/Solution/year price assumes the customer buys capacity for the number of Solutions they need. A customer who needs 5 active Solutions buys a 5-Solution license ($60,000/year). The $50,000 enterprise floor is the minimum commit for the self-hosted license itself (the platform fee), with per-Solution capacity on top. This is cleaner than "unlimited Solutions for a flat fee" (which underprices high-Solution customers) and cleaner than trying to meter usage (which requires phone-home).

### 5.2 The open-source question — decision: closed implementation, open standards

**Recommendation: Do not open-source the implementation. Open the standards and formats instead.**

The open-core idea was considered and rejected. The reasoning:

**Why open-sourcing the implementation would erode the moat:**
- The check engine logic, the PEGS ontology implementation, and the endorsement lifecycle are the *formalization of the domain expertise* — the hardest part to build, and it's in the code. Open-sourcing it hands a competitor the hardest part for free.
- LLMs lower the barrier to understanding and modifying a codebase. A bad actor (foreign or domestic) could fork it, rebrand it, and compete on price without needing to understand *why* the checks are what they are. A snapshot fork isn't a real competitor to someone who can evolve the model — but for a price-competitor who doesn't care about quality, a snapshot is enough.
- Cathedral's moat is formal structure and accountability (issue #1157). The formal structure *is* the code. Giving it away is giving away the moat.
- Cathedral is a commercial product with bills to pay. Open-core is a long bet that takes years to pay off and requires discipline (the open version must be valuable enough to attract users; the paid version must be valuable enough to convert). If revenue is needed now, the pragmatic answer is: don't open-source the implementation.

**How to keep the trust story without exposing the moat — open the standards, not the code:**

The "you own the substrate" principle and the trust story for regulated buyers are about **portability and auditability of what is validated**, not openness of how the code is written. These can be delivered without open-sourcing the implementation:

| What the buyer needs | How to deliver it without open-sourcing |
|---|---|
| **"I own my data"** (no lock-in) | Publish an **open export format** — a documented, versioned schema for exporting all requirements, endorsements, provenance, and check results. The customer can take their data to any tool that reads the format. The data is theirs; the implementation is ours. |
| **"I can audit what the checks validate"** | Publish the **check specifications** — the 13+ dimensions, what each validates, the PEGS ontology as a documented spec. A regulator can read *what* is checked without reading *how* the code checks it. |
| **"I can verify the checks ran"** | The check engine produces **signed, auditable diagnostic reports** with provenance. The customer doesn't need the code; they need the evidence that the code ran and what it found. |
| **"I can trust the ontology"** | Publish the **PEGS ontology as a documented standard** (the types, the relationships, the lifecycle states). The standard is open; the implementation of the standard is proprietary. |

This is the **standards-open / implementation-closed** model. It's the model used by ISO standards, by SAML/OAuth (the spec is open; the implementations are products), and by regulated industries generally: the *what* is public and auditable; the *how* is a commercial product. It preserves the moat (the implementation) while delivering the trust properties the market needs (portability, auditability, no lock-in).

**What this means for pricing:**
- The Exploratory tier is a **free SaaS tier** (free as in beer, not free as in speech), not an open-source download. This still serves the B2C funnel without exposing the code.
- Self-hosted is a **licensed binary** (Docker image, Helm chart), not an open-source repo. The customer runs it; they don't get the source.
- The open export format and published check specifications are **marketing assets** — they demonstrate "you own the substrate" and "auditable accountability" without giving away the implementation. They belong on the marketing page as trust signals.

---

## 6. What Not to Do

- **Do not price per-seat.** It charges the wrong axis, penalizes the agent-native model, and bets against the team-shrinking trend we believe in.
- **Do not meter deterministic checks.** The deterministic check engine (structural, schema-based) is the core value with ~zero marginal cost. It should be unlimited at all tiers including Free. Semantic checks (LLM-based) are subject to the tier's LLM allowance — this is honest, not a limitation, because they have real variable cost.
- **Do not pass LLM costs through as a usage surcharge.** Use the managed allowance + rate-limiting + top-up model. Unpredictable bills kill B2B deals. The managed LLM option (resold Ollama Cloud or similar) keeps Cathedral's bill fixed and the overage opt-in.
- **Do not require a sales call for the Developing tier.** The 20-person consulting shop needs self-serve. Save the sales call for Production/enterprise.
- **Do not price "AI features" as a premium add-on.** AI is an ingestion mechanism, not the product (per the marketing doc). Pricing "AI features" separately would reinforce the "AI-powered tool" framing we're explicitly rejecting.
- **Do not annual-only at the Developing tier.** Consulting companies have variable client loads. Monthly per-Solution lets them scale up and down with engagements. Annual is for Production.

---

## 7. Open Questions for Stakeholders

1. **What is the evidence pack allowance?** How many evidence pack exports per Solution per month before overage? This should be generous (it's the "physical evidence" — the tangible artifact) with soft caps, not hard limits.

2. **Is there a free trial of Production tier?** Or is the enforcement tier upgrade frictionless (one click, prorated)? Regulated buyers need to *feel* the Production value before committing. A time-limited Production trial per Solution may convert better than a permanent Exploratory tier.

3. **How are Solutions counted for consulting companies?** If a consulting firm has 8 active clients but 2 are dormant, do they pay for 8 or 6? Recommend: pay for active Solutions only, with a clear definition of "active" (e.g., any change in the last 30 days).

4. **Is there a platform/enterprise floor?** For very large organizations (Fortune 500), per-Solution pricing might underprice the value (they get enormous value from a single Solution). An enterprise floor (minimum annual commit) may be needed at the Production tier.

5. **What happens to the data when a Solution is archived?** Consulting companies finish engagements. Do they keep the Solution for audit purposes (retention) or archive it? Archived Solutions should be free or near-free (read-only, evidence-pack-exportable) — this supports the "you own the substrate" principle and the retention use case.

---

## 8. The One-Paragraph Version for Stakeholders

Cathedral's value is proportional to accountability coverage and enforcement tier, not to headcount — so per-seat pricing charges the wrong axis and penalizes the agent-native labor division the product is built around. The proposed model prices on **enforcement tier × number of Solutions**: Exploratory is free (the B2C entry point and distribution channel), Developing is $49/Solution/month (ideal for the 20-person consulting company paying per client engagement — low enough to pass through as a non-event), Production is $499/Solution/month or $4,990/year (for regulated, safety-critical, audit-bound organizations — below the cost of a single compliance finding), and Self-hosted is $12,000/Solution/year with a $50,000 enterprise floor (for air-gapped and data-sovereignty requirements). LLM variable costs are handled by a three-option model: managed LLM (resold, bundled allowance with rate-limited overage), BYOK (customer's own keys), or self-hosted (customer runs own models) — keeping Cathedral's bill fixed and predictable while covering the variable usage. Self-hosted is a first-class option — not a premium afterthought — because the regulated segment requires it and because "you own the substrate" is only credible when self-hosted is real. Deterministic checks are unlimited at all tiers (including Free) — they cost ~nothing to run. Semantic checks and ingestion (LLM-based) are subject to the tier's LLM allowance — rate-limited when exceeded, never surprise-billed. The Free tier includes a light managed LLM allowance (Ollama Free-equivalent: enough to try ingestion) so our cost per free user is ~zero; users who need more bring their own keys or upgrade. We do not price per-seat, we do not meter checks, we do not pass LLM costs through as a surcharge, and we do not require a sales call for the Developing tier — the consulting shop needs self-serve. The implementation is **closed-source** to protect the moat (the formalization is the code, and LLMs make code forks cheaper to exploit); the **standards are open** — a documented export format, published check specifications, and the PEGS ontology as a documented standard — to deliver the trust properties the market needs (portability, auditability, no lock-in) without giving away the implementation.

---

## Appendix: Source References

- **UX & Positioning Strategy:** `docs/ux-and-positioning-strategy.md` (enforcement tiers, hub-and-spoke, "you own the substrate")
- **Marketing Page Redesign:** `docs/marketing-page-redesign.md` (segmentation, "let the hurt do the marketing", "we're the layer not the cage")
- **Issue #1008** — Agent-Native Formal Layer (agents propose, Cathedral adjudicates)
- **Issue #1157** — Capability ≠ accountability (the moat is formal structure, not model capability)
- **Issue #1152** — The dark factory, specification bottleneck (teams shrinking, spec quality matters more)
- **PEGS Model** — Solution as the unit of managed work (Project, Environment, Goals, System)
- **The 7 Ps and the 4 Pillars of Marketing** — "Physical Evidence" (the evidence pack as tangible artifact)
