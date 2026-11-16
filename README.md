# Rupali Construction website

Official website for Rupali Construction in Gurugram, built with React, Vite, TypeScript, Tailwind CSS, Hono and tRPC.

- Live website: https://rupaliconstruction.com/
- Canonical repository: https://github.com/Rupaligroups/Rupali-Construction-website
- Production branch: `main`
- Hosting: the existing `rupali-construction` Vercel project

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and configure the required server-side values.
3. Start the development server with `npm run dev`.
4. Validate changes with `npm run check`, `npm test`, and `npm run build`.

## Production configuration

Production deployments use the environment variables saved in Vercel. Never commit passwords, API keys, `.env` files, or database connection secrets.

For Postgres, `DATABASE_URL` supports a full PostgreSQL connection URI. Password-only configuration is also supported when both `SUPABASE_URL` and `SUPABASE_DB_POOLER_HOST` are configured; the server constructs and URL-encodes the transaction-pooler connection.

Image uploads require `SUPABASE_URL`, `SUPABASE_BUCKET_NAME`, and the server-only `SUPABASE_SERVICE_ROLE_KEY`, saved as a Secret in Vercel. Authentication also requires the existing server-side authentication configuration listed in `.env.example`.

## Public content recovery

The `recovery/` directory documents reconstruction of public project records, articles, and recoverable image files for the replacement Supabase project. It is not a backup of historical users, enquiries, leads, or chats. Some recovered residential images still require project identification.

## Deployment

Vercel is connected to this repository. Changes to `main` are intended for production; verify the resulting deployment and live API responses before considering a release complete. The existing custom domain remains attached to the same Vercel project.
