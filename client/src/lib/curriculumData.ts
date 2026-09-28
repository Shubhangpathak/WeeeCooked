// Original lesson tasks and worked examples. Stable IDs must not be reassigned.
export const stageData = [
  {
    "id": "readiness",
    "title": "Programming readiness",
    "description": "Run and debug small C++17 programs before starting DSA.",
    "optional": false
  },
  {
    "id": "arrays",
    "title": "Arrays and strings",
    "description": "Traverse and transform data; count the work your code performs.",
    "optional": false
  },
  {
    "id": "patterns",
    "title": "Hashing and sequence patterns",
    "description": "Use stored information and moving boundaries to avoid repeated work.",
    "optional": false
  },
  {
    "id": "search",
    "title": "Recursion, sorting, and searching",
    "description": "Understand call stacks before divide and conquer.",
    "optional": false
  },
  {
    "id": "linear",
    "title": "Linear structures",
    "description": "Follow links and understand stack and queue operations before combining them.",
    "optional": false
  },
  {
    "id": "backtracking",
    "title": "Backtracking",
    "description": "Represent a choice, explore it, and restore state.",
    "optional": false
  },
  {
    "id": "trees",
    "title": "Trees and heaps",
    "description": "Navigate hierarchy and keep the most useful item available.",
    "optional": false
  },
  {
    "id": "graphs",
    "title": "Graphs",
    "description": "Represent connections, explore them, and order dependencies.",
    "optional": false
  },
  {
    "id": "greedy",
    "title": "Greedy and intervals",
    "description": "Justify local choices and reason about overlapping ranges.",
    "optional": false
  },
  {
    "id": "dp",
    "title": "Dynamic programming",
    "description": "Describe repeated subproblems before writing a table.",
    "optional": false
  },
  {
    "id": "interviews",
    "title": "Interview practice",
    "description": "Combine recognition, explanation, implementation, and testing.",
    "optional": false
  },
  {
    "id": "extensions",
    "title": "Optional extensions",
    "description": "Go deeper after the core; these lessons do not affect core completion.",
    "optional": true
  }
];

