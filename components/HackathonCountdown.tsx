"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, Zap, Calendar } from "lucide-react";

const DEADLINE = new Date("2026-04-19T23:59:59");

function getTimeLeft() {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, expired: false };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/[0.08] border border-white/[0.12] rounded-2xl px-5 py-4 min-w-[80px] text-center">
        <span className="heading text-4xl sm:text-5xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-[#b0aea5] mt-2 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}

const prizes = [
  {
    place: "1st",
    naira: "400,000",
    api: "$500",
    bg: "bg-amber-400/10 border-amber-400/20",
    text: "text-amber-400",
    icon: "🥇",
  },
  {
    place: "2nd",
    naira: "300,000",
    api: "$500",
    bg: "bg-slate-400/10 border-slate-400/20",
    text: "text-slate-400",
    icon: "🥈",
  },
  {
    place: "3rd",
    naira: "200,000",
    api: "$500",
    bg: "bg-amber-700/10 border-amber-700/20",
    text: "text-amber-600",
    icon: "🥉",
  },
];

export default function HackathonCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hackathon" className="py-24 bg-[#141413] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d97757] opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d97757]/10 border border-[#d97757]/20 rounded-full text-[#d97757] text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-[#d97757] rounded-full animate-pulse" />
            Now Open
          </span>
          <h2 className="heading text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Claude AI Hackathon
            <br />
            <span className="text-[#d97757]">UNILAG</span>
          </h2>
          <p className="body-editorial text-lg text-[#b0aea5] max-w-xl mx-auto leading-relaxed">
            Build an innovative solution using Claude or Claude Code. Open to all UNILAG students. Teams of 1–4.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center mb-14">
          <div className="text-center">
            <p className="text-xs text-[#b0aea5] uppercase tracking-widest mb-5 font-medium">
              {timeLeft.expired ? "Registration closed" : "Registration closes in"}
            </p>
            {!timeLeft.expired ? (
              <div className="flex items-center gap-3 sm:gap-4">
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="text-[#b0aea5] text-3xl font-light mb-5">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="text-[#b0aea5] text-3xl font-light mb-5">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <span className="text-[#b0aea5] text-3xl font-light mb-5">:</span>
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
              </div>
            ) : (
              <p className="text-white text-2xl font-semibold">Registration has closed.</p>
            )}
          </div>
        </div>

        {/* Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {prizes.map((p) => (
            <div
              key={p.place}
              className={`${p.bg} border rounded-2xl p-6 text-center`}
            >
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className={`text-xs font-semibold uppercase tracking-wider ${p.text} mb-3`}>
                {p.place} Place
              </div>
              <div className="text-white text-2xl font-bold mb-1">₦{p.naira}</div>
              <div className="text-[#b0aea5] text-sm">+ {p.api} in API Credits</div>
            </div>
          ))}
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#d97757]/10 rounded-xl flex items-center justify-center text-[#d97757] shrink-0">
              <Users size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Team Size</p>
              <p className="text-[#b0aea5] text-sm">1–4 members per team</p>
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#6a9bcc]/10 rounded-xl flex items-center justify-center text-[#6a9bcc] shrink-0">
              <Zap size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">What to Build</p>
              <p className="text-[#b0aea5] text-sm">Innovative solution using Claude or Claude Code</p>
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#788c5d]/10 rounded-xl flex items-center justify-center text-[#788c5d] shrink-0">
              <Calendar size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Deadline</p>
              <p className="text-[#b0aea5] text-sm">April 19th, 2026</p>
            </div>
          </div>
        </div>

        {/* Judging criteria */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#b0aea5] mb-4">Judging Criteria</p>
          <div className="flex flex-wrap gap-3">
            {["Impact", "Technical Prowess", "Business Feasibility"].map((c) => (
              <span key={c} className="px-4 py-2 bg-[#d97757]/10 border border-[#d97757]/20 text-[#d97757] text-sm font-medium rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://forms.gle/5xUhUpsRytyBZSZt9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97757] hover:bg-[#c86843] text-white font-semibold text-base rounded-xl transition-colors shadow-lg shadow-[#d97757]/20"
          >
            <Trophy size={18} />
            Register for the Hackathon
          </a>
          <p className="text-xs text-[#b0aea5] mt-4">
            Open to all University of Lagos students. No registration fee.
          </p>
        </div>
      </div>
    </section>
  );
}
