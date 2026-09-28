import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { activeLessons, allLessons, archivedLessons, getLesson, legacyLessons, lessons, objectiveText, replacementsFor, stages } from "../client/src/lib/curriculum";
import { completedCoreLessonIds, completedLessonIds, getBadges, getXp, type ProgressEntry } from "../client/src/lib/game";
import { NOTE_LIMIT, noteContent, singleNote } from "../client/src/lib/notes";

assert.equal(new Set(allLessons.map(l => l.id)).size, allLessons.length, "IDs must be unique across active and archive");
assert.equal(legacyLessons.length, 72);
const seen = new Set<string>();
for (const lesson of activeLessons) {
  assert.match(lesson.id, /^(w(1[0-2]|[1-9])-d[1-6]|lesson-[a-z0-9]+(-[a-z0-9]+)*)$/);
  assert.equal(objectiveText(lesson, "cpp").length, 5);
  for (const id of lesson.prerequisites) assert.ok(seen.has(id), `${lesson.id}: missing, cyclic, or forward prerequisite ${id}`);
  seen.add(lesson.id);
  for (const source of [lesson.primary, lesson.support]) {
    assert.ok(source?.title && source?.creator && source?.checkedOn && source?.evidenceUrl, lesson.id);
    assert.match(source.url, /^https:\/\//);
    assert.ok(new URL(source.url).pathname.length > 2, `${lesson.id}: generic source root`);
    assert.match(source.access, /^Free/);
  }
  assert.match(lesson.practice.url, /^https:\/\/(leetcode.com\/problems\/[^/]+\/|www.hackerrank.com\/challenges\/[^/]+\/problem|cses.fi\/problemset\/task\/\d+)$/);
  assert.ok(lesson.exercise.length > 35 && lesson.example.length > 35 && lesson.section.length > 15);
}
for (const stage of stages.filter(stage => !stage.optional)) {
  const group = lessons.filter(l => l.stageId === stage.id);
  assert.ok(group.length > 0 && group.at(-1)?.checkpoint, `${stage.id}: must end in checkpoint`);
}
assert.ok(getLesson("lesson-recursion-basics")!.number < getLesson("lesson-merge-sort")!.number);
assert.ok(getLesson("w11-d4")!.number < getLesson("w10-d1")!.number);
assert.ok(getLesson("lesson-queue-basics")!.number < getLesson("lesson-two-stack-queue")!.number);
assert.equal(getLesson("lesson-bit-subsets")!.practice.url, "https://leetcode.com/problems/subsets/");
assert.equal(getLesson("lesson-overlap")!.practice.url, "https://cses.fi/problemset/task/1619");
assert.equal(getLesson("does-not-exist"), undefined);
for (const old of legacyLessons) assert.ok(getLesson(old.id), `${old.id}: historical route missing`);
for (const archived of archivedLessons) assert.ok(replacementsFor(archived.id).length, `${archived.id}: archive needs updated route`);

const finish = (id: string): ProgressEntry[] => Array.from({ length: 5 }, (_, objective_index) => ({ lesson_id: id, objective_index, completed: true, completed_at: "2026-09-20T12:00:00Z", activity_date: "2026-09-20" }));
const historical = legacyLessons.flatMap(l => finish(l.id));
assert.equal(getXp(historical), 72 * 75, "All historical completion bonuses must survive");
assert.equal(completedLessonIds(historical).size, 72);
assert.equal(completedCoreLessonIds(historical).size, lessons.filter(l => /^w\d+-d\d$/.test(l.id)).length);
assert.ok(!completedLessonIds(historical).has("lesson-recursion-basics"), "New task must not inherit old completion");
assert.ok(getBadges(historical, 0).filter(b => ["Arrays Done", "Halfway There", "Algo Ace"].includes(b.name)).every(b => b.unlocked));
const optionalOnly = activeLessons.filter(l => l.optional).flatMap(l => finish(l.id));
assert.equal(completedCoreLessonIds(optionalOnly).size, 0);
assert.equal(getXp(optionalOnly), optionalOnly.length * 15);
const duplicate = [...finish(lessons[0].id), ...finish(lessons[0].id)];
assert.equal(completedLessonIds(duplicate).size, 1, "Duplicate events must not hide a completed lesson");
assert.ok(getBadges(lessons.flatMap(l => finish(l.id)), 0).find(b => b.name === "Algo Ace")?.unlocked);
const audit = JSON.parse(readFileSync("docs/resource-audit.json", "utf8"));
assert.equal(audit.length, 72);
assert.ok(audit.every((row: { replacements: unknown[] }) => row.replacements.length));
const oldNote = { lesson_id: "w5-d1", takeaway: "a".repeat(1000), mistake: "b".repeat(1000), invariant: "c".repeat(1000) };
const combined = noteContent(oldNote);
assert.ok(combined.length <= NOTE_LIMIT);
assert.ok(combined.includes(oldNote.takeaway) && combined.includes(oldNote.mistake) && combined.includes(oldNote.invariant));
assert.equal(noteContent(singleNote(oldNote.lesson_id, combined)), combined, "Legacy note round trip must preserve every character");
console.log(`PASS: ${activeLessons.length} active lessons, ${archivedLessons.length} archived routes, prerequisite order, 72-row audit, historical XP/badges, and core-only completion.`);
