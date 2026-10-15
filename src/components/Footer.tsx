import Link from "next/link";
import Image from "next/image";
import { Mail, Shield, ExternalLink, ArrowUpRight, UserPlus, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SocialPlatformIcon } from "@/components/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061426] text-slate-300 border-t border-[#123A63]/60 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#35C6E8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#123A63]/50">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus:outline-none"
              aria-label="CyberGuard YUVA Home"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#35C6E8]/40 bg-[#071A2F] p-0.5">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-xl tracking-wide group-hover:text-[#35C6E8] transition-colors">
                  CYBERGUARD <span className="text-[#35C6E8]">YUVA</span>
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  {siteConfig.subtitle}
                </span>
              </div>
            </Link>

            <div className="inline-block px-3 py-1 rounded bg-[#123A63]/50 text-xs font-bold tracking-widest text-[#38D6B0] border border-[#38D6B0]/30">
              {siteConfig.tagline}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              A youth-focused defense initiative committed to cybersecurity education,
              digital hygiene, and empowering the next generation for a safer digital India.
            </p>

            <div className="pt-1 text-xs text-slate-400">
              <span className="text-slate-200 font-semibold">Founder:</span> {siteConfig.founder.name}
            </div>
          </div>

          {/* Quick Navigation Links + Registration Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-[#35C6E8]">
              Navigation &amp; Join
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#35C6E8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-[#123A63]/40 space-y-2 text-xs">
              <div>
                <a
                  href={siteConfig.registration.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#35C6E8] hover:text-[#38D6B0] transition-colors inline-flex items-center gap-1.5 font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Join CyberGuard YUVA (Form)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.registration.myBharatRegisterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#38D6B0] transition-colors inline-flex items-center gap-1.5 font-semibold"
                >
                  <UserPlus className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Register on MY Bharat</span>
                  <span className="text-[10px] text-slate-400 font-mono">(Ref: {siteConfig.registration.myBharatReferralCode})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Follow Us Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-[#35C6E8]">
              Follow Us
            </h3>
            <div className="space-y-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-[#071A2F] border border-[#123A63] hover:border-[#35C6E8] text-slate-200 hover:text-[#35C6E8] transition-all group"
                  aria-label={social.ariaLabel}
                >
                  <div className="flex items-center gap-2">
                    <SocialPlatformIcon id={social.id} className="w-3.5 h-3.5 text-[#35C6E8]" />
                    <span className="text-xs font-semibold text-white group-hover:text-[#35C6E8] transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#35C6E8]" />
                </a>
              ))}
            </div>
          </div>

          {/* Official Communication & Platform Synergy */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase text-xs text-[#35C6E8]">
              Official Communication
            </h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-400 mb-1">Official Contact Email:</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-[#35C6E8] hover:text-[#38D6B0] font-semibold text-sm transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-[#123A63]/40">
                <p className="text-xs text-slate-400 mb-1">Platform Association:</p>
                <a
                  href={siteConfig.platformAssociation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#35C6E8] text-xs font-medium transition-colors"
                >
                  <span>{siteConfig.platformAssociation.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#35C6E8]" />
                </a>
              </div>

              <div className="pt-1">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#35C6E8] hover:text-white transition-colors"
                >
                  <span>Membership Registration Guide &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#35C6E8]" />
            <span>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/join" className="text-[#35C6E8] hover:underline font-semibold">
              Join Us
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/privacy" className="hover:text-[#35C6E8] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-[#35C6E8] transition-colors">
              Terms of Use
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-[#35C6E8] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
