"use client";

import { Trophy, MapPin, Clock, Calendar } from "lucide-react";

const finalists = [
  { name: "CampusPal", icon: "🎓" },
  { name: "TheNextMe", icon: "🤖" },
  { name: "Synapse", icon: "🧠" },
  { name: "Quorum", icon: "💬" },
  { name: "Ojamoni", icon: "🛒" },
];

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
  return (
    <section id="hackathon" className="py-24 bg-[#141413] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d97757] opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d97757]/10 border border-[#d97757]/20 rounded-full text-[#d97757] text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-[#d97757] rounded-full animate-pulse" />
            Finals — April 24th
          </span>
          <h2 className="heading text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Claude AI Hackathon
            <br />
            <span className="text-[#d97757]">UNILAG</span>
          </h2>
          <p className="body-editorial text-lg text-[#b0aea5] max-w-xl mx-auto leading-relaxed">
            After 110+ submissions and days of review, the top 5 teams are set to battle it out live for the Hackathon Champion title.
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#d97757]/10 rounded-xl flex items-center justify-center text-[#d97757] shrink-0">
              <Calendar size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Date</p>
              <p className="text-[#b0aea5] text-sm">Friday, April 24th, 2026</p>
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#6a9bcc]/10 rounded-xl flex items-center justify-center text-[#6a9bcc] shrink-0">
              <Clock size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Time</p>
              <p className="text-[#b0aea5] text-sm">9:00 AM Prompt</p>
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#788c5d]/10 rounded-xl flex items-center justify-center text-[#788c5d] shrink-0">
              <MapPin size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">Venue</p>
              <p className="text-[#b0aea5] text-sm">UNILAG Design Studio</p>
            </div>
          </div>
        </div>

        {/* Top 5 Finalists */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#b0aea5] mb-6 text-center">
            Top 5 Finalists
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {finalists.map((team) => (
              <div
                key={team.name}
                className="flex flex-col items-center gap-3 px-6 py-4 bg-[#d97757]/10 border border-[#d97757]/20 rounded-2xl min-w-[110px]"
              >
                <span className="text-3xl">{team.icon}</span>
                <span className="text-white text-sm font-semibold">{team.name}</span>
              </div>
            ))}
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

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://luma.com/vnfe8ojm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97757] hover:bg-[#c86843] text-white font-semibold text-base rounded-xl transition-colors shadow-lg shadow-[#d97757]/20"
          >
            <Trophy size={18} />
            Get Your Front-Row Seat
          </a>
          <p className="text-xs text-[#b0aea5] mt-4">
            Come witness the battle live at the UNILAG Design Studio.
          </p>
        </div>
      </div>
    </section>
  );
}
