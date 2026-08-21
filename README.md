# Dublin Restoration

Marketing site for Dublin Restoration (brick, damp, roofing, cleaning) — Next.js App Router, React, Feature-Sliced Design.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quote requests

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql).
2. Copy `.env.example` to `.env.local` and fill:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- optional `RESEND_API_KEY` for email alerts

3. Open `/admin/leads` to review requests.

Without Supabase keys the form still works visually and asks the visitor to call.

## Structure

```
src/app        Next.js routes
src/views      FSD pages
src/widgets    Header, hero, quote form, …
src/features   send-lead, mobile-nav, gallery-filter, …
src/entities   service, lead
src/shared     config, ui, styles, supabase
```
