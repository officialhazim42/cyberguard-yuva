"use client";

import { useState } from "react";
import {
  FileText,
  ExternalLink,
  Copy,
  Check,
  Shield,
  Info,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface RegistrationSectionProps {
  showSteps?: boolean;
  className?: string;
}

export function RegistrationSection({
  showSteps = true,
  className = "",
}: RegistrationSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.registration.myBharatReferralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  return (
    <section className={`py-16 md:py-24 bg-[#071A2F] text-white relative cyber-circuit-bg overflow-hidden ${className}`}>
      {/* Glow lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#35C6E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#38D6B0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123A63]/80 border border-[#35C6E8]/40 text-[#35C6E8] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#38D6B0]" />
            <span>Membership &amp; Youth Defense</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Join CyberGuard YUVA
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#35C6E8] to-[#38D6B0] mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto pt-2">
            Become part of a youth-driven initiative promoting cybersecurity awareness, digital
            safety, responsible technology use, and a safer digital India.
          </p>
        </div>

        {/* Dual Registration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CARD 1: CyberGuard YUVA Official Form */}
          <div className="bg-[#061426] rounded-3xl p-8 sm:p-10 border-2 border-[#35C6E8]/40 hover:border-[#35C6E8] transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#35C6E8] uppercase tracking-wider bg-[#123A63]/70 px-3 py-1 rounded-full border border-[#35C6E8]/30">
                  Primary Registration
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Club Membership Form</h3>
                <p className="text-xs text-[#38D6B0] font-semibold mt-0.5">
                  Official Google Forms Application
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Submit your details to express your interest in joining CyberGuard YUVA as a youth
                member, volunteer, or cyber safety ambassador in your educational institution.
              </p>

              <div className="p-3.5 rounded-xl bg-[#071A2F] border border-[#123A63] space-y-1 text-xs text-slate-400">
                <p className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#35C6E8]" />
                  <span>Free Membership &amp; Educational Participation</span>
                </p>
                <p>Takes approximately 2–3 minutes to complete.</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={siteConfig.registration.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all duration-200 shadow-lg shadow-[#35C6E8]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>REGISTER WITH CYBERGUARD YUVA</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Opens official Google Form in a new tab
              </p>
            </div>
          </div>

          {/* CARD 2: MY Bharat Registration */}
          <div className="bg-[#061426] rounded-3xl p-8 sm:p-10 border-2 border-[#38D6B0]/40 hover:border-[#38D6B0] transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#123A63] text-[#38D6B0] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#38D6B0] uppercase tracking-wider bg-[#123A63]/70 px-3 py-1 rounded-full border border-[#38D6B0]/30">
                  National Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Register on MY Bharat</h3>
                <p className="text-xs text-[#35C6E8] font-semibold mt-0.5">
                  Mera Yuva Bharat Youth Portal
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Register on the official government youth platform to participate in national
                initiatives, youth programs, and experiential learning opportunities.
              </p>

              {/* Referral Code Box */}
              <div className="p-4 rounded-2xl bg-[#071A2F] border border-[#38D6B0]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    MY Bharat Referral Code:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#38D6B0] hover:text-white transition-colors bg-[#123A63] px-2 py-1 rounded-md"
                    title="Copy Referral Code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#38D6B0]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY CODE</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#38D6B0] tracking-widest text-center py-1 bg-[#061426] rounded-xl border border-[#123A63]">
                  {siteConfig.registration.myBharatReferralCode}
                </div>
                <p className="text-[11px] text-slate-400 text-center">
                  Use this referral code when registering on the MY Bharat portal.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={siteConfig.registration.myBharatRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#123A63] text-white hover:bg-[#071A2F] border border-[#38D6B0]/50 hover:border-[#38D6B0] font-extrabold text-sm transition-all duration-200 shadow-lg shadow-[#123A63]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>REGISTER ON MY BHARAT</span>
                <ExternalLink className="w-4 h-4 shrink-0 text-[#38D6B0]" />
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Opens official government portal: mybharat.gov.in/yuva_register
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Registration Process Guidance */}
        {showSteps && (
          <div className="mt-16 max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How the Registration Process Works
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Please follow these four simple steps for your membership onboarding:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#061426] border border-[#123A63] space-y-3 relative">
                <span className="w-7 h-7 rounded-full bg-[#123A63] text-[#35C6E8] flex items-center justify-center text-xs font-bold font-mono">
                  1
                </span>
                <h4 className="text-sm font-bold text-white">Step 1: Interest Form</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete the CyberGuard YUVA membership interest form via Google Forms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#061426] border border-[#123A63] space-y-3 relative">
                <span className="w-7 h-7 rounded-full bg-[#123A63] text-[#38D6B0] flex items-center justify-center text-xs font-bold font-mono">
                  2
                </span>
                <h4 className="text-sm font-bold text-white">Step 2: MY Bharat</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete MY Bharat registration separately if you have not already registered (referral code:{" "}
                  <code className="text-[#38D6B0] font-mono">38YAZ6D0</code>).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#061426] border border-[#123A63] space-y-3 relative">
                <span className="w-7 h-7 rounded-full bg-[#123A63] text-[#35C6E8] flex items-center justify-center text-xs font-bold font-mono">
                  3
                </span>
                <h4 className="text-sm font-bold text-white">Step 3: Review</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The club&apos;s authorized team may review your application based on role interests.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#061426] border border-[#123A63] space-y-3 relative">
                <span className="w-7 h-7 rounded-full bg-[#123A63] text-[#38D6B0] flex items-center justify-center text-xs font-bold font-mono">
                  4
                </span>
                <h4 className="text-sm font-bold text-white">Step 4: Communication</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Follow official communication sent to your email regarding updates and activities.
                </p>
              </div>
            </div>

            {/* Crucial Transparency Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#123A63]/40 border border-amber-300/30 flex items-start gap-3.5 text-xs text-slate-200">
              <Info className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold text-amber-200">Important Registration Notice: </span>
                Submitting the Google Form does not automatically register someone on MY Bharat or
                guarantee club membership approval. Both registrations are independent processes.
                CyberGuard YUVA collects interest purely for youth club activities and does not
                access or manage government records.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
