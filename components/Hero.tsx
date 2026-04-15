import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#141413] flex flex-col items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[480px] h-[480px] bg-[#d97757] rounded-full opacity-[0.08] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#6a9bcc] rounded-full opacity-[0.08] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.07] border border-white/[0.12] rounded-full mb-10">
          <div className="w-5 h-5 rounded-md bg-[#d97757] flex items-center justify-center text-white text-xs font-bold">C</div>
          <span className="text-white/70 text-sm font-medium">Claude Builder Club</span>
          <span className="text-white/30 text-sm">·</span>
          <span className="text-white/50 text-sm">UNILAG</span>
        </div>

        {/* Headline */}
        <h1 className="heading text-5xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
          Don&apos;t just learn about AI.
          <br />
          <span className="text-[#d97757]">Build with it at UNILAG.</span>
        </h1>

        {/* Sub */}
        <p className="body-editorial text-lg sm:text-xl text-[#b0aea5] leading-relaxed max-w-2xl mx-auto mb-12">
          Ship real projects and graduate with a portfolio that proves it.{" "}
          <b className="text-white/70">Any department. Zero cost. One click to join.</b>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.jotform.com/253555944387168"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold text-white bg-[#d97757] hover:bg-[#c86843] rounded-xl transition-colors shadow-lg shadow-[#d97757]/20"
          >
            Join the Club
          </a>
          <a
            href="#hackathon"
            className="px-6 py-3 text-sm font-medium text-[#b0aea5] hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-colors"
          >
            See the Hackathon →
          </a>
        </div>

        {/* Hackathon teaser pill */}
        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-[#d97757]/10 border border-[#d97757]/20 rounded-full">
          <span className="w-2 h-2 bg-[#d97757] rounded-full animate-pulse" />
          <span className="text-[#d97757] text-xs font-semibold">
            Claude AI Hackathon — Deadline April 19th, 2026
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a4840]">
        <span className="text-xs tracking-wide">Scroll to explore</span>
        <div className="w-5 h-8 border border-[#2e2d2b] rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-[#4a4840] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
