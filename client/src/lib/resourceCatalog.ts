export type StudyResource = {
  id: string;
  title: string;
  url: string;
  creator: string;
  format: "Article" | "Video" | "Visualization";
  language: string;
  codeLanguage: string;
  access: string;
  checkedOn: string;
  evidenceUrl: string;
  verification: string;
};

const resource = (id: string, title: string, url: string, creator: string, format: StudyResource["format"], codeLanguage: string): StudyResource => ({
  id, title, url, creator, format, codeLanguage, language: "English", access: "Free · no account needed to study",
  checkedOn: "2026-09-29", evidenceUrl: url,
  verification: "Publisher page and topic description checked; full video playback was not reviewed.",
});
const cpp = (id: string, title: string, slug: string) => resource(id, title, `https://www.learncpp.com/cpp-tutorial/${slug}/`, "Alex · LearnCpp", "Article", "C++");
const guide = (id: string, title: string, slug: string) => resource(id, title, `https://usaco.guide/${slug}`, "USACO Guide contributors", "Article", "C++ / Java / Python; select C++");
const visual = (id: string, title: string, slug: string) => resource(id, title, `https://visualgo.net/en/${slug}`, "Steven Halim and VisuAlgo team · NUS", "Visualization", "Pseudocode");
const cp = (id: string, title: string, slug: string) => resource(id, title, `https://cp-algorithms.com/${slug}.html`, "CP-Algorithms contributors", "Article", "C++");
const mit = (id: string, title: string, slug: string, creator: string) => resource(id, title, `https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/${slug}/`, `${creator} · MIT OpenCourseWare`, "Video", "Python / pseudocode; implement in C++17");
const stanford = (id: string, title: string, page: number) => resource(id, title, `https://see.stanford.edu/Course/CS106B/${page}`, "Julie Zelenski · Stanford SEE (2008 archive)", "Video", "C++ with Stanford libraries; use the STL bridge below");

