# WeeeCooked: A Math-First 12-Week DSA Core

## Operating assumption

This plan suits an **MCA second-year student** who can already write basic programs but has not yet built a dependable problem-solving routine. Plan for **90–120 minutes on six days each week** and a low-pressure review on the seventh day. The goal is not to finish the most videos; it is to connect a mathematical idea, an algorithmic model, a clean implementation, and a small set of progressively harder problems.

> **Study loop:** Warm up the mathematics for 10–15 minutes, trace the idea for 10 minutes, learn or re-derive the algorithm for 25–35 minutes, implement it without copying for 20–30 minutes, then solve one or two scoped questions for 25–40 minutes.

## Which resource should lead the plan?

| Role | Recommended free source | How to use it |
| --- | --- | --- |
| Primary structured question bank | [Striver’s A2Z DSA Sheet][1] | Follow its topic order, but use the smaller question sequence in this guide rather than attempting all 474 questions at once. Its public page identifies the sheet as free and structured, with topic groups from basics through graphs and DP. [1] |
| Rigorous algorithm explanation | [MIT 6.006][2] | Use selected lectures, notes, practice problems, and assignments after a first exposure. MIT describes the course as an introduction to mathematical modeling, common algorithms, data structures, performance measures, and analysis. [2] |
| Mathematics just in time | [MIT 6.042J][3] | Use short selected segments for definitions, proofs, sets, graphs, modular arithmetic, and probability only when they support the week’s DSA work. The course supplies videos, notes, an open textbook, and problem sets. [3] |
| Visual trace before code | [VisuAlgo][4] | Spend no more than 10–15 minutes animating the unfamiliar operation; the site includes modules for arrays, sorting, linked lists, heaps, hash tables, trees, graph traversal, shortest paths, and more. [4] |
| Implementation confidence | [HackerRank Data Structures][5] | Use the named early array and linked-list tasks. The platform exposes filters and challenges across core structures, including easy starter tasks. [5] |
| Later algorithm practice | [CSES Problem Set][6] | Begin with selected introductory, sorting/searching, DP, and graph tasks. Its categories visibly include those areas plus trees, range queries, and mathematics. [6] |
| Optional video companion | [William Fiset’s data-structures course][7] | Use as a visual first pass for a structure that feels opaque. Pause often and implement immediately. Do not substitute passive viewing for questions. |

## Non-negotiable learning rules

The same language should be used for the entire twelve-week core; use **C++** if you want the broadest competitive-programming ecosystem, or **Java** if it is your strongest academic language. Do not switch languages to follow a particular playlist. Maintain one `dsa-notes` repository with a file per topic, an implementation folder, and an error log containing the mistake, the input that exposed it, and the corrected invariant.

Timebox a new problem for **25 minutes** in weeks 1–4 and **35 minutes** thereafter. If you cannot formulate a brute-force approach, re-read the statement and trace an example. If a brute force is clear but the optimization is missing after the timebox, read only a hint or a high-level strategy, close it, and re-implement from memory. Re-solve every missed problem after 48 hours and once more seven days later.

## Mathematics shelf: learn only what will be used next

| Mathematical tool | Learn before | Why it matters in DSA |
| --- | --- | --- |
| Sets, functions, relations, and notation | Hash maps, graph representation, invariants | They give precise language for membership, mappings, and state. |
| Powers of two and logarithm laws | Binary search, balanced trees, heap height, bit masks | They explain repeated halving, tree height, and binary representation. |
| Summations and arithmetic/geometric series | Nested loops, prefix sums, amortized intuition, merge sort | They turn “how many loop iterations?” into a count instead of a guess. |
| Modular arithmetic and remainders | Hashing, cyclic arrays, frequency/indexing tasks | They clarify wraparound, buckets, and remainder classes. |
| Proof by induction and recurrence relations | Recursion, divide-and-conquer, tree algorithms, dynamic programming | They justify recursive correctness and give a vocabulary for running time/state transitions. |
| Permutations, combinations, and the product rule | Backtracking and subset/bitmask enumeration | They quantify branching and explain why exhaustive search grows quickly. |
| Graph vocabulary and graph distance | BFS, DFS, topological sort, shortest paths | They distinguish vertices, edges, paths, cycles, connectivity, and layers. |
| Exchange arguments and simple counterexamples | Greedy algorithms | They force you to justify a local choice rather than memorize a pattern. |

