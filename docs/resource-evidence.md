# Resource evidence and limits

Checked 29 September 2026. This review compares topic descriptions, chapter bookmarks, article sections, and problem statements. It is not a claim that every video was watched in full or every judge submission was executed.

## Verification layers

- `resource-audit.md` and its JSON companion cover all 72 previous lessons, including old links, verdicts, reasons, and replacement study/practice links.
- `resource-manifest.json` contains the current per-lesson mappings and publisher evidence URLs.
- `resource-verification.json` records public HTTP checks, page titles, redirects, and instructor metadata. A successful GET establishes page availability, not teaching quality.
- LeetCode blocks the direct HTTP checker with 403 responses. Each of the 48 distinct assigned LeetCode problem pages was separately opened through web search/browsing: the public statement and examples were readable. These checks do not claim authenticated submission was tested, or that paid editorials are free. The curriculum links to free problem statements, not premium editorials.
- All non-LeetCode links in the final automated pass returned HTTP 200. This includes the public NeetCode explanation pages; actual embedded video playback was not tested.

## Selection decisions

| Source | Evidence and teaching constraints |
|---|---|
| [LearnCpp](https://www.learncpp.com/) | Use direct chapters with the original titles and author. C++17 exercises avoid newer-only features. For HackerRank's array introduction, use `std::vector<int>`; its variable-length raw-array suggestion is not portable standard C++. |
| [Stanford SEE CS106B](https://see.stanford.edu/Course/CS106B) | Public archived course. Lecture 8 supplies recursion and subset sections; lecture 9 supplies permutations; lecture 11 supplies pruning; lecture 20 supplies stacks/queues; lecture 25 supplies tries. Chapter times are taken from the official bookmark lists. Explain custom-library differences and avoid archived IDE setup. |
| [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/syllabus/) | University quality does not make it a zero-prerequisite course. Teach loops, arrays, recursion, and relevant notation first. Link selected topics rather than require the complete course. Instructor credits were compared with the individual publisher pages, not guessed from the course staff list. |
| [Fiset/freeCodeCamp](https://www.freecodecamp.org/news/learn-data-structures-from-a-google-engineer/) | Fiset is the instructor of the reused eight-hour video. The 2019 article describes him as a Google engineer at publication. Do not imply current employment or assign this course as a NeetCode/Striver lecture. Java implementations require a C++ bridge. |
| [Tech Interview Handbook](https://www.techinterviewhandbook.org/coding-interview-study-plan/) | Yangshun Tay's practitioner guidance supports fundamentals, revisiting topics, and mock interviews. Personal advice from an ex-Meta engineer is not Meta hiring policy. Paid affiliate recommendations are not required. |
| [NeetCode](https://neetcode.io/) | Use only public, specific problem explanation pages. Paid courses are excluded. Reveal explanations after the learner deliberately records an attempt. Employment history is not a guarantee of interview outcomes. |
| [roadmap.sh](https://roadmap.sh/datastructures-and-algorithms) | Coverage reference, not the daily learning order. Advanced balanced/range-query structures are optional; specialised database structures are outside the core. |

## Known pedagogical corrections

The earlier Fiset video was attributed to several creators and unrelated review topics. Tree review used CSES Towers; bitmask enumeration used Bit Strings. Those are replaced. Queue mechanics precede two-stack queues, simple recursion precedes merge sort, and windows precede DP. The overlap assignment uses Restaurant Customers and explicitly notes its distinct-time assumption.

## Rechecking

Run `pnpm audit:resources` after content changes and `pnpm check:links` to refresh HTTP evidence. Review failed requests manually; do not automatically remove a useful source because bot protection blocks a script. Record publisher changes and unavailable videos separately from suitability decisions.
