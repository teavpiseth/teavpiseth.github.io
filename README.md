# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- `@vitejs/plugin-react` uses [Oxc](https://oxc.rs)
- `@vitejs/plugin-react-swc` uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

## Editing course content

Each course has a JSON file in [src/course/data](src/course/data). Edit the `en` and `km` values to update English and Khmer. The academy cards also use each course's `hero` and `format.delivery` values.

- Edit `objectives`, `format`, `techStack`, `workflow`, and `approach` for the introductory sections.
- Edit `roadmap.groups` for module titles, descriptions, and example links. Keep each module's `id` unique within its course and stable when changing its text so existing study progress still applies.
- Edit `access.action.href` to change where the course access button goes. Add an optional `studyPlan.schedule` array with bilingual `label` and `value` fields to show dates or meeting times.
- Edit `instructor`, `benefits`, and `closing` for the lower sections. To add an author photo, put the image in `public` and set `instructor.image` to its site path.

Shared headings and button labels are in [labels.json](src/course/data/labels.json).
