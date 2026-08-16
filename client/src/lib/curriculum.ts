export type Language = "cpp" | "java" | "python";

export type Lesson = {
  id: string;
  number: number;
  week: number;
  weekTitle: string;
  title: string;
  concept: string;
  focus: string;
  practice: string;
  practiceUrl: string;
  resource: string;
  resourceUrl: string;
  edgeCase: string;
};

type DaySeed = Omit<Lesson, "id" | "number" | "week" | "weekTitle">;
type WeekSeed = { title: string; days: DaySeed[] };

const a2z = "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z";
const cses = "https://cses.fi/problemset/";
const hr = "https://www.hackerrank.com/domains/data-structures";
const leet = "https://leetcode.com/problemset/";
const mit = "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/";
const visualgo = "https://visualgo.net/en";

const weeks: WeekSeed[] = [
  { title: "Cost & Arrays", days: [
    { title: "How algorithms grow", concept: "Compare constant, logarithmic, linear, and quadratic growth on real input sizes.", focus: "Write a max scan and a nested pair check; count their operations.", practice: "Arrays: DS", practiceUrl: "https://www.hackerrank.com/challenges/arrays-ds/problem", resource: "Big-O foundations", resourceUrl: mit, edgeCase: "What changes when the array is empty or has one item?" },
    { title: "Arrays in memory", concept: "Contiguous memory explains fast indexing and expensive middle insertion.", focus: "Trace access, append, insertion, and deletion on paper.", practice: "Dynamic Array", practiceUrl: "https://www.hackerrank.com/challenges/dynamic-array/problem", resource: "Array operations", resourceUrl: visualgo, edgeCase: "Which elements shift after an insertion at index zero?" },
    { title: "2D grids", concept: "A matrix is a collection of row and column indices.", focus: "Write nested loops that visit every cell of a 3×3 grid.", practice: "2D Array: DS", practiceUrl: "https://www.hackerrank.com/challenges/2d-array/problem", resource: "Array visualizer", resourceUrl: visualgo, edgeCase: "How do you avoid walking beyond the last row or column?" },
    { title: "Rotation by k", concept: "Circular movement repeats after n positions, so k mod n matters.", focus: "Map each old index to its new index before writing code.", practice: "Left Rotation", practiceUrl: "https://www.hackerrank.com/challenges/array-left-rotation/problem", resource: "Arrays basics", resourceUrl: a2z, edgeCase: "Test k = 0, k = n, and k greater than n." },
    { title: "Prefix sums", concept: "Precompute cumulative sums to answer range queries quickly.", focus: "Build an inclusive prefix array and answer two ranges by subtraction.", practice: "Static Range Sum Queries", practiceUrl: "https://cses.fi/problemset/task/1646", resource: "Prefix-sum pattern", resourceUrl: a2z, edgeCase: "How does a query starting at index zero work?" },
    { title: "Arrays review", concept: "Retrieval beats rereading: explain costs and index mappings from memory.", focus: "Re-solve one array miss and write one array invariant.", practice: "Array revision", practiceUrl: hr, resource: "HackerRank arrays", resourceUrl: hr, edgeCase: "Which array operation surprised you most this week?" },
  ] },
  { title: "Strings & Hashing", days: [
    { title: "Strings as arrays", concept: "Strings are sequences; scanning and building them has a measurable cost.", focus: "Trace a palindrome check using two pointers.", practice: "Valid Palindrome", practiceUrl: "https://leetcode.com/problems/valid-palindrome/", resource: "String basics", resourceUrl: a2z, edgeCase: "Ignore punctuation and casing deliberately." },
    { title: "Frequency maps", concept: "A hash map stores a compact state for each key.", focus: "Hand-build a frequency map, then implement count-or-increment.", practice: "Sparse Arrays", practiceUrl: "https://www.hackerrank.com/challenges/sparse-arrays/problem", resource: "Hashing basics", resourceUrl: a2z, edgeCase: "What should a missing key return?" },
    { title: "Anagrams", concept: "Two strings are anagrams when their frequency distributions match.", focus: "Compare a sorted solution with a frequency-map solution.", practice: "Valid Anagram", practiceUrl: "https://leetcode.com/problems/valid-anagram/", resource: "Hashing patterns", resourceUrl: a2z, edgeCase: "What happens with unequal lengths?" },
    { title: "Two sum", concept: "Store what you need for the future while scanning only once.", focus: "State the complement before looking it up.", practice: "Two Sum", practiceUrl: "https://leetcode.com/problems/two-sum/", resource: "Hash-map patterns", resourceUrl: a2z, edgeCase: "Never reuse the same element twice." },
    { title: "Longest subarray", concept: "A prefix state can turn a quadratic search into a linear one.", focus: "Trace prefix sum values and their earliest positions.", practice: "Longest Subarray with Sum K", practiceUrl: a2z, resource: "Prefix hashing", resourceUrl: a2z, edgeCase: "Keep the first occurrence of each prefix total." },
    { title: "Hashing review", concept: "Choose maps when a repeated scan can become a lookup.", focus: "Re-solve an anagram or two-sum problem without notes.", practice: "Hash table practice", practiceUrl: hr, resource: "Hash table visualizer", resourceUrl: visualgo, edgeCase: "Name the key and the value before coding." },
  ] },
  { title: "Sorting & Search", days: [
    { title: "Selection & bubble sort", concept: "An invariant describes the part that is already sorted.", focus: "Trace both sorts on five numbers and count comparisons.", practice: "Selection Sort", practiceUrl: a2z, resource: "Sorting visualizer", resourceUrl: visualgo, edgeCase: "What happens when the list is already sorted?" },
    { title: "Insertion sort", concept: "A sorted prefix grows one item at a time.", focus: "Move an item left until it reaches its valid position.", practice: "Insertion Sort Part 1", practiceUrl: "https://www.hackerrank.com/challenges/insertionsort1/problem", resource: "Sorting foundations", resourceUrl: mit, edgeCase: "Stop shifting as soon as the previous value is smaller." },
    { title: "Merge sort", concept: "Divide, solve smaller copies, and merge in sorted order.", focus: "Draw the recursion tree for eight values.", practice: "Merge Sort", practiceUrl: a2z, resource: "Merge-sort lesson", resourceUrl: mit, edgeCase: "When equal values appear, choose consistently." },
    { title: "Binary search", concept: "Binary search needs a monotonic condition and clear boundaries.", focus: "Write low, high, and mid updates on paper first.", practice: "Binary Search", practiceUrl: "https://leetcode.com/problems/binary-search/", resource: "Binary search patterns", resourceUrl: a2z, edgeCase: "Test empty, one-item, and not-found arrays." },
    { title: "Boundary search", concept: "Search can locate the first true or last true condition.", focus: "State the answer range and preserve it through each loop.", practice: "First and Last Position", practiceUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", resource: "Binary-search boundaries", resourceUrl: a2z, edgeCase: "Avoid an infinite loop when mid equals a boundary." },
    { title: "Sort & search review", concept: "The proof is in the invariant, not in memorized code.", focus: "Re-solve binary search and explain why the range shrinks.", practice: "Distinct Numbers", practiceUrl: "https://cses.fi/problemset/task/1621", resource: "CSES sorting", resourceUrl: cses, edgeCase: "What condition is monotonic in your solution?" },
  ] },
  { title: "Linear Structures", days: [
    { title: "Linked-list anatomy", concept: "Each node stores a value and a connection to the next node.", focus: "Draw insert-at-head and insert-at-tail pointer changes.", practice: "Print Linked List", practiceUrl: "https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem", resource: "Linked-list visualizer", resourceUrl: visualgo, edgeCase: "What does head mean for an empty list?" },
    { title: "List insertion", concept: "Pointer order matters: preserve the next node before rewiring.", focus: "Implement head and tail insertion without losing a node.", practice: "Insert a Node at the Tail", practiceUrl: "https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem", resource: "Linked-list operations", resourceUrl: a2z, edgeCase: "Update tail when the old list was empty." },
    { title: "Stacks", concept: "Last-in, first-out is a contract, not just a container.", focus: "Trace push and pop operations with a top pointer.", practice: "Valid Parentheses", practiceUrl: "https://leetcode.com/problems/valid-parentheses/", resource: "Stack visualizer", resourceUrl: visualgo, edgeCase: "A closing bracket cannot pop an empty stack." },
    { title: "Queues", concept: "First-in, first-out supports ordered processing.", focus: "Trace a circular queue using front and rear indices.", practice: "Queue using Two Stacks", practiceUrl: "https://leetcode.com/problems/implement-queue-using-stacks/", resource: "Queue visualizer", resourceUrl: visualgo, edgeCase: "Distinguish an empty queue from a full circular queue." },
    { title: "Monotonic stacks", concept: "Maintain a stack with a useful order to avoid repeat work.", focus: "Trace next-greater-element pops one by one.", practice: "Next Greater Element I", practiceUrl: "https://leetcode.com/problems/next-greater-element-i/", resource: "Stack patterns", resourceUrl: a2z, edgeCase: "What remains on the stack at the end?" },
    { title: "Linear review", concept: "Every structure is defined by the invariant it preserves.", focus: "Re-implement valid parentheses with no reference.", practice: "Stack and queue revision", practiceUrl: hr, resource: "Linear structures", resourceUrl: visualgo, edgeCase: "Can you say why each operation is O(1)?" },
  ] },
  { title: "Recursion & Bits", days: [
    { title: "Base cases", concept: "A recursive call must reduce input and reach a visible base case.", focus: "Write factorial, sum, and reverse-array calls on a call stack.", practice: "Recursive Digit Sum", practiceUrl: "https://www.hackerrank.com/challenges/recursive-digit-sum/problem", resource: "Recursion basics", resourceUrl: a2z, edgeCase: "Which input stops the recursion?" },
    { title: "Subsequences", concept: "Each element is either chosen or not chosen, giving 2ⁿ possibilities.", focus: "Draw the choice tree for three elements.", practice: "Subsets", practiceUrl: "https://leetcode.com/problems/subsets/", resource: "Backtracking", resourceUrl: a2z, edgeCase: "When do you record a completed choice?" },
    { title: "Permutations", concept: "Permutation generation places one unused choice at each position.", focus: "Trace swap, recurse, and undo.", practice: "Permutations", practiceUrl: "https://leetcode.com/problems/permutations/", resource: "Recursion trees", resourceUrl: mit, edgeCase: "Undo every mutation before the next branch." },
    { title: "Bit operations", concept: "Binary representation makes some state compact and fast to inspect.", focus: "Use AND, OR, XOR, shifts, and masks on small values.", practice: "Number of 1 Bits", practiceUrl: "https://leetcode.com/problems/number-of-1-bits/", resource: "Bit manipulation", resourceUrl: a2z, edgeCase: "Use parentheses around shifted expressions." },
    { title: "Bitmask subsets", concept: "Every number from 0 to 2ⁿ−1 can represent a subset.", focus: "Map set bits to selected elements.", practice: "Bit Strings", practiceUrl: "https://cses.fi/problemset/task/1617", resource: "Bitmasking", resourceUrl: a2z, edgeCase: "Why does bit i represent element i?" },
    { title: "Recursion review", concept: "Correct recursive code explains its smallest case and its smaller call.", focus: "Re-solve subsets and narrate the recursion tree.", practice: "Recursion revision", practiceUrl: a2z, resource: "Recursion visualizer", resourceUrl: visualgo, edgeCase: "What state must be restored after a call?" },
  ] },
  { title: "Trees & Heaps", days: [
    { title: "Tree traversals", concept: "Traversal order tells you when a node is visited relative to children.", focus: "Write pre-, in-, and post-order for one drawn tree.", practice: "Binary Tree Preorder Traversal", practiceUrl: "https://leetcode.com/problems/binary-tree-preorder-traversal/", resource: "Tree visualizer", resourceUrl: visualgo, edgeCase: "A null child is a base case." },
    { title: "Depth & balance", concept: "Tree height follows a recurrence over left and right subtrees.", focus: "Compute height bottom-up for a small tree.", practice: "Maximum Depth of Binary Tree", practiceUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", resource: "Tree patterns", resourceUrl: a2z, edgeCase: "Count nodes or edges consistently." },
    { title: "Binary search trees", concept: "Every left value is smaller and every right value is larger.", focus: "Search and insert while preserving the ordering rule.", practice: "Search in a Binary Search Tree", practiceUrl: "https://leetcode.com/problems/search-in-a-binary-search-tree/", resource: "BST visualizer", resourceUrl: visualgo, edgeCase: "What happens with a missing key?" },
    { title: "Heap basics", concept: "A heap keeps the best item at the root using a complete tree.", focus: "Trace insert and bubble-up in a min-heap.", practice: "Kth Largest Element", practiceUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/", resource: "Heap visualizer", resourceUrl: visualgo, edgeCase: "Know whether your heap is min-first or max-first." },
    { title: "Heap pop", concept: "Remove the root, move the last value, then restore order downward.", focus: "Trace heapify-down step by step.", practice: "Last Stone Weight", practiceUrl: "https://leetcode.com/problems/last-stone-weight/", resource: "Priority queues", resourceUrl: a2z, edgeCase: "Stop when both children are already valid." },
    { title: "Trees review", concept: "Recursive structure needs a clear contract at every node.", focus: "Re-solve max depth and write its recurrence.", practice: "Towers", practiceUrl: "https://cses.fi/problemset/task/1073", resource: "Tree & heap review", resourceUrl: cses, edgeCase: "Which subtree result do you need to return?" },
  ] },
  { title: "Graph Foundations", days: [
    { title: "Graph representation", concept: "An adjacency list stores only real edges; a matrix stores every possibility.", focus: "Build both representations for a five-node graph.", practice: "Building Roads", practiceUrl: "https://cses.fi/problemset/task/1666", resource: "Graph visualizer", resourceUrl: visualgo, edgeCase: "Does an undirected edge need two entries?" },
    { title: "Depth-first search", concept: "DFS explores one branch deeply before it backtracks.", focus: "Trace recursive DFS with a visited set.", practice: "Number of Islands", practiceUrl: "https://leetcode.com/problems/number-of-islands/", resource: "DFS patterns", resourceUrl: a2z, edgeCase: "Mark visited before recursing." },
    { title: "Breadth-first search", concept: "BFS visits distance d before distance d+1.", focus: "Write queue operations and distance updates.", practice: "Shortest Path in Binary Matrix", practiceUrl: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", resource: "BFS visualizer", resourceUrl: visualgo, edgeCase: "Enqueue a node only once." },
    { title: "Components", concept: "A connected component is everything reachable from one unseen start.", focus: "Count components by starting DFS/BFS only on unvisited nodes.", practice: "Counting Rooms", practiceUrl: "https://cses.fi/problemset/task/1192", resource: "Graph traversal", resourceUrl: a2z, edgeCase: "A new search means a new component." },
    { title: "Graph cycles", concept: "A cycle check remembers the route that led to a node.", focus: "Track parent nodes in an undirected DFS.", practice: "Cycle Detection", practiceUrl: a2z, resource: "Cycle patterns", resourceUrl: a2z, edgeCase: "The parent edge is not a back edge." },
    { title: "Graph review", concept: "Representation, visited state, and traversal order decide the algorithm.", focus: "Re-solve one grid traversal from memory.", practice: "Message Route", practiceUrl: "https://cses.fi/problemset/task/1667", resource: "Graph foundations", resourceUrl: cses, edgeCase: "When should you store a parent pointer?" },
  ] },
  { title: "Graph Algorithms", days: [
    { title: "Topological sort", concept: "A DAG has an order where every directed edge points forward.", focus: "Run Kahn’s algorithm using indegrees and a queue.", practice: "Course Schedule", practiceUrl: "https://leetcode.com/problems/course-schedule/", resource: "Topological sorting", resourceUrl: a2z, edgeCase: "If nodes remain, the graph contains a cycle." },
    { title: "Dijkstra", concept: "Relaxation improves the best-known distance to a vertex.", focus: "Trace a min-heap of candidate distances.", practice: "Network Delay Time", practiceUrl: "https://leetcode.com/problems/network-delay-time/", resource: "Shortest paths", resourceUrl: mit, edgeCase: "Skip stale heap entries." },
    { title: "Disjoint sets", concept: "Union-find represents changing connected components efficiently.", focus: "Implement find with path compression and union by size.", practice: "Number of Provinces", practiceUrl: "https://leetcode.com/problems/number-of-provinces/", resource: "DSU patterns", resourceUrl: a2z, edgeCase: "Always union roots, never arbitrary nodes." },
    { title: "Minimum spanning tree", concept: "Kruskal adds the cheapest edge that does not create a cycle.", focus: "Sort edges and test each with DSU.", practice: "Road Reparation", practiceUrl: "https://cses.fi/problemset/task/1675", resource: "MST visualizer", resourceUrl: visualgo, edgeCase: "A disconnected graph has no spanning tree." },
    { title: "Bellman-Ford idea", concept: "Repeated relaxation handles negative edges when Dijkstra cannot.", focus: "Perform one full relaxation pass by hand.", practice: "Bellman-Ford", practiceUrl: a2z, resource: "Weighted paths", resourceUrl: mit, edgeCase: "A final improving pass signals a negative cycle." },
    { title: "Graph algorithms review", concept: "The edge weights and graph shape tell you which algorithm fits.", focus: "Choose BFS, Dijkstra, DSU, or topological sort from four prompts.", practice: "Shortest Routes I", practiceUrl: "https://cses.fi/problemset/task/1671", resource: "Graph algorithms", resourceUrl: cses, edgeCase: "Can your chosen algorithm handle every edge weight?" },
  ] },
  { title: "Greedy & Intervals", days: [
    { title: "Greedy proof", concept: "A greedy choice needs an exchange argument or a counterexample test.", focus: "Try to break a tempting local choice before trusting it.", practice: "Assign Cookies", practiceUrl: "https://leetcode.com/problems/assign-cookies/", resource: "Greedy patterns", resourceUrl: a2z, edgeCase: "What optimal solution can you exchange with yours?" },
    { title: "Activity selection", concept: "Choosing the earliest finishing compatible interval leaves the most room.", focus: "Sort intervals by end time and trace selection.", practice: "Movie Festival", practiceUrl: "https://cses.fi/problemset/task/1629", resource: "Interval patterns", resourceUrl: a2z, edgeCase: "How do you handle touching endpoints?" },
    { title: "Merge intervals", concept: "Sorted interval starts make overlap detection local.", focus: "Keep one running merged interval.", practice: "Merge Intervals", practiceUrl: "https://leetcode.com/problems/merge-intervals/", resource: "Intervals", resourceUrl: a2z, edgeCase: "Do [1,4] and [4,5] overlap in this problem?" },
    { title: "Meeting rooms", concept: "Two sorted endpoint streams reveal the maximum concurrent intervals.", focus: "Trace arrival and departure pointers.", practice: "Meeting Rooms II", practiceUrl: "https://leetcode.com/problems/meeting-rooms-ii/", resource: "Sweep lines", resourceUrl: a2z, edgeCase: "Process end before start when times tie if rooms can be reused." },
    { title: "Jump game", concept: "A running farthest reach can summarize many possible jumps.", focus: "Update reach while scanning left to right.", practice: "Jump Game", practiceUrl: "https://leetcode.com/problems/jump-game/", resource: "Greedy reachability", resourceUrl: a2z, edgeCase: "Stop if the current index is already unreachable." },
    { title: "Greedy review", concept: "A correct local choice needs a reason, not a familiar shape.", focus: "Write a two-sentence proof sketch for one solved greedy problem.", practice: "Greedy revision", practiceUrl: a2z, resource: "Greedy algorithms", resourceUrl: mit, edgeCase: "Can you construct a counterexample to a different rule?" },
  ] },
  { title: "DP Foundations", days: [
    { title: "Fibonacci three ways", concept: "Memoization and tabulation reuse overlapping subproblems.", focus: "Implement recursion, memoization, and tabulation; compare calls.", practice: "Climbing Stairs", practiceUrl: "https://leetcode.com/problems/climbing-stairs/", resource: "DP foundations", resourceUrl: a2z, edgeCase: "State the base values explicitly." },
    { title: "State & transition", concept: "A DP state records exactly what the next decision needs.", focus: "Write state, choices, transition, and base case before code.", practice: "Frog Jump", practiceUrl: a2z, resource: "DP state design", resourceUrl: mit, edgeCase: "Does your state omit a value the future needs?" },
    { title: "Non-adjacent maximum", concept: "At each index, choose take or skip using prior optimal states.", focus: "Trace include/exclude decisions on six values.", practice: "House Robber", practiceUrl: "https://leetcode.com/problems/house-robber/", resource: "1D DP patterns", resourceUrl: a2z, edgeCase: "What does zero items return?" },
    { title: "Grid paths", concept: "A two-dimensional state follows dependencies from top and left.", focus: "Fill a small DP table by hand.", practice: "Unique Paths", practiceUrl: "https://leetcode.com/problems/unique-paths/", resource: "2D DP", resourceUrl: a2z, edgeCase: "Block or initialize the first row and column carefully." },
    { title: "Coin change", concept: "The same recurrence shape can minimize cost or count combinations.", focus: "Decide whether order matters before filling the table.", practice: "Coin Change", practiceUrl: "https://leetcode.com/problems/coin-change/", resource: "DP patterns", resourceUrl: a2z, edgeCase: "Use an impossible sentinel that cannot be mistaken for an answer." },
    { title: "DP review", concept: "State first, then transition; loops come last.", focus: "Explain one DP table to an imaginary beginner.", practice: "Dice Combinations", practiceUrl: "https://cses.fi/problemset/task/1633", resource: "DP practice", resourceUrl: cses, edgeCase: "Which smaller states must already be known?" },
  ] },
  { title: "DP & Strings", days: [
    { title: "0/1 knapsack", concept: "Capacity and item position define the subproblem.", focus: "Build a small table and compare take versus skip.", practice: "0/1 Knapsack", practiceUrl: a2z, resource: "Knapsack", resourceUrl: mit, edgeCase: "Never reuse an item in 0/1 knapsack." },
    { title: "Longest common subsequence", concept: "Two changing indices usually require a two-dimensional state.", focus: "Trace match and mismatch transitions for two short strings.", practice: "Longest Common Subsequence", practiceUrl: "https://leetcode.com/problems/longest-common-subsequence/", resource: "String DP", resourceUrl: a2z, edgeCase: "What happens when either index reaches the end?" },
    { title: "Edit distance", concept: "Insert, delete, and replace are competing transitions on prefix pairs.", focus: "Fill a 3×3 edit-distance grid by hand.", practice: "Edit Distance", practiceUrl: "https://leetcode.com/problems/edit-distance/", resource: "DP on strings", resourceUrl: mit, edgeCase: "Initialize the empty-string row and column." },
    { title: "Sliding window", concept: "A window stays valid through a maintained invariant.", focus: "Trace left and right pointers on a fixed-size sum.", practice: "Maximum Average Subarray I", practiceUrl: "https://leetcode.com/problems/maximum-average-subarray-i/", resource: "Sliding window", resourceUrl: a2z, edgeCase: "Remove the outgoing value before advancing." },
    { title: "No-repeat substring", concept: "A map can tell you how far a window’s left side must move.", focus: "Trace duplicate handling and keep the maximum length.", practice: "Longest Substring Without Repeating Characters", practiceUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", resource: "Variable windows", resourceUrl: a2z, edgeCase: "Never move left backward." },
    { title: "DP & strings review", concept: "Index meaning is the contract behind every string algorithm.", focus: "Re-solve one DP or window question and name its invariant.", practice: "DP revision", practiceUrl: leet, resource: "Algorithm practice", resourceUrl: leet, edgeCase: "Is your answer a substring, subsequence, count, or cost?" },
  ] },
  { title: "Consolidate", days: [
    { title: "Arrays mixed set", concept: "Recognize scans, maps, prefixes, and two-pointer cues.", focus: "Solve one array problem with a timed 30-minute limit.", practice: "Array mixed set", practiceUrl: a2z, resource: "A2Z revision", resourceUrl: a2z, edgeCase: "Write the brute-force idea before optimizing." },
    { title: "Trees & graphs mixed set", concept: "Model the structure before picking traversal or priority queue.", focus: "Solve one tree and one graph prompt without notes.", practice: "Graph mixed set", practiceUrl: cses, resource: "CSES revision", resourceUrl: cses, edgeCase: "What representation makes the problem easiest?" },
    { title: "DP & greedy mixed set", concept: "Distinguish a provable local choice from overlapping subproblems.", focus: "Classify five prompts as greedy, DP, or neither.", practice: "DP mixed set", practiceUrl: a2z, resource: "Pattern revision", resourceUrl: a2z, edgeCase: "Can you prove the greedy choice?" },
    { title: "Re-solve your misses", concept: "A solved mistake is more valuable than a fresh familiar problem.", focus: "Pick three mistake-log entries and solve them cleanly.", practice: "Your error log", practiceUrl: leet, resource: "Retrieval practice", resourceUrl: mit, edgeCase: "What clue should trigger this pattern next time?" },
    { title: "Pattern sheet", concept: "A pattern sheet records cues, invariants, and common traps.", focus: "Create a one-page personal sheet for five topics.", practice: "Build your pattern sheet", practiceUrl: a2z, resource: "DSA roadmap", resourceUrl: a2z, edgeCase: "Can you state each invariant in one sentence?" },
    { title: "Final mock", concept: "A retrospective turns a timed set into a new learning plan.", focus: "Take a 75-minute mixed mock and record your next three gaps.", practice: "CSES problem set", practiceUrl: cses, resource: "Full review", resourceUrl: cses, edgeCase: "Which mistakes came from knowledge versus time pressure?" },
  ] },
];

export const lessons: Lesson[] = weeks.flatMap((week, weekIndex) =>
  week.days.map((day, dayIndex) => ({
    ...day,
    id: `w${weekIndex + 1}-d${dayIndex + 1}`,
    number: weekIndex * 6 + dayIndex + 1,
    week: weekIndex + 1,
    weekTitle: week.title,
  })),
);

export const primer = [
  ["Set up your language", "Install a compiler/interpreter, run one program, and learn how to read an error message."],
  ["Control flow", "Review variables, conditions, loops, functions, and input/output."],
  ["Think like a tester", "Write examples, boundaries, and a small brute-force solution before optimizing."],
] as const;

export function objectiveText(lesson: Lesson, language: Language) {
  const languageName = { cpp: "C++", java: "Java", python: "Python" }[language];
  return [
    `Warm up: ${lesson.concept}`,
    `Learn: open ${lesson.resource} and focus on ${lesson.focus.toLowerCase()}`,
    `Build: trace or implement “${lesson.title}” in ${languageName}.`,
    `Practice: solve ${lesson.practice}.`,
    `Reflect: ${lesson.edgeCase}`,
  ];
}

export const languageSnippets: Record<Language, string> = {
  cpp: "// C++: write a small function, test it with 3 inputs, then explain its complexity.",
  java: "// Java: write a small method, test it with 3 inputs, then explain its complexity.",
  python: "# Python: write a small function, test it with 3 inputs, then explain its complexity.",
};
