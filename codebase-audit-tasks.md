# Codebase Audit: Proposed Fix Tasks

## 1) Typo Fix Task
**Task:** Correct the garbled em-dash in the Vite config comment (`Do not modifyâfile watching...`) to proper UTF-8 text (`Do not modify—file watching...`).

**Why this matters:** The current text appears to have an encoding typo (mojibake), which makes comments harder to read and can confuse contributors.

**Acceptance criteria:**
- Comment text is valid UTF-8 and displays a normal em-dash.
- No functional config behavior changes.

---

## 2) Bug Fix Task
**Task:** Replace placeholder social links (`href="#"`) in the hero/footer with real profile URLs or remove link wrappers until URLs are available.

**Why this matters:** `#` links are a UX/accessibility bug: they navigate to top-of-page and present non-functional controls as actionable links.

**Acceptance criteria:**
- No anchor in production points to `#` unless it intentionally targets a valid in-page section.
- External links include proper `target`/`rel` values where needed.
- Keyboard/screen-reader behavior is preserved.

---

## 3) Code Comment/Documentation Discrepancy Task
**Task:** Reconcile setup docs with the actual app behavior by updating README environment-variable instructions (or code) to match reality.

**Why this matters:** README currently requires `GEMINI_API_KEY`, but this portfolio app has no Gemini usage in `src/` and can run without it. This creates onboarding friction and misleading setup steps.

**Acceptance criteria:**
- README prerequisites only mention required env vars.
- If AI features are planned but not implemented, mark them explicitly as optional/future.
- Local run instructions are validated end-to-end.

---

## 4) Test Improvement Task
**Task:** Add a minimal test suite (e.g., Vitest + React Testing Library) covering:
1. Rendering of main sections (hero, skills, portfolio).
2. Presence of accessible link targets for social/CTA links.
3. Typing-effect behavior in `Terminal` (at least progression from empty to partial text using fake timers).

**Why this matters:** There are currently no tests; regressions in rendering and interactive behavior are likely to go unnoticed.

**Acceptance criteria:**
- `npm test` runs in CI/local.
- At least 3 focused tests for critical UI behavior.
- Tests avoid brittle snapshot-only assertions.
