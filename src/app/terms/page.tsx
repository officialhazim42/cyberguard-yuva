import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use | CyberGuard YUVA",
  description:
    "Terms of Use for CyberGuard YUVA - guidelines on responsible use of website content, educational cybersecurity advisories, and disclaimers.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#071A2F] text-white py-14 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35C6E8] hover:text-[#38D6B0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Use</h1>
          <p className="text-slate-300 text-sm">
            Last Updated: October 2026 • Effective Date: October 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these
              Terms of Use. If you do not agree with any part of these terms, you must not use this
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              2. Educational &amp; Informational Purpose
            </h2>
            <p>
              The content provided by CyberGuard YUVA—including guides, advisories, workshop
              descriptions, and tips—is intended purely for educational and cybersecurity awareness
              purposes. It is designed to assist individuals in protecting their digital identity and
              understanding security concepts.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              The content does not constitute formal legal counsel or guaranteed certification of
              defense against all potential cyber threats. Users are encouraged to combine these
              guidelines with ongoing professional security practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              3. Responsible &amp; Lawful Use
            </h2>
            <p>
              Users agree to utilize this website and any cybersecurity educational resources strictly
              for lawful, defensive, and constructive purposes. You explicitly agree not to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
              <li>
                Use any knowledge, tools, or examples shared on this site to attempt unauthorized
                access, scanning, exploitation, or interference with third-party networks, devices, or
                services.
              </li>
              <li>
                Misuse the contact forms to transmit spam, malicious payloads, abusive content, or
                impersonate any person or entity.
              </li>
              <li>
                Attempt to disrupt the integrity or security of this website&apos;s infrastructure.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              4. External Links Disclaimer
            </h2>
            <p>
              Our website may link to third-party websites and platforms, including the official{" "}
              <strong>MY Bharat portal (https://mybharat.gov.in/)</strong>. CyberGuard YUVA does not
              own, control, or assume responsibility for the content, privacy policies, or practices
              of third-party platforms. Links to outside platforms do not imply ownership or
              endorsement by third-party government agencies.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              5. Intellectual Property &amp; Branding
            </h2>
            <p>
              The CyberGuard YUVA name, official logo badge, website design, and published educational
              texts are the intellectual property of CyberGuard YUVA and its founder. You may share
              and quote awareness tips for non-commercial educational purposes provided that clear
              attribution is given to CyberGuard YUVA.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">6. Limitation of Liability</h2>
            <p>
              Under no circumstances shall CyberGuard YUVA, its founder, or its contributors be held
              liable for any indirect, incidental, or consequential damages resulting from the use or
              inability to use the information presented on this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">7. Modifications to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Use as our programs develop. Any updates
              will be reflected on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">8. Inquiries</h2>
            <p>
              For questions regarding these terms, please contact:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#123A63] font-bold underline hover:text-[#35C6E8]"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
