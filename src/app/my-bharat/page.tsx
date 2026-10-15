"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  Flag,
  Users,
  AlertCircle,
  Info,
  Copy,
  Check,
  Sparkles,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MyBharatPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.registration.myBharatReferralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">Platform Alignment</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            MY Bharat (Mera Yuva Bharat)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Channeling the energy of Indian youth towards constructive digital literacy, safety
            awareness, and community leadership.
          </p>
        </div>
      </section>

      {/* Official Disclaimer Alert */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Independence &amp; Platform Notice:</span> CyberGuard YUVA
            is an autonomous youth cybersecurity club. This website is independent and separate
            from the official MY Bharat portal. It is not owned, operated, or officially endorsed by
            the Government of India. For the official Mera Yuva Bharat portal, always visit{" "}
            <a
              href="https://mybharat.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-amber-950 hover:text-amber-800"
            >
              mybharat.gov.in
            </a>
            .
          </div>
        </div>
      </section>

      {/* Join MY Bharat Official Registration Section */}
      <section className="py-16 md:py-20 bg-[#071A2F] text-white border-b border-[#123A63]/60 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#123A63] text-xs font-bold uppercase tracking-wider text-[#38D6B0] border border-[#38D6B0]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Platform Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Join MY Bharat
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Register on the official government youth portal to participate in youth-led development
              and national learning initiatives.
            </p>
          </div>

          <div className="bg-[#061426] rounded-3xl p-8 sm:p-10 border-2 border-[#38D6B0]/40 shadow-2xl max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#123A63]">
              <div>
                <h3 className="text-xl font-bold text-white">Official Youth Registration</h3>
                <p className="text-xs text-slate-400 mt-0.5">Government of India — Mera Yuva Bharat</p>
              </div>
              <span className="text-xs font-mono font-bold text-[#38D6B0] uppercase bg-[#123A63] px-3 py-1 rounded-full border border-[#38D6B0]/30 w-fit">
                Free Registration
              </span>
            </div>

            {/* Referral Code Display */}
            <div className="p-5 rounded-2xl bg-[#071A2F] border border-[#38D6B0]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  MY Bharat Referral Code:
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38D6B0] hover:text-white transition-colors bg-[#123A63] px-3 py-1.5 rounded-lg border border-[#38D6B0]/30"
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
                      <span>COPY REFERRAL CODE</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#38D6B0] tracking-widest text-center py-2 bg-[#061426] rounded-xl border border-[#123A63]">
                {siteConfig.registration.myBharatReferralCode}
              </div>

              <p className="text-xs text-slate-400 text-center">
                Enter referral code <strong className="text-white">38YAZ6D0</strong> during your MY
                Bharat registration.
              </p>
            </div>

            {/* Registration Action Button */}
            <div className="pt-2 space-y-3">
              <a
                href={siteConfig.registration.myBharatRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all duration-200 shadow-lg shadow-[#35C6E8]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>REGISTER ON MY BHARAT</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              {/* Separation Disclaimer */}
              <div className="p-3.5 rounded-xl bg-[#071A2F] border border-[#123A63] flex items-start gap-2.5 text-xs text-slate-300">
                <Info className="w-4 h-4 text-[#35C6E8] shrink-0 mt-0.5" />
                <span>
                  <strong>Independent Registration Notice:</strong> MY Bharat registration is
                  separate from CyberGuard YUVA&apos;s Google Form. Registering on one does not
                  automatically create an account on the other.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to MY Bharat */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <div className="cyber-badge">Overview</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123A63]">
              What is Mera Yuva Bharat (MY Bharat)?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg pt-2">
              <strong>Mera Yuva Bharat (MY Bharat)</strong> is an autonomous body established by the
              Government of India to serve as a pivotal technology-driven platform for youth
              development and youth-led development.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              MY Bharat connects Indian youth aged 15–29 with diverse experiential learning
              opportunities, volunteering programs, leadership initiatives, and national community
              engagement drives. The platform envisions harnessing youth energy to build a
              prosperous, forward-looking, and self-reliant nation (&ldquo;Viksit Bharat&rdquo;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F3F7FB] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#123A63] text-sm">Official MY Bharat Portal</p>
              <p className="text-xs text-slate-500">Access official national youth programs and registration</p>
            </div>
            <a
              href="https://mybharat.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123A63] text-white font-bold text-xs hover:bg-[#071A2F] transition-colors shrink-0 shadow-sm"
            >
              <span>Visit https://mybharat.gov.in</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#35C6E8]" />
            </a>
          </div>
        </div>
      </section>

      {/* CyberGuard YUVA's Connection */}
      <section className="py-16 md:py-20 bg-[#F3F7FB] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <div className="cyber-badge">Our Synergies</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123A63]">
              How CyberGuard YUVA Connects to the Mission
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              CyberGuard YUVA aligns with the fundamental principles of youth-led nation building by
              specializing in digital defense, scam awareness, and safe internet education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#123A63] text-base">Digital Safety Literacy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As young citizens lead India&apos;s digital revolution, possessing strong cyber
                hygiene ensures youth navigate financial services and social platforms without
                falling prey to scams.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#123A63] text-base">Peer Empowerment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encouraging young volunteers to educate classmates, families, and local communities,
                multiplying positive cybersecurity practices across districts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                <Flag className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#123A63] text-base">Responsible Citizenship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Promoting cyber law awareness, ethical internet use, and combating malicious digital
                practices to uphold the digital integrity of the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Security Guidelines */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-[#123A63]" />
            <h2 className="text-2xl font-bold text-[#123A63]">Platform Security &amp; Transparency</h2>
          </div>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              In alignment with cybersecurity best practices, CyberGuard YUVA adheres to the following
              operational safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No Credential Collection:</strong> We will never ask for your MY Bharat login
                credentials, government identification passwords, OTPs, or financial banking details.
              </li>
              <li>
                <strong>Independent Identity:</strong> All resources, articles, and workshops
                provided by CyberGuard YUVA are informational youth community initiatives.
              </li>
              <li>
                <strong>Official Channels:</strong> Official government notifications and national
                program registrations are hosted exclusively on government domains ending in{" "}
                <code className="text-xs font-mono bg-slate-100 px-1 py-0.5 rounded">.gov.in</code>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#071A2F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Join CyberGuard YUVA?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Fill out our membership interest form and be part of youth-led cybersecurity awareness.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/join"
              className="px-6 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-bold text-sm hover:bg-[#38D6B0] transition-colors"
            >
              Join CyberGuard YUVA
            </Link>
            <a
              href={siteConfig.registration.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#123A63] text-white border border-[#35C6E8]/30 font-semibold text-sm hover:border-[#35C6E8] transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#35C6E8]" />
              <span>Direct Google Form</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
