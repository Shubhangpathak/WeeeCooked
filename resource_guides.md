# Study resource guide

The live application uses explicit per-lesson mappings, not weekly defaults.

## Learner flow

1. Read today's outcome and check the prerequisite links.
2. Study the named section of the primary explanation (typically 20–30 minutes of study effort).
3. Use the supporting article or visualisation to trace the original small example.
4. Implement the local task in C++17, then attempt the exact external question.
5. Explain costs and test boundaries. Reveal a solution only after an attempt, then re-solve without it.

The right desktop column shows resources and practice before the recipe and edge-case cards. Additional explanations and stretch tasks are collapsed. My notes is one private editor, also available from the left navigation.

## Source roles

LearnCpp supplies modern C++ foundations; selected Stanford SEE lectures supply recursion, backtracking, and structures; selected MIT lectures supply later algorithmic reasoning. USACO Guide and CP-Algorithms are scoped references. VisuAlgo supports tracing. Public NeetCode explanations are optional post-attempt help; no paid course is required. Fiset's Java course is a clearly labelled alternative for relevant structure topics, never falsely attributed or assigned in full.

See [publisher evidence](docs/resource-evidence.md), [full original-lesson audit](docs/resource-audit.md), [current mappings](docs/resource-manifest.json), and [access checks](docs/resource-verification.json).

## Maintaining content

Edit original tasks in `scripts/build-curriculum.py`, run it to update `curriculumData.ts`, then run `pnpm audit:resources` and `pnpm check:curriculum`. Edit source metadata in `resourceCatalog.ts`. Never infer lecture numbers from URL IDs, reuse a generic homepage, change a stable lesson ID's meaning, or describe metadata checks as watching a video.
