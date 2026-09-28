import { lessonData, stageData } from "./curriculumData";
import { lessons as originalLessons, objectiveText as legacyObjectives } from "./legacyCurriculum";
import { resources, type StudyResource } from "./resourceCatalog";

export type Language = "cpp" | "java" | "python";
export type Practice = { title: string; url: string; access: string; language: string; evidenceUrl: string };
export type Stage = typeof stageData[number];
export type Lesson = {
  id: string; number: number; stageId: string; stageTitle: string; title: string;
  concept: string; focus: string; topicIntro: string; edgeCase: string;
  example: string; exercise: string; section: string; prerequisites: string[];
  primary: StudyResource; support: StudyResource; practice: Practice;
  checkpoint: boolean; optional: boolean; archived: boolean;
  legacyId: string | null; minutes: number; solutionUrl?: string;
  alternatives?: { resource: StudyResource; focus: string }[];
};

export const stages: Stage[] = stageData;
export const legacyLessons = originalLessons;
const solutionSlugs = new Set(["two-sum", "valid-anagram", "valid-parentheses", "binary-search", "subsets", "permutations", "house-robber", "coin-change", "edit-distance", "longest-common-subsequence", "number-of-islands"]);
export const activeLessons: Lesson[] = lessonData.map((item, index) => {
  const stage = stages.find(stage => stage.id === item.stageId)!;
  const original = originalLessons.find(lesson => lesson.id === item.id);
  const problemSlug = item.practice.url.match(/leetcode.com\/problems\/([^/]+)/)?.[1];
  return {
    ...item, number: index + 1, stageTitle: stage.title,
    concept: item.checkpoint ? "Show what you can do without following a solution." : item.exercise,
    focus: item.section, topicIntro: original?.topicIntro ?? item.example,
    edgeCase: original?.edgeCase ?? "Which boundary case changes your approach? Explain why your implementation still works.",
    primary: resources[item.primary], support: resources[item.support], optional: stage.optional, archived: false,
    minutes: item.checkpoint ? 60 : 75,
    alternatives: item.id === "w1-d2" ? [{ resource: resources["m-array"], focus: "Dynamic arrays and resizing only. Use after you can trace basic array operations." }] : item.id === "w2-d2" ? [{ resource: resources["m-hash"], focus: "Hash functions and collisions. Optional depth after using a frequency map; defer the probability analysis." }] : ["w4-d1", "w4-d3", "lesson-queue-basics", "lesson-heap-basics", "w6-d3"].includes(item.id) ? [{ resource: resources.fiset, focus: `Use only the ${item.title} topic in the linked course's chapter list. Java code is supplementary; the eight-hour course is not assigned.` }] : [],
    solutionUrl: problemSlug && solutionSlugs.has(problemSlug) ? `https://neetcode.io/solutions/${problemSlug}` : undefined,
  };
});

/** Core completion excludes optional extensions and the preserved legacy archive. */
export const lessons = activeLessons.filter(lesson => !lesson.optional);
export const archivedLessons: Lesson[] = originalLessons.filter(old => !activeLessons.some(lesson => lesson.id === old.id)).map(old => ({
  id: old.id, number: old.number, stageId: "archive", stageTitle: "Previous curriculum", title: old.title,
  concept: old.concept, focus: old.focus, topicIntro: old.topicIntro, edgeCase: old.edgeCase,
  example: "This lesson is preserved so your earlier work and notes remain available.", exercise: old.focus,
  section: "Archived lesson — use the updated lesson links for current study materials.", prerequisites: [],
  primary: resources.interviews, support: resources.testing,
  practice: { title: old.practice, url: old.practiceUrl, access: "Historical assignment; use the updated path", language: "Language independent", evidenceUrl: old.practiceUrl },
  checkpoint: false, optional: false, archived: true, legacyId: old.id, minutes: 0,
}));
export const allLessons = [...activeLessons, ...archivedLessons];
export const getLesson = (id: string) => allLessons.find(lesson => lesson.id === id);
const reviewReplacements: Record<string, string> = { "w1-d6": "arrays", "w2-d6": "patterns", "w3-d6": "search", "w4-d6": "linear", "w6-d6": "trees", "w7-d6": "graphs", "w9-d6": "greedy", "w10-d6": "dp", "w11-d6": "dp" };
export const replacementsFor = (id: string) => activeLessons.filter(lesson => (lesson.legacyId === id && lesson.id !== id) || lesson.id === `lesson-checkpoint-${reviewReplacements[id]}` || (id === "w8-d6" && lesson.id === "w8-d2"));

export function objectiveText(lesson: Lesson, language: Language) {
  if (lesson.archived) return legacyObjectives(originalLessons.find(item => item.id === lesson.id)!, language);
  const name = { cpp: "C++17", java: "Java", python: "Python" }[language];
  // Preserve historical slots: understand, study/trace, build, practice, reflection.
  return [
    `Understand: ${lesson.checkpoint ? "Explain the main ideas in this stage without your notes." : lesson.section}`,
    `Trace: ${lesson.example}`,
    `Implement: ${lesson.exercise} Use ${name}.`,
    `Practise: Solve ${lesson.practice.title}. State the time and space costs and test at least three cases.`,
    `Reflect: ${lesson.edgeCase}`,
  ];
}

export const languageSnippets: Record<Language, string> = {
  cpp: "C++17 is the teaching default. Compile with warnings; test a normal case, a boundary, and a counterexample.",
  java: "You can practise in Java. The selected explanations use C++17 unless labelled otherwise.",
  python: "You can practise in Python. The selected explanations use C++17 unless labelled otherwise.",
};
export const stageBridges: Record<string, string> = {
  readiness: 'int total = 0;\nfor (int x : std::vector<int>{1, 2, 3}) total += x;\n// total == 6; include <vector>',
  arrays: 'std::vector<int> a{2, 4, 6};\na.insert(a.begin() + 1, 9);\n// {2, 9, 4, 6}; include <vector>',
  patterns: 'std::unordered_map<int, int> count;\nfor (int x : a) ++count[x];\n// a is a vector<int>; include <unordered_map>',
  search: 'int sum(int n) {\n  if (n == 0) return 0;\n  return n + sum(n - 1);\n} // precondition: small n >= 0',
  linear: 'std::queue<int> q;\nq.push(4); q.push(8);\nint first = q.front(); q.pop();\n// first == 4; include <queue>; check empty before front/pop',
  backtracking: 'path.push_back(choice);\nexplore(nextState);\npath.pop_back();\n// choose / explore / undo; adapt the state to the task',
  trees: 'std::priority_queue<int> heap;\nheap.push(4); heap.push(9);\nint largest = heap.top(); heap.pop();\n// largest == 9; include <queue>',
  graphs: 'std::vector<std::vector<int>> adj(3);\nadj[0].push_back(1); adj[1].push_back(0);\n// undirected edge 0--1; include <vector>',
  greedy: 'std::sort(intervals.begin(), intervals.end());\n// vector<pair<int,int>> sorts by start, then end.\n// Earliest-finish greedy needs a comparator on .second.',
  dp: 'std::vector<int> ways(n + 1, 0);\nways[0] = 1;\nfor (int i = 1; i <= n; ++i) {\n  ways[i] = ways[i - 1];\n  if (i >= 2) ways[i] += ways[i - 2];\n} // small n; include <vector>',
  interviews: '// Clarify inputs and constraints.\n// Explain a baseline, then your improvement.\n// Test a normal, boundary, and adversarial case.',
  extensions: '// State extra preconditions before optimising.\n// Use long long for large sums and distances.\n// Compare against a tiny brute-force oracle.',
};
