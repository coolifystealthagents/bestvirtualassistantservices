#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
base_source = (ROOT / "scripts" / "create_sep18_research_batch.py").read_text(encoding="utf-8")
namespace = {"__file__": str(ROOT / "scripts" / "create_sep18_research_batch.py")}
exec(base_source.split("\nentries = []", 1)[0], namespace)
namespace["DATE"] = "2026-09-22"

TOPICS = [
    {
        "slug": "filipino-virtual-assistant-supervision-cadence-study",
        "title": "How Should Buyers Verify Supervision in a Filipino Virtual Assistant Service?",
        "excerpt": "A buyer method for testing what managed supervision means, who reviews work, and when problems reach the client.",
        "focus": "provider supervision cadence",
        "question": "how a buyer can verify a Philippines-based virtual assistant provider's claim that a service is managed or supervised",
        "decision": "whether the promised supervision matches the role's error risk, work volume, buyer availability, and escalation needs",
        "unit": "one supervision event mapped to its trigger, reviewer, evidence sampled, decision rule, escalation clock, and buyer notification",
        "scenario": "A provider describes an inbox-support service as fully managed. The proposal does not identify who reviews draft replies, how often samples are checked, whether the supervisor sees the same customer context, or which errors reach the buyer. The label therefore does not reveal the management work the buyer retains.",
        "evidence": "Ask for a redacted supervision calendar, review rubric, exception path, and example of an aggregate quality record. Walk through a routine miss and a high-impact miss. Record who detects each one, what the reviewer can decide, when the buyer is told, and whether coaching or rework consumes purchased assistant time.",
        "limits": "A documented cadence cannot prove that every review occurs or that reviewers apply standards consistently. Provider-selected examples may omit weak periods, while very small samples may miss rare errors. Supervision also cannot replace the buyer's responsibility for defining restricted decisions and approving material exceptions.",
        "finding": "Managed supervision is comparable only when the provider names the reviewer, observation method, cadence, decision rights, evidence retained, and escalation point for the buyer.",
        "image": "/blog/images/virtual-assistant-owner-review-scorecard.webp",
    },
    {
        "slug": "virtual-assistant-coverage-hours-evidence-study",
        "title": "What Evidence Makes Virtual Assistant Coverage Hours Comparable?",
        "excerpt": "A practical framework for separating staffed hours, response windows, overlap, backup coverage, and excluded periods.",
        "focus": "virtual assistant coverage-hours evidence",
        "question": "how buyers can compare coverage-hour promises across virtual assistant service proposals without treating unlike definitions as equivalent",
        "decision": "which coverage design fits the buyer's time zone, queue volatility, response obligations, approval availability, and continuity requirements",
        "unit": "one coverage interval mapped to staffed availability, task eligibility, first-response rule, handoff point, backup owner, holiday rule, and evidence source",
        "scenario": "Two providers promise business-hours coverage. One means an assigned assistant is scheduled for eight hours in Philippine time; another means a shared team can acknowledge eligible requests during the buyer's local day. Neither phrase alone establishes productive overlap, resolution capacity, or absence coverage.",
        "evidence": "Normalize each offer into the buyer's configured time zone. Separate scheduled presence, monitored queue time, response target, resolution target, and guaranteed overlap. Ask how breaks, Philippine and client-country holidays, planned leave, outages, and urgent requests are handled, then test the answer with a dated weekly scenario.",
        "limits": "Schedules do not prove capacity or response quality. A broad window may rely on multiple handoffs, and a narrow overlap may be sufficient for stable asynchronous work. Seasonal volume and daylight-saving changes can invalidate a sample week, so the buyer should retain the assumptions behind the comparison.",
        "finding": "Coverage becomes decision-grade only after clock, time zone, eligible work, response meaning, absence rule, backup owner, and exceptions are expressed on the same timeline.",
        "image": "/blog/images/virtual-assistant-coverage-hours-planning.webp",
    },
    {
        "slug": "virtual-assistant-onboarding-responsibility-study",
        "title": "Which Onboarding Responsibilities Stay With a Virtual Assistant Buyer?",
        "excerpt": "A responsibility map for separating provider onboarding support from the decisions, access, training, and acceptance work a buyer retains.",
        "focus": "virtual assistant onboarding responsibility",
        "question": "which onboarding activities remain with a buyer when a Filipino virtual assistant provider promises a supported or managed launch",
        "decision": "whether the buyer has the owner time, system knowledge, approvals, and evidence needed to launch the role safely",
        "unit": "one onboarding deliverable mapped to preparer, approver, due date, required input, access boundary, acceptance test, and fallback owner",
        "scenario": "A provider promises onboarding in one week. It can introduce the assistant and supply a generic plan, but only the buyer can approve mailbox permissions, explain customer-specific escalation rules, provide safe examples, and decide whether a trial output is acceptable. The advertised timeline hides those dependencies.",
        "evidence": "Create a responsibility matrix before accepting a start date. Include task scope, procedure drafting, sample selection, account creation, least-privilege approval, training delivery, knowledge check, trial review, correction ownership, go-live approval, and early performance review. Mark every dependency that requires a buyer decision rather than provider administration.",
        "limits": "A responsibility matrix is a planning artifact, not evidence of competence. New information may emerge during training, and a fast launch can be safe for low-risk mature tasks while being unrealistic for ambiguous customer or financial work. Buyers should not convert a target date into an assurance of readiness.",
        "finding": "Onboarding claims are useful when they expose buyer-owned inputs and approval gates; without that map, speed is mostly a statement about calendar time rather than operational readiness.",
        "image": "/blog/images/virtual-assistant-remote-onboarding-controls.webp",
    },
    {
        "slug": "virtual-assistant-service-quote-scope-study",
        "title": "How Can Buyers Normalize Scope Across Virtual Assistant Service Quotes?",
        "excerpt": "A comparison method for translating quotes into the same units of work, ownership, exclusions, review, and change control.",
        "focus": "virtual assistant service-quote scope",
        "question": "how a buyer can compare virtual assistant service quotes when hours, included management, task boundaries, and extra charges use different definitions",
        "decision": "which quote represents the clearest operating fit after retained buyer work, exclusions, variability, and recovery costs are made visible",
        "unit": "one quoted work unit mapped to eligible task, volume assumption, service time, management input, quality check, exclusion, overage rule, and acceptance evidence",
        "scenario": "One quote bundles an assistant, account manager, and replacement process into a monthly fee. Another lists lower assistant hours but leaves training, quality review, backup coverage, and rematching undefined. Comparing the headline fee or nominal hours would treat different operating systems as the same product.",
        "evidence": "Build a normalization sheet with the same role scenario for every provider. Record what starts and stops billable time, whether training and rework count, the volume assumption, included tools, minimum term, management activities, absence coverage, replacement conditions, overage method, cancellation obligations, and evidence used to accept work.",
        "limits": "A normalized sheet cannot eliminate forecast error or expose every delivery difference. Some valuable support is difficult to price as a unit, and a lower-volume role may not use bundled capacity. Contract and tax questions depend on the parties and jurisdictions and require qualified review beyond this operational comparison.",
        "finding": "The comparable object is not the quoted hour; it is the complete unit of accepted work plus the buyer effort, provider support, exceptions, and recovery path required to produce it.",
        "image": "/blog/images/virtual-assistant-vendor-comparison-checklist.webp",
    },
    {
        "slug": "virtual-assistant-service-offboarding-evidence-study",
        "title": "What Should a Virtual Assistant Service Offboarding Plan Prove?",
        "excerpt": "A buyer checklist for access closure, record return, knowledge continuity, pending-work reconciliation, and deletion evidence.",
        "focus": "virtual assistant service offboarding evidence",
        "question": "what a buyer should verify before ending or changing a Filipino virtual assistant service relationship",
        "decision": "whether the exit process can protect accounts, preserve required business records, reconcile open work, and transfer usable knowledge without relying on one departing person",
        "unit": "one offboarding obligation mapped to trigger, responsible party, system or record, due time, acceptance evidence, exception path, and final approver",
        "scenario": "An assistant has mailbox, CRM, shared-drive, and scheduling access when the engagement ends. The provider says it will complete offboarding but does not define session revocation, ownership transfer, open-ticket reconciliation, return or deletion evidence, or who validates the procedure after the assistant leaves.",
        "evidence": "Inventory identities, groups, API tokens, delegated mailboxes, files, automations, device sessions, open tasks, recurring commitments, and knowledge artifacts. Assign closure and verification separately where practical. Require a final exception list, access evidence, record-transfer receipt, and accountable buyer sign-off rather than treating a farewell message as completion.",
        "limits": "A checklist cannot discover access that was never inventoried, and screenshots or attestations provide only bounded evidence. Legal retention, deletion, employment, and privacy duties vary. The buyer should involve its security, privacy, records, and legal owners where the data or relationship warrants it.",
        "finding": "Offboarding is complete only when access, records, unfinished work, recurring obligations, and operational knowledge have each reached a verified disposition with a named owner.",
        "image": "/blog/images/virtual-assistant-access-removal-checklist.webp",
    },
]

