# Cards

Interactive thinking-card decks published at [mohamadsayar-maker.github.io/Cards](https://mohamadsayar-maker.github.io/Cards/).

## Local development

This is a dependency-free static site. From the repository root, run:

```bash
make serve
```

Then open <http://localhost:8000>.

Run the smoke checks with:

```bash
make check
```

The checks validate the expected entry points and the local links used by the deck selector.

## Project structure

- `index.html` — landing page and deck selector.
- `classic.html` — Mental Notes deck loader.
- `think-with-ai.html` — Think With AI deck loader and content transformation.
- `card2.html` — source deck engine used by the loaders.
- `app.html.gz.b64` — compressed backup/export of the original app payload.
- `.github/workflows/fix-flip.yml` — existing GitHub Actions repair workflow for the embedded app payload.

The site is deployed directly from the `main` branch through GitHub Pages. Keep changes small and test both the landing page and each deck locally before pushing.

## Git workflow

```bash
git pull --ff-only origin main
make check
git switch -c agent/short-description
# make and test the change
git add <files>
git commit -m "Describe the change"
git push -u origin HEAD
```

For changes that affect the deployed experience, use a pull request when possible. Avoid editing the compressed backup unless the generated payload itself is intentionally being refreshed.
