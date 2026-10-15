import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CyberGuard YUVA",
  description:
    "Privacy Policy of CyberGuard YUVA explaining how contact enquiries are handled, data minimization principles, and user privacy rights.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 text-sm">
            Last Updated: October 2026 • Effective Date: October 2026
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">1. Overview</h2>
            <p>
              CyberGuard YUVA (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an
              educational youth cyber defense club committed to promoting cybersecurity awareness,
              responsible technology use, and digital safety. Because privacy is at the core of our
              values, this Privacy Policy transparently outlines what minimal data we collect, how
              we process it, and how your privacy is protected.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              2. Information We Collect
            </h2>
            <p>
              We practice strict data minimization. We do not require account registration, passwords,
              tracking cookies, or personal banking details. The only information collected is what
              you voluntarily provide when sending an enquiry:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
              <li>
                <strong>Name:</strong> To address you properly in our response.
              </li>
              <li>
                <strong>Email Address:</strong> To reply to your message.
              </li>
              <li>
                <strong>Enquiry Category &amp; Message:</strong> To understand the subject matter of
                your question, collaboration, or volunteering request.
              </li>
              <li>
                <strong>Basic Technical Logs:</strong> Standard web server network logs (such as IP
                addresses and timestamps) used solely for rate limiting, DDoS mitigation, and spam
                prevention.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              3. Purpose of Processing
            </h2>
            <p>We use the submitted information exclusively to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
              <li>Review and respond to your direct inquiry or collaboration proposal.</li>
              <li>Coordinate educational awareness workshops requested by your institution.</li>
              <li>Maintain the security and availability of our website.</li>
            </ul>
            <p className="mt-3 font-semibold text-[#123A63]">
              We do not sell, rent, monetize, or trade your contact details to third-party advertisers
              or marketing data brokers under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              4. External Links &amp; Third-Party Sites
            </h2>
            <p>
              Our website provides links to external websites, such as the official{" "}
              <strong>MY Bharat platform (https://mybharat.gov.in/)</strong> and informational
              educational sources. These external websites have their own independent privacy
              policies and terms. CyberGuard YUVA has no control over the privacy practices of
              external sites and encourages users to read their respective privacy statements.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">
              5. Data Retention &amp; Deletion
            </h2>
            <p>
              Enquiries received via our contact form or direct email are retained only as long as
              necessary to resolve your correspondence. You may request the deletion of your previous
              communications at any time by emailing us at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#123A63] font-bold underline hover:text-[#35C6E8]"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">6. Security Measures</h2>
            <p>
              We implement industry-standard protective measures, including HTTPS encryption in
              transit, strict HTTP security headers, sanitization of inputs to prevent injection
              attacks, and restricted access to communication mailboxes.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#123A63] mb-3">7. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please contact our
              team at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-[#F3F7FB] border border-slate-200 text-sm">
              <p className="font-bold text-[#123A63]">CyberGuard YUVA</p>
              <p className="text-slate-600">Youth Cyber Defense Club</p>
              <p className="text-slate-600">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#123A63] font-semibold underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
