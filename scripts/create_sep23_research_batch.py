#!/usr/bin/env python3
from pathlib import Path
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-23"

base_source = (ROOT / "scripts" / "create_sep18_research_batch.py").read_text(encoding="utf-8")
namespace = {"__file__": str(ROOT / "scripts" / "create_sep18_research_batch.py")}
exec(base_source.split("\nentries = []", 1)[0], namespace)
namespace["DATE"] = DATE

TOPICS = [
    {
        "slug": "virtual-assistant-provider-reference-call-evidence-study",
        "title": "What Can a Provider Reference Call Actually Prove About a Virtual Assistant Service?",
        "excerpt": "A buyer method for testing reference relevance, selection bias, operating detail, and claims that still require direct evidence.",
        "focus": "virtual assistant provider reference-call evidence",
        "question": "how a buyer can use a provider-supplied client reference without treating one favorable conversation as proof of general service quality",
        "decision": "whether the reference adds role-matched evidence to the shortlist and which material claims remain unverified",
        "unit": "one reference statement mapped to the speaker's direct observation, service period, role similarity, operating condition, evidence type, and stated limitation",
        "scenario": "A provider introduces a long-standing client who praises responsiveness. The proposed role, however, involves regulated customer records and daily exception handling, while the reference used the service for calendar support. The positive experience is genuine evidence about that relationship, but it does not establish controls or performance for the proposed work.",
        "evidence": "Send the same short question set to every consenting reference. Ask what work was delegated, what the buyer retained, how errors and absences were handled, what changed after launch, and which records supported the answer. Record the period observed and whether the provider selected the reference. Seek contract, workflow, pilot, and security evidence separately.",
        "limits": "References are usually selected because they are satisfied and available. Memory can compress a long engagement, confidentiality limits detail, and a successful low-risk role may not transfer to a different workflow. Silence about a problem is not proof that the problem never occurred.",
        "finding": "A reference call is strongest as a source of bounded observations and follow-up questions, not as a transferable guarantee or substitute for role-matched testing.",
        "image": "/blog/images/virtual-assistant-vendor-comparison-checklist.webp",
    },
    {
        "slug": "virtual-assistant-first-month-cost-evidence-study",
        "title": "How Should Buyers Estimate the First-Month Cost of a Virtual Assistant Service?",
        "excerpt": "A comparison framework that includes setup, tools, buyer time, review, rework, and capacity assumptions beside the quoted fee.",
        "focus": "virtual assistant first-month cost evidence",
        "question": "how a buyer can estimate first-month virtual assistant service cost when proposals define hours, onboarding, tools, management, and rework differently",
        "decision": "which offer has a supportable first-month resource requirement under the buyer's own task and review assumptions",
        "unit": "one cost component mapped to quantity, rate or fixed fee, payer, trigger, inclusion rule, uncertainty range, and supporting proposal term",
        "scenario": "One proposal includes account management but excludes software seats and training time. Another includes tools while the buyer writes procedures, reviews every output, and pays for rework within purchased hours. The monthly fees cannot be compared until those retained inputs use the same definitions.",
        "evidence": "Create a low, expected, and high case. Separate provider fees, setup charges, required seats, payment costs, buyer onboarding time, manager review, rework, coverage, and exit obligations. Tie every number to a proposal term or explicit assumption and show unknown items instead of assigning a false zero.",
        "limits": "A first-month model is not a lifetime cost forecast. Learning curves, task volatility, hidden dependencies, exchange rates, tax treatment, and buyer opportunity cost can change the result. Estimated internal time is especially sensitive to who performs the review and how mature the procedure is.",
        "finding": "The decision-grade comparison is a range for the complete first-month operating system, with quoted charges and buyer-retained work shown separately.",
        "image": "/blog/images/virtual-assistant-vendor-invoice-checklist.webp",
    },
    {
        "slug": "virtual-assistant-account-manager-authority-study",
        "title": "What Authority Should a Virtual Assistant Account Manager Have?",
        "excerpt": "A buyer framework for separating coordination, supervision, access, commercial decisions, and exceptions in a managed service.",
        "focus": "virtual assistant account-manager authority",
        "question": "what a buyer should clarify when a managed virtual assistant proposal includes an account manager",
        "decision": "whether the account manager's actual authority can resolve routine delivery issues without bypassing buyer approvals or security boundaries",
        "unit": "one account-manager decision mapped to trigger, permitted action, prohibited action, consultation rule, response clock, evidence retained, and escalation owner",
        "scenario": "A buyer assumes the account manager can correct recurring inbox errors and arrange temporary coverage. The provider treats the role as a relationship contact who cannot change training, workload, access, or staffing without another approval. Both parties use the same title for different authority.",
        "evidence": "Build a decision-rights table covering work assignment, coaching, quality review, schedule change, temporary coverage, access request, incident response, scope change, fee change, and replacement. Ask the provider to walk through one routine issue and one urgent exception, naming each handoff and record.",
        "limits": "Written authority does not prove availability, judgment, or consistent execution. A broad mandate can speed routine coordination while increasing the risk of unreviewed access or scope changes. Provider organization charts and staffing can also change after the proposal is signed.",
        "finding": "An account manager adds operational value only when the buyer can see which decisions the role owns, which require consultation, and where authority stops.",
        "image": "/blog/images/virtual-assistant-customer-success-handoffs.webp",
    },
    {
        "slug": "virtual-assistant-device-credential-responsibility-study",
        "title": "Who Should Own Devices and Credentials in a Virtual Assistant Engagement?",
        "excerpt": "A workflow-level comparison of buyer-managed, provider-managed, and assistant-managed access without assuming one model fits every role.",
        "focus": "virtual assistant device and credential responsibility",
        "question": "how buyers can compare device and credential responsibility across Filipino virtual assistant service models",
        "decision": "which allocation of device, identity, authentication, monitoring, support, and offboarding responsibilities fits the systems and data in the proposed role",
        "unit": "one system access path mapped to device owner, identity owner, authentication factor, permission approver, support contact, log source, review cadence, and revocation evidence",
        "scenario": "A provider supplies a managed laptop, while the buyer creates the SaaS identity and approves permissions. Another service expects the assistant to use a personal device and shared team login. The labels managed device and secure access do not reveal who patches, logs, resets, reviews, or revokes each layer.",
        "evidence": "Inventory each system before comparing models. Ask who provisions the device and identity, applies updates, stores recovery codes, responds to a lost device, approves exports, reviews sessions, supports authentication failures, and verifies closure. Test the proposed path with a new starter and urgent departure scenario.",
        "limits": "No ownership model guarantees security. Provider-managed devices may still connect to buyer-controlled identities, buyer devices require remote support, and personal-device arrangements can vary widely. Technical and legal requirements depend on the buyer's systems, data, jurisdictions, and risk owners.",
        "finding": "Device ownership and credential ownership are separate control questions; buyers should assign every layer explicitly and require evidence at onboarding, review, incident, and exit.",
        "image": "/blog/images/virtual-assistant-access-review.webp",
    },
    {
        "slug": "virtual-assistant-launch-readiness-gate-study",
        "title": "What Should a Virtual Assistant Launch-Readiness Gate Check?",
        "excerpt": "A buyer checklist for deciding when a new virtual assistant workflow is ready to move from training into controlled production.",
        "focus": "virtual assistant launch-readiness evidence",
        "question": "what evidence a buyer should review before a newly onboarded virtual assistant begins controlled production work",
        "decision": "whether the task, instructions, access, stop rules, review capacity, and recovery path are ready for a bounded launch",
        "unit": "one launch condition mapped to its owner, evidence, acceptance rule, unresolved exception, compensating control, and final approver",
        "scenario": "An assistant completes tool orientation and several sample tasks, but the escalation contact is unavailable, a shared mailbox permission is broader than intended, and no one has agreed who reviews the first live outputs. A training-complete label would hide launch dependencies that remain open.",
        "evidence": "Use a short gate covering approved scope, current procedure, safe examples, least-privilege access, authentication, knowledge check, ordinary and stop scenarios, reviewer capacity, escalation contact, rollback method, and first-week sampling. Record failed conditions and either delay launch or document a bounded compensating control.",
        "limits": "A gate captures readiness at a point in time and cannot predict every live condition. Passing sample work can favor familiar cases, while a cautious launch can still encounter new ambiguity. The checklist must not become a ceremonial sign-off that ignores unresolved exceptions.",
        "finding": "Training completion and launch readiness are different states; production should begin only when named owners accept the evidence, limits, and recovery plan for a bounded scope.",
        "image": "/blog/images/virtual-assistant-remote-onboarding-controls.webp",
    },
]

