"""Curriculum authoring source. Generates the application lesson data."""
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
stages = [
('readiness','Programming readiness','Run and debug small C++17 programs before starting DSA.'),
('arrays','Arrays and strings','Traverse and transform data; count the work your code performs.'),
('patterns','Hashing and sequence patterns','Use stored information and moving boundaries to avoid repeated work.'),
('search','Recursion, sorting, and searching','Understand call stacks before divide and conquer.'),
('linear','Linear structures','Follow links and understand stack and queue operations before combining them.'),
('backtracking','Backtracking','Represent a choice, explore it, and restore state.'),
('trees','Trees and heaps','Navigate hierarchy and keep the most useful item available.'),
('graphs','Graphs','Represent connections, explore them, and order dependencies.'),
('greedy','Greedy and intervals','Justify local choices and reason about overlapping ranges.'),
('dp','Dynamic programming','Describe repeated subproblems before writing a table.'),
('interviews','Interview practice','Combine recognition, explanation, implementation, and testing.'),
('extensions','Optional extensions','Go deeper after the core; these lessons do not affect core completion.'),
]

# stage | stable id | prior lesson | title | primary | support | exact practice | example | implementation task | selected study topic
rows = r'''
readiness|lesson-variables|-|Variables and input|variables|io|hr:cpp-input-and-output|With a=4 and b=7, a+b is 11; changing a to 2 makes the sum 9.|Read two integers and print their sum. Run with positive, zero, and negative inputs.|Values, types, and variable definitions; then cin and cout
readiness|lesson-conditions|-|Conditions and decisions|conditions|variables|hr:c-tutorial-conditional-if-else|For x=-2, x<0 is true; for x=0, the zero branch should run.|Write a function that classifies a number as negative, zero, or positive.|if, else, and Boolean conditions
readiness|lesson-loops|-|Loops and running totals|loops|io|hr:c-tutorial-for-loop|For 1,2,3 the running total changes 0 → 1 → 3 → 6.|Sum numbers from 1 to n, then count only even numbers. Test n=0 and n=1.|Loop initialisation, stopping condition, and increment
readiness|lesson-functions|-|Functions and references|functions|references|hr:c-tutorial-functions|A function max2(3,7) returns 7; changing a reference changes the caller's variable.|Implement max2 and a swap-by-reference function; distinguish return values from side effects.|Function calls and return flow; reference parameters
readiness|lesson-vector|-|Vectors and strings|vector|string|hr:c-tutorial-strings|The vector {4,8,1} has size 3 and last index 2; the string "cat" also has three indexed elements.|Create a vector, append a value, print every element, and count characters in a string.|Vector construction and indexed access; string size and indexing
readiness|lesson-testing|-|Debugging and small tests|testing|loops|hr:arrays-introduction|A loop with i<=size reads one element too far; i<size visits valid indices only.|Write a reverse-print loop. Predict outputs for empty, one-item, and three-item vectors before running it.|Branch coverage, boundary cases, and checking predicted output
arrays|w1-d2|w1-d2|Arrays in memory|arrays|v-array|hr:arrays-ds|Insert 9 at index 1 in [2,4,6]: shift 6 and 4 right to get [2,9,4,6].|Trace access, append, insertion, and deletion. Implement insertion into a vector.|Arrays, dynamic arrays, and inserting/erasing; skip tuples
arrays|lesson-array-scans|-|Linear scans|arrays|vector|hr:simple-array-sum|Scanning [3,-1,5] visits three values; the running sum becomes 3,2,7.|Implement sum and maximum scans; define how maximum handles an empty vector.|Iterating over an array
arrays|w1-d1|w1-d1|How algorithms grow|analysis|v-array|hr:simple-array-sum|A scan of 4 values takes 4 visits; all ordered pairs take 16. Doubling n doubles one and quadruples the other.|Compare a max scan and nested pair check using an operation counter.|Algorithm analysis: count operations before reading asymptotic notation
arrays|lesson-grid-basics|w1-d3|2D grids|arrays|vector|lc:richest-customer-wealth|For [[1,2],[3,4]], row sums are 3 and 7; the maximum row sum is 7.|Traverse rows and columns separately, then compute each row sum.|Nested vectors: apply indexed access twice
arrays|lesson-string-scan|w2-d1|Strings as indexed data|string|arrays|lc:score-of-a-string|In "aba", the adjacent character differences are 1 and 1, so the score is 2.|Walk adjacent characters and compute absolute differences; handle strings shorter than two characters.|String indexing and size; no two-pointer assumptions yet
arrays|w1-d4|w1-d4|Rotation by k|arrays|v-array|hr:array-left-rotation|Left-rotating [1,2,3,4] by 1 gives [2,3,4,1]; by 5 gives the same result.|Implement rotation with a temporary vector first; normalise k only after checking for empty input.|Array indexing and translating positions
patterns|w2-d2|w2-d2|Frequency maps|maps|v-hash|hr:sparse-arrays|For ["a","b","a"], the count of "a" is 2 and missing "c" is 0.|Build an unordered_map<string,int> of counts and answer queries.|Maps and hashsets; choose C++ and skip ordered-set implementation
patterns|w2-d3|w2-d3|Anagrams|maps|string|lc:valid-anagram|"tea" and "eat" have the same counts; "tea" and "tee" do not.|Compare lowercase letter frequencies. Explain how the assumption changes for Unicode.|Frequency counting with a map or fixed alphabet array
patterns|w2-d4|w2-d4|Two sum|maps|v-hash|lc:two-sum|For [2,7,11] and target 9, seeing 7 finds the earlier complement 2.|Implement the quadratic baseline, then store previously seen values and indices.|Map lookup and insertion; query before inserting the current element
patterns|w1-d5|w1-d5|Prefix sums|prefix|v-array|lc:running-sum-of-1d-array|For [2,3,1], prefix totals with leading zero are [0,2,5,6]; sum of indices 1..2 is 6-2=4.|Build a leading-zero prefix array and answer three inclusive range queries.|Prefix sum definition and range subtraction
patterns|lesson-two-pointers|w2-d1|Two pointers|pointers|string|lc:valid-palindrome|For "abba", compare a/a, then b/b; the pointers meet without a mismatch.|Check an ASCII palindrome with inward-moving pointers, then add filtering and case normalisation.|Two pointers moving from opposite ends
patterns|w11-d4|w11-d4|Fixed sliding windows|pointers|prefix|lc:maximum-average-subarray-i|For [2,1,4,3] and k=2, sums are 3,5,7; each move removes one value and adds one.|Implement a length-k maximum-sum window; test k=1 and k=n.|Sliding window section: fixed-length window first
patterns|w11-d5|w11-d5|Variable sliding windows|pointers|maps|lc:longest-substring-without-repeating-characters|In "abca", adding the second a moves the left boundary past the first a; the best length stays 3.|Track character counts while shrinking until all characters in the window are unique.|Sliding window section: maintain a validity condition
patterns|lesson-prefix-hash|w2-d5|Prefix sums with hashing|prefix|maps|lc:subarray-sum-equals-k|For [1,-1,1] and target 1, matching earlier prefix sums counts three subarrays.|Count subarrays with sum k using prefix frequencies. Explain why a positive-only window fails with negatives.|Combine prefix differences with frequency-map lookup
search|lesson-recursion-basics|w5-d1|Base cases and call stacks|recursion|v-recursion|lc:fibonacci-number|sum(3) waits for sum(2), then sum(1), then sum(0)=0; returns unwind to 1,3,6.|Implement recursive sum(0..n) and factorial for small nonnegative n. Draw every call.|00:00:29–00:14:20 · recursion, powers, and call mechanics
search|lesson-elementary-sort|w3-d1|Selection and bubble sort|v-sort|sorting|hr:ctci-bubble-sort|Selection sort on [3,1,2] puts 1 first, then 2; bubble sort moves 3 to the end on its first pass.|Implement both algorithms and count comparisons and swaps.|Select Selection Sort and Bubble Sort separately; trace three values
search|w3-d2|w3-d2|Insertion sort|v-sort|sorting|hr:insertionsort1|Inserting 2 into sorted [1,4,6] shifts 6 and 4, then fills the gap: [1,2,4,6].|Write insertion into a sorted prefix before sorting the entire vector.|Insertion Sort mode and its sorted-prefix invariant
search|lesson-merge-sort|w3-d3|Merge sort|v-sort|recursion|lc:sort-an-array|Split [3,1,2] into [3] and [1,2]; merging takes the smallest front value each time.|Implement merge for two sorted vectors, then recursive merge sort.|Merge Sort mode; follow split, recursive calls, and merge
search|w3-d4|w3-d4|Binary search|binary|v-array|lc:binary-search|Searching 7 in [1,3,5,7,9] checks 5, discards the left half, then finds 7.|Write iterative binary search with a stated interval convention and absent-value result.|Binary search on sorted arrays; skip binary search on the answer
search|w3-d5|w3-d5|Boundary search|binary|sorting|lc:find-first-and-last-position-of-element-in-sorted-array|In [1,2,2,2,4], the first 2 is at 1 and the first value greater than 2 is at 4.|Implement lower_bound and upper_bound logic; derive the last occurrence from them.|First true / lower-bound binary search
linear|w4-d1|w4-d1|Linked-list anatomy|v-list|references|hr:print-the-elements-of-a-linked-list|In 4 → 8 → null, visiting a node then following next prints 4,8.|Create a Node struct and traverse without changing the head. Draw ownership and links.|Singly Linked List: traversal and node pointers
linear|w4-d2|w4-d2|List insertion|v-list|references|hr:insert-a-node-at-the-tail-of-a-linked-list|Append 9 to 4 → 8 by setting the old tail's next to the new node; the new next is null.|Implement head and tail insertion, including an empty list. Release allocated nodes in local tests.|Singly Linked List: insert at head and tail
linear|w4-d3|w4-d3|Stacks|stack-queue|v-list|lc:valid-parentheses|For "([])", push ( and [, then pop matching ] and ); the stack ends empty.|Implement push/pop with vector, then check bracket matching.|00:01:40–00:15:39 · vector and linked-list stacks
linear|lesson-queue-basics|w4-d4|Queue operations|stack-queue|v-list|lc:number-of-students-unable-to-eat-lunch|Enqueue 4, then 8; the first dequeue returns 4. A stack would return 8.|Trace a std::queue simulation; use a no-progress counter to stop a full unsuccessful rotation.|00:15:39–00:30:24 · queue implementation
linear|lesson-two-stack-queue|w4-d4|A queue from two stacks|stack-queue|v-list|lc:implement-queue-using-stacks|After pushing 1,2 into the input stack, transfer both to the output stack; its top is 1.|Use two stacks; transfer only when the output stack is empty. Explain amortised cost.|Compare stack order with FIFO queue order
linear|w4-d5|w4-d5|Monotonic stacks|monotonic|v-list|lc:next-greater-element-i|For [2,1,3], 3 resolves both pending values 1 and 2; unresolved values have no greater element.|Keep a decreasing stack of indices and fill next-greater answers when popping.|Monotonic stack section; derive the decreasing-order rule and trace next-greater values
backtracking|w5-d2|w5-d2|Subsets by choices|recursion|v-recursion|lc:subsets|For [1,2], include/exclude choices generate [],[1],[2],[1,2].|Generate subsets by choosing whether to include each value; copy the path at a leaf.|00:36:56–end · choosing a subset
backtracking|w5-d3|w5-d3|Permutations|permutations|v-recursion|lc:permutations|For [1,2], choose 1 then 2, undo, then choose 2 then 1.|Generate permutations with a used array; undo both the path and the used flag.|00:37:18–end · permutations, implementation, and recursive call tree
backtracking|lesson-pruning|w5-d6|Pruning a search|backtrack|v-recursion|lc:combination-sum|With candidates [2,3] and target 4, [2,2] succeeds; a partial sum above 4 can stop because all values are positive.|Generate nondecreasing combinations and stop when the remaining target is negative.|00:19:15–00:29:05 · compare a naive and smarter solver
trees|w6-d1|w6-d1|Tree traversals|m-tree|v-tree|lc:binary-tree-preorder-traversal|For root 2 with children 1 and 3: preorder is 2,1,3; inorder is 1,2,3; postorder is 1,3,2.|Implement all three DFS traversals with a null base case.|Binary tree representation and traversal; leave balancing for the extension
trees|lesson-tree-depth|w6-d2|Tree depth|m-tree|v-tree|lc:maximum-depth-of-binary-tree|A leaf has depth 1 because both children have depth 0; its parent adds one to the larger child depth.|Implement maximum depth and trace the recursion on an uneven tree.|Recursive tree traversal and subtree results
trees|lesson-tree-balance|w6-d2|Tree balance|m-tree|v-tree|lc:balanced-binary-tree|A chain of three nodes is unbalanced at its root: child heights differ by 2.|Return subtree height and an imbalance marker in one traversal.|Subtree height; distinguish checking balance from performing rotations
trees|w6-d3|w6-d3|Binary search trees|m-tree|v-tree|lc:search-in-a-binary-search-tree|Searching 6 in a BST rooted at 4 moves right; at 7 it moves left.|Implement search and insertion under a stated duplicate policy.|BST ordering and search; use the unbalanced BST mode
trees|lesson-heap-basics|w6-d4|Heap operations|m-heap|v-heap|lc:last-stone-weight|In max-heap [9,4,7], removing 9 restores 7 at the root after repairing heap order.|Trace push and pop, then use std::priority_queue to simulate stone collisions.|Heap property, array representation, and insertion/removal
trees|w6-d4|w6-d4|Top k with heaps|m-heap|v-heap|lc:kth-largest-element-in-an-array|For [3,1,5,2] and k=2, a size-two min-heap ends with [3,5]; its root is the second largest.|Maintain a min-heap of k values and explain why smaller candidates can be discarded.|Priority queues and bounded-heap selection
trees|w6-d5|w6-d5|Heap pop practice|m-heap|v-heap|lc:last-stone-weight|Stones [2,7,4] become [2,3] after smashing 7 and 4, then [1].|Re-solve the heap simulation without notes; compare a repeated-sort baseline.|Heap removal and restoring the invariant
trees|lesson-trie|-|Prefix trees|trie|string|lc:implement-trie-prefix-tree|Inserting "cat" and "car" shares c → a; different final edges identify the words.|Build a trie with 26 child indices and an end-of-word flag; distinguish search from startsWith.|Trie section in the lexicon case study; focus on prefix sharing and word-end flags
graphs|lesson-graph-representation|w7-d1|Graph representation|graphs|v-graph|lc:find-center-of-star-graph|Edges (0,1),(0,2) give adjacency lists 0:[1,2], 1:[0], 2:[0] in an undirected graph.|Build an adjacency list and calculate degrees before solving the star-centre question.|Vertices, edges, adjacency lists, and directed versus undirected graphs
graphs|w7-d2|w7-d2|Depth-first search|m-dfs|v-graph|lc:number-of-islands|In a grid with two separated land clusters, one DFS marks only its own cluster; a second start counts the other.|Implement visited tracking and four-direction flood fill; consider an explicit stack for large grids.|DFS discovery and visited state
graphs|w7-d3|w7-d3|Breadth-first search|m-bfs|v-graph|lc:shortest-path-in-binary-matrix|In an open 2×2 grid, diagonal movement reaches the opposite corner in two visited cells.|Use a queue of cells and distances; mark cells when enqueuing, not when dequeuing.|BFS layers and unweighted shortest paths
graphs|w7-d4|w7-d4|Connected components|m-dfs|v-graph|cses:1192|For edges (0,1) and (2,3), starting a traversal from each unvisited node counts two components.|Wrap a traversal in a loop over all starting locations. Test isolated nodes or cells.|DFS forests and restarting from unvisited vertices
graphs|lesson-graph-cycles|w7-d5|Graph cycles|m-dfs|v-graph|cses:1669|In 0–1–2–0, encountering an already visited neighbour other than the parent closes a cycle.|Detect an undirected cycle and reconstruct it using parent pointers.|DFS parent edges and cycle detection; distinguish directed cycles
graphs|w8-d1|w8-d1|Topological ordering|topo|m-dfs|lc:course-schedule|For prerequisites 0→1→2, removing indegree-zero courses gives 0,1,2; adding 2→0 prevents a full order.|Implement Kahn's algorithm and compare processed count with the vertex count.|DAG ordering; contrast DFS finish order with an indegree queue
greedy|w9-d1|w9-d1|Greedy choices and proof|greedy|sorting|lc:assign-cookies|For appetites [1,3] and cookies [1,2], feeding appetite 1 with cookie 1 leaves the best remaining chance for 3.|Sort both arrays and match the smallest satisfiable appetite. State an exchange argument.|Local choices and counterexamples
greedy|w9-d2|w9-d2|Activity selection|intervals|greedy|cses:1629|Between intervals [1,3],[2,5],[3,4], choosing earliest finish allows [1,3] then [3,4].|Sort by finish time; accept an interval only when it starts after or at the previous finish.|Movie Festival section and earliest-finish argument
greedy|w9-d3|w9-d3|Merge intervals|merge-intervals|sorting|lc:merge-intervals|Sorted [1,3],[2,6],[8,9] becomes [1,6],[8,9] by extending the current right boundary.|Sort by start and merge overlaps; explicitly decide whether touching endpoints merge.|Sorting intervals; apply the current-merged-range invariant
greedy|lesson-overlap|w9-d4|Overlapping intervals|intervals|sorting|cses:1619|Visits [1,4] and [2,3] produce event counts 1,2,1,0; the maximum is 2.|Sort arrival/departure events and track the maximum active count. CSES assumes all times are distinct; discuss tie ordering separately.|Restaurant Customers section; sweep events in chronological order
greedy|w9-d5|w9-d5|Reachability with greedy|greedy|arrays|lc:jump-game|For [2,0,1], index 0 reaches index 2; for [1,0,1], progress stops at index 1.|Track the farthest reachable index; stop if the current index is beyond it.|Greedy invariant: all indices up to the frontier are reachable
dp|w10-d1|w10-d1|Fibonacci three ways|m-dp|dp|lc:climbing-stairs|To reach stair 4, the final move comes from stair 3 or 2; with ways(0)=ways(1)=1, ways(4)=5.|Implement recursion, memoisation, and bottom-up counting; compare repeated states.|Fibonacci and subproblem design; skip DAG and bowling sections on the first pass
dp|lesson-dp-state|w10-d2|State and transition|dp|v-recursion|lc:min-cost-climbing-stairs|For costs [10,15,20], start at stair 1 and pay 15 to reach the top.|Define the meaning of dp[i] in words before writing the recurrence; test two stairs.|Memoisation, base cases, and bottom-up order
dp|w10-d3|w10-d3|Non-adjacent maximum|m-dp|dp|lc:house-robber|For [2,7,4], taking the middle gives 7; taking the ends gives 6, so choose 7.|Derive take/skip states, then reduce storage after the full table works.|Subproblem and recurrence design; apply it to an index and a take/skip decision
dp|w10-d4|w10-d4|Grid paths|grid-dp|v-recursion|lc:unique-paths|A 2×3 grid has 3 right/down paths; each interior cell adds the counts from above and left.|Fill a grid table with ones on the first row and column. Test a one-row grid.|Counting monotone paths; skip obstacles until the basic recurrence works
dp|w10-d5|w10-d5|Coin change|m-lcs|dp|lc:coin-change|For coins [1,3,4] and amount 6, greedy takes 4+1+1 but DP finds 3+3.|Define minimum coins for each amount and represent unreachable states safely.|Coins subproblem section; distinguish minimising coins from counting combinations
dp|lesson-knapsack|w11-d1|0/1 knapsack|knapsack|dp|cses:1158|With budget 5 and items (cost,value) (3,4),(2,3), choose both for value 7; each item is used once.|Build a two-dimensional item/budget table before trying descending one-dimensional updates.|0/1 knapsack; defer unbounded and advanced variants
dp|w11-d2|w11-d2|Longest common subsequence|m-lcs|grid-dp|lc:longest-common-subsequence|For "abc" and "ac", matching a and c gives length 2; a subsequence may skip b.|Define dp[i][j] for prefixes; compare match and skip transitions.|LCS section; skip LIS until this table is clear
dp|w11-d3|w11-d3|Edit distance|edit|grid-dp|lc:edit-distance|Changing "cat" to "cut" needs one replacement; changing "cat" to "at" needs one deletion.|Write insert/delete/replace transitions with empty-string base cases; minimise operation count.|Edit distance section only; leave parenthesisation and knapsack review optional
interviews|lesson-array-mock|w12-d1|Arrays mixed practice|interviews|pointers|lc:container-with-most-water|For heights [1,3,2], the outer pair holds 2; advancing the shorter side can reveal a better pair.|Spend 25 minutes choosing and explaining a pattern before checking any solution.|Topic revision and practising unfamiliar prompts
interviews|lesson-tree-graph-mock|w12-d2|Trees and graphs mixed practice|interviews|v-graph|lc:binary-tree-level-order-traversal|For root 1 with children 2,3, BFS produces [[1],[2,3]] by processing one queue-length batch at a time.|Explain why the representation is a tree, then implement level-order traversal in 25 minutes.|Clarifying the data model before choosing traversal
interviews|lesson-dp-greedy-mock|w12-d3|DP and greedy decisions|techniques|dp|lc:coin-change|Coins [1,3,4] and amount 6 disprove the largest-first greedy rule.|Give a greedy counterexample, derive a DP state, and test it without reading your old solution.|Counterexamples and a brute-force baseline before optimisation
interviews|lesson-resolve|w12-d4|Re-solve and explain|interviews|testing|lc:two-sum|In [3,3] with target 6, the two indices must be different; looking up before insertion handles this.|Re-solve Two Sum without notes, then one saved mistake. Record which clue you missed.|Revisiting earlier problems and checking boundaries
interviews|lesson-pattern-sheet|w12-d5|Your pattern sheet|techniques|interviews|lc:longest-substring-without-repeating-characters|The cue "longest contiguous segment with no duplicate" suggests a valid window with a frequency map.|Write cue, invariant, complexity, and trap for five patterns; validate the window entry on the assigned problem.|Recognising patterns while stating their assumptions
interviews|lesson-final-mock|w12-d6|Final mock and next steps|interviews|testing|lc:house-robber|For [2,1,1,2], taking the first and last gives 4; skipping adjacent values must preserve alternatives.|Use 35 minutes for House Robber and 35 for Number of Islands, then write a five-minute retrospective.|Mock interviews: explain, implement, test, and reflect
extensions|w5-d4|w5-d4|Bit operations|bits|variables|lc:number-of-1-bits|For 6 (110 binary), clearing the lowest set bit gives 4 (100), then 0: two set bits.|Implement bit tests and popcount on unsigned values; document shift limits.|AND, OR, XOR, shifts, and masks
extensions|lesson-bit-subsets|w5-d5|Bitmask subsets|bits|v-recursion|lc:subsets|For [a,b], masks 00,01,10,11 represent [],[a],[b],[a,b].|Enumerate masks from 0 to 2^n-1 for small n and output included values.|Use one bit per include/exclude choice; this is enumeration, not modular counting
extensions|w8-d3|w8-d3|Disjoint sets|dsu|v-graph|lc:number-of-provinces|Union(0,1) merges two sets; find(0)==find(1), while 2 stays separate.|Implement parent, find, union by size, and path compression.|Naive DSU before path compression and union by size
extensions|w8-d2|w8-d2|Dijkstra|dijkstra|v-graph|lc:network-delay-time|With 0→1 cost 2, 0→2 cost 7, and 1→2 cost 1, relaxing through 1 improves distance to 2 from 7 to 3.|Implement a min-priority queue of distances; discard stale entries and require nonnegative weights.|Relaxation and the settled-distance invariant
extensions|w8-d4|w8-d4|Minimum spanning tree|mst|dsu|cses:1675|Edges AB=1, BC=2, AC=5 connect all three vertices with AB and BC for total 3.|Implement Kruskal with DSU; detect when not all vertices can be connected.|Sorted edges and avoiding cycles
extensions|lesson-bellman|w8-d5|Bellman-Ford|bellman|dijkstra|cses:1197|Edges A→B=2, B→C=-3, C→A=0 form a negative cycle because their total is -1.|Relax all edges repeatedly; use a final changed vertex and parent links to reconstruct a negative cycle.|Edge relaxation and negative-cycle detection
extensions|lesson-avl|-|Balanced search trees|v-tree|m-tree|lc:balance-a-binary-search-tree|A skewed BST 1→2→3 can become root 2 with children 1,3 while preserving inorder order.|Trace AVL rotations; for the assignment, rebuild from sorted inorder values.|AVL mode: heights and rotations; contrast rotations with rebuilding
extensions|lesson-fenwick|-|Fenwick trees|fenwick|prefix|cses:1648|For [2,3,1], prefix(3)=6; increasing the second value by 2 changes it to 8.|Implement point-add and prefix-sum queries, then convert replacement updates to deltas.|One-based indexing and low-bit jumps
extensions|lesson-segment|-|Segment trees|segment|prefix|cses:1649|For [5,2,7,1], the minimum over indices 1..2 is 2; updating index 1 to 8 changes it to 7.|Build a range-min tree with point updates; test disjoint and singleton ranges.|Build, range query, and point update; skip lazy propagation
'''

