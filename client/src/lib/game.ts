import { lessons } from "./curriculum";

export type ProgressEntry = {
  lesson_id: string;
  objective_index: number;
  completed: boolean;
  completed_at: string | null;
  activity_date: string | null;
};

export const RANKS = [
  { name: "New Node", xp: 0, color: "#a8a29e" },
  { name: "Loop Learner", xp: 300, color: "#ff8a4c" },
  { name: "Pattern Scout", xp: 800, color: "#ffd166" },
  { name: "Stack Climber", xp: 1500, color: "#83f0c4" },
  { name: "Graph Explorer", xp: 2400, color: "#77b6ff" },
  { name: "DP Crafter", xp: 3500, color: "#c4a7ff" },
  { name: "Algo Ace", xp: 5000, color: "#ff6b35" },
] as const;

export const toDateKey = (date = new Date()) => {
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

export function completedEntries(progress: ProgressEntry[]) {
  return progress.filter((entry) => entry.completed);
}

export function completedLessonIds(progress: ProgressEntry[]) {
  const complete = new Set<string>();
  for (const lesson of lessons) {
    const total = progress.filter((entry) => entry.lesson_id === lesson.id && entry.completed).length;
    if (total === 5) complete.add(lesson.id);
  }
  return complete;
}

export function getXp(progress: ProgressEntry[]) {
  return completedEntries(progress).length * 10 + completedLessonIds(progress).size * 25;
}

export function getRank(xp: number) {
  return [...RANKS].reverse().find((rank) => xp >= rank.xp) ?? RANKS[0];
}

export function nextRank(xp: number) {
  return RANKS.find((rank) => rank.xp > xp) ?? null;
}

export function getStreak(progress: ProgressEntry[]) {
  const active = new Set(completedEntries(progress).map((item) => item.activity_date).filter(Boolean) as string[]);
  let streak = 0;
  const cursor = new Date();
  while (true) {
    const key = toDateKey(cursor);
    if (!active.has(key)) {
      if (streak === 0) {
        cursor.setDate(cursor.getDate() - 1);
        if (!active.has(toDateKey(cursor))) return 0;
        continue;
      }
      return streak;
    }
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
}

export function heatmap(progress: ProgressEntry[], days = 84) {
  const counts = new Map<string, number>();
  for (const entry of completedEntries(progress)) {
    if (entry.activity_date) counts.set(entry.activity_date, (counts.get(entry.activity_date) ?? 0) + 1);
  }
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - index - 1));
    const key = toDateKey(date);
    return { date: key, count: counts.get(key) ?? 0 };
  });
}

export function getBadges(progress: ProgressEntry[], projectCount: number) {
  const done = completedLessonIds(progress);
  const streak = getStreak(progress);
  const completeLessons = done.size;
  return [
    { name: "First Blood", note: "Finish your first lesson", unlocked: completeLessons >= 1, icon: "⚔" },
    { name: "7 Day Streak", note: "Stay active for seven days", unlocked: streak >= 7, icon: "🔥" },
    { name: "Arrays Done", note: "Finish Week 1", unlocked: lessons.filter((item) => item.week === 1).every((item) => done.has(item.id)), icon: "▦" },
    { name: "First Project", note: "Publish a project", unlocked: projectCount >= 1, icon: "↗" },
    { name: "10 Lessons", note: "Finish ten lessons", unlocked: completeLessons >= 10, icon: "10" },
    { name: "Halfway There", note: "Finish 36 lessons", unlocked: completeLessons >= 36, icon: "½" },
    { name: "Algo Ace", note: "Finish all 72 lessons", unlocked: completeLessons === lessons.length, icon: "★" },
  ];
}

export function dueResolves(progress: ProgressEntry[]) {
  const completed = lessons.filter((lesson) => completedLessonIds(progress).has(lesson.id));
  const today = toDateKey();
  return completed.filter((lesson) => {
    const latest = progress
      .filter((entry) => entry.lesson_id === lesson.id && entry.completed_at)
      .map((entry) => new Date(entry.completed_at as string))
      .sort((a, b) => b.getTime() - a.getTime())[0];
    if (!latest) return false;
    for (const addDays of [2, 7]) {
      const due = new Date(latest);
      due.setDate(due.getDate() + addDays);
      if (toDateKey(due) === today) return true;
    }
    return false;
  });
}
