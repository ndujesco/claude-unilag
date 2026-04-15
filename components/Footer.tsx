import { MessageCircle, Mail, Phone } from "lucide-react";
import ClubLogo from "./ClubLogo";

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

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#141413] text-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <ClubLogo size={28} />
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
                { href: "/#about", label: "About Us" },
                { href: "/#hackathon", label: "Hackathon" },
                { href: "/gallery", label: "Gallery" },
                { href: "/#community", label: "Community" },
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
                { href: "https://chat.whatsapp.com/FcxbTnrtpEk5gu0Y5mpOhm", label: "WhatsApp (Group 1)", Icon: <MessageCircle size={13} /> },
                { href: "https://chat.whatsapp.com/GMXx9RICMz683wTp6e0uCI", label: "WhatsApp (Group 2)", Icon: <MessageCircle size={13} /> },
                { href: "https://www.instagram.com/claudebuilderclubunilag", label: "Instagram", Icon: <InstagramIcon size={13} /> },
                { href: "https://www.linkedin.com/company/claude-builder-club-unilag", label: "LinkedIn", Icon: <LinkedinIcon size={13} /> },
                { href: "https://x.com/ClaudeBCUnilag", label: "X (Twitter)", Icon: <XIcon size={13} /> },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#b0aea5] hover:text-[#faf9f5] transition-colors"
                  >
                    <span className="shrink-0">{link.Icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d97757] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#b0aea5] mt-0.5 shrink-0" />
                <a
                  href="mailto:claudebuilderclubunilag@gmail.com"
                  className="text-sm text-[#b0aea5] hover:text-[#faf9f5] transition-colors break-all"
                >
                  claudebuilderclubunilag@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#b0aea5] shrink-0" />
                <a
                  href="tel:+2348143033517"
                  className="text-sm text-[#b0aea5] hover:text-[#faf9f5] transition-colors"
                >
                  +234 814 303 3517
                </a>
              </li>
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
            <a
              href="https://x.com/ClaudeBCUnilag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b0aea5] hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