titles = {
'1192':'Counting Rooms','1669':'Round Trip','1629':'Movie Festival','1619':'Restaurant Customers','1158':'Book Shop',
'1675':'Road Reparation','1197':'Cycle Finding','1648':'Dynamic Range Sum Queries','1649':'Dynamic Range Minimum Queries',
'cpp-input-and-output':'Input and Output','c-tutorial-conditional-if-else':'Conditional Statements','c-tutorial-for-loop':'For Loop','c-tutorial-functions':'Functions','c-tutorial-strings':'Strings','arrays-introduction':'Arrays Introduction',
'arrays-ds':'Arrays - DS','simple-array-sum':'Simple Array Sum','array-left-rotation':'Left Rotation','sparse-arrays':'Sparse Arrays','ctci-bubble-sort':'Sorting: Bubble Sort','insertionsort1':'Insertion Sort - Part 1','print-the-elements-of-a-linked-list':'Print the Elements of a Linked List','insert-a-node-at-the-tail-of-a-linked-list':'Insert a Node at the Tail of a Linked List',
}
def practice(spec):
    host, slug = spec.split(':')
    url = {'lc':f'https://leetcode.com/problems/{slug}/','hr':f'https://www.hackerrank.com/challenges/{slug}/problem','cses':f'https://cses.fi/problemset/task/{slug}'}[host]
    return {'title':titles.get(slug,slug.replace('-',' ').title()),'url':url,'access':'Free problem · free account required to submit','language':'Use C++17-compatible code','evidenceUrl':url}

