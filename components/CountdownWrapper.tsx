"use client";

import dynamic from "next/dynamic";

// Countdown reads Date.now() every second — must be client-only
const CountdownClient = dynamic(() => import("./Countdown"), { ssr: false });

export default function CountdownWrapper() {
  return <CountdownClient />;
}
