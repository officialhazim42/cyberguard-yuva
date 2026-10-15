import type { Metadata } from "next";
import { Mail, Clock, CheckCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/ContactForm";
import { SocialPlatformIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us | CyberGuard YUVA",
  description:
    "Get in touch with CyberGuard YUVA. Contact our team at cyberguardyuva@gmail.com for collaborations, cybersecurity awareness workshops, or connect on our official social media channels.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">Communication &amp; Community</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in Touch with CyberGuard YUVA
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have a question, want to collaborate, or interested in our cybersecurity awareness
            initiatives? Contact our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Details & Guidelines */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Email Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Official Communication Channel
                  </span>
                  <h2 className="text-xl font-bold text-[#123A63] mt-1">Direct Email</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For formal communications, institutional invites, awareness session requests, or
                  official questions:
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#071A2F] text-[#35C6E8] hover:text-[#38D6B0] font-bold text-base transition-colors break-all shadow-sm"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
                <p className="text-xs text-slate-400">
                  Click to open your email client directly.
                </p>
              </div>

              {/* Connect With CyberGuard YUVA (Social Media Section) */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-5">
                <div>
                  <span className="cyber-badge">Official Channels</span>
                  <h3 className="text-xl font-bold text-[#123A63] mt-2">
                    Connect With CyberGuard YUVA
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Follow our verified profiles for real-time safety advisories, awareness tips, and
                    upcoming drives:
                  </p>
                </div>

                <div className="space-y-3">
                  {siteConfig.socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-[#F3F7FB] border border-slate-200/80 hover:border-[#35C6E8] hover:bg-white hover:shadow-md transition-all group"
                      aria-label={social.ariaLabel}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#071A2F] text-[#35C6E8] flex items-center justify-center shrink-0 group-hover:bg-[#123A63] transition-colors">
                          <SocialPlatformIcon id={social.id} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-[#123A63]">{social.name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#38D6B0] bg-[#071A2F] px-1.5 py-0.5 rounded">
                              Verified
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-mono">{social.handle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#123A63] group-hover:text-[#35C6E8]">
                        <span className="hidden sm:inline">Visit</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time & Principles */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#123A63]" />
                  <h3 className="font-bold text-[#123A63] text-base">Response Information</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#38D6B0] shrink-0 mt-0.5" />
                    <span>Enquiries are typically reviewed within 24 to 48 business hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#38D6B0] shrink-0 mt-0.5" />
                    <span>
                      Academic workshops and collaboration proposals receive prioritized review.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#38D6B0] shrink-0 mt-0.5" />
                    <span>
                      We strictly respect your privacy and never sell or share contact information.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-2">
                <span className="cyber-badge">Online Form</span>
                <h2 className="text-2xl font-bold text-[#123A63] mt-2">Send an Enquiry</h2>
                <p className="text-sm text-slate-600">
                  Please complete the form below. All required fields are marked with an asterisk (*).
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
