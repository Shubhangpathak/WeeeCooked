import type { Profile, Project } from "./supabase";
import type { ProgressEntry } from "./game";
import { lessons } from "./curriculum";
import { toDateKey } from "./game";

const entry = (lessonId: string, objectiveIndex: number, ago = 0): ProgressEntry => {
  const date = new Date();
  date.setDate(date.getDate() - ago);
  return { lesson_id: lessonId, objective_index: objectiveIndex, completed: true, completed_at: date.toISOString(), activity_date: toDateKey(date) };
};

export const demoProfile: Profile = {
  id: "demo-you", public_name: "bytebloom", bio: "Learning in public, one invariant at a time.", avatar_url: null, language: "cpp", created_at: new Date().toISOString(),
};

export const demoProgress: ProgressEntry[] = [
  ...Array.from({ length: 5 }, (_, i) => entry("w1-d1", i, 4)),
  ...Array.from({ length: 5 }, (_, i) => entry("w1-d2", i, 3)),
  ...Array.from({ length: 5 }, (_, i) => entry("w1-d3", i, 2)),
  ...Array.from({ length: 3 }, (_, i) => entry("w1-d4", i, 1)),
  entry("w1-d4", 3, 0), entry("w1-d4", 4, 0),
];

export const demoMembers: Profile[] = [
  demoProfile,
  { id: "demo-1", public_name: "heapster", bio: "Making graphs less scary.", avatar_url: null, language: "python", created_at: new Date().toISOString() },
  { id: "demo-2", public_name: "recurrsion", bio: "DP enthusiast in training.", avatar_url: null, language: "java", created_at: new Date().toISOString() },
  { id: "demo-3", public_name: "queuequeen", bio: "Trying every edge case twice.", avatar_url: null, language: "cpp", created_at: new Date().toISOString() },
];

export const demoProjects: Project[] = [
  { id: "project-1", user_id: "demo-you", title: "Pathfinder", description: "A visual Dijkstra playground with interactive graph weights.", tech: ["C++", "Graphs"], github_url: "https://github.com", demo_url: null, cover_url: null, created_at: new Date().toISOString() },
  { id: "project-2", user_id: "demo-1", title: "Stack Sketch", description: "A tiny browser tool for tracing stack operations.", tech: ["JavaScript", "Stacks"], github_url: "https://github.com", demo_url: "https://example.com", cover_url: null, created_at: new Date().toISOString() },
];

export const demoMemberProgress: Record<string, ProgressEntry[]> = {
  "demo-you": demoProgress,
  "demo-1": lessons.slice(0, 13).flatMap((lesson) => Array.from({ length: 5 }, (_, i) => entry(lesson.id, i, 8 - Math.min(8, lesson.number)))),
  "demo-2": lessons.slice(0, 8).flatMap((lesson) => Array.from({ length: 5 }, (_, i) => entry(lesson.id, i, 5))),
  "demo-3": lessons.slice(0, 4).flatMap((lesson) => Array.from({ length: 5 }, (_, i) => entry(lesson.id, i, 2))),
};
