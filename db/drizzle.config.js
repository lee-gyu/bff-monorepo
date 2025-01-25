import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({
    path: ["./.env", "./.env.local"],
    override: true,
});

const {
    PG_HOST: host,
    PG_USER: user,
    PG_PASSWORD: pwd,
    PG_DB: db,
    PG_PORT: port,
} = process.env;

export default defineConfig({
    dialect: "postgresql",
    schema: "./db/schema.ts",
    dbCredentials: {
        url: `postgresql://${user}:${pwd}@${host}:${port}/${db}`,
    },
    out: "./drizzle-pg",
});
