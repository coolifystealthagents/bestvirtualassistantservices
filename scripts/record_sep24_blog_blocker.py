#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / ".paperclip/daily-content/2026-09-24/blog.json"
data = json.loads(path.read_text(encoding="utf-8"))
content_commit = "f718c661f0daea3532e81f466b219d44d718af95"
remote_sha = "263ec72da598fbf0d3df1ad8c92a1308fbbb2c16"
checked_at = "2026-09-24T14:14:01Z"
evidence = (
    "Production deployment unavailable: content commit is an ancestor of remote main, but all new "
    "routes returned HTTP 404 through the bounded transition window. Coolify3 API authentication "
    "returned HTTP 401 and the configured internal endpoint timed out. Recovery owner: site "
    "infrastructure administrator; restore this application's Coolify API access or trigger and "
    "confirm deployment of remote main, then rerun all live verification checks."
)
data["verified"] = 0
data["commitSha"] = content_commit
data["remoteSha"] = remote_sha
data["deploymentId"] = "unavailable-authentication-failed"
data["verificationTime"] = checked_at
data["blocker"] = evidence
for entry in data["entries"]:
    entry["commitSha"] = content_commit
    entry["deploymentEvidence"] = evidence
    entry["verificationTime"] = checked_at
    entry["status"] = "pushed-not-live-http-404"
path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
print("recorded September 24 Blog deployment blocker; verified 0/12")
