import type { LessonNote } from "./supabase";

export const NOTE_LIMIT = 4000;

/** Preserve all three legacy fields when opening the single-textbox editor. */
export function noteContent(note?: LessonNote) {
  return note ? [note.takeaway, note.mistake && `Mistake: ${note.mistake}`, note.invariant && `Remember: ${note.invariant}`].filter(Boolean).join("\n\n") : "";
}

export const singleNote = (lessonId: string, content: string): LessonNote => ({ lesson_id: lessonId, takeaway: content, mistake: "", invariant: "" });
