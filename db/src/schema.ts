import {
    pgTable,
    serial,
    timestamp,
    varchar,
    bigserial,
} from "drizzle-orm/pg-core";

export const users = pgTable(
    "users",
    {
        id: serial().primaryKey(),
        name: varchar({ length: 64 }).notNull(),
        email: varchar({ length: 128 }).notNull(),
        /**
         * YYYY-MM-DD
         */
        birthdate: varchar({ length: 10 }).notNull(),
        createdAt: timestamp().notNull().defaultNow(),
    },
    (table) => []
);
