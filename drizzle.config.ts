import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./src/db/migrations",
    schema: "./src/db/schema.ts",
    dialect: "mysql",
    dbCredentials: {
        url: "mysql://root:root@localhost:3306/plnr",
    },
    verbose: true,
    strict: true,
});