## The day-by-day core

Each numbered day below means one focused 90–120 minute session. **Day 7 every week is a review day:** re-solve two missed questions without notes, update the error log, and spend 15 minutes naming the next week’s mathematical ideas. It is intentionally lighter; take a full rest day if academic workload is heavy.

| Week | Mathematical warm-up comes first | Daily DSA focus and first question sequence |
| --- | --- | --- |
| 1 — Cost and arrays | **Days 1–2:** compare growth with constants, powers, and logs. **Day 3:** use arithmetic-series sums. **Day 4:** use bounds and integer representation. | **D1:** set up templates and write `sum`, `max`, `isPrime`; estimate costs. **D2:** HackerRank *Arrays - DS*. **D3:** *2D Array - DS*. **D4:** *Left Rotation*. **D5:** trace and implement prefix sums. **D6:** *Sparse Arrays*; document one time–space trade-off. |
| 2 — Strings and hashing | **D8:** sets/functions. **D9:** modular arithmetic and array indexing. **D10:** frequency distributions. | **D8:** character arrays and string complexity. **D9:** implement a frequency map. **D10:** A2Z: largest element, second-largest, check sorted. **D11:** A2Z: remove duplicates, left-rotate, move zeroes. **D12:** A2Z: two-sum and longest subarray with target. **D13:** HackerRank *Dynamic Array*. |
| 3 — Sorting and binary search | **D15:** total order and permutation. **D16:** summations and log₂n. **D18:** monotone predicates and loop invariants. | **D15:** implement selection and bubble sort; state their invariants. **D16:** insertion sort plus best/worst case. **D17:** merge sort and its recurrence. **D18:** binary search; test empty, one-element, and answer-boundary cases. **D19:** A2Z: first/last occurrence and search-in-rotated-array. **D20:** CSES *Distinct Numbers* or A2Z sorting revision. |
| 4 — Linked structures, stacks, and queues | **D22:** sequences and state transitions. **D23:** LIFO/FIFO as invariants. **D25:** circular index arithmetic. | **D22:** implement singly linked-list insert/search/delete. **D23:** HackerRank *Print the Elements of a Linked List*. **D24:** HackerRank *Insert a Node at the Tail* and *at the Head*. **D25:** implement an array queue/circular queue. **D26:** A2Z: valid parentheses and stack design. **D27:** monotonic-stack introduction: next greater element. |
| 5 — Recursion, backtracking, and bits | **D29:** induction and recursion trees. **D30:** powers of two. **D32:** product rule and permutations. | **D29:** write base cases for factorial, sum, and reverse array. **D30:** A2Z: recursion patterns and subsequences. **D31:** bit operations; count set bits and test power of two. **D32:** generate subsets and explain 2ⁿ. **D33:** generate permutations and explain n!. **D34:** CSES *Bit Strings* or A2Z bit basics. |
| 6 — Trees, BSTs, and heaps | **D36:** rooted-tree vocabulary and height. **D37:** recurrence `T(n)` for traversal. **D39:** complete-tree index rules and log height. | **D36:** tree traversals (pre/in/postorder) recursively and iteratively. **D37:** A2Z: max depth and balanced tree. **D38:** BST search, insert, and inorder property. **D39:** implement a min-heap push/pop. **D40:** A2Z: kth largest/smallest with heap. **D41:** CSES *Towers* or tree/heap review. |
| 7 — Graph foundations | **D43:** vertices, edges, degrees, paths, cycles, components. **D45:** queue layers and distance. **D46:** reachability as a relation. | **D43:** adjacency list versus matrix; build both. **D44:** DFS recursively and iteratively. **D45:** BFS and shortest path in an unweighted graph. **D46:** CSES *Counting Rooms*. **D47:** CSES *Message Route*. **D48:** A2Z: cycle detection and bipartite check. |
| 8 — Graph algorithms and greedy choices | **D50:** DAGs and partial orders. **D51:** weighted-path relaxation. **D53:** cut property and exchange argument. | **D50:** topological sort (Kahn and DFS). **D51:** Dijkstra using a heap. **D52:** CSES *Course Schedule* and *Shortest Routes I* when ready. **D53:** DSU; union by size and path compression. **D54:** Kruskal minimum spanning tree. **D55:** CSES *Road Construction* or A2Z DSU practice. |
| 9 — Greedy and intervals | **D57:** proof by counterexample and exchange argument. **D58:** interval endpoints and sorting keys. **D60:** prefix minima/maxima. | **D57:** identify a greedy choice and try to break it. **D58:** activity selection / CSES *Movie Festival*. **D59:** merge intervals. **D60:** minimum platforms/meeting rooms (sort-and-sweep). **D61:** A2Z: jump-game or fractional-knapsack reasoning. **D62:** write a one-page “when greedy fails” note using coin change. |
| 10 — Dynamic programming foundations | **D64:** recurrences, states, and base conditions. **D65:** directed acyclic dependency graphs. **D67:** counting and transition choices. | **D64:** Fibonacci: recursion, memoization, tabulation. **D65:** *Climbing Stairs* / CSES *Dice Combinations*. **D66:** A2Z: frog jump. **D67:** house robber / non-adjacent maximum sum. **D68:** 2D DP via grid paths. **D69:** explain the state and transition before coding each solution. |
| 11 — DP patterns and strings | **D71:** subsequences versus substrings; index-pair states. **D72:** combinatorics of choices. **D74:** prefix/suffix and sliding-window invariants. | **D71:** 0/1 knapsack state design. **D72:** coin change (minimum vs count). **D73:** LCS and edit-distance concept trace. **D74:** fixed versus variable sliding window. **D75:** longest substring without repeating characters. **D76:** trie insert/search and prefix count. |
| 12 — Consolidation and interview routine | **D78:** choose the right mathematical model from the cue. **D80:** complexity comparison. **D82:** proof sketch for one greedy/DP solution. | **D78:** timed mixed set: array, binary search, stack. **D79:** timed mixed set: tree, graph, heap. **D80:** timed mixed set: greedy, DP. **D81:** re-solve your five hardest misses. **D82:** build a personal pattern sheet with triggers and invariants. **D83:** one 75-minute mock, then write a retrospective. |

## What comes after week 12?

Do not immediately chase harder random questions. Complete a second 6–8 week pass using the same flow through the remaining **A2Z** groups, then add CSES sections for sorting/searching, DP, and graphs. Use MIT 6.006 selectively whenever you can implement a technique but cannot yet explain its correctness or complexity. The longer-term objective is a growing library of re-solvable patterns, not an inflated solved count.

## References

[1]: https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z "Striver's A2Z DSA Sheet — takeUforward"
[2]: https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ "MIT OpenCourseWare 6.006: Introduction to Algorithms"
[3]: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/ "MIT OpenCourseWare 6.042J: Mathematics for Computer Science"
[4]: https://visualgo.net/en "VisuAlgo"
[5]: https://www.hackerrank.com/domains/data-structures "HackerRank Data Structures"
[6]: https://cses.fi/problemset/ "CSES Problem Set"
[7]: https://www.youtube.com/watch?v=RBSGKlAvoiM "William Fiset: Data Structures Easy to Advanced Course"
