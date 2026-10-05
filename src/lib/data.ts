// Overview data — read from Firestore, fall back to sample data in dashboard.ts
// (so the UI looks alive before anything is seeded or configured).
import { collection, getDocs } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { dashboard } from "@/config/dashboard";

export type Stat = { id: string; label: string; value: string; delta?: string; trend?: "up" | "down" };
export type ChartPoint = { month: string; value: number };
export type Activity = { id: string; who: string; action: string; when: string };

export async function getStats(): Promise<Stat[]> {
  const db = getDb();
  if (!db) return [...dashboard.sample.stats];
  try {
    const snap = await getDocs(collection(db, "stats"));
    if (snap.empty) return [...dashboard.sample.stats];
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Stat, "id">) }));
  } catch {
    return [...dashboard.sample.stats];
  }
}

export async function getActivity(): Promise<Activity[]> {
  const db = getDb();
  if (!db) return [...dashboard.sample.activity];
  try {
    const snap = await getDocs(collection(db, "activity"));
    if (snap.empty) return [...dashboard.sample.activity];
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Activity, "id">) }));
  } catch {
    return [...dashboard.sample.activity];
  }
}

export function getChart(): ChartPoint[] {
  return [...dashboard.sample.chart];
}
