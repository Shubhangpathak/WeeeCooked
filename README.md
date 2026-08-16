# WeeeCooked

WeeeCooked is a social DSA study tracker: structured lessons, XP, streaks, a small shared leaderboard, private notes, and project showcases.

## Local setup

1. Copy .env.example to .env.local.
2. In Supabase, create a project and copy its Project URL and publishable key into .env.local.
3. Run supabase/migrations/0001_weeecooked.sql in the Supabase SQL editor.
4. In Supabase Authentication:
   - Enable Email / Magic Link.
   - Set the Site URL to your local development address.
   - Add the local address and eventual Vercel domain to Redirect URLs.
   - Set Email OTP Expiration to 86400 seconds for 24-hour one-time links.
5. Install dependencies and start the app with pnpm dev.

Without Supabase values, the landing page offers a fully interactive demo crew so the design and lesson flow can be reviewed locally.

## Vercel later

- Import this directory into Vercel after uploading it to your own GitHub repository.
- Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in Vercel environment settings.
- Update Supabase Site URL and Redirect URLs to include the production Vercel domain.
- The included vercel.json handles SPA routes such as dashboard and individual lessons.

Do not add any secret or service role key to the frontend or to .env.example.

## Product choices

- Magic-link signup is open; passwords are never stored by this app.
- Actual names and lesson notes are private.
- Public names, XP, rank, roadmap completion, badges, and projects are visible to signed-in members.
- XP is 10 points per completed objective plus a 25-point bonus for a fully completed lesson.
