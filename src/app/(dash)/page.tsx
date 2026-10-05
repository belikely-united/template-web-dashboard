"use client";

import { useEffect, useState } from "react";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import OverviewChart from "@/components/OverviewChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getActivity, getChart, getStats, type Activity, type Stat } from "@/lib/data";

export default function OverviewPage() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [activity, setActivity] = useState<Activity[]>([]);
  const chart = getChart();

  useEffect(() => {
    getStats().then(setStats);
    getActivity().then(setActivity);
  }, []);

  return (
    <>
      <Topbar title="Overview" />
      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.id} stat={s} />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <OverviewChart data={chart} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activity.map((a) => (
                <div key={a.id} className="flex items-start justify-between gap-3 text-sm">
                  <div>
                    <span className="font-medium">{a.who}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{a.when}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
