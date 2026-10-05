/**
 * ============================================================================
 *  dashboard.ts — THE SIDEBAR AND SAMPLE DATA
 * ============================================================================
 *  The brand (name, logo, accent colour) lives in /webshots.config.json —
 *  WebShots writes it when you start a project from a blueprint; edit it by
 *  hand any time. Change the sidebar here. The `sample` data is
 *  shown until Firestore has real data (collections: `stats`, `activity`) — see
 *  scripts/seed.mjs to seed it, or just edit the sample to taste.
 * ============================================================================
 */

import config from "../../webshots.config.json";

export const dashboard = {
  // --- Brand --------------------------------------------------------------
  brand: config.brand, // name, logo (in /public), accent (buttons, links, chart, active nav)

  // --- Sidebar (icon = a lucide-react icon name) --------------------------
  sidebar: [
    { label: "Overview", href: "/", icon: "LayoutDashboard" },
    // Add more sections here as you build them (e.g. Customers, Analytics).
  ],

  // --- Sample data (fallback until Firestore is seeded) -------------------
  sample: {
    stats: [
      { id: "revenue", label: "Revenue", value: "$48,210", delta: "+12.5%", trend: "up" },
      { id: "users", label: "Active users", value: "2,318", delta: "+4.1%", trend: "up" },
      { id: "orders", label: "Orders", value: "1,204", delta: "-1.8%", trend: "down" },
      { id: "conversion", label: "Conversion", value: "3.6%", delta: "+0.4%", trend: "up" },
    ],
    chart: [
      { month: "Jan", value: 31 },
      { month: "Feb", value: 40 },
      { month: "Mar", value: 38 },
      { month: "Apr", value: 51 },
      { month: "May", value: 49 },
      { month: "Jun", value: 62 },
      { month: "Jul", value: 58 },
      { month: "Aug", value: 71 },
      { month: "Sep", value: 67 },
      { month: "Oct", value: 79 },
      { month: "Nov", value: 84 },
      { month: "Dec", value: 92 },
    ],
    activity: [
      { id: "a1", who: "Alex Rivera", action: "created a new order", when: "2m ago" },
      { id: "a2", who: "Sam Lee", action: "updated their profile", when: "18m ago" },
      { id: "a3", who: "Jordan Kim", action: "upgraded to Business", when: "1h ago" },
      { id: "a4", who: "Taylor Brooks", action: "left a 5-star review", when: "3h ago" },
      { id: "a5", who: "Morgan Diaz", action: "cancelled a subscription", when: "5h ago" },
    ],
  },
} as const;

export type Dashboard = typeof dashboard;
