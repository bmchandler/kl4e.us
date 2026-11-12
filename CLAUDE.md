# kl4e.us

Personal amateur radio website, hosted on GitHub Pages and deployed
with GitHub Actions. Being overhauled: the earlier site's source is
kept for reference only.

`design/` is a historical design-seed mockup: reference only, never
edit it. The live site is built from `templates/` and `content/`.

## Working norms (portable)

Norms the user has settled across projects, not specific to this one.
When starting a new project, or asked to bring over the working norms
from an earlier one, copy this whole section into its CLAUDE.md as
is. They live in each project's CLAUDE.md, not in `~/.claude/CLAUDE.md`:
that file is intentionally not being used "due to administrative
overhead." For example, `~/.claude` isn't git-synced, so a VM rebuild
would lose it. Norms live in CLAUDE.md only; don't keep a memory copy
of one: a second copy drifts, and can mask a problem in this file.

### Working style

- Hands-off by default: once the approach is clear, Claude takes a
  step all the way to the end (code, tests, docs, a staged diff with a
  drafted message), then still pauses before committing. The user
  designs (wording, layout, where things live, flow) from concrete
  options, previews, and trade-offs Claude offers, rather than Claude
  deciding design questions for them. Hands-off doesn't mean assume:
  ask early, before building much, whenever unsure about anything.
- When handing over a step, anything to do before running the app
  (deleting a database after a schema change, say) goes first in the
  summary, as a command: the user often starts the app before
  reading the rest, and would otherwise meet an error first.
- Screenshots in the chat are full size or close to it (a 0.6
  scale reads fine; 0.2 is too small to see when opened): the user
  reads them. To find where to click, use `find`/`read_page` rather
  than a tiny screenshot.

### Commits and pushes