body = namespace["body"]
entries = []
for topic in TOPICS:
    path = ROOT / "content" / "research" / f'{topic["slug"]}.mdx'
    if path.exists():
        raise SystemExit(f"refusing to overwrite {path}")
    text = body(topic)
    path.write_text(text, encoding="utf-8")
    entries.append({
        "family": "research", "topic": topic["title"], "slug": topic["slug"],
        "sourcePaths": [str(path.relative_to(ROOT))],
        "sourceTitles": [s[0] for s in namespace["SOURCES"]],
        "sourcePublishers": [s[1] for s in namespace["SOURCES"]],
        "sources": [s[2] for s in namespace["SOURCES"]],
        "checkedDate": namespace["DATE"], "publishedAt": namespace["DATE"],
        "liveUrl": f'https://bestvirtualassistantservices.com/research/{topic["slug"]}',
        "status": "pending-live-verification",
    })

manifest_path = ROOT / ".paperclip" / "daily-content" / namespace["DATE"] / "research.json"
manifest_path.parent.mkdir(parents=True, exist_ok=True)
manifest_path.write_text(json.dumps({
    "runDate": namespace["DATE"], "family": "research", "requiredCount": 5, "verifiedCount": 0,
    "repository": "coolifystealthagents/bestvirtualassistantservices", "productionBranch": "main",
    "entries": entries,
}, indent=2) + "\n", encoding="utf-8")
print("created exactly 5 net-new research articles and pending verification manifest")
