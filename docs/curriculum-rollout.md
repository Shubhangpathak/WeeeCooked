# Flexible curriculum rollout

1. Back up the database using the normal Supabase backup process.
2. Apply `supabase/migrations/0002_flexible_curriculum.sql` before deploying the new client. For a fresh project, apply 0001 and then 0002.
3. Deploy the client after type checking, the curriculum regression checks, and the production build.
4. Smoke-test with a returning account: original progress, an archived lesson route, three-field legacy notes, saving a new lesson ID, and saving a combined note longer than 1,000 characters.

The migration changes validation constraints only. It does not rewrite IDs or delete data, and existing row-level security remains in force. The single note editor allows 4,000 characters so three old fields plus their labels fit without truncation. Saving combines the text in `takeaway` and clears the two now-unused fields only after the save succeeds.

Historic completion contributes to XP and original milestone eligibility. Core completion excludes archived/optional lessons. No progress is copied to newly authored lessons.

The migration is included in this change but has not been applied to a hosted database. Hosted persistence and SQL execution need the deployment smoke test above; the local demo validates the client flow only.

Rollback: redeploy the previous client if needed. Leave the expanded constraints in place so new notes and progress remain readable; do not shrink note capacity or delete the new IDs as part of rollback.

## Local verification — 2026-09-29

- TypeScript checks and production build passed. Vite reports a large-bundle warning (780 kB before gzip).
- Curriculum regression checks passed for 88 active lessons, 32 archived routes, all 72 original IDs, prerequisite ordering, historical XP/badges, and core-only completion.
- Desktop layout checked at 1280 and 1440 CSS pixels with no horizontal document overflow. Resources remain beside the main study steps.
- Keyboard navigation verified through the roadmap, lesson, notes sidebar, and return link. A demo note saved successfully and appeared with its lesson title.
- Solution explanation remained disabled before an attempt, then revealed after the attempt checkbox and explicit reveal action. Lesson objectives remained incomplete.
- Browser console had no warnings or errors during these checks. Preview: `study-path-desktop.png`.
- These checks used demo data. They do not establish live database migration or persistence success.