export const lessonData = [
  {
    "stageId": "readiness",
    "id": "lesson-variables",
    "legacyId": null,
    "title": "Variables and input",
    "primary": "variables",
    "support": "io",
    "practice": {
      "title": "Input and Output",
      "url": "https://www.hackerrank.com/challenges/cpp-input-and-output/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/cpp-input-and-output/problem"
    },
    "example": "With a=4 and b=7, a+b is 11; changing a to 2 makes the sum 9.",
    "exercise": "Read two integers and print their sum. Run with positive, zero, and negative inputs.",
    "section": "Values, types, and variable definitions; then cin and cout",
    "checkpoint": false,
    "prerequisites": []
  },
  {
    "stageId": "readiness",
    "id": "lesson-conditions",
    "legacyId": null,
    "title": "Conditions and decisions",
    "primary": "conditions",
    "support": "variables",
    "practice": {
      "title": "Conditional Statements",
      "url": "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem"
    },
    "example": "For x=-2, x<0 is true; for x=0, the zero branch should run.",
    "exercise": "Write a function that classifies a number as negative, zero, or positive.",
    "section": "if, else, and Boolean conditions",
    "checkpoint": false,
    "prerequisites": [
      "lesson-variables"
    ]
  },
  {
    "stageId": "readiness",
    "id": "lesson-loops",
    "legacyId": null,
    "title": "Loops and running totals",
    "primary": "loops",
    "support": "io",
    "practice": {
      "title": "For Loop",
      "url": "https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem"
    },
    "example": "For 1,2,3 the running total changes 0 \u2192 1 \u2192 3 \u2192 6.",
    "exercise": "Sum numbers from 1 to n, then count only even numbers. Test n=0 and n=1.",
    "section": "Loop initialisation, stopping condition, and increment",
    "checkpoint": false,
    "prerequisites": [
      "lesson-conditions"
    ]
  },
  {
    "stageId": "readiness",
    "id": "lesson-functions",
    "legacyId": null,
    "title": "Functions and references",
    "primary": "functions",
    "support": "references",
    "practice": {
      "title": "Functions",
      "url": "https://www.hackerrank.com/challenges/c-tutorial-functions/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/c-tutorial-functions/problem"
    },
    "example": "A function max2(3,7) returns 7; changing a reference changes the caller's variable.",
    "exercise": "Implement max2 and a swap-by-reference function; distinguish return values from side effects.",
    "section": "Function calls and return flow; reference parameters",
    "checkpoint": false,
    "prerequisites": [
      "lesson-loops"
    ]
  },
  {
    "stageId": "readiness",
    "id": "lesson-vector",
    "legacyId": null,
    "title": "Vectors and strings",
    "primary": "vector",
    "support": "string",
    "practice": {
      "title": "Strings",
      "url": "https://www.hackerrank.com/challenges/c-tutorial-strings/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/c-tutorial-strings/problem"
    },
    "example": "The vector {4,8,1} has size 3 and last index 2; the string \"cat\" also has three indexed elements.",
    "exercise": "Create a vector, append a value, print every element, and count characters in a string.",
    "section": "Vector construction and indexed access; string size and indexing",
    "checkpoint": false,
    "prerequisites": [
      "lesson-functions"
    ]
  },
  {
    "stageId": "readiness",
    "id": "lesson-testing",
    "legacyId": null,
    "title": "Debugging and small tests",
    "primary": "testing",
    "support": "loops",
    "practice": {
      "title": "Arrays Introduction",
      "url": "https://www.hackerrank.com/challenges/arrays-introduction/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/arrays-introduction/problem"
    },
    "example": "A loop with i<=size reads one element too far; i<size visits valid indices only.",
    "exercise": "Write a reverse-print loop. Predict outputs for empty, one-item, and three-item vectors before running it.",
    "section": "Branch coverage, boundary cases, and checking predicted output",
    "checkpoint": false,
    "prerequisites": [
      "lesson-vector"
    ]
  },
  {
    "stageId": "readiness",
    "id": "lesson-checkpoint-readiness",
    "legacyId": null,
    "title": "Programming readiness: checkpoint",
    "primary": "testing",
    "support": "loops",
    "practice": {
      "title": "Arrays Introduction",
      "url": "https://www.hackerrank.com/challenges/arrays-introduction/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/arrays-introduction/problem"
    },
    "example": "A loop with i<=size reads one element too far; i<size visits valid indices only.",
    "exercise": "Write a small program using input, a function, a loop, vector, and string. Show three tests and explain one bug you fixed.",
    "section": "Boundary cases and branch coverage",
    "checkpoint": true,
    "prerequisites": [
      "lesson-testing"
    ]
  },
  {
    "stageId": "arrays",
    "id": "w1-d2",
    "legacyId": "w1-d2",
    "title": "Arrays in memory",
    "primary": "arrays",
    "support": "v-array",
    "practice": {
      "title": "Arrays - DS",
      "url": "https://www.hackerrank.com/challenges/arrays-ds/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/arrays-ds/problem"
    },
    "example": "Insert 9 at index 1 in [2,4,6]: shift 6 and 4 right to get [2,9,4,6].",
    "exercise": "Trace access, append, insertion, and deletion. Implement insertion into a vector.",
    "section": "Arrays, dynamic arrays, and inserting/erasing; skip tuples",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-readiness"
    ]
  },
  {
    "stageId": "arrays",
    "id": "lesson-array-scans",
    "legacyId": null,
    "title": "Linear scans",
    "primary": "arrays",
    "support": "vector",
    "practice": {
      "title": "Simple Array Sum",
      "url": "https://www.hackerrank.com/challenges/simple-array-sum/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
    },
    "example": "Scanning [3,-1,5] visits three values; the running sum becomes 3,2,7.",
    "exercise": "Implement sum and maximum scans; define how maximum handles an empty vector.",
    "section": "Iterating over an array",
    "checkpoint": false,
    "prerequisites": [
      "w1-d2"
    ]
  },
  {
    "stageId": "arrays",
    "id": "w1-d1",
    "legacyId": "w1-d1",
    "title": "How algorithms grow",
    "primary": "analysis",
    "support": "v-array",
    "practice": {
      "title": "Simple Array Sum",
      "url": "https://www.hackerrank.com/challenges/simple-array-sum/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/simple-array-sum/problem"
    },
    "example": "A scan of 4 values takes 4 visits; all ordered pairs take 16. Doubling n doubles one and quadruples the other.",
    "exercise": "Compare a max scan and nested pair check using an operation counter.",
    "section": "Algorithm analysis: count operations before reading asymptotic notation",
    "checkpoint": false,
    "prerequisites": [
      "lesson-array-scans"
    ]
  },
  {
    "stageId": "arrays",
    "id": "lesson-grid-basics",
    "legacyId": "w1-d3",
    "title": "2D grids",
    "primary": "arrays",
    "support": "vector",
    "practice": {
      "title": "Richest Customer Wealth",
      "url": "https://leetcode.com/problems/richest-customer-wealth/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/richest-customer-wealth/"
    },
    "example": "For [[1,2],[3,4]], row sums are 3 and 7; the maximum row sum is 7.",
    "exercise": "Traverse rows and columns separately, then compute each row sum.",
    "section": "Nested vectors: apply indexed access twice",
    "checkpoint": false,
    "prerequisites": [
      "w1-d1"
    ]
  },
  {
    "stageId": "arrays",
    "id": "lesson-string-scan",
    "legacyId": "w2-d1",
    "title": "Strings as indexed data",
    "primary": "string",
    "support": "arrays",
    "practice": {
      "title": "Score Of A String",
      "url": "https://leetcode.com/problems/score-of-a-string/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/score-of-a-string/"
    },
    "example": "In \"aba\", the adjacent character differences are 1 and 1, so the score is 2.",
    "exercise": "Walk adjacent characters and compute absolute differences; handle strings shorter than two characters.",
    "section": "String indexing and size; no two-pointer assumptions yet",
    "checkpoint": false,
    "prerequisites": [
      "lesson-grid-basics"
    ]
  },
  {
    "stageId": "arrays",
    "id": "w1-d4",
    "legacyId": "w1-d4",
    "title": "Rotation by k",
    "primary": "arrays",
    "support": "v-array",
    "practice": {
      "title": "Left Rotation",
      "url": "https://www.hackerrank.com/challenges/array-left-rotation/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/array-left-rotation/problem"
    },
    "example": "Left-rotating [1,2,3,4] by 1 gives [2,3,4,1]; by 5 gives the same result.",
    "exercise": "Implement rotation with a temporary vector first; normalise k only after checking for empty input.",
    "section": "Array indexing and translating positions",
    "checkpoint": false,
    "prerequisites": [
      "lesson-string-scan"
    ]
  },
  {
    "stageId": "arrays",
    "id": "lesson-checkpoint-arrays",
    "legacyId": null,
    "title": "Arrays and strings: checkpoint",
    "primary": "arrays",
    "support": "vector",
    "practice": {
      "title": "Richest Customer Wealth",
      "url": "https://leetcode.com/problems/richest-customer-wealth/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/richest-customer-wealth/"
    },
    "example": "Left-rotating [1,2,3,4] by 1 gives [2,3,4,1]; by 5 gives the same result.",
    "exercise": "Reverse a vector and scan a grid without notes. Compare O(n) and O(n\u00b2), test empty and singleton input, and explain your index boundaries.",
    "section": "Array traversal and indexed access; apply both to rows and columns",
    "checkpoint": true,
    "prerequisites": [
      "w1-d4"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w2-d2",
    "legacyId": "w2-d2",
    "title": "Frequency maps",
    "primary": "maps",
    "support": "v-hash",
    "practice": {
      "title": "Sparse Arrays",
      "url": "https://www.hackerrank.com/challenges/sparse-arrays/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/sparse-arrays/problem"
    },
    "example": "For [\"a\",\"b\",\"a\"], the count of \"a\" is 2 and missing \"c\" is 0.",
    "exercise": "Build an unordered_map<string,int> of counts and answer queries.",
    "section": "Maps and hashsets; choose C++ and skip ordered-set implementation",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-arrays"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w2-d3",
    "legacyId": "w2-d3",
    "title": "Anagrams",
    "primary": "maps",
    "support": "string",
    "practice": {
      "title": "Valid Anagram",
      "url": "https://leetcode.com/problems/valid-anagram/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/valid-anagram/"
    },
    "example": "\"tea\" and \"eat\" have the same counts; \"tea\" and \"tee\" do not.",
    "exercise": "Compare lowercase letter frequencies. Explain how the assumption changes for Unicode.",
    "section": "Frequency counting with a map or fixed alphabet array",
    "checkpoint": false,
    "prerequisites": [
      "w2-d2"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w2-d4",
    "legacyId": "w2-d4",
    "title": "Two sum",
    "primary": "maps",
    "support": "v-hash",
    "practice": {
      "title": "Two Sum",
      "url": "https://leetcode.com/problems/two-sum/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/two-sum/"
    },
    "example": "For [2,7,11] and target 9, seeing 7 finds the earlier complement 2.",
    "exercise": "Implement the quadratic baseline, then store previously seen values and indices.",
    "section": "Map lookup and insertion; query before inserting the current element",
    "checkpoint": false,
    "prerequisites": [
      "w2-d3"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w1-d5",
    "legacyId": "w1-d5",
    "title": "Prefix sums",
    "primary": "prefix",
    "support": "v-array",
    "practice": {
      "title": "Running Sum Of 1D Array",
      "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/running-sum-of-1d-array/"
    },
    "example": "For [2,3,1], prefix totals with leading zero are [0,2,5,6]; sum of indices 1..2 is 6-2=4.",
    "exercise": "Build a leading-zero prefix array and answer three inclusive range queries.",
    "section": "Prefix sum definition and range subtraction",
    "checkpoint": false,
    "prerequisites": [
      "w2-d4"
    ]
  },
  {
    "stageId": "patterns",
    "id": "lesson-two-pointers",
    "legacyId": "w2-d1",
    "title": "Two pointers",
    "primary": "pointers",
    "support": "string",
    "practice": {
      "title": "Valid Palindrome",
      "url": "https://leetcode.com/problems/valid-palindrome/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/valid-palindrome/"
    },
    "example": "For \"abba\", compare a/a, then b/b; the pointers meet without a mismatch.",
    "exercise": "Check an ASCII palindrome with inward-moving pointers, then add filtering and case normalisation.",
    "section": "Two pointers moving from opposite ends",
    "checkpoint": false,
    "prerequisites": [
      "w1-d5"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w11-d4",
    "legacyId": "w11-d4",
    "title": "Fixed sliding windows",
    "primary": "pointers",
    "support": "prefix",
    "practice": {
      "title": "Maximum Average Subarray I",
      "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/maximum-average-subarray-i/"
    },
    "example": "For [2,1,4,3] and k=2, sums are 3,5,7; each move removes one value and adds one.",
    "exercise": "Implement a length-k maximum-sum window; test k=1 and k=n.",
    "section": "Sliding window section: fixed-length window first",
    "checkpoint": false,
    "prerequisites": [
      "lesson-two-pointers"
    ]
  },
  {
    "stageId": "patterns",
    "id": "w11-d5",
    "legacyId": "w11-d5",
    "title": "Variable sliding windows",
    "primary": "pointers",
    "support": "maps",
    "practice": {
      "title": "Longest Substring Without Repeating Characters",
      "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    "example": "In \"abca\", adding the second a moves the left boundary past the first a; the best length stays 3.",
    "exercise": "Track character counts while shrinking until all characters in the window are unique.",
    "section": "Sliding window section: maintain a validity condition",
    "checkpoint": false,
    "prerequisites": [
      "w11-d4"
    ]
  },
  {
    "stageId": "patterns",
    "id": "lesson-prefix-hash",
    "legacyId": "w2-d5",
    "title": "Prefix sums with hashing",
    "primary": "prefix",
    "support": "maps",
    "practice": {
      "title": "Subarray Sum Equals K",
      "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    "example": "For [1,-1,1] and target 1, matching earlier prefix sums counts three subarrays.",
    "exercise": "Count subarrays with sum k using prefix frequencies. Explain why a positive-only window fails with negatives.",
    "section": "Combine prefix differences with frequency-map lookup",
    "checkpoint": false,
    "prerequisites": [
      "w11-d5"
    ]
  },
  {
    "stageId": "patterns",
    "id": "lesson-checkpoint-patterns",
    "legacyId": null,
    "title": "Hashing and sequence patterns: checkpoint",
    "primary": "prefix",
    "support": "maps",
    "practice": {
      "title": "Subarray Sum Equals K",
      "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    "example": "For [1,-1,1] and target 1, matching earlier prefix sums counts three subarrays.",
    "exercise": "Solve a prefix-sum and a window example. Explain when negatives break a shrinking window and state time/space costs.",
    "section": "Range subtraction and storing previous prefix frequencies",
    "checkpoint": true,
    "prerequisites": [
      "lesson-prefix-hash"
    ]
  },
  {
    "stageId": "search",
    "id": "lesson-recursion-basics",
    "legacyId": "w5-d1",
    "title": "Base cases and call stacks",
    "primary": "recursion",
    "support": "v-recursion",
    "practice": {
      "title": "Fibonacci Number",
      "url": "https://leetcode.com/problems/fibonacci-number/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/fibonacci-number/"
    },
    "example": "sum(3) waits for sum(2), then sum(1), then sum(0)=0; returns unwind to 1,3,6.",
    "exercise": "Implement recursive sum(0..n) and factorial for small nonnegative n. Draw every call.",
    "section": "00:00:29\u201300:14:20 \u00b7 recursion, powers, and call mechanics",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-patterns"
    ]
  },
  {
    "stageId": "search",
    "id": "lesson-elementary-sort",
    "legacyId": "w3-d1",
    "title": "Selection and bubble sort",
    "primary": "v-sort",
    "support": "sorting",
    "practice": {
      "title": "Sorting: Bubble Sort",
      "url": "https://www.hackerrank.com/challenges/ctci-bubble-sort/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/ctci-bubble-sort/problem"
    },
    "example": "Selection sort on [3,1,2] puts 1 first, then 2; bubble sort moves 3 to the end on its first pass.",
    "exercise": "Implement both algorithms and count comparisons and swaps.",
    "section": "Select Selection Sort and Bubble Sort separately; trace three values",
    "checkpoint": false,
    "prerequisites": [
      "lesson-recursion-basics"
    ]
  },
  {
    "stageId": "search",
    "id": "w3-d2",
    "legacyId": "w3-d2",
    "title": "Insertion sort",
    "primary": "v-sort",
    "support": "sorting",
    "practice": {
      "title": "Insertion Sort - Part 1",
      "url": "https://www.hackerrank.com/challenges/insertionsort1/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/insertionsort1/problem"
    },
    "example": "Inserting 2 into sorted [1,4,6] shifts 6 and 4, then fills the gap: [1,2,4,6].",
    "exercise": "Write insertion into a sorted prefix before sorting the entire vector.",
    "section": "Insertion Sort mode and its sorted-prefix invariant",
    "checkpoint": false,
    "prerequisites": [
      "lesson-elementary-sort"
    ]
  },
  {
    "stageId": "search",
    "id": "lesson-merge-sort",
    "legacyId": "w3-d3",
    "title": "Merge sort",
    "primary": "v-sort",
    "support": "recursion",
    "practice": {
      "title": "Sort An Array",
      "url": "https://leetcode.com/problems/sort-an-array/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/sort-an-array/"
    },
    "example": "Split [3,1,2] into [3] and [1,2]; merging takes the smallest front value each time.",
    "exercise": "Implement merge for two sorted vectors, then recursive merge sort.",
    "section": "Merge Sort mode; follow split, recursive calls, and merge",
    "checkpoint": false,
    "prerequisites": [
      "w3-d2"
    ]
  },
  {
    "stageId": "search",
    "id": "w3-d4",
    "legacyId": "w3-d4",
    "title": "Binary search",
    "primary": "binary",
    "support": "v-array",
    "practice": {
      "title": "Binary Search",
      "url": "https://leetcode.com/problems/binary-search/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/binary-search/"
    },
    "example": "Searching 7 in [1,3,5,7,9] checks 5, discards the left half, then finds 7.",
    "exercise": "Write iterative binary search with a stated interval convention and absent-value result.",
    "section": "Binary search on sorted arrays; skip binary search on the answer",
    "checkpoint": false,
    "prerequisites": [
      "lesson-merge-sort"
    ]
  },
  {
    "stageId": "search",
    "id": "w3-d5",
    "legacyId": "w3-d5",
    "title": "Boundary search",
    "primary": "binary",
    "support": "sorting",
    "practice": {
      "title": "Find First And Last Position Of Element In Sorted Array",
      "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
    },
    "example": "In [1,2,2,2,4], the first 2 is at 1 and the first value greater than 2 is at 4.",
    "exercise": "Implement lower_bound and upper_bound logic; derive the last occurrence from them.",
    "section": "First true / lower-bound binary search",
    "checkpoint": false,
    "prerequisites": [
      "w3-d4"
    ]
  },
  {
    "stageId": "search",
    "id": "lesson-checkpoint-search",
    "legacyId": null,
    "title": "Recursion, sorting, and searching: checkpoint",
    "primary": "binary",
    "support": "sorting",
    "practice": {
      "title": "Search Insert Position",
      "url": "https://leetcode.com/problems/search-insert-position/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/search-insert-position/"
    },
    "example": "In [1,2,2,2,4], the first 2 is at 1 and the first value greater than 2 is at 4.",
    "exercise": "Trace one recursion tree, implement merge, and binary-search an absent value. Explain termination, duplicate boundaries, and complexity.",
    "section": "Lower-bound search and termination",
    "checkpoint": true,
    "prerequisites": [
      "w3-d5"
    ]
  },
  {
    "stageId": "linear",
    "id": "w4-d1",
    "legacyId": "w4-d1",
    "title": "Linked-list anatomy",
    "primary": "v-list",
    "support": "references",
    "practice": {
      "title": "Print the Elements of a Linked List",
      "url": "https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem"
    },
    "example": "In 4 \u2192 8 \u2192 null, visiting a node then following next prints 4,8.",
    "exercise": "Create a Node struct and traverse without changing the head. Draw ownership and links.",
    "section": "Singly Linked List: traversal and node pointers",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-search"
    ]
  },
  {
    "stageId": "linear",
    "id": "w4-d2",
    "legacyId": "w4-d2",
    "title": "List insertion",
    "primary": "v-list",
    "support": "references",
    "practice": {
      "title": "Insert a Node at the Tail of a Linked List",
      "url": "https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem"
    },
    "example": "Append 9 to 4 \u2192 8 by setting the old tail's next to the new node; the new next is null.",
    "exercise": "Implement head and tail insertion, including an empty list. Release allocated nodes in local tests.",
    "section": "Singly Linked List: insert at head and tail",
    "checkpoint": false,
    "prerequisites": [
      "w4-d1"
    ]
  },
  {
    "stageId": "linear",
    "id": "w4-d3",
    "legacyId": "w4-d3",
    "title": "Stacks",
    "primary": "stack-queue",
    "support": "v-list",
    "practice": {
      "title": "Valid Parentheses",
      "url": "https://leetcode.com/problems/valid-parentheses/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/valid-parentheses/"
    },
    "example": "For \"([])\", push ( and [, then pop matching ] and ); the stack ends empty.",
    "exercise": "Implement push/pop with vector, then check bracket matching.",
    "section": "00:01:40\u201300:15:39 \u00b7 vector and linked-list stacks",
    "checkpoint": false,
    "prerequisites": [
      "w4-d2"
    ]
  },
  {
    "stageId": "linear",
    "id": "lesson-queue-basics",
    "legacyId": "w4-d4",
    "title": "Queue operations",
    "primary": "stack-queue",
    "support": "v-list",
    "practice": {
      "title": "Number Of Students Unable To Eat Lunch",
      "url": "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/"
    },
    "example": "Enqueue 4, then 8; the first dequeue returns 4. A stack would return 8.",
    "exercise": "Trace a std::queue simulation; use a no-progress counter to stop a full unsuccessful rotation.",
    "section": "00:15:39\u201300:30:24 \u00b7 queue implementation",
    "checkpoint": false,
    "prerequisites": [
      "w4-d3"
    ]
  },
  {
    "stageId": "linear",
    "id": "lesson-two-stack-queue",
    "legacyId": "w4-d4",
    "title": "A queue from two stacks",
    "primary": "stack-queue",
    "support": "v-list",
    "practice": {
      "title": "Implement Queue Using Stacks",
      "url": "https://leetcode.com/problems/implement-queue-using-stacks/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/implement-queue-using-stacks/"
    },
    "example": "After pushing 1,2 into the input stack, transfer both to the output stack; its top is 1.",
    "exercise": "Use two stacks; transfer only when the output stack is empty. Explain amortised cost.",
    "section": "Compare stack order with FIFO queue order",
    "checkpoint": false,
    "prerequisites": [
      "lesson-queue-basics"
    ]
  },
  {
    "stageId": "linear",
    "id": "w4-d5",
    "legacyId": "w4-d5",
    "title": "Monotonic stacks",
    "primary": "monotonic",
    "support": "v-list",
    "practice": {
      "title": "Next Greater Element I",
      "url": "https://leetcode.com/problems/next-greater-element-i/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/next-greater-element-i/"
    },
    "example": "For [2,1,3], 3 resolves both pending values 1 and 2; unresolved values have no greater element.",
    "exercise": "Keep a decreasing stack of indices and fill next-greater answers when popping.",
    "section": "Monotonic stack section; derive the decreasing-order rule and trace next-greater values",
    "checkpoint": false,
    "prerequisites": [
      "lesson-two-stack-queue"
    ]
  },
  {
    "stageId": "linear",
    "id": "lesson-checkpoint-linear",
    "legacyId": null,
    "title": "Linear structures: checkpoint",
    "primary": "stack-queue",
    "support": "v-list",
    "practice": {
      "title": "Valid Parentheses",
      "url": "https://leetcode.com/problems/valid-parentheses/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/valid-parentheses/"
    },
    "example": "For [2,1,3], 3 resolves both pending values 1 and 2; unresolved values have no greater element.",
    "exercise": "Draw an insertion, implement queue operations, and explain a stack invariant. Test empty structures and account for operation costs.",
    "section": "Stack and queue operations; test empty structures",
    "checkpoint": true,
    "prerequisites": [
      "w4-d5"
    ]
  },
  {
    "stageId": "backtracking",
    "id": "w5-d2",
    "legacyId": "w5-d2",
    "title": "Subsets by choices",
    "primary": "recursion",
    "support": "v-recursion",
    "practice": {
      "title": "Subsets",
      "url": "https://leetcode.com/problems/subsets/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/subsets/"
    },
    "example": "For [1,2], include/exclude choices generate [],[1],[2],[1,2].",
    "exercise": "Generate subsets by choosing whether to include each value; copy the path at a leaf.",
    "section": "00:36:56\u2013end \u00b7 choosing a subset",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-linear"
    ]
  },
  {
    "stageId": "backtracking",
    "id": "w5-d3",
    "legacyId": "w5-d3",
    "title": "Permutations",
    "primary": "permutations",
    "support": "v-recursion",
    "practice": {
      "title": "Permutations",
      "url": "https://leetcode.com/problems/permutations/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/permutations/"
    },
    "example": "For [1,2], choose 1 then 2, undo, then choose 2 then 1.",
    "exercise": "Generate permutations with a used array; undo both the path and the used flag.",
    "section": "00:37:18\u2013end \u00b7 permutations, implementation, and recursive call tree",
    "checkpoint": false,
    "prerequisites": [
      "w5-d2"
    ]
  },
  {
    "stageId": "backtracking",
    "id": "lesson-pruning",
    "legacyId": "w5-d6",
    "title": "Pruning a search",
    "primary": "backtrack",
    "support": "v-recursion",
    "practice": {
      "title": "Combination Sum",
      "url": "https://leetcode.com/problems/combination-sum/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/combination-sum/"
    },
    "example": "With candidates [2,3] and target 4, [2,2] succeeds; a partial sum above 4 can stop because all values are positive.",
    "exercise": "Generate nondecreasing combinations and stop when the remaining target is negative.",
    "section": "00:19:15\u201300:29:05 \u00b7 compare a naive and smarter solver",
    "checkpoint": false,
    "prerequisites": [
      "w5-d3"
    ]
  },
  {
    "stageId": "backtracking",
    "id": "lesson-checkpoint-backtracking",
    "legacyId": null,
    "title": "Backtracking: checkpoint",
    "primary": "recursion",
    "support": "v-recursion",
    "practice": {
      "title": "Subsets",
      "url": "https://leetcode.com/problems/subsets/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/subsets/"
    },
    "example": "With candidates [2,3] and target 4, [2,2] succeeds; a partial sum above 4 can stop because all values are positive.",
    "exercise": "Generate subsets and permutations of three values. Explain choose/explore/undo, count the output, and test the empty input.",
    "section": "00:36:56\u2013end \u00b7 choosing a subset",
    "checkpoint": true,
    "prerequisites": [
      "lesson-pruning"
    ]
  },
  {
    "stageId": "trees",
    "id": "w6-d1",
    "legacyId": "w6-d1",
    "title": "Tree traversals",
    "primary": "m-tree",
    "support": "v-tree",
    "practice": {
      "title": "Binary Tree Preorder Traversal",
      "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
    },
    "example": "For root 2 with children 1 and 3: preorder is 2,1,3; inorder is 1,2,3; postorder is 1,3,2.",
    "exercise": "Implement all three DFS traversals with a null base case.",
    "section": "Binary tree representation and traversal; leave balancing for the extension",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-backtracking"
    ]
  },
  {
    "stageId": "trees",
    "id": "lesson-tree-depth",
    "legacyId": "w6-d2",
    "title": "Tree depth",
    "primary": "m-tree",
    "support": "v-tree",
    "practice": {
      "title": "Maximum Depth Of Binary Tree",
      "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    "example": "A leaf has depth 1 because both children have depth 0; its parent adds one to the larger child depth.",
    "exercise": "Implement maximum depth and trace the recursion on an uneven tree.",
    "section": "Recursive tree traversal and subtree results",
    "checkpoint": false,
    "prerequisites": [
      "w6-d1"
    ]
  },
  {
    "stageId": "trees",
    "id": "lesson-tree-balance",
    "legacyId": "w6-d2",
    "title": "Tree balance",
    "primary": "m-tree",
    "support": "v-tree",
    "practice": {
      "title": "Balanced Binary Tree",
      "url": "https://leetcode.com/problems/balanced-binary-tree/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/balanced-binary-tree/"
    },
    "example": "A chain of three nodes is unbalanced at its root: child heights differ by 2.",
    "exercise": "Return subtree height and an imbalance marker in one traversal.",
    "section": "Subtree height; distinguish checking balance from performing rotations",
    "checkpoint": false,
    "prerequisites": [
      "lesson-tree-depth"
    ]
  },
  {
    "stageId": "trees",
    "id": "w6-d3",
    "legacyId": "w6-d3",
    "title": "Binary search trees",
    "primary": "m-tree",
    "support": "v-tree",
    "practice": {
      "title": "Search In A Binary Search Tree",
      "url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/search-in-a-binary-search-tree/"
    },
    "example": "Searching 6 in a BST rooted at 4 moves right; at 7 it moves left.",
    "exercise": "Implement search and insertion under a stated duplicate policy.",
    "section": "BST ordering and search; use the unbalanced BST mode",
    "checkpoint": false,
    "prerequisites": [
      "lesson-tree-balance"
    ]
  },
  {
    "stageId": "trees",
    "id": "lesson-heap-basics",
    "legacyId": "w6-d4",
    "title": "Heap operations",
    "primary": "m-heap",
    "support": "v-heap",
    "practice": {
      "title": "Last Stone Weight",
      "url": "https://leetcode.com/problems/last-stone-weight/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/last-stone-weight/"
    },
    "example": "In max-heap [9,4,7], removing 9 restores 7 at the root after repairing heap order.",
    "exercise": "Trace push and pop, then use std::priority_queue to simulate stone collisions.",
    "section": "Heap property, array representation, and insertion/removal",
    "checkpoint": false,
    "prerequisites": [
      "w6-d3"
    ]
  },
  {
    "stageId": "trees",
    "id": "w6-d4",
    "legacyId": "w6-d4",
    "title": "Top k with heaps",
    "primary": "m-heap",
    "support": "v-heap",
    "practice": {
      "title": "Kth Largest Element In An Array",
      "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
    },
    "example": "For [3,1,5,2] and k=2, a size-two min-heap ends with [3,5]; its root is the second largest.",
    "exercise": "Maintain a min-heap of k values and explain why smaller candidates can be discarded.",
    "section": "Priority queues and bounded-heap selection",
    "checkpoint": false,
    "prerequisites": [
      "lesson-heap-basics"
    ]
  },
  {
    "stageId": "trees",
    "id": "w6-d5",
    "legacyId": "w6-d5",
    "title": "Heap pop practice",
    "primary": "m-heap",
    "support": "v-heap",
    "practice": {
      "title": "Last Stone Weight",
      "url": "https://leetcode.com/problems/last-stone-weight/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/last-stone-weight/"
    },
    "example": "Stones [2,7,4] become [2,3] after smashing 7 and 4, then [1].",
    "exercise": "Re-solve the heap simulation without notes; compare a repeated-sort baseline.",
    "section": "Heap removal and restoring the invariant",
    "checkpoint": false,
    "prerequisites": [
      "w6-d4"
    ]
  },
  {
    "stageId": "trees",
    "id": "lesson-trie",
    "legacyId": null,
    "title": "Prefix trees",
    "primary": "trie",
    "support": "string",
    "practice": {
      "title": "Implement Trie Prefix Tree",
      "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/"
    },
    "example": "Inserting \"cat\" and \"car\" shares c \u2192 a; different final edges identify the words.",
    "exercise": "Build a trie with 26 child indices and an end-of-word flag; distinguish search from startsWith.",
    "section": "Trie section in the lexicon case study; focus on prefix sharing and word-end flags",
    "checkpoint": false,
    "prerequisites": [
      "w6-d5"
    ]
  },
  {
    "stageId": "trees",
    "id": "lesson-checkpoint-trees",
    "legacyId": null,
    "title": "Trees and heaps: checkpoint",
    "primary": "m-tree",
    "support": "v-tree",
    "practice": {
      "title": "Binary Tree Inorder Traversal",
      "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
    },
    "example": "Inserting \"cat\" and \"car\" shares c \u2192 a; different final edges identify the words.",
    "exercise": "Implement preorder and BST search, then trace a heap pop. Explain height-dependent costs and test empty and skewed trees.",
    "section": "Tree representation and inorder traversal",
    "checkpoint": true,
    "prerequisites": [
      "lesson-trie"
    ]
  },
  {
    "stageId": "graphs",
    "id": "lesson-graph-representation",
    "legacyId": "w7-d1",
    "title": "Graph representation",
    "primary": "graphs",
    "support": "v-graph",
    "practice": {
      "title": "Find Center Of Star Graph",
      "url": "https://leetcode.com/problems/find-center-of-star-graph/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/find-center-of-star-graph/"
    },
    "example": "Edges (0,1),(0,2) give adjacency lists 0:[1,2], 1:[0], 2:[0] in an undirected graph.",
    "exercise": "Build an adjacency list and calculate degrees before solving the star-centre question.",
    "section": "Vertices, edges, adjacency lists, and directed versus undirected graphs",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-trees"
    ]
  },
  {
    "stageId": "graphs",
    "id": "w7-d2",
    "legacyId": "w7-d2",
    "title": "Depth-first search",
    "primary": "m-dfs",
    "support": "v-graph",
    "practice": {
      "title": "Number Of Islands",
      "url": "https://leetcode.com/problems/number-of-islands/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/number-of-islands/"
    },
    "example": "In a grid with two separated land clusters, one DFS marks only its own cluster; a second start counts the other.",
    "exercise": "Implement visited tracking and four-direction flood fill; consider an explicit stack for large grids.",
    "section": "DFS discovery and visited state",
    "checkpoint": false,
    "prerequisites": [
      "lesson-graph-representation"
    ]
  },
  {
    "stageId": "graphs",
    "id": "w7-d3",
    "legacyId": "w7-d3",
    "title": "Breadth-first search",
    "primary": "m-bfs",
    "support": "v-graph",
    "practice": {
      "title": "Shortest Path In Binary Matrix",
      "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
    },
    "example": "In an open 2\u00d72 grid, diagonal movement reaches the opposite corner in two visited cells.",
    "exercise": "Use a queue of cells and distances; mark cells when enqueuing, not when dequeuing.",
    "section": "BFS layers and unweighted shortest paths",
    "checkpoint": false,
    "prerequisites": [
      "w7-d2"
    ]
  },
  {
    "stageId": "graphs",
    "id": "w7-d4",
    "legacyId": "w7-d4",
    "title": "Connected components",
    "primary": "m-dfs",
    "support": "v-graph",
    "practice": {
      "title": "Counting Rooms",
      "url": "https://cses.fi/problemset/task/1192",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1192"
    },
    "example": "For edges (0,1) and (2,3), starting a traversal from each unvisited node counts two components.",
    "exercise": "Wrap a traversal in a loop over all starting locations. Test isolated nodes or cells.",
    "section": "DFS forests and restarting from unvisited vertices",
    "checkpoint": false,
    "prerequisites": [
      "w7-d3"
    ]
  },
  {
    "stageId": "graphs",
    "id": "lesson-graph-cycles",
    "legacyId": "w7-d5",
    "title": "Graph cycles",
    "primary": "m-dfs",
    "support": "v-graph",
    "practice": {
      "title": "Round Trip",
      "url": "https://cses.fi/problemset/task/1669",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1669"
    },
    "example": "In 0\u20131\u20132\u20130, encountering an already visited neighbour other than the parent closes a cycle.",
    "exercise": "Detect an undirected cycle and reconstruct it using parent pointers.",
    "section": "DFS parent edges and cycle detection; distinguish directed cycles",
    "checkpoint": false,
    "prerequisites": [
      "w7-d4"
    ]
  },
  {
    "stageId": "graphs",
    "id": "w8-d1",
    "legacyId": "w8-d1",
    "title": "Topological ordering",
    "primary": "topo",
    "support": "m-dfs",
    "practice": {
      "title": "Course Schedule",
      "url": "https://leetcode.com/problems/course-schedule/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/course-schedule/"
    },
    "example": "For prerequisites 0\u21921\u21922, removing indegree-zero courses gives 0,1,2; adding 2\u21920 prevents a full order.",
    "exercise": "Implement Kahn's algorithm and compare processed count with the vertex count.",
    "section": "DAG ordering; contrast DFS finish order with an indegree queue",
    "checkpoint": false,
    "prerequisites": [
      "lesson-graph-cycles"
    ]
  },
  {
    "stageId": "graphs",
    "id": "lesson-checkpoint-graphs",
    "legacyId": null,
    "title": "Graphs: checkpoint",
    "primary": "m-bfs",
    "support": "v-graph",
    "practice": {
      "title": "Message Route",
      "url": "https://cses.fi/problemset/task/1667",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1667"
    },
    "example": "For prerequisites 0\u21921\u21922, removing indegree-zero courses gives 0,1,2; adding 2\u21920 prevents a full order.",
    "exercise": "Build an adjacency list and implement BFS. Explain O(V+E), test a disconnected graph, and reconstruct a shortest path.",
    "section": "BFS layers, parent pointers, and path reconstruction",
    "checkpoint": true,
    "prerequisites": [
      "w8-d1"
    ]
  },
  {
    "stageId": "greedy",
    "id": "w9-d1",
    "legacyId": "w9-d1",
    "title": "Greedy choices and proof",
    "primary": "greedy",
    "support": "sorting",
    "practice": {
      "title": "Assign Cookies",
      "url": "https://leetcode.com/problems/assign-cookies/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/assign-cookies/"
    },
    "example": "For appetites [1,3] and cookies [1,2], feeding appetite 1 with cookie 1 leaves the best remaining chance for 3.",
    "exercise": "Sort both arrays and match the smallest satisfiable appetite. State an exchange argument.",
    "section": "Local choices and counterexamples",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-graphs"
    ]
  },
  {
    "stageId": "greedy",
    "id": "w9-d2",
    "legacyId": "w9-d2",
    "title": "Activity selection",
    "primary": "intervals",
    "support": "greedy",
    "practice": {
      "title": "Movie Festival",
      "url": "https://cses.fi/problemset/task/1629",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1629"
    },
    "example": "Between intervals [1,3],[2,5],[3,4], choosing earliest finish allows [1,3] then [3,4].",
    "exercise": "Sort by finish time; accept an interval only when it starts after or at the previous finish.",
    "section": "Movie Festival section and earliest-finish argument",
    "checkpoint": false,
    "prerequisites": [
      "w9-d1"
    ]
  },
  {
    "stageId": "greedy",
    "id": "w9-d3",
    "legacyId": "w9-d3",
    "title": "Merge intervals",
    "primary": "merge-intervals",
    "support": "sorting",
    "practice": {
      "title": "Merge Intervals",
      "url": "https://leetcode.com/problems/merge-intervals/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/merge-intervals/"
    },
    "example": "Sorted [1,3],[2,6],[8,9] becomes [1,6],[8,9] by extending the current right boundary.",
    "exercise": "Sort by start and merge overlaps; explicitly decide whether touching endpoints merge.",
    "section": "Sorting intervals; apply the current-merged-range invariant",
    "checkpoint": false,
    "prerequisites": [
      "w9-d2"
    ]
  },
  {
    "stageId": "greedy",
    "id": "lesson-overlap",
    "legacyId": "w9-d4",
    "title": "Overlapping intervals",
    "primary": "intervals",
    "support": "sorting",
    "practice": {
      "title": "Restaurant Customers",
      "url": "https://cses.fi/problemset/task/1619",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1619"
    },
    "example": "Visits [1,4] and [2,3] produce event counts 1,2,1,0; the maximum is 2.",
    "exercise": "Sort arrival/departure events and track the maximum active count. CSES assumes all times are distinct; discuss tie ordering separately.",
    "section": "Restaurant Customers section; sweep events in chronological order",
    "checkpoint": false,
    "prerequisites": [
      "w9-d3"
    ]
  },
  {
    "stageId": "greedy",
    "id": "w9-d5",
    "legacyId": "w9-d5",
    "title": "Reachability with greedy",
    "primary": "greedy",
    "support": "arrays",
    "practice": {
      "title": "Jump Game",
      "url": "https://leetcode.com/problems/jump-game/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/jump-game/"
    },
    "example": "For [2,0,1], index 0 reaches index 2; for [1,0,1], progress stops at index 1.",
    "exercise": "Track the farthest reachable index; stop if the current index is beyond it.",
    "section": "Greedy invariant: all indices up to the frontier are reachable",
    "checkpoint": false,
    "prerequisites": [
      "lesson-overlap"
    ]
  },
  {
    "stageId": "greedy",
    "id": "lesson-checkpoint-greedy",
    "legacyId": null,
    "title": "Greedy and intervals: checkpoint",
    "primary": "intervals",
    "support": "sorting",
    "practice": {
      "title": "Restaurant Customers",
      "url": "https://cses.fi/problemset/task/1619",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1619"
    },
    "example": "For [2,0,1], index 0 reaches index 2; for [1,0,1], progress stops at index 1.",
    "exercise": "Explain an exchange argument and a counterexample. Implement an interval sweep, discuss equal endpoints, and give sorting complexity.",
    "section": "Restaurant Customers: sort events and track active intervals",
    "checkpoint": true,
    "prerequisites": [
      "w9-d5"
    ]
  },
  {
    "stageId": "dp",
    "id": "w10-d1",
    "legacyId": "w10-d1",
    "title": "Fibonacci three ways",
    "primary": "m-dp",
    "support": "dp",
    "practice": {
      "title": "Climbing Stairs",
      "url": "https://leetcode.com/problems/climbing-stairs/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/climbing-stairs/"
    },
    "example": "To reach stair 4, the final move comes from stair 3 or 2; with ways(0)=ways(1)=1, ways(4)=5.",
    "exercise": "Implement recursion, memoisation, and bottom-up counting; compare repeated states.",
    "section": "Fibonacci and subproblem design; skip DAG and bowling sections on the first pass",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-greedy"
    ]
  },
  {
    "stageId": "dp",
    "id": "lesson-dp-state",
    "legacyId": "w10-d2",
    "title": "State and transition",
    "primary": "dp",
    "support": "v-recursion",
    "practice": {
      "title": "Min Cost Climbing Stairs",
      "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/min-cost-climbing-stairs/"
    },
    "example": "For costs [10,15,20], start at stair 1 and pay 15 to reach the top.",
    "exercise": "Define the meaning of dp[i] in words before writing the recurrence; test two stairs.",
    "section": "Memoisation, base cases, and bottom-up order",
    "checkpoint": false,
    "prerequisites": [
      "w10-d1"
    ]
  },
  {
    "stageId": "dp",
    "id": "w10-d3",
    "legacyId": "w10-d3",
    "title": "Non-adjacent maximum",
    "primary": "m-dp",
    "support": "dp",
    "practice": {
      "title": "House Robber",
      "url": "https://leetcode.com/problems/house-robber/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/house-robber/"
    },
    "example": "For [2,7,4], taking the middle gives 7; taking the ends gives 6, so choose 7.",
    "exercise": "Derive take/skip states, then reduce storage after the full table works.",
    "section": "Subproblem and recurrence design; apply it to an index and a take/skip decision",
    "checkpoint": false,
    "prerequisites": [
      "lesson-dp-state"
    ]
  },
  {
    "stageId": "dp",
    "id": "w10-d4",
    "legacyId": "w10-d4",
    "title": "Grid paths",
    "primary": "grid-dp",
    "support": "v-recursion",
    "practice": {
      "title": "Unique Paths",
      "url": "https://leetcode.com/problems/unique-paths/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/unique-paths/"
    },
    "example": "A 2\u00d73 grid has 3 right/down paths; each interior cell adds the counts from above and left.",
    "exercise": "Fill a grid table with ones on the first row and column. Test a one-row grid.",
    "section": "Counting monotone paths; skip obstacles until the basic recurrence works",
    "checkpoint": false,
    "prerequisites": [
      "w10-d3"
    ]
  },
  {
    "stageId": "dp",
    "id": "w10-d5",
    "legacyId": "w10-d5",
    "title": "Coin change",
    "primary": "m-lcs",
    "support": "dp",
    "practice": {
      "title": "Coin Change",
      "url": "https://leetcode.com/problems/coin-change/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/coin-change/"
    },
    "example": "For coins [1,3,4] and amount 6, greedy takes 4+1+1 but DP finds 3+3.",
    "exercise": "Define minimum coins for each amount and represent unreachable states safely.",
    "section": "Coins subproblem section; distinguish minimising coins from counting combinations",
    "checkpoint": false,
    "prerequisites": [
      "w10-d4"
    ]
  },
  {
    "stageId": "dp",
    "id": "lesson-knapsack",
    "legacyId": "w11-d1",
    "title": "0/1 knapsack",
    "primary": "knapsack",
    "support": "dp",
    "practice": {
      "title": "Book Shop",
      "url": "https://cses.fi/problemset/task/1158",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1158"
    },
    "example": "With budget 5 and items (cost,value) (3,4),(2,3), choose both for value 7; each item is used once.",
    "exercise": "Build a two-dimensional item/budget table before trying descending one-dimensional updates.",
    "section": "0/1 knapsack; defer unbounded and advanced variants",
    "checkpoint": false,
    "prerequisites": [
      "w10-d5"
    ]
  },
  {
    "stageId": "dp",
    "id": "w11-d2",
    "legacyId": "w11-d2",
    "title": "Longest common subsequence",
    "primary": "m-lcs",
    "support": "grid-dp",
    "practice": {
      "title": "Longest Common Subsequence",
      "url": "https://leetcode.com/problems/longest-common-subsequence/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/longest-common-subsequence/"
    },
    "example": "For \"abc\" and \"ac\", matching a and c gives length 2; a subsequence may skip b.",
    "exercise": "Define dp[i][j] for prefixes; compare match and skip transitions.",
    "section": "LCS section; skip LIS until this table is clear",
    "checkpoint": false,
    "prerequisites": [
      "lesson-knapsack"
    ]
  },
  {
    "stageId": "dp",
    "id": "w11-d3",
    "legacyId": "w11-d3",
    "title": "Edit distance",
    "primary": "edit",
    "support": "grid-dp",
    "practice": {
      "title": "Edit Distance",
      "url": "https://leetcode.com/problems/edit-distance/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/edit-distance/"
    },
    "example": "Changing \"cat\" to \"cut\" needs one replacement; changing \"cat\" to \"at\" needs one deletion.",
    "exercise": "Write insert/delete/replace transitions with empty-string base cases; minimise operation count.",
    "section": "Edit distance section only; leave parenthesisation and knapsack review optional",
    "checkpoint": false,
    "prerequisites": [
      "w11-d2"
    ]
  },
  {
    "stageId": "dp",
    "id": "lesson-checkpoint-dp",
    "legacyId": null,
    "title": "Dynamic programming: checkpoint",
    "primary": "m-dp",
    "support": "dp",
    "practice": {
      "title": "Dice Combinations",
      "url": "https://cses.fi/problemset/task/1633",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1633"
    },
    "example": "Changing \"cat\" to \"cut\" needs one replacement; changing \"cat\" to \"at\" needs one deletion.",
    "exercise": "Define the states, transitions, base cases, and order for coin change and edit distance. Test unreachable and empty inputs; count table cells.",
    "section": "Subproblem design, recurrence, base cases, and evaluation order",
    "checkpoint": true,
    "prerequisites": [
      "w11-d3"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-array-mock",
    "legacyId": "w12-d1",
    "title": "Arrays mixed practice",
    "primary": "interviews",
    "support": "pointers",
    "practice": {
      "title": "Container With Most Water",
      "url": "https://leetcode.com/problems/container-with-most-water/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/container-with-most-water/"
    },
    "example": "For heights [1,3,2], the outer pair holds 2; advancing the shorter side can reveal a better pair.",
    "exercise": "Spend 25 minutes choosing and explaining a pattern before checking any solution.",
    "section": "Topic revision and practising unfamiliar prompts",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-dp"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-tree-graph-mock",
    "legacyId": "w12-d2",
    "title": "Trees and graphs mixed practice",
    "primary": "interviews",
    "support": "v-graph",
    "practice": {
      "title": "Binary Tree Level Order Traversal",
      "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    "example": "For root 1 with children 2,3, BFS produces [[1],[2,3]] by processing one queue-length batch at a time.",
    "exercise": "Explain why the representation is a tree, then implement level-order traversal in 25 minutes.",
    "section": "Clarifying the data model before choosing traversal",
    "checkpoint": false,
    "prerequisites": [
      "lesson-array-mock"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-dp-greedy-mock",
    "legacyId": "w12-d3",
    "title": "DP and greedy decisions",
    "primary": "techniques",
    "support": "dp",
    "practice": {
      "title": "Coin Change",
      "url": "https://leetcode.com/problems/coin-change/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/coin-change/"
    },
    "example": "Coins [1,3,4] and amount 6 disprove the largest-first greedy rule.",
    "exercise": "Give a greedy counterexample, derive a DP state, and test it without reading your old solution.",
    "section": "Counterexamples and a brute-force baseline before optimisation",
    "checkpoint": false,
    "prerequisites": [
      "lesson-tree-graph-mock"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-resolve",
    "legacyId": "w12-d4",
    "title": "Re-solve and explain",
    "primary": "interviews",
    "support": "testing",
    "practice": {
      "title": "Two Sum",
      "url": "https://leetcode.com/problems/two-sum/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/two-sum/"
    },
    "example": "In [3,3] with target 6, the two indices must be different; looking up before insertion handles this.",
    "exercise": "Re-solve Two Sum without notes, then one saved mistake. Record which clue you missed.",
    "section": "Revisiting earlier problems and checking boundaries",
    "checkpoint": false,
    "prerequisites": [
      "lesson-dp-greedy-mock"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-pattern-sheet",
    "legacyId": "w12-d5",
    "title": "Your pattern sheet",
    "primary": "techniques",
    "support": "interviews",
    "practice": {
      "title": "Longest Substring Without Repeating Characters",
      "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    "example": "The cue \"longest contiguous segment with no duplicate\" suggests a valid window with a frequency map.",
    "exercise": "Write cue, invariant, complexity, and trap for five patterns; validate the window entry on the assigned problem.",
    "section": "Recognising patterns while stating their assumptions",
    "checkpoint": false,
    "prerequisites": [
      "lesson-resolve"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-final-mock",
    "legacyId": "w12-d6",
    "title": "Final mock and next steps",
    "primary": "interviews",
    "support": "testing",
    "practice": {
      "title": "House Robber",
      "url": "https://leetcode.com/problems/house-robber/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/house-robber/"
    },
    "example": "For [2,1,1,2], taking the first and last gives 4; skipping adjacent values must preserve alternatives.",
    "exercise": "Use 35 minutes for House Robber and 35 for Number of Islands, then write a five-minute retrospective.",
    "section": "Mock interviews: explain, implement, test, and reflect",
    "checkpoint": false,
    "prerequisites": [
      "lesson-pattern-sheet"
    ]
  },
  {
    "stageId": "interviews",
    "id": "lesson-checkpoint-interviews",
    "legacyId": null,
    "title": "Interview practice: checkpoint",
    "primary": "interviews",
    "support": "testing",
    "practice": {
      "title": "Binary Tree Level Order Traversal",
      "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    "example": "For [2,1,1,2], taking the first and last gives 4; skipping adjacent values must preserve alternatives.",
    "exercise": "Explain an unfamiliar prompt, implement a baseline, improve it, and test boundaries aloud. Record knowledge versus time-management gaps.",
    "section": "Mock interview structure and boundary testing",
    "checkpoint": true,
    "prerequisites": [
      "lesson-final-mock"
    ]
  },
  {
    "stageId": "extensions",
    "id": "w5-d4",
    "legacyId": "w5-d4",
    "title": "Bit operations",
    "primary": "bits",
    "support": "variables",
    "practice": {
      "title": "Number Of 1 Bits",
      "url": "https://leetcode.com/problems/number-of-1-bits/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/number-of-1-bits/"
    },
    "example": "For 6 (110 binary), clearing the lowest set bit gives 4 (100), then 0: two set bits.",
    "exercise": "Implement bit tests and popcount on unsigned values; document shift limits.",
    "section": "AND, OR, XOR, shifts, and masks",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-readiness"
    ]
  },
  {
    "stageId": "extensions",
    "id": "lesson-bit-subsets",
    "legacyId": "w5-d5",
    "title": "Bitmask subsets",
    "primary": "bits",
    "support": "v-recursion",
    "practice": {
      "title": "Subsets",
      "url": "https://leetcode.com/problems/subsets/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/subsets/"
    },
    "example": "For [a,b], masks 00,01,10,11 represent [],[a],[b],[a,b].",
    "exercise": "Enumerate masks from 0 to 2^n-1 for small n and output included values.",
    "section": "Use one bit per include/exclude choice; this is enumeration, not modular counting",
    "checkpoint": false,
    "prerequisites": [
      "w5-d4",
      "w5-d2"
    ]
  },
  {
    "stageId": "extensions",
    "id": "w8-d3",
    "legacyId": "w8-d3",
    "title": "Disjoint sets",
    "primary": "dsu",
    "support": "v-graph",
    "practice": {
      "title": "Number Of Provinces",
      "url": "https://leetcode.com/problems/number-of-provinces/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/number-of-provinces/"
    },
    "example": "Union(0,1) merges two sets; find(0)==find(1), while 2 stays separate.",
    "exercise": "Implement parent, find, union by size, and path compression.",
    "section": "Naive DSU before path compression and union by size",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-graphs"
    ]
  },
  {
    "stageId": "extensions",
    "id": "w8-d2",
    "legacyId": "w8-d2",
    "title": "Dijkstra",
    "primary": "dijkstra",
    "support": "v-graph",
    "practice": {
      "title": "Network Delay Time",
      "url": "https://leetcode.com/problems/network-delay-time/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/network-delay-time/"
    },
    "example": "With 0\u21921 cost 2, 0\u21922 cost 7, and 1\u21922 cost 1, relaxing through 1 improves distance to 2 from 7 to 3.",
    "exercise": "Implement a min-priority queue of distances; discard stale entries and require nonnegative weights.",
    "section": "Relaxation and the settled-distance invariant",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-graphs",
      "w6-d4"
    ]
  },
  {
    "stageId": "extensions",
    "id": "w8-d4",
    "legacyId": "w8-d4",
    "title": "Minimum spanning tree",
    "primary": "mst",
    "support": "dsu",
    "practice": {
      "title": "Road Reparation",
      "url": "https://cses.fi/problemset/task/1675",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1675"
    },
    "example": "Edges AB=1, BC=2, AC=5 connect all three vertices with AB and BC for total 3.",
    "exercise": "Implement Kruskal with DSU; detect when not all vertices can be connected.",
    "section": "Sorted edges and avoiding cycles",
    "checkpoint": false,
    "prerequisites": [
      "w8-d3",
      "lesson-checkpoint-greedy"
    ]
  },
  {
    "stageId": "extensions",
    "id": "lesson-bellman",
    "legacyId": "w8-d5",
    "title": "Bellman-Ford",
    "primary": "bellman",
    "support": "dijkstra",
    "practice": {
      "title": "Cycle Finding",
      "url": "https://cses.fi/problemset/task/1197",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1197"
    },
    "example": "Edges A\u2192B=2, B\u2192C=-3, C\u2192A=0 form a negative cycle because their total is -1.",
    "exercise": "Relax all edges repeatedly; use a final changed vertex and parent links to reconstruct a negative cycle.",
    "section": "Edge relaxation and negative-cycle detection",
    "checkpoint": false,
    "prerequisites": [
      "w8-d2"
    ]
  },
  {
    "stageId": "extensions",
    "id": "lesson-avl",
    "legacyId": null,
    "title": "Balanced search trees",
    "primary": "v-tree",
    "support": "m-tree",
    "practice": {
      "title": "Balance A Binary Search Tree",
      "url": "https://leetcode.com/problems/balance-a-binary-search-tree/",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://leetcode.com/problems/balance-a-binary-search-tree/"
    },
    "example": "A skewed BST 1\u21922\u21923 can become root 2 with children 1,3 while preserving inorder order.",
    "exercise": "Trace AVL rotations; for the assignment, rebuild from sorted inorder values.",
    "section": "AVL mode: heights and rotations; contrast rotations with rebuilding",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-trees"
    ]
  },
  {
    "stageId": "extensions",
    "id": "lesson-fenwick",
    "legacyId": null,
    "title": "Fenwick trees",
    "primary": "fenwick",
    "support": "prefix",
    "practice": {
      "title": "Dynamic Range Sum Queries",
      "url": "https://cses.fi/problemset/task/1648",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1648"
    },
    "example": "For [2,3,1], prefix(3)=6; increasing the second value by 2 changes it to 8.",
    "exercise": "Implement point-add and prefix-sum queries, then convert replacement updates to deltas.",
    "section": "One-based indexing and low-bit jumps",
    "checkpoint": false,
    "prerequisites": [
      "w1-d5",
      "w5-d4"
    ]
  },
  {
    "stageId": "extensions",
    "id": "lesson-segment",
    "legacyId": null,
    "title": "Segment trees",
    "primary": "segment",
    "support": "prefix",
    "practice": {
      "title": "Dynamic Range Minimum Queries",
      "url": "https://cses.fi/problemset/task/1649",
      "access": "Free problem \u00b7 free account required to submit",
      "language": "Use C++17-compatible code",
      "evidenceUrl": "https://cses.fi/problemset/task/1649"
    },
    "example": "For [5,2,7,1], the minimum over indices 1..2 is 2; updating index 1 to 8 changes it to 7.",
    "exercise": "Build a range-min tree with point updates; test disjoint and singleton ranges.",
    "section": "Build, range query, and point update; skip lazy propagation",
    "checkpoint": false,
    "prerequisites": [
      "lesson-checkpoint-trees",
      "w1-d5"
    ]
  }
];
