"use client";

import { Compass, Wrench, Users } from "lucide-react";

const pillars = [
  {
    Icon: Compass,
    step: "01",
    title: "Explore",
    description:
      "Curious but don't know where to start? Our workshops and hands-on sessions meet you exactly where you are. No prior experience needed.",
    accent: "bg-[#d97757]/10 border-[#d97757]/20",
    iconColor: "text-[#d97757]",
    stepColor: "text-[#d97757]",
  },
  {
    Icon: Wrench,
    step: "02",
    title: "Build",
    description:
      "Have an idea you want to ship? Use the Claude API to build it. Class projects, startup pitches, personal experiments — if you can describe it, you can build it.",
    accent: "bg-[#6a9bcc]/10 border-[#6a9bcc]/20",
    iconColor: "text-[#6a9bcc]",
    stepColor: "text-[#6a9bcc]",
  },
  {
    Icon: Users,
    step: "03",
    title: "Connect",
    description:
      "Find your people. Students, faculty, and professionals who take AI seriously and want everyone at the table — across every department at UNILAG.",
    accent: "bg-[#788c5d]/10 border-[#788c5d]/20",
    iconColor: "text-[#788c5d]",
    stepColor: "text-[#788c5d]",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-24 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d97757] mb-3 block">
            Why We Exist
          </span>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-[#141413] mb-4 leading-tight">
            We&apos;re building for everyone else.
          </h2>
          <p className="body-editorial text-lg text-[#6b6965] max-w-2xl mx-auto leading-relaxed">
            Most AI content is made for people who already get it. Powered by Claude from Anthropic,
            our workshops welcome students from every faculty — engineering,
            sciences, arts, social sciences, and more. If you&apos;re at UNILAG
            and curious about AI, you&apos;re exactly who this is for.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl border border-[#e8e6dc] p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-12 h-12 ${pillar.accent} border rounded-xl flex items-center justify-center ${pillar.iconColor}`}
                >
                  <pillar.Icon size={20} strokeWidth={1.5} />
                </div>
                <span
                  className={`text-2xl font-bold tabular-nums tracking-tight ${pillar.stepColor} opacity-30 select-none`}
                >
                  {pillar.step}
                </span>
              </div>
              <h3 className="heading text-xl font-semibold text-[#141413] mb-3">
                {pillar.title}
              </h3>
              <p className="body-editorial text-[#6b6965] leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="body-editorial text-lg text-[#6b6965] italic leading-relaxed">
            &ldquo;AI is here to stay, and the students who understand and can build with it today will define what it looks like for everyone else. I want those students to be from UNILAG.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-[#6b6965]">
            — Claude Builder Club UNILAG Leadership
          </p>
        </div>
      </div>
    </section>
  );
}
