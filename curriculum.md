# Foundations to interviews

C++17 first, English first. 79 core lessons in 11 flexible stages, plus 9 optional lessons. Typical lesson: 75 minutes, split freely; checkpoint: 60 minutes. Estimates are study effort, not video duration. No schedule or prerequisite locks.

## Programming readiness

Run and debug small C++17 programs before starting DSA.

- **Variables and input** (lesson-variables): Read two integers and print their sum. Run with positive, zero, and negative inputs. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/) · [Practice](https://www.hackerrank.com/challenges/cpp-input-and-output/problem)
- **Conditions and decisions** (lesson-conditions): Write a function that classifies a number as negative, zero, or positive. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-if-statements/) · [Practice](https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem)
- **Loops and running totals** (lesson-loops): Sum numbers from 1 to n, then count only even numbers. Test n=0 and n=1. [Study](https://www.learncpp.com/cpp-tutorial/for-statements/) · [Practice](https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem)
- **Functions and references** (lesson-functions): Implement max2 and a swap-by-reference function; distinguish return values from side effects. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-functions/) · [Practice](https://www.hackerrank.com/challenges/c-tutorial-functions/problem)
- **Vectors and strings** (lesson-vector): Create a vector, append a value, print every element, and count characters in a string. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-stdvector-and-list-constructors/) · [Practice](https://www.hackerrank.com/challenges/c-tutorial-strings/problem)
- **Debugging and small tests** (lesson-testing): Write a reverse-print loop. Predict outputs for empty, one-item, and three-item vectors before running it. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-testing-your-code/) · [Practice](https://www.hackerrank.com/challenges/arrays-introduction/problem)
- **Programming readiness: checkpoint** (lesson-checkpoint-readiness): Write a small program using input, a function, a loop, vector, and string. Show three tests and explain one bug you fixed. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-testing-your-code/) · [Practice](https://www.hackerrank.com/challenges/arrays-introduction/problem)

## Arrays and strings

Traverse and transform data; count the work your code performs.

- **Arrays in memory** (w1-d2): Trace access, append, insertion, and deletion. Implement insertion into a vector. [Study](https://usaco.guide/bronze/intro-ds) · [Practice](https://www.hackerrank.com/challenges/arrays-ds/problem)
- **Linear scans** (lesson-array-scans): Implement sum and maximum scans; define how maximum handles an empty vector. [Study](https://usaco.guide/bronze/intro-ds) · [Practice](https://www.hackerrank.com/challenges/simple-array-sum/problem)
- **How algorithms grow** (w1-d1): Compare a max scan and nested pair check using an operation counter. [Study](https://see.stanford.edu/Course/CS106B/164) · [Practice](https://www.hackerrank.com/challenges/simple-array-sum/problem)
- **2D grids** (lesson-grid-basics): Traverse rows and columns separately, then compute each row sum. [Study](https://usaco.guide/bronze/intro-ds) · [Practice](https://leetcode.com/problems/richest-customer-wealth/)
- **Strings as indexed data** (lesson-string-scan): Walk adjacent characters and compute absolute differences; handle strings shorter than two characters. [Study](https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring/) · [Practice](https://leetcode.com/problems/score-of-a-string/)
- **Rotation by k** (w1-d4): Implement rotation with a temporary vector first; normalise k only after checking for empty input. [Study](https://usaco.guide/bronze/intro-ds) · [Practice](https://www.hackerrank.com/challenges/array-left-rotation/problem)
- **Arrays and strings: checkpoint** (lesson-checkpoint-arrays): Reverse a vector and scan a grid without notes. Compare O(n) and O(n²), test empty and singleton input, and explain your index boundaries. [Study](https://usaco.guide/bronze/intro-ds) · [Practice](https://leetcode.com/problems/richest-customer-wealth/)

## Hashing and sequence patterns

Use stored information and moving boundaries to avoid repeated work.

- **Frequency maps** (w2-d2): Build an unordered_map<string,int> of counts and answer queries. [Study](https://usaco.guide/bronze/intro-sets) · [Practice](https://www.hackerrank.com/challenges/sparse-arrays/problem)
- **Anagrams** (w2-d3): Compare lowercase letter frequencies. Explain how the assumption changes for Unicode. [Study](https://usaco.guide/bronze/intro-sets) · [Practice](https://leetcode.com/problems/valid-anagram/)
- **Two sum** (w2-d4): Implement the quadratic baseline, then store previously seen values and indices. [Study](https://usaco.guide/bronze/intro-sets) · [Practice](https://leetcode.com/problems/two-sum/)
- **Prefix sums** (w1-d5): Build a leading-zero prefix array and answer three inclusive range queries. [Study](https://usaco.guide/silver/prefix-sums) · [Practice](https://leetcode.com/problems/running-sum-of-1d-array/)
- **Two pointers** (lesson-two-pointers): Check an ASCII palindrome with inward-moving pointers, then add filtering and case normalisation. [Study](https://usaco.guide/silver/two-pointers) · [Practice](https://leetcode.com/problems/valid-palindrome/)
- **Fixed sliding windows** (w11-d4): Implement a length-k maximum-sum window; test k=1 and k=n. [Study](https://usaco.guide/silver/two-pointers) · [Practice](https://leetcode.com/problems/maximum-average-subarray-i/)
- **Variable sliding windows** (w11-d5): Track character counts while shrinking until all characters in the window are unique. [Study](https://usaco.guide/silver/two-pointers) · [Practice](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- **Prefix sums with hashing** (lesson-prefix-hash): Count subarrays with sum k using prefix frequencies. Explain why a positive-only window fails with negatives. [Study](https://usaco.guide/silver/prefix-sums) · [Practice](https://leetcode.com/problems/subarray-sum-equals-k/)
- **Hashing and sequence patterns: checkpoint** (lesson-checkpoint-patterns): Solve a prefix-sum and a window example. Explain when negatives break a shrinking window and state time/space costs. [Study](https://usaco.guide/silver/prefix-sums) · [Practice](https://leetcode.com/problems/subarray-sum-equals-k/)

## Recursion, sorting, and searching

Understand call stacks before divide and conquer.

- **Base cases and call stacks** (lesson-recursion-basics): Implement recursive sum(0..n) and factorial for small nonnegative n. Draw every call. [Study](https://see.stanford.edu/Course/CS106B/150) · [Practice](https://leetcode.com/problems/fibonacci-number/)
- **Selection and bubble sort** (lesson-elementary-sort): Implement both algorithms and count comparisons and swaps. [Study](https://visualgo.net/en/sorting) · [Practice](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem)
- **Insertion sort** (w3-d2): Write insertion into a sorted prefix before sorting the entire vector. [Study](https://visualgo.net/en/sorting) · [Practice](https://www.hackerrank.com/challenges/insertionsort1/problem)
- **Merge sort** (lesson-merge-sort): Implement merge for two sorted vectors, then recursive merge sort. [Study](https://visualgo.net/en/sorting) · [Practice](https://leetcode.com/problems/sort-an-array/)
- **Binary search** (w3-d4): Write iterative binary search with a stated interval convention and absent-value result. [Study](https://usaco.guide/silver/binary-search) · [Practice](https://leetcode.com/problems/binary-search/)
- **Boundary search** (w3-d5): Implement lower_bound and upper_bound logic; derive the last occurrence from them. [Study](https://usaco.guide/silver/binary-search) · [Practice](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- **Recursion, sorting, and searching: checkpoint** (lesson-checkpoint-search): Trace one recursion tree, implement merge, and binary-search an absent value. Explain termination, duplicate boundaries, and complexity. [Study](https://usaco.guide/silver/binary-search) · [Practice](https://leetcode.com/problems/search-insert-position/)

## Linear structures

Follow links and understand stack and queue operations before combining them.

- **Linked-list anatomy** (w4-d1): Create a Node struct and traverse without changing the head. Draw ownership and links. [Study](https://visualgo.net/en/list) · [Practice](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem)
- **List insertion** (w4-d2): Implement head and tail insertion, including an empty list. Release allocated nodes in local tests. [Study](https://visualgo.net/en/list) · [Practice](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)
- **Stacks** (w4-d3): Implement push/pop with vector, then check bracket matching. [Study](https://see.stanford.edu/Course/CS106B/159) · [Practice](https://leetcode.com/problems/valid-parentheses/)
- **Queue operations** (lesson-queue-basics): Trace a std::queue simulation; use a no-progress counter to stop a full unsuccessful rotation. [Study](https://see.stanford.edu/Course/CS106B/159) · [Practice](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)
- **A queue from two stacks** (lesson-two-stack-queue): Use two stacks; transfer only when the output stack is empty. Explain amortised cost. [Study](https://see.stanford.edu/Course/CS106B/159) · [Practice](https://leetcode.com/problems/implement-queue-using-stacks/)
- **Monotonic stacks** (w4-d5): Keep a decreasing stack of indices and fill next-greater answers when popping. [Study](https://usaco.guide/gold/stacks) · [Practice](https://leetcode.com/problems/next-greater-element-i/)
- **Linear structures: checkpoint** (lesson-checkpoint-linear): Draw an insertion, implement queue operations, and explain a stack invariant. Test empty structures and account for operation costs. [Study](https://see.stanford.edu/Course/CS106B/159) · [Practice](https://leetcode.com/problems/valid-parentheses/)

## Backtracking

Represent a choice, explore it, and restore state.

- **Subsets by choices** (w5-d2): Generate subsets by choosing whether to include each value; copy the path at a leaf. [Study](https://see.stanford.edu/Course/CS106B/150) · [Practice](https://leetcode.com/problems/subsets/)
- **Permutations** (w5-d3): Generate permutations with a used array; undo both the path and the used flag. [Study](https://see.stanford.edu/Course/CS106B/163) · [Practice](https://leetcode.com/problems/permutations/)
- **Pruning a search** (lesson-pruning): Generate nondecreasing combinations and stop when the remaining target is negative. [Study](https://see.stanford.edu/Course/CS106B/149) · [Practice](https://leetcode.com/problems/combination-sum/)
- **Backtracking: checkpoint** (lesson-checkpoint-backtracking): Generate subsets and permutations of three values. Explain choose/explore/undo, count the output, and test the empty input. [Study](https://see.stanford.edu/Course/CS106B/150) · [Practice](https://leetcode.com/problems/subsets/)

## Trees and heaps

Navigate hierarchy and keep the most useful item available.

- **Tree traversals** (w6-d1): Implement all three DFS traversals with a null base case. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/) · [Practice](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- **Tree depth** (lesson-tree-depth): Implement maximum depth and trace the recursion on an uneven tree. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/) · [Practice](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Tree balance** (lesson-tree-balance): Return subtree height and an imbalance marker in one traversal. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/) · [Practice](https://leetcode.com/problems/balanced-binary-tree/)
- **Binary search trees** (w6-d3): Implement search and insertion under a stated duplicate policy. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/) · [Practice](https://leetcode.com/problems/search-in-a-binary-search-tree/)
- **Heap operations** (lesson-heap-basics): Trace push and pop, then use std::priority_queue to simulate stone collisions. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-8-binary-heaps/) · [Practice](https://leetcode.com/problems/last-stone-weight/)
- **Top k with heaps** (w6-d4): Maintain a min-heap of k values and explain why smaller candidates can be discarded. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-8-binary-heaps/) · [Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- **Heap pop practice** (w6-d5): Re-solve the heap simulation without notes; compare a repeated-sort baseline. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-8-binary-heaps/) · [Practice](https://leetcode.com/problems/last-stone-weight/)
- **Prefix trees** (lesson-trie): Build a trie with 26 child indices and an end-of-word flag; distinguish search from startsWith. [Study](https://see.stanford.edu/Course/CS106B/148) · [Practice](https://leetcode.com/problems/implement-trie-prefix-tree/)
- **Trees and heaps: checkpoint** (lesson-checkpoint-trees): Implement preorder and BST search, then trace a heap pop. Explain height-dependent costs and test empty and skewed trees. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-6-binary-trees-part-1/) · [Practice](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Graphs

Represent connections, explore them, and order dependencies.

- **Graph representation** (lesson-graph-representation): Build an adjacency list and calculate degrees before solving the star-centre question. [Study](https://usaco.guide/bronze/intro-graphs) · [Practice](https://leetcode.com/problems/find-center-of-star-graph/)
- **Depth-first search** (w7-d2): Implement visited tracking and four-direction flood fill; consider an explicit stack for large grids. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-10-depth-first-search/) · [Practice](https://leetcode.com/problems/number-of-islands/)
- **Breadth-first search** (w7-d3): Use a queue of cells and distances; mark cells when enqueuing, not when dequeuing. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-9-breadth-first-search/) · [Practice](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- **Connected components** (w7-d4): Wrap a traversal in a loop over all starting locations. Test isolated nodes or cells. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-10-depth-first-search/) · [Practice](https://cses.fi/problemset/task/1192)
- **Graph cycles** (lesson-graph-cycles): Detect an undirected cycle and reconstruct it using parent pointers. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-10-depth-first-search/) · [Practice](https://cses.fi/problemset/task/1669)
- **Topological ordering** (w8-d1): Implement Kahn's algorithm and compare processed count with the vertex count. [Study](https://cp-algorithms.com/graph/topological-sort.html) · [Practice](https://leetcode.com/problems/course-schedule/)
- **Graphs: checkpoint** (lesson-checkpoint-graphs): Build an adjacency list and implement BFS. Explain O(V+E), test a disconnected graph, and reconstruct a shortest path. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-9-breadth-first-search/) · [Practice](https://cses.fi/problemset/task/1667)

## Greedy and intervals

Justify local choices and reason about overlapping ranges.

- **Greedy choices and proof** (w9-d1): Sort both arrays and match the smallest satisfiable appetite. State an exchange argument. [Study](https://usaco.guide/bronze/intro-greedy) · [Practice](https://leetcode.com/problems/assign-cookies/)
- **Activity selection** (w9-d2): Sort by finish time; accept an interval only when it starts after or at the previous finish. [Study](https://usaco.guide/silver/greedy-sorting) · [Practice](https://cses.fi/problemset/task/1629)
- **Merge intervals** (w9-d3): Sort by start and merge overlaps; explicitly decide whether touching endpoints merge. [Study](https://www.techinterviewhandbook.org/algorithms/interval/) · [Practice](https://leetcode.com/problems/merge-intervals/)
- **Overlapping intervals** (lesson-overlap): Sort arrival/departure events and track the maximum active count. CSES assumes all times are distinct; discuss tie ordering separately. [Study](https://usaco.guide/silver/greedy-sorting) · [Practice](https://cses.fi/problemset/task/1619)
- **Reachability with greedy** (w9-d5): Track the farthest reachable index; stop if the current index is beyond it. [Study](https://usaco.guide/bronze/intro-greedy) · [Practice](https://leetcode.com/problems/jump-game/)
- **Greedy and intervals: checkpoint** (lesson-checkpoint-greedy): Explain an exchange argument and a counterexample. Implement an interval sweep, discuss equal endpoints, and give sorting complexity. [Study](https://usaco.guide/silver/greedy-sorting) · [Practice](https://cses.fi/problemset/task/1619)

## Dynamic programming

Describe repeated subproblems before writing a table.

- **Fibonacci three ways** (w10-d1): Implement recursion, memoisation, and bottom-up counting; compare repeated states. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-15-dynamic-programming-part-1-srtbot-fib-dags-bowling/) · [Practice](https://leetcode.com/problems/climbing-stairs/)
- **State and transition** (lesson-dp-state): Define the meaning of dp[i] in words before writing the recurrence; test two stairs. [Study](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html) · [Practice](https://leetcode.com/problems/min-cost-climbing-stairs/)
- **Non-adjacent maximum** (w10-d3): Derive take/skip states, then reduce storage after the full table works. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-15-dynamic-programming-part-1-srtbot-fib-dags-bowling/) · [Practice](https://leetcode.com/problems/house-robber/)
- **Grid paths** (w10-d4): Fill a grid table with ones on the first row and column. Test a one-row grid. [Study](https://usaco.guide/gold/paths-grids) · [Practice](https://leetcode.com/problems/unique-paths/)
- **Coin change** (w10-d5): Define minimum coins for each amount and represent unreachable states safely. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-16-dynamic-programming-part-2-lcs-lis-coins/) · [Practice](https://leetcode.com/problems/coin-change/)
- **0/1 knapsack** (lesson-knapsack): Build a two-dimensional item/budget table before trying descending one-dimensional updates. [Study](https://usaco.guide/gold/knapsack) · [Practice](https://cses.fi/problemset/task/1158)
- **Longest common subsequence** (w11-d2): Define dp[i][j] for prefixes; compare match and skip transitions. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-16-dynamic-programming-part-2-lcs-lis-coins/) · [Practice](https://leetcode.com/problems/longest-common-subsequence/)
- **Edit distance** (w11-d3): Write insert/delete/replace transitions with empty-string base cases; minimise operation count. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-21-dp-iii-parenthesization-edit-distance-knapsack/) · [Practice](https://leetcode.com/problems/edit-distance/)
- **Dynamic programming: checkpoint** (lesson-checkpoint-dp): Define the states, transitions, base cases, and order for coin change and edit distance. Test unreachable and empty inputs; count table cells. [Study](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-15-dynamic-programming-part-1-srtbot-fib-dags-bowling/) · [Practice](https://cses.fi/problemset/task/1633)

## Interview practice

Combine recognition, explanation, implementation, and testing.

- **Arrays mixed practice** (lesson-array-mock): Spend 25 minutes choosing and explaining a pattern before checking any solution. [Study](https://www.techinterviewhandbook.org/coding-interview-study-plan/) · [Practice](https://leetcode.com/problems/container-with-most-water/)
- **Trees and graphs mixed practice** (lesson-tree-graph-mock): Explain why the representation is a tree, then implement level-order traversal in 25 minutes. [Study](https://www.techinterviewhandbook.org/coding-interview-study-plan/) · [Practice](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- **DP and greedy decisions** (lesson-dp-greedy-mock): Give a greedy counterexample, derive a DP state, and test it without reading your old solution. [Study](https://www.techinterviewhandbook.org/coding-interview-techniques/) · [Practice](https://leetcode.com/problems/coin-change/)
- **Re-solve and explain** (lesson-resolve): Re-solve Two Sum without notes, then one saved mistake. Record which clue you missed. [Study](https://www.techinterviewhandbook.org/coding-interview-study-plan/) · [Practice](https://leetcode.com/problems/two-sum/)
- **Your pattern sheet** (lesson-pattern-sheet): Write cue, invariant, complexity, and trap for five patterns; validate the window entry on the assigned problem. [Study](https://www.techinterviewhandbook.org/coding-interview-techniques/) · [Practice](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- **Final mock and next steps** (lesson-final-mock): Use 35 minutes for House Robber and 35 for Number of Islands, then write a five-minute retrospective. [Study](https://www.techinterviewhandbook.org/coding-interview-study-plan/) · [Practice](https://leetcode.com/problems/house-robber/)
- **Interview practice: checkpoint** (lesson-checkpoint-interviews): Explain an unfamiliar prompt, implement a baseline, improve it, and test boundaries aloud. Record knowledge versus time-management gaps. [Study](https://www.techinterviewhandbook.org/coding-interview-study-plan/) · [Practice](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Optional extensions (optional)

Go deeper after the core; these lessons do not affect core completion.

- **Bit operations** (w5-d4): Implement bit tests and popcount on unsigned values; document shift limits. [Study](https://usaco.guide/silver/intro-bitwise) · [Practice](https://leetcode.com/problems/number-of-1-bits/)
- **Bitmask subsets** (lesson-bit-subsets): Enumerate masks from 0 to 2^n-1 for small n and output included values. [Study](https://usaco.guide/silver/intro-bitwise) · [Practice](https://leetcode.com/problems/subsets/)
- **Disjoint sets** (w8-d3): Implement parent, find, union by size, and path compression. [Study](https://cp-algorithms.com/data_structures/disjoint_set_union.html) · [Practice](https://leetcode.com/problems/number-of-provinces/)
- **Dijkstra** (w8-d2): Implement a min-priority queue of distances; discard stale entries and require nonnegative weights. [Study](https://cp-algorithms.com/graph/dijkstra.html) · [Practice](https://leetcode.com/problems/network-delay-time/)
- **Minimum spanning tree** (w8-d4): Implement Kruskal with DSU; detect when not all vertices can be connected. [Study](https://cp-algorithms.com/graph/mst_kruskal.html) · [Practice](https://cses.fi/problemset/task/1675)
- **Bellman-Ford** (lesson-bellman): Relax all edges repeatedly; use a final changed vertex and parent links to reconstruct a negative cycle. [Study](https://cp-algorithms.com/graph/bellman_ford.html) · [Practice](https://cses.fi/problemset/task/1197)
- **Balanced search trees** (lesson-avl): Trace AVL rotations; for the assignment, rebuild from sorted inorder values. [Study](https://visualgo.net/en/bst) · [Practice](https://leetcode.com/problems/balance-a-binary-search-tree/)
- **Fenwick trees** (lesson-fenwick): Implement point-add and prefix-sum queries, then convert replacement updates to deltas. [Study](https://cp-algorithms.com/data_structures/fenwick.html) · [Practice](https://cses.fi/problemset/task/1648)
- **Segment trees** (lesson-segment): Build a range-min tree with point updates; test disjoint and singleton ranges. [Study](https://cp-algorithms.com/data_structures/segment_tree.html) · [Practice](https://cses.fi/problemset/task/1649)

## Learning loop

Understand, trace, implement, practise, reflect. Checkpoints require independent implementation, complexity, boundary testing, and explanation. Revisit missed questions after two and seven days. Practise speaking from the start; try a 25-minute mock after trees and heaps.

## Compatibility

Stable IDs are independent of order. Previous lessons remain in the archive. Replaced or split tasks get new IDs; old completion is never copied onto them. Old notes and XP remain available. Optional and archived lessons are excluded from core completion.
