"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { dashboard } from "@/config/dashboard";
import type { ChartPoint } from "@/lib/data";

export default function OverviewChart({ data }: { data: ChartPoint[] }) {
  const accent = dashboard.brand.accent;
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ left: -12, right: 8, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="overviewFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity={0.3} />
            <stop offset="100%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
        <YAxis tickLine={false} axisLine={false} width={32} fontSize={12} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke={accent} strokeWidth={2} fill="url(#overviewFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
