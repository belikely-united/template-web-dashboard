// Optional: write sample data into Firestore so the dashboard shows real docs.
// The app already shows sample data without this — seeding is just to demo Firestore.
//
// Run (Node 20+):
//   node --env-file=.env.local scripts/seed.mjs
//
// Needs SEED_EMAIL + SEED_PASSWORD in the env (an existing Firebase Auth user),
// so the signed-in write passes firestore.rules.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const cfg = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!cfg.apiKey || !process.env.SEED_EMAIL || !process.env.SEED_PASSWORD) {
  console.error("Missing env. Need NEXT_PUBLIC_FIREBASE_* + SEED_EMAIL + SEED_PASSWORD.");
  process.exit(1);
}

const app = initializeApp(cfg);
await signInWithEmailAndPassword(getAuth(app), process.env.SEED_EMAIL, process.env.SEED_PASSWORD);
const db = getFirestore(app);

const stats = [
  { id: "revenue", label: "Revenue", value: "$48,210", delta: "+12.5%", trend: "up" },
  { id: "users", label: "Active users", value: "2,318", delta: "+4.1%", trend: "up" },
  { id: "orders", label: "Orders", value: "1,204", delta: "-1.8%", trend: "down" },
  { id: "conversion", label: "Conversion", value: "3.6%", delta: "+0.4%", trend: "up" },
];

const activity = [
  { id: "a1", who: "Alex Rivera", action: "created a new order", when: "2m ago" },
  { id: "a2", who: "Sam Lee", action: "updated their profile", when: "18m ago" },
  { id: "a3", who: "Jordan Kim", action: "upgraded to Business", when: "1h ago" },
  { id: "a4", who: "Taylor Brooks", action: "left a 5-star review", when: "3h ago" },
];

for (const s of stats) await setDoc(doc(db, "stats", s.id), s);
for (const a of activity) await setDoc(doc(db, "activity", a.id), a);

console.log(`Seeded ${stats.length} stats and ${activity.length} activity items.`);
process.exit(0);