- Never `git commit` without the user's explicit go-ahead for that
  commit. First: stage what makes sense, write the full drafted
  message (subject, body, trailer) in a code block in the chat itself
  (the app's next-step box shows only a short recap), and pause so the
  user can review the diff and message and hand-test the app. The
  go-ahead can be any natural phrasing ("Proceed", "Go ahead and
  commit").
- These are not a go-ahead: a plan or answer that mentions committing
  ("then stage and commit 1"), approval of an earlier commit, or
  approval given before the work was re-cut or changed. When in
  doubt, show the message and ask.
- Never `git push` unless the user asks for that push. A go-ahead to
  commit is not one to push.
- Exceptions only when the user names them, case by case; one never
  carries over to later commits or pushes.
- Iterate a step until it's fully baked, then commit it: reworking
  staged work before then (re-cutting it, removing fields) is normal.
  A bug caught after a commit gets a standard bugfix commit, never an
  amend. Committing a mistake as it was and its fix separately is an
  edge case, for a complex situation where holding the commit seems
  risky: raise it, don't assume it.
- Commit messages: short subject line, a body with details when useful,
  then the Co-Authored-By trailer. The first commit in a repo is always
  `Initial Commit`.
- Push targets: the private gitserver (`origin`) by default. A public
  mirror (GitHub) only when what's going out is probably safe to
  publish (it can't be taken back): if unsure, push to the gitserver
  only and vet the public push with the user first.
- Branches, in uv projects unless noted otherwise: work and commit on
  `dev`, never on `main`; `main` only ever points at the newest
  release's tag, moved only by the release step. A plain install
  then gets the newest release, a good pattern for users.

### Steps

- Build in small "horizontal" steps: only what the current request
  needs, and whatever a step adds comes with what uses it, so the
  user can try it by hand end to end (a setting with the behavior it
  changes; a field with where it shows). Several simple fields can
  share a step; an involved one gets its own, with its dependents.
  No extra behavior bundled unannounced: its own commit, or ask.
  Describe planned steps by what the user can try after each.
- Don't scaffold ahead or add functions before a step uses them. The
  exception, raised and agreed first: groundwork for something
  certain to come that's cheap now and costly to change later (say, a
  table shaped for several of something before more than one can be
  added). When less sure, pay the redo cost in the step that needs
  it: the feature may be dropped before then.
- REQUIREMENTS.md is the source of truth for scope and rules, updated
  in the same change whenever a rule changes; its "Status and plan"
  section says what's built and what's next, updated when a planned
  item lands.
- No repo polish (linters, pre-commit, CI) unless the user asks.

### Tests

- Add or update tests alongside each change: a unit test for a rule
  and an app-level test proving it's wired in, even where they check
  the same thing (a rule dropped from the app's wiring passes every
  unit test). Never propose cutting coverage for speed; run the full
  suite by default.
- Hand-test data only when the user asks, a few records that show off
  the whole feature. Text in it saying how a record came about is
  marked when that didn't literally happen (`Simulated hand-added`),
  so it can't be taken for the real thing.

### Questions and answers

- When a request is ambiguous (about UI behavior or anything else),
  ask instead of guessing.
- "Can we ...?" / "Could we ...?" is a literal question, not a go-ahead
  to edit. Answer it (doable out of the box with the framework? the
  trade-offs? would it override stock behavior?), then wait for a clear
  instruction. Avoid overriding framework defaults unless the user
  decides to.
- Keep questions tightly targeted at the current work. A question
  that doesn't have to be settled now goes in REQUIREMENTS.md (or the
  like), to settle when that part gets built, unless it heavily should
  be nailed down now. UI/UX targets whoever the app is for at this
  stage: a question about a later audience waits for that part.
- A rule, preference, or fix applies only within the scope of the
  work at hand — a section, a page type, a card type, and the like,
  usually just what we're currently editing — never site-wide by
  default. Global application is rare and wants an explicit
  call-out; when a rule could reach past the current scope, keep it
  scoped and ask before sweeping it wider.
- When reporting a change, call out as "Code Point: " any code
  trade-off or design choice with real impact that may cost us later,
  and any trap met, briefly and on its own so it stands out when
  skimming. Skip it when there's none. The general rule: pay a cost
  at implementation rather than let it compound down the road, so
  raise these while they're still cheap to change.
- Items the user should look over on hand-off (wording drafted for
  them, interpretations made, small choices) go under a "Things for
  review" heading, not "things to flag": they are for the user to
  review, not actions required of them. Distinct from "Code Point:",
  which is for code trade-offs.

### Wording and docs

- On-screen wording the user dictates is used word for word (moving
  line breaks to fit is fine). For a case it doesn't cover, write
  wording that fits, showing it when it's part of a design question.
  Don't ask for sign-off on new wording or list it as open: no comment
  means the user is rolling with it. They'll ask for a change after
  some use, or for a list of the messages in a polish phase, to size
  them up for cohesiveness at one go. Wording changed from what was
  already on screen is different: say so when handing over, old and
  new. Keep set phrases the same across related cases: consistent
  beats precise-but-varying.
- In docs, a reference to a section or file is a link to it:
  `[Your data](#your-data)`, `[DEVELOPMENT.md](DEVELOPMENT.md)`. Not
  needed for a file already linked earlier in the same paragraph.
- What a third party does is stated as fact only from its own
  documentation; otherwise worded as uncertain ("appears to", "it's
  likely"), with the evidence where known. Never the word "hedge".
- Public docs (README) are terse and matter-of-fact, never name a
  third party as a bug's cause, and are for users only: developer
  material goes in developer docs, which the README doesn't mention.
- No email addresses in anything published: code, docs, package
  metadata, request headers. Contact is the repo's issues; a client
  identifies itself by the repo URL.

### Files

- In Accept Edits mode (the user's usual one), make file changes with
  the Edit/Write tools, not inline scripts (`python3 - <<'EOF'`,
  `sed -i`), to keep approval dialogs down: edits go through and show
  in Changes, while a script is opaque and asks for approval. Use the
  shell to run things (tests, git, servers).
- Wrap Markdown prose at about 70 columns: the user reads files with
  `cat` in a third of the screen.
