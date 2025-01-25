# Backend for Frontend Monorepo

Clean App Architecture for a Backend for Frontend Monorepo.\
This project is from my own experience and learning.\
This may not be the right right way, but I would like to help anyone who is looking for a fullstack app.

Thanks, if you need some help, contact me <leegyu4dev@gmail.com>

## Requirements

- docker (tested with 27.4.0)
- Node.js (tested with 22.12.0)

## Tech Stack

- Frontend: Next.js
    - React 19
    - Using App Router
    - tailwindcss (v4)
- Backend: Nest.js
    - Fastify
- Lang: Typescript
- Monorepo: turbo
- Pkg Manager: pnpm
- Database:
    - Postgres
    - Drizzle ORM
- Testing:
    - Vitest
    - Playwright
- Tools
    - DB Client: pgadmin4 (docker compose)
    - Linter: ESLint
    - Formatter: Biome

## Ref.

- How to set my docker compose env file
    - https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/
    - Example to init docker compose

        ```bash
        docker compose --env-file .env.prod up -d
        ```
    