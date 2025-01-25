import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        workspace: [
            "backend/",
            "frontend/",
            "shared/*"
        ],
    },
});
