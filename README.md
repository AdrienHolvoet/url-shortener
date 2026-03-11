# URL Shortener 

## Setup

### 1) Prerequisites

- Node.js (Minimum required version: ^20.19.0, ^22.12.0, or ^24.0.0)
- pnpm

### 2) Install dependencies

```bash
pnpm install
```

###  3) Configure `.env` files

Create `packages/backend/.env`:

```env
PORT=8000
FRONTEND_URL=http://localhost:5173
BASE_URL=http://localhost:8000
DATABASE_URL=file:./database.db
```

Create `packages/frontend/.env`:

```env
VITE_API_URL=http://localhost:8000
```

### 4) Initialize the database

```bash
pnpm --filter @url-shortener/backend db:migrate
```

### 5) Run the project

```bash
pnpm dev
```

## Main technical choices

- **Monorepo (pnpm workspaces)**: single source of truth for shared types.
- **Express backend**: minimal and easy to setup for small projects.
- **Mantine**: fast with ready-to-use components, zero config.
- **React Query + Axios**: provides many built-in features that make http request handling easier.
- **Rate limiting**: basic abuse protection.
- **SQLite**: simple and easy to setup for local-first projects.
- **nanoid**: safer than Math.random(),  unpredictable slugs.
- **302 redirects instead of 301**: avoids permanent browser caching and keeps click tracking accurate on repeated visits.