data=[]
for row in rows.strip().splitlines():
    stage,id,old,title,primary,support,problem,example,exercise,section=row.split('|')
    data.append(dict(stageId=stage,id=id,legacyId=None if old=='-' else old,title=title,primary=primary,support=support,practice=practice(problem),example=example,exercise=exercise,section=section,checkpoint=False))

checkpoints = {
'readiness':('Write a small program using input, a function, a loop, vector, and string. Show three tests and explain one bug you fixed.','hr:arrays-introduction'),
'arrays':('Reverse a vector and scan a grid without notes. Compare O(n) and O(n²), test empty and singleton input, and explain your index boundaries.','lc:richest-customer-wealth'),
'patterns':('Solve a prefix-sum and a window example. Explain when negatives break a shrinking window and state time/space costs.','lc:subarray-sum-equals-k'),
'search':('Trace one recursion tree, implement merge, and binary-search an absent value. Explain termination, duplicate boundaries, and complexity.','lc:search-insert-position'),
'linear':('Draw an insertion, implement queue operations, and explain a stack invariant. Test empty structures and account for operation costs.','lc:valid-parentheses'),
'backtracking':('Generate subsets and permutations of three values. Explain choose/explore/undo, count the output, and test the empty input.','lc:subsets'),
'trees':('Implement preorder and BST search, then trace a heap pop. Explain height-dependent costs and test empty and skewed trees.','lc:binary-tree-inorder-traversal'),
'graphs':('Build an adjacency list and implement BFS. Explain O(V+E), test a disconnected graph, and reconstruct a shortest path.','cses:1667'),
'greedy':('Explain an exchange argument and a counterexample. Implement an interval sweep, discuss equal endpoints, and give sorting complexity.','cses:1619'),
'dp':('Define the states, transitions, base cases, and order for coin change and edit distance. Test unreachable and empty inputs; count table cells.','cses:1633'),
'interviews':('Explain an unfamiliar prompt, implement a baseline, improve it, and test boundaries aloud. Record knowledge versus time-management gaps.','lc:binary-tree-level-order-traversal'),
}
titles.update({'1667':'Message Route','1633':'Dice Combinations'})
output=[]
checkpoint_sources = {
 'readiness':('testing','loops','Boundary cases and branch coverage'),
 'arrays':('arrays','vector','Array traversal and indexed access; apply both to rows and columns'),
 'patterns':('prefix','maps','Range subtraction and storing previous prefix frequencies'),
 'search':('binary','sorting','Lower-bound search and termination'),
 'linear':('stack-queue','v-list','Stack and queue operations; test empty structures'),
 'backtracking':('recursion','v-recursion','00:36:56–end · choosing a subset'),
 'trees':('m-tree','v-tree','Tree representation and inorder traversal'),
 'graphs':('m-bfs','v-graph','BFS layers, parent pointers, and path reconstruction'),
 'greedy':('intervals','sorting','Restaurant Customers: sort events and track active intervals'),
 'dp':('m-dp','dp','Subproblem design, recurrence, base cases, and evaluation order'),
 'interviews':('interviews','testing','Mock interview structure and boundary testing'),
}
for stageId,stageTitle,description in stages:
    group=[d for d in data if d['stageId']==stageId]
    output.extend(group)
    if stageId in checkpoints:
        task,p=checkpoints[stageId]
        last=group[-1]
        primary,support,section=checkpoint_sources[stageId]
        output.append(dict(stageId=stageId,id=f'lesson-checkpoint-{stageId}',legacyId=None,title=f'{stageTitle}: checkpoint',primary=primary,support=support,practice=practice(p),example=last['example'],exercise=task,section=section,checkpoint=True))

