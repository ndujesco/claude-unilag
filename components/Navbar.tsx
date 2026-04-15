"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ClubLogo from "./ClubLogo";

const navLinks = [
  { href: "/#about", label: "About", page: false },
  { href: "/#hackathon", label: "Hackathon", page: false },
  { href: "/gallery", label: "Gallery", page: true },
  { href: "/#community", label: "Community", page: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f5]/95 backdrop-blur-md shadow-sm border-b border-[#e8e6dc]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <ClubLogo size={28} />
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-sm tracking-tight ${scrolled ? "text-[#141413]" : "text-white"}`}>
                Claude Builder Club
              </span>
              <span className={`text-[10px] font-medium ${scrolled ? "text-[#b0aea5]" : "text-white/50"}`}>
                @ UNILAG
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const cls = `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[#555555] hover:text-[#141413] hover:bg-[#e8e6dc]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`;
              return link.page ? (
                <Link key={link.href} href={link.href} className={cls}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={cls}>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.jotform.com/253555944387168"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#d97757] hover:bg-[#c86843] rounded-lg transition-colors shadow-sm"
            >
              Join the Club
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-[#141413] hover:bg-[#e8e6dc]"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e6dc] py-4 px-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const cls = "block px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#141413] hover:bg-[#faf9f5] rounded-lg transition-colors";
              return link.page ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cls}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cls}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 mt-3 border-t border-[#e8e6dc]">
            <a
              href="https://www.jotform.com/253555944387168"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#d97757] hover:bg-[#c86843] rounded-lg transition-colors"
            >
              Join the Club
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
