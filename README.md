# Cursor + CodeRabbit Integration Test

This project is a minimal TypeScript setup to verify your PR workflow with CodeRabbit.

## What this includes

- TypeScript source + tests
- ESLint + Vitest
- GitHub Action for pull request checks
- `.coderabbit.yaml` for CodeRabbit behavior

## Quick start

1. Initialize git and push to GitHub:
   - `git init`
   - `git add .`
   - `git commit -m "chore: initial integration test setup"`
   - Create a GitHub repo and push this folder
2. Install dependencies:
   - `npm install`
3. Run local checks:
   - `npm run check`

## Verify CodeRabbit integration

1. Install CodeRabbit on your GitHub repository (GitHub App).
2. Create a new branch:
   - `git checkout -b test/coderabbit`
3. Make a small code change (for example in `src/math.ts`).
4. Push branch and open a pull request to `main`.
5. Confirm:
   - GitHub Action `PR Check` runs successfully.
   - CodeRabbit posts review comments on the PR.

## Optional: force review-worthy changes

To trigger richer CodeRabbit feedback, you can intentionally add:
- weak error handling
- duplicate logic
- inconsistent naming

Then open another PR and observe suggestions.