# Keep explicit prerequisite edges independent of visual ordering. Optional topics branch from core.
previous=None
for d in output:
    d['prerequisites']=[previous] if previous else []
    if d['stageId']!='extensions': previous=d['id']
extras={
'w5-d4':['lesson-checkpoint-readiness'], 'lesson-bit-subsets':['w5-d4','w5-d2'],
'w8-d3':['lesson-checkpoint-graphs'], 'w8-d2':['lesson-checkpoint-graphs','w6-d4'],
'w8-d4':['w8-d3','lesson-checkpoint-greedy'], 'lesson-bellman':['w8-d2'],
'lesson-avl':['lesson-checkpoint-trees'], 'lesson-fenwick':['w1-d5','w5-d4'], 'lesson-segment':['lesson-checkpoint-trees','w1-d5'],
}
for d in output:
    if d['id'] in extras: d['prerequisites']=extras[d['id']]

stage_data=[dict(id=i,title=t,description=d,optional=i=='extensions') for i,t,d in stages]
(root/'client/src/lib/curriculumData.ts').write_text('// Original lesson tasks and worked examples. Stable IDs must not be reassigned.\nexport const stageData = '+json.dumps(stage_data,indent=2)+';\n\nexport const lessonData = '+json.dumps(output,indent=2)+';\n',encoding='utf-8')
print(f'Authored {len(output)} lessons across {len(stages)} stages')