export const resources: Record<string, StudyResource> = Object.fromEntries([
  cpp("variables", "1.3 — Introduction to objects and variables", "introduction-to-objects-and-variables"),
  cpp("io", "1.5 — Introduction to iostream: cout, cin, and endl", "introduction-to-iostream-cout-cin-and-endl"),
  cpp("conditions", "4.10 — Introduction to if statements", "introduction-to-if-statements"),
  cpp("loops", "8.10 — For statements", "for-statements"),
  cpp("functions", "2.1 — Introduction to functions", "introduction-to-functions"),
  cpp("testing", "9.1 — Introduction to testing your code", "introduction-to-testing-your-code"),
  cpp("vector", "16.2 — Introduction to std::vector and list constructors", "introduction-to-stdvector-and-list-constructors"),
  cpp("string", "5.7 — Introduction to std::string", "introduction-to-stdstring"),
  cpp("references", "12.5 — Pass by lvalue reference", "pass-by-lvalue-reference"),
  guide("arrays", "Introduction to Data Structures", "bronze/intro-ds"),
  guide("maps", "Introduction to Sets & Maps", "bronze/intro-sets"),
  guide("prefix", "Introduction to Prefix Sums", "silver/prefix-sums"),
  guide("pointers", "Two Pointers", "silver/two-pointers"),
  guide("sorting", "Introduction to Sorting", "bronze/intro-sorting"),
  guide("binary", "Binary Search", "silver/binary-search"),
  guide("graphs", "Introduction to Graphs", "bronze/intro-graphs"),
  guide("greedy", "Introduction to Greedy Algorithms", "bronze/intro-greedy"),
  guide("intervals", "Greedy Algorithms with Sorting", "silver/greedy-sorting"),
  guide("knapsack", "Knapsack DP", "gold/knapsack"),
  guide("grid-dp", "Paths on Grids", "gold/paths-grids"),
  guide("bits", "Intro to Bitwise Operators", "silver/intro-bitwise"),
  guide("monotonic", "Stacks", "gold/stacks"),
  visual("v-array", "Array", "array"),
  visual("v-list", "Linked List (Single, Doubly), Stack, Queue, Deque", "list"),
  visual("v-tree", "Binary Search Tree, AVL Tree", "bst"),
  visual("v-heap", "Binary Heap (Priority Queue)", "heap"),
  visual("v-recursion", "Recursion Tree and DAG (Dynamic Programming/DP)", "recursion"),
  visual("v-graph", "Graph Traversal (Depth/Breadth First Search)", "dfsbfs"),
  visual("v-sort", "Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix)", "sorting"),
  visual("v-hash", "Hash Table", "hashtable"),
  cp("dp", "Introduction to Dynamic Programming", "dynamic_programming/intro-to-dp"),
  cp("topo", "Topological Sorting", "graph/topological-sort"),
  cp("dsu", "Disjoint Set Union", "data_structures/disjoint_set_union"),
  cp("dijkstra", "Dijkstra - finding shortest paths from given vertex", "graph/dijkstra"),
  cp("bellman", "Bellman-Ford - finding shortest paths with negative weights", "graph/bellman_ford"),
  cp("mst", "Minimum Spanning Tree - Kruskal", "graph/mst_kruskal"),
  cp("fenwick", "Fenwick Tree", "data_structures/fenwick"),
  cp("segment", "Segment Tree", "data_structures/segment_tree"),
  stanford("recursion", "Lecture 8 - Common Mistakes Stumbled Upon: 'I'terator", 150),
  stanford("permutations", "Lecture 9 - Thinking Recursively", 163),
  stanford("trie", "Lecture 25 - Lexicon Case Study", 148),
  stanford("backtrack", "Lecture 11 - Backtracking Pseudocode", 149),
  stanford("stack-queue", "Lecture 20 - Live Coding: Recap of the Vector-based Implementation for Stack", 159),
  stanford("analysis", "Lecture 14 - Algorithm Analysis", 164),
  mit("m-array", "Lecture 2: Data Structures and Dynamic Arrays", "lecture-2-data-structures-and-dynamic-arrays", "Erik Demaine"),
  mit("m-hash", "Lecture 4: Hashing", "lecture-4-hashing", "Jason Ku"),
  mit("m-tree", "Lecture 6: Binary Trees, Part 1", "lecture-6-binary-trees-part-1", "Erik Demaine"),
  mit("m-heap", "Lecture 8: Binary Heaps", "lecture-8-binary-heaps", "Erik Demaine"),
  mit("m-bfs", "Lecture 9: Breadth-First Search", "lecture-9-breadth-first-search", "Justin Solomon"),
  mit("m-dfs", "Lecture 10: Depth-First Search", "lecture-10-depth-first-search", "Justin Solomon"),
  mit("m-dp", "Lecture 15: Dynamic Programming, Part 1: SRTBOT, Fib, DAGs, Bowling", "lecture-15-dynamic-programming-part-1-srtbot-fib-dags-bowling", "Erik Demaine"),
  mit("m-lcs", "Lecture 16: Dynamic Programming, Part 2: LCS, LIS, Coins", "lecture-16-dynamic-programming-part-2-lcs-lis-coins", "Erik Demaine"),
  resource("edit", "Lecture 21: Dynamic Programming III: Parenthesization, Edit Distance, Knapsack", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-21-dp-iii-parenthesization-edit-distance-knapsack/", "Erik Demaine · MIT OpenCourseWare", "Video", "Python / pseudocode; implement in C++17"),
  resource("fiset", "Learn Data Structures from a Google Engineer - A Free 8-hour Course", "https://www.freecodecamp.org/news/learn-data-structures-from-a-google-engineer/", "William Fiset · published by freeCodeCamp (2019)", "Video", "Java; concepts transfer to C++"),
  resource("interviews", "Coding interview study plan - what to study and practice based on time left", "https://www.techinterviewhandbook.org/coding-interview-study-plan/", "Yangshun Tay · Tech Interview Handbook", "Article", "Language independent"),
  resource("techniques", "Coding interview techniques", "https://www.techinterviewhandbook.org/coding-interview-techniques/", "Yangshun Tay · Tech Interview Handbook", "Article", "Language independent"),
  resource("merge-intervals", "Interval cheatsheet for coding interviews", "https://www.techinterviewhandbook.org/algorithms/interval/", "Yangshun Tay · Tech Interview Handbook", "Article", "Language independent"),
].map(item => [item.id, item]));
