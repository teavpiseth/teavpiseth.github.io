import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import { academyPath, coursePath, courses } from "./src/course/courses.ts";

function staticCoursePages(): Plugin {
  return {
    name: "static-course-pages",
    apply: "build",
    async writeBundle({ dir }) {
      if (!dir) return;

      const index = join(dir, "index.html");
      const paths = [academyPath, ...courses.map(({ id }) => coursePath(id))];

      // GitHub Pages serves directory index files directly on page loads.
      await Promise.all(paths.map(async (path) => {
        const page = join(dir, path.slice(1));
        await mkdir(page, { recursive: true });
        await copyFile(index, join(page, "index.html"));
      }));
      await copyFile(index, join(dir, "404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), staticCoursePages()],
  base: "/",
});
