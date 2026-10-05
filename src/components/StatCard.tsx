import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/data";

export default function StatCard({ stat }: { stat: Stat }) {
  const up = stat.trend !== "down";
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{stat.label}</p>
        <div className="mt-2 flex items-end justify-between">
          <span className="text-2xl font-bold">{stat.value}</span>
          {stat.delta ? (
            <span
              className={cn(
                "flex items-center gap-1 text-xs font-medium",
                up ? "text-emerald-600" : "text-red-600",
              )}
            >
              {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {stat.delta}
            </span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