entries = []
for topic in TOPICS:
    path = ROOT / "content" / "research" / f'{topic["slug"]}.mdx'
    if path.exists():
        raise SystemExit(f"refusing to overwrite {path}")
    text = namespace["body"](topic).replace("September 18, 2026", "September 23, 2026")
    path.write_text(text, encoding="utf-8")
    entries.append({
        "family": "research", "topic": topic["title"], "slug": topic["slug"],
        "sourcePaths": [str(path.relative_to(ROOT))],
        "sourceTitles": [s[0] for s in namespace["SOURCES"]],
        "sourcePublishers": [s[1] for s in namespace["SOURCES"]],
        "sources": [s[2] for s in namespace["SOURCES"]],
        "checkedDate": DATE, "publishedAt": DATE,
        "contentHash": hashlib.sha256(text.encode()).hexdigest(),
        "liveUrl": f'https://bestvirtualassistantservices.com/research/{topic["slug"]}',
        "commitSha": None, "deploymentEvidence": None, "verificationTime": None,
        "status": "pending-live-verification",
    })

manifest_path = ROOT / ".paperclip" / "daily-content" / DATE / "research.json"
manifest_path.parent.mkdir(parents=True, exist_ok=True)
manifest_path.write_text(json.dumps({
    "runDate": DATE, "family": "research", "requiredCount": 5, "verifiedCount": 0,
    "repository": "coolifystealthagents/bestvirtualassistantservices", "productionBranch": "main",
    "entries": entries,
}, indent=2) + "\n", encoding="utf-8")
print("created exactly 5 net-new research articles and pending verification manifest")
