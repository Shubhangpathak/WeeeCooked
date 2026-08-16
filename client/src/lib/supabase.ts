import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

export const supabase = url && key
  ? createClient(url, key, { auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true } })
  : null;

export const isSupabaseConfigured = Boolean(supabase);

export type Profile = {
  id: string;
  public_name: string;
  bio: string | null;
  avatar_url: string | null;
  language: "cpp" | "java" | "python";
  created_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  tech: string[];
  github_url: string;
  demo_url: string | null;
  cover_url: string | null;
  created_at: string;
};

export type LessonNote = {
  lesson_id: string;
  takeaway: string;
  mistake: string;
  invariant: string;
};
