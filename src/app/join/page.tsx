import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { RegistrationSection } from "@/components/RegistrationSection";

export const metadata: Metadata = {
  title: "Join CyberGuard YUVA | Membership & Registration",
  description:
    "Register to become a member of CyberGuard YUVA Youth Cyber Defense Club and join Mera Yuva Bharat (MY Bharat) with referral code 38YAZ6D0.",
};

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">Official Registration</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Join CyberGuard YUVA
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Become part of a youth-driven initiative promoting cybersecurity awareness, digital
            safety, responsible technology use, and a safer digital India.
          </p>
        </div>
      </section>

      {/* Main Dual Cards & 4-Step Process */}
      <RegistrationSection showSteps={true} />

      {/* Embedded Google Form Section with Fallback Button */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="cyber-badge mx-auto">Direct Application</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123A63]">
              Membership Interest Form
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              You can complete the official form below, or open it in a new window for the full
              Google Forms interface.
            </p>

            <div className="pt-2">
              <a
                href={siteConfig.registration.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123A63] text-[#35C6E8] hover:text-white hover:bg-[#071A2F] font-bold text-xs transition-colors shadow-sm"
              >
                <span>Open Google Form in New Window</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Responsive Embedded Iframe Container */}
          <div className="rounded-3xl border border-slate-300/80 shadow-2xl overflow-hidden bg-white relative min-h-[750px]">
            <iframe
              src={siteConfig.registration.googleFormEmbedUrl}
              width="100%"
              height="800"
              title="CyberGuard YUVA Membership Registration Google Form"
              className="w-full border-0"
              loading="lazy"
            >
              Loading CyberGuard YUVA Registration Form…
            </iframe>
          </div>

          {/* Iframe Support Notice */}
          <div className="p-4 rounded-xl bg-[#F3F7FB] border border-slate-200 text-center text-xs text-slate-500 space-y-1">
            <p>
              If the embedded form above does not load or you experience issues on mobile, please{" "}
              <a
                href={siteConfig.registration.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#123A63] font-bold underline hover:text-[#35C6E8]"
              >
                click here to open the original Google Form directly
              </a>
              .
            </p>
            <p className="text-slate-400">
              Form responses are handled securely through Google Forms.
            </p>
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-14 bg-[#F3F7FB] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#123A63]">Need Assistance With Registration?</h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            If you have questions about membership roles, college chapters, or technical issues, reach
            out to us directly at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#123A63] font-bold underline hover:text-[#35C6E8]"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
