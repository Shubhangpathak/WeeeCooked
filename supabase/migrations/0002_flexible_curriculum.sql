-- Apply before deploying the flexible curriculum client. Non-destructive: no
-- progress or note rows are renamed, reassigned, or deleted.
begin;

alter table public.objective_progress
  drop constraint if exists objective_progress_lesson_id_check;
alter table public.objective_progress
  add constraint objective_progress_lesson_id_check
  check (lesson_id ~ '^(w(1[0-2]|[1-9])-d[1-6]|lesson-[a-z0-9]+(-[a-z0-9]+)*)$');

alter table public.lesson_notes
  drop constraint if exists lesson_notes_lesson_id_check;
alter table public.lesson_notes
  add constraint lesson_notes_lesson_id_check
  check (lesson_id ~ '^(w(1[0-2]|[1-9])-d[1-6]|lesson-[a-z0-9]+(-[a-z0-9]+)*)$');

-- A legacy note can contain three 1,000-character fields. The single editor
-- must be able to save their combined text without truncating it.
alter table public.lesson_notes
  drop constraint if exists lesson_notes_takeaway_check;
alter table public.lesson_notes
  add constraint lesson_notes_takeaway_check check (char_length(takeaway) <= 4000);

commit;
