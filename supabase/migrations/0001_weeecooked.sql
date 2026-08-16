-- WeeeCooked: run this once in the Supabase SQL editor or with the Supabase CLI.
-- Authentication users live in auth.users. This schema stores only app data.

create extension if not exists citext;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  public_name citext not null unique check (public_name ~ '^[a-z0-9_]{3,30}$'),
  bio text check (char_length(bio) <= 120),
  avatar_url text,
  language text not null default 'cpp' check (language in ('cpp', 'java', 'python')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.private_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  actual_name text not null check (char_length(actual_name) between 1 and 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.objective_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^w(1[0-2]|[1-9])-d[1-6]$'),
  objective_index smallint not null check (objective_index between 0 and 4),
  completed boolean not null default false,
  completed_at timestamptz,
  activity_date date,
  primary key (user_id, lesson_id, objective_index),
  check ((completed and completed_at is not null and activity_date is not null) or (not completed and completed_at is null and activity_date is null))
);

create index if not exists objective_progress_user_completed_idx on public.objective_progress (user_id, completed, activity_date);

create table if not exists public.lesson_notes (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^w(1[0-2]|[1-9])-d[1-6]$'),
  takeaway text not null default '' check (char_length(takeaway) <= 1000),
  mistake text not null default '' check (char_length(mistake) <= 1000),
  invariant text not null default '' check (char_length(invariant) <= 1000),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 80),
  description text not null check (char_length(description) between 1 and 500),
  tech text[] not null default '{}',
  github_url text not null check (github_url ~ '^https?://'),
  demo_url text check (demo_url is null or demo_url ~ '^https?://'),
  cover_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists projects_user_created_idx on public.projects (user_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger language plpgsql security invoker set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
drop trigger if exists private_profiles_updated_at on public.private_profiles;
create trigger private_profiles_updated_at before update on public.private_profiles for each row execute function public.set_updated_at();
drop trigger if exists lesson_notes_updated_at on public.lesson_notes;
create trigger lesson_notes_updated_at before update on public.lesson_notes for each row execute function public.set_updated_at();
drop trigger if exists projects_updated_at on public.projects;
create trigger projects_updated_at before update on public.projects for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.private_profiles enable row level security;
alter table public.objective_progress enable row level security;
alter table public.lesson_notes enable row level security;
alter table public.projects enable row level security;

create policy "signed-in users can read public profiles" on public.profiles for select to authenticated using (true);
create policy "users create their profile" on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "users update their profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create policy "users read their private profile" on public.private_profiles for select to authenticated using ((select auth.uid()) = user_id);
create policy "users create private profile" on public.private_profiles for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update private profile" on public.private_profiles for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "signed-in users read shared progress" on public.objective_progress for select to authenticated using (true);
create policy "users create their progress" on public.objective_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update their progress" on public.objective_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users delete their progress" on public.objective_progress for delete to authenticated using ((select auth.uid()) = user_id);

create policy "users read their notes" on public.lesson_notes for select to authenticated using ((select auth.uid()) = user_id);
create policy "users create their notes" on public.lesson_notes for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update their notes" on public.lesson_notes for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users delete their notes" on public.lesson_notes for delete to authenticated using ((select auth.uid()) = user_id);

create policy "signed-in users read projects" on public.projects for select to authenticated using (true);
create policy "users create their projects" on public.projects for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update their projects" on public.projects for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users delete their projects" on public.projects for delete to authenticated using ((select auth.uid()) = user_id);

-- Public image buckets keep cards straightforward. Only owners can write their folder.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('avatars', 'avatars', true, 5242880, array['image/png', 'image/jpeg', 'image/webp']),
  ('project-covers', 'project-covers', true, 5242880, array['image/png', 'image/jpeg', 'image/webp'])
on conflict (id) do update
set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy "users upload their avatar" on storage.objects for insert to authenticated with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "users update their avatar" on storage.objects for update to authenticated using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text)) with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "users delete their avatar" on storage.objects for delete to authenticated using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "users upload their project cover" on storage.objects for insert to authenticated with check (bucket_id = 'project-covers' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "users update their project cover" on storage.objects for update to authenticated using (bucket_id = 'project-covers' and (storage.foldername(name))[1] = (select auth.uid()::text)) with check (bucket_id = 'project-covers' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "users delete their project cover" on storage.objects for delete to authenticated using (bucket_id = 'project-covers' and (storage.foldername(name))[1] = (select auth.uid()::text));
