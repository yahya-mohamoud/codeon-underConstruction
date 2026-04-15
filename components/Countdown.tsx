"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-09-01T00:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface TimeLeft {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: "00", hours: "00", mins: "00", secs: "00" };
  const secs  = Math.floor(diff / 1000) % 60;
  const mins  = Math.floor(diff / 60_000) % 60;
  const hours = Math.floor(diff / 3_600_000) % 24;
  const days  = Math.floor(diff / 86_400_000);
  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[52px] sm:min-w-[60px] text-center text-[1.75rem] sm:text-[2rem] font-extrabold text-[#001F3F] bg-black/10 rounded-lg px-3 py-2 leading-none tabular-nums">
        {value}
      </div>
      <span className="mt-1.5 text-[0.6rem] font-bold tracking-widest uppercase text-[#001F3F]/60">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-label="Countdown to launch"
      className="py-5"
      style={{ background: "#C9A84C" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <span className="text-[0.7rem] font-bold tracking-widest uppercase text-[#001F3F]/75 whitespace-nowrap">
          Launching in
        </span>
        <div className="flex items-end gap-2 sm:gap-3">
          <Unit value={time.days}  label="Days"    />
          <span className="text-2xl font-black text-[#001F3F]/50 mb-4">:</span>
          <Unit value={time.hours} label="Hours"   />
          <span className="text-2xl font-black text-[#001F3F]/50 mb-4">:</span>
          <Unit value={time.mins}  label="Minutes" />
          <span className="text-2xl font-black text-[#001F3F]/50 mb-4">:</span>
          <Unit value={time.secs}  label="Seconds" />
        </div>
      </div>
    </div>
  );
}
