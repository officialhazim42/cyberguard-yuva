"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, UserPlus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SocialPlatformIcon } from "@/components/SocialIcons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A2F]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#35C6E8]/20 py-3"
          : "bg-[#071A2F] border-b border-[#123A63]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35C6E8] rounded-lg p-1"
            aria-label="CyberGuard YUVA Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border border-[#35C6E8]/40 bg-[#061426] p-0.5 group-hover:border-[#35C6E8] transition-colors">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-wide group-hover:text-[#35C6E8] transition-colors">
                CYBERGUARD <span className="text-[#35C6E8]">YUVA</span>
              </span>
              <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
                Youth Cyber Defense Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? "text-[#35C6E8] bg-[#123A63]/40"
                      : "text-slate-200 hover:text-white hover:bg-[#123A63]/30"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#35C6E8] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Clean Social Links + Prominent Registration Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Clean, unobtrusive social icons */}
            <div className="flex items-center gap-1.5 border-r border-[#123A63] pr-3.5" aria-label="Social media links">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-300 hover:text-[#35C6E8] hover:bg-[#123A63]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35C6E8]"
                  aria-label={social.ariaLabel}
                  title={social.actionText}
                >
                  <SocialPlatformIcon id={social.id} className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Prominent Register Now Button */}
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all duration-200 shadow-md shadow-[#35C6E8]/20 hover:shadow-[#38D6B0]/30 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#35C6E8] focus:ring-offset-2 focus:ring-offset-[#071A2F]"
            >
              <UserPlus className="w-4 h-4 shrink-0" />
              <span>REGISTER NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#123A63]/60 focus:outline-none focus:ring-2 focus:ring-[#35C6E8]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#123A63]/80 bg-[#071A2F] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#123A63] text-[#35C6E8] font-semibold"
                      : "text-slate-200 hover:bg-[#123A63]/50 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <Shield className="w-4 h-4 text-[#35C6E8]" />}
                </Link>
              );
            })}
          </div>

          {/* Mobile Social Links Row */}
          <div className="pt-2 border-t border-[#123A63]/60">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold px-2 mb-2">
              Connect With Us
            </p>
            <div className="flex items-center gap-3 px-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[#123A63]/60 hover:bg-[#123A63] text-slate-200 hover:text-[#35C6E8] transition-colors text-xs font-semibold"
                  aria-label={social.ariaLabel}
                >
                  <SocialPlatformIcon id={social.id} className="w-4 h-4" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/join"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#35C6E8] text-[#071A2F] font-extrabold text-center hover:bg-[#38D6B0] transition-colors shadow-md"
            >
              <UserPlus className="w-4 h-4 shrink-0" />
              <span>REGISTER NOW</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
