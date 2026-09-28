import type { Lesson } from "./curriculum";

/** Every active lesson owns an explicit mapping; there are no week/title fallbacks. */
export function studyPath(lesson: Lesson) {
  return { primary: lesson.primary, support: lesson.support, section: lesson.section };
}
