import { MessageCircle } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#141413] text-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#d97757] flex items-center justify-center text-white text-xs font-bold shrink-0">
                C
              </div>
              <div>
                <p className="font-semibold text-sm">Claude Builder Club</p>
                <p className="text-xs text-[#b0aea5]">@ UNILAG</p>
              </div>
            </div>
            <p className="body-editorial text-sm text-[#b0aea5] leading-relaxed">
              Empowering UNILAG students to build the future with AI. Powered by Claude from Anthropic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d97757] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About Us" },
                { href: "#hackathon", label: "Hackathon" },
                { href: "#community", label: "Community" },
                { href: "https://www.jotform.com/253555944387168", label: "Sign Up", external: true },
                { href: "https://www.jotform.com/253566966596075", label: "Event Check-in", external: true },
                { href: "https://forms.gle/5xUhUpsRytyBZSZt9", label: "Hackathon Registration", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#b0aea5] hover:text-[#faf9f5] transition-colors"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d97757] mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {[
                { href: "https://chat.whatsapp.com/FcxbTnrtpEk5gu0Y5mpOhm", label: "WhatsApp (Group 1)" },
                { href: "https://chat.whatsapp.com/GMXx9RICMz683wTp6e0uCI", label: "WhatsApp (Group 2)" },
                { href: "https://www.instagram.com/claudebuilderclubunilag", label: "@claudebuilderclubunilag" },
                { href: "https://www.linkedin.com/company/claude-builder-club-unilag", label: "LinkedIn" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#b0aea5] hover:text-[#faf9f5] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#b0aea5]">
            © {new Date().getFullYear()} Claude Builder Club at University of Lagos
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/FcxbTnrtpEk5gu0Y5mpOhm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0aea5] hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://www.instagram.com/claudebuilderclubunilag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0aea5] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/claude-builder-club-unilag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0aea5] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
