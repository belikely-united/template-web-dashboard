"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Topbar({ title }: { title: string }) {
  const { user, signOut } = useAuth();
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        {user?.email ? (
          <span className="hidden text-sm text-muted-foreground sm:inline">{user.email}</span>
        ) : null}
        <Button variant="outline" size="sm" onClick={() => signOut()}>
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </header>
  );
}
