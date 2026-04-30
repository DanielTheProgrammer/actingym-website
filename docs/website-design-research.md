# ActinGym Website Design Research

Date: April 29, 2026

## Goal

Design the first public website mock for `actingym.com`, the website for ActinGym: an iOS-first AI acting coach for self-tape auditions.

The website should make the app feel specific, trustworthy, and emotionally tuned to actors. It should not look like a generic AI SaaS landing page.

## Codex Design Workflow Findings

OpenAI's Codex guidance points to a workflow where the agent is treated like a working teammate: give it durable project context, let it inspect the repo, ask for implementation plus verification, and iterate visually. The most useful pattern for a website mock is:

1. Gather product truth from the repo before designing.
2. Write a visual thesis and content thesis.
3. Build in code, not just describe the mock.
4. Run the site locally and verify desktop/mobile behavior.
5. Save durable notes so the next pass starts smarter.

Sources:

- [OpenAI Codex best practices](https://developers.openai.com/codex/learn/best-practices)
- [Build responsive front-end designs](https://developers.openai.com/codex/use-cases/frontend-designs)
- [Designing delightful frontends with GPT-5.4](https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4)

## General Website Design Findings

The strongest sources all converge on the same idea: beautiful interfaces are usually clear before they are decorative. Hierarchy, grouping, contrast, typography, rhythm, and specific imagery carry the page.

Applied design rules:

- Make the first viewport communicate the brand and literal product offer.
- Use one dominant idea per section.
- Let typography and spacing create hierarchy before adding shadows.
- Use actual product imagery or product-like UI, not abstract AI decoration.
- Keep copy scannable because users read web pages in fragments.
- Make contrast, focus states, target sizes, and mobile reflow part of the design from the start.

Sources:

- [NN/g: Aesthetic-usability effect](https://www.nngroup.com/articles/aesthetic-usability-effect/)
- [NN/g: How users read on the web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
- [Material Design accessibility](https://m1.material.io/usability/accessibility.html)
- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [Baymard UX design principles](https://baymard.com/learn/ux-design-principles)

## ActinGym Product Context

Repo reviewed: `/Users/daniel/GIT_WS/ai-acting-analysis`

Key product truths:

- Product name is **ActinGym** in app config and production notes. Domain is `actingym.com`.
- One-line promise: "Upload your self-tape. Get director-level feedback in 2 minutes."
- Core loop: record or upload video, analyze, receive a score card and director's review, then train with prescribed exercises.
- Audience: professional, student, and aspiring actors making self-tapes.
- Brand voice: director beside you, not motivational app. Feedback must be actable and behavior-specific.
- Visual language: warm paper, notebook/editorial surfaces, index cards, self-tape gear, red recording light, green progress signal.

Important app sources:

- `PRODUCT_SPEC.md`
- `CURRENT_STATE.md`
- `docs/design-brief-home-page.md`
- `docs/design-brief-stats-page.md`
- `theme/tokens.ts`

## Website Visual Thesis

**A working actor's rehearsal desk meets a premium app product page.**

The page should feel like the same universe as the app: warm paper, black gear, precise director notes, small human marks, and a clear app promise. It should show the product result early: a self-tape becomes timestamped, director-level notes.

## Content Thesis

The website sells clarity, not magic.

Recommended section order:

1. Hero: ActinGym, product promise, early access CTA, app-result mock.
2. Proof of pain: actors submit tapes and rarely get usable feedback.
3. Product sample: score, dimensions, timestamped notes, next-take direction.
4. Method: upload, review, train.
5. Training loop: Acting Class and progress tracking.
6. CTA: iOS early access.

## Design Decisions For This Mock

- Use the existing splash image as an immersive hero background.
- Use a CSS phone mock to show a realistic app result without requiring fresh screenshots.
- Use the app fonts and colors from the mobile repo.
- Keep the palette mixed: paper, ink, green, red, gold, blue-gray, and cork notes.
- Avoid celebrity images from `assets/landing-clips` for the public mock because they raise rights and endorsement questions.
- Use `mailto:hello@actingym.com` as a placeholder CTA until mail is fully configured.
