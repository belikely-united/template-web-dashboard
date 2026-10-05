"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, LayoutDashboard, Settings, Users, type LucideIcon } from "lucide-react";
import { dashboard } from "@/config/dashboard";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
};

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r bg-card md:flex">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dashboard.brand.logo} alt={dashboard.brand.name} className="h-7 w-auto" />
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {dashboard.sidebar.map((item) => {
          const Icon = icons[item.icon] ?? LayoutDashboard;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
              style={active ? { color: dashboard.brand.accent } : undefined}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
