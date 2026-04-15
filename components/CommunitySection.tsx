"use client";

import { MessageCircle, ClipboardList, ExternalLink } from "lucide-react";

// Inline SVG components for social icons not in lucide-react
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = [
  {
    label: "WhatsApp Community",
    description: "Join our main WhatsApp group",
    href: "https://chat.whatsapp.com/FcxbTnrtpEk5gu0Y5mpOhm",
    Icon: MessageCircle,
    bg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-500",
    cta: "Join Group",
    ctaBg: "bg-green-500 hover:bg-green-600",
  },
  {
    label: "WhatsApp (Alt Link)",
    description: "Second community group link",
    href: "https://chat.whatsapp.com/GMXx9RICMz683wTp6e0uCI",
    Icon: MessageCircle,
    bg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-500",
    cta: "Join Group",
    ctaBg: "bg-green-500 hover:bg-green-600",
  },
  {
    label: "Instagram",
    description: "@claudebuilderclubunilag",
    href: "https://www.instagram.com/claudebuilderclubunilag",
    Icon: InstagramIcon,
    bg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-500",
    cta: "Follow Us",
    ctaBg: "bg-pink-500 hover:bg-pink-600",
  },
  {
    label: "LinkedIn",
    description: "Claude Builder Club UNILAG",
    href: "https://www.linkedin.com/company/claude-builder-club-unilag",
    Icon: LinkedinIcon,
    bg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-500",
    cta: "Connect",
    ctaBg: "bg-blue-500 hover:bg-blue-600",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-[#e8e6dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d97757] mb-3 block">
            Get Involved
          </span>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-[#141413] mb-4">
            Your classmates are already building.
          </h2>
          <p className="body-editorial text-lg text-[#b0aea5] max-w-xl mx-auto leading-relaxed">
            One click with your UNILAG account. No application, no waitlist, no cost.
            Takes about five seconds.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://www.jotform.com/253555944387168"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d97757] hover:bg-[#c86843] text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
          >
            Sign Up Free
          </a>
          <a
            href="https://www.jotform.com/253566966596075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#d0cdc5] hover:border-[#141413] text-[#141413] text-sm font-medium rounded-xl transition-colors bg-white"
          >
            <ClipboardList size={16} />
            Event Check-in
          </a>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {links.map((link) => {
            const Icon = link.Icon;
            return (
              <div
                key={link.href}
                className="bg-white rounded-2xl border border-[#e8e6dc] p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 ${link.bg} border rounded-xl flex items-center justify-center ${link.iconColor} shrink-0`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#141413]">{link.label}</p>
                  <p className="text-xs text-[#b0aea5] truncate">{link.description}</p>
                </div>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 px-3 py-1.5 text-xs font-semibold text-white rounded-lg transition-colors ${link.ctaBg}`}
                >
                  {link.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
