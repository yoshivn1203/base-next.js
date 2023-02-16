## Features

- ⚡️ Next.js 13
- ⚛️ React 18
- ⛑ TypeScript
- 🌎 I18n
- 📚 Storybook
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Quick Start

Install:

```bash
git clone ...
```

### Development

To start the project locally, run (pnpm | npm | yarn):

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 12.22.0
- pnpm 7

### Directory Structure

- [`.gitlab`](.gitlab) — Template pullrequest</br>
- [`.husky`](.husky) — Husky configuration and hooks. </br>
- [`.storybook`](.storybook) — Config storybook</br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.</br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts (pnpm | npm | yarn)

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.

### Conventional Commits

[https://www.conventionalcommits.org/en/v1.0.0/](docs)

```
<type>(<optional scope>): <subject>
```

##### Type

- API relevant changes
  - `feat` Commits, that adds a new feature
  - `fix` Commits, that fixes a bug
- `refactor` Commits, that rewrite/restructure your code, however does not change any behaviour
  - `perf` Commits are special `refactor` commits, that improve performance
- `style` Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
- `test` Commits, that add missing tests or correcting existing tests
- `docs` Commits, that affect documentation only
- `build` Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- `ops` Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- `chore` Miscellaneous commits e.g. modifying `.gitignore`

##### Scopes

The `scope` provides additional contextual information.

- Is an **optional** part of the format
- Allowed Scopes depends on the specific project
- Don't use issue identifiers as scopes

##### Subject

The `subject` contains a succinct description of the change.

- Is a **mandatory** part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes"
  - Think of `This commit will <subject>`
- Don't capitalize the first letter
- No dot (.) at the end

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import Button from '@/components/commons/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Styles

```
styles
|
|– global/
|
|– theme/
|
```
