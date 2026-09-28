import { mkdirSync, writeFileSync } from "node:fs";
import { activeLessons, legacyLessons, lessons, stages } from "../client/src/lib/curriculum";
import { resources } from "../client/src/lib/resourceCatalog";

mkdirSync("docs", { recursive: true });
const reviewTargets: Record<string, string> = {
  "w1-d6": "lesson-checkpoint-arrays", "w2-d6": "lesson-checkpoint-patterns", "w3-d6": "lesson-checkpoint-search",
  "w4-d6": "lesson-checkpoint-linear", "w6-d6": "lesson-checkpoint-trees", "w7-d6": "lesson-checkpoint-graphs",
  "w8-d6": "w8-d2", "w9-d6": "lesson-checkpoint-greedy", "w10-d6": "lesson-checkpoint-dp", "w11-d6": "lesson-checkpoint-dp",
};
const reasons: Record<string, string> = {
  "w1-d1": "Move complexity after concrete scans; select algorithm-analysis teaching rather than an entire course landing page.",
  "w1-d3": "Replace the initial hourglass challenge with row sums; teach nested indices before a compound shape.",
  "w2-d1": "Split string indexing from two-pointer palindrome processing; the old lesson assumed an untaught pattern.",
  "w2-d5": "Replace the generic A2Z task with an exact prefix-hash problem; explain why negatives break positive-only windows.",
  "w3-d1": "Replace the generic sheet link with an exact sorting assignment and separately trace both sorts.",
  "w3-d3": "Move after recursion and assign an exact merge-sort problem with a merge-first exercise.",
  "w4-d4": "Split basic FIFO operations from implementing a queue with two stacks.",
  "w4-d5": "Add an explicit decreasing-stack derivation; basic stack mechanics alone do not teach the invariant.",
  "w5-d1": "Replace Recursive Digit Sum as the first task with simple base cases and a small Fibonacci assignment.",
  "w5-d4": "Move bit manipulation to an optional branch so it does not interrupt recursion foundations.",
  "w5-d5": "Replace CSES Bit Strings: it counts 2^n modulo a constant, rather than enumerating subsets.",
  "w5-d6": "Replace a generic sheet with a concrete pruning task and a backtracking checkpoint.",
  "w6-d2": "Split maximum depth from balance: the previous max-depth question did not assess balance.",
  "w6-d4": "Add heap operations before top-k; retain the original top-k objective and ID.",
  "w6-d6": "Replace Towers, a sorting/searching problem, with an inorder traversal checkpoint.",
  "w7-d1": "Replace connected-components practice with adjacency construction and degree inspection.",
  "w7-d5": "Replace the generic sheet with an exact undirected-cycle reconstruction task.",
  "w8-d1": "Move topological order into the core graph stage after directed-cycle prerequisites.",
  "w8-d2": "Move weighted shortest paths to optional extensions after heaps and graph traversal.",
  "w8-d3": "Move DSU to an optional extension after components.",
  "w8-d4": "Move MST to an optional extension with explicit DSU prerequisites.",
  "w8-d5": "Replace the generic sheet with an exact negative-cycle task after relaxation is understood.",
  "w8-d6": "Retire the broad advanced-graph review; offer the named weighted-path extension instead.",
  "w9-d4": "Replace the premium-risk Meeting Rooms II assignment with free Restaurant Customers; disclose distinct event times.",
  "w10-d2": "Replace the generic Frog Jump sheet link with a specific small state-design exercise.",
  "w11-d1": "Replace the generic knapsack sheet link with Book Shop and a concrete 0/1 table.",
  "w11-d3": "Replace the general DP introduction with MIT's actual edit-distance lecture section.",
  "w11-d4": "Move fixed windows before recursion and DP, after prefix sums.",
  "w11-d5": "Move variable windows immediately after fixed windows and hash maps.",
};
const audit = legacyLessons.map(old => {
  let replacements = activeLessons.filter(lesson => lesson.legacyId === old.id);
  if (reviewTargets[old.id]) replacements = [activeLessons.find(lesson => lesson.id === reviewTargets[old.id])!];
  const unchangedId = replacements.some(lesson => lesson.id === old.id);
  const action = replacements.length > 1 ? "split" : !unchangedId ? (old.id === "w8-d6" ? "retire" : "replace") : replacements[0].optional || ["w1-d1", "w8-d1", "w11-d4", "w11-d5"].includes(old.id) ? "move" : "keep";
  const badAttribution = old.videoUrl.includes("RBSGKlAvoiM") && !old.videoTitle.includes("William Fiset");
  return { oldId: old.id, oldTitle: old.title, action,
    reason: (reasons[old.id] ?? (old.week === 12 ? "Replace generic revision links and mismatched video labels with assigned questions and interview-practice guidance." : old.title.toLowerCase().includes("review") ? "Replace the broad review bank with a stage checkpoint and a named assignment." : "Retain the learning objective; replace weekly fallback links with explicit topic-level sources and a worked example.")) + (badAttribution ? " Correct the falsely attributed Fiset video; the original is not a NeetCode/takeUforward lesson." : ""),
    oldVideo: { title: old.videoTitle, url: old.videoUrl }, oldPractice: { title: old.practice, url: old.practiceUrl },
    topicSuitability: "Editorial comparison of the lesson outcome, publisher topic descriptions, and problem statements; not a full-video review.",
    accessReview: "See resource-verification.json for direct HTTP checks and resource-evidence.md for publisher checks. Blocked fetches are not proof of a paywall or a dead link.",
    replacements: replacements.map(lesson => ({ id: lesson.id, title: lesson.title, primary: lesson.primary.url, support: lesson.support.url, practice: lesson.practice.url })),
  };
});
if (audit.some(item => item.replacements.length === 0)) throw new Error("An original lesson lacks a documented replacement");
writeFileSync("docs/resource-audit.json", JSON.stringify(audit, null, 2));
writeFileSync("docs/resource-audit.md", `# Audit of all ${audit.length} original lessons\n\nReviewed 2026-09-29. Topic fit and access are separate findings. No full-video viewing is claimed. Original links are preserved in the JSON companion for provenance, not recommended as current resources.\n\n| Original lesson | Decision | Reason | Replacement study / practice |\n|---|---|---|---|\n` + audit.map(item => `| ${item.oldId}: ${item.oldTitle} | ${item.action} | ${item.reason} | ${item.replacements.map(r => `${r.title}: [study](${r.primary}), [support](${r.support}), [practice](${r.practice})`).join("; ")} |`).join("\n") + "\n");
writeFileSync("docs/resource-manifest.json", JSON.stringify({ checkedOn: "2026-09-29", resources: Object.values(resources), lessons: activeLessons.map(lesson => ({ id: lesson.id, primary: lesson.primary.id, support: lesson.support.id, section: lesson.section, prerequisites: lesson.prerequisites, practice: lesson.practice, solutionUrl: lesson.solutionUrl })) }, null, 2));
writeFileSync("curriculum.md", `# Foundations to interviews\n\nC++17 first, English first. ${lessons.length} core lessons in ${stages.filter(stage => !stage.optional).length} flexible stages, plus ${activeLessons.length - lessons.length} optional lessons. Typical lesson: 75 minutes, split freely; checkpoint: 60 minutes. Estimates are study effort, not video duration. No schedule or prerequisite locks.\n\n` + stages.map(stage => `## ${stage.title}${stage.optional ? " (optional)" : ""}\n\n${stage.description}\n\n` + activeLessons.filter(lesson => lesson.stageId === stage.id).map(lesson => `- **${lesson.title}** (${lesson.id}): ${lesson.exercise} [Study](${lesson.primary.url}) · [Practice](${lesson.practice.url})`).join("\n")).join("\n\n") + "\n\n## Learning loop\n\nUnderstand, trace, implement, practise, reflect. Checkpoints require independent implementation, complexity, boundary testing, and explanation. Revisit missed questions after two and seven days. Practise speaking from the start; try a 25-minute mock after trees and heaps.\n\n## Compatibility\n\nStable IDs are independent of order. Previous lessons remain in the archive. Replaced or split tasks get new IDs; old completion is never copied onto them. Old notes and XP remain available. Optional and archived lessons are excluded from core completion.\n");
console.log(`Audit: ${audit.length} original lessons; ${lessons.length} core + ${activeLessons.length - lessons.length} optional.`);
