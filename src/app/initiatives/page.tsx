import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Smartphone,
  AlertOctagon,
  Share2,
  HeartHandshake,
  GraduationCap,
  Building,
  BookOpen,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { initiativesData, InitiativeItem } from "@/data/initiatives";

export const metadata: Metadata = {
  title: "Initiatives | CyberGuard YUVA",
  description:
    "Explore CyberGuard YUVA initiatives: Cybersecurity Awareness, Digital Safety Education, Online Fraud Awareness, Social Media Safety, and more.",
};

function InitiativeIcon({ name }: { name: InitiativeItem["iconName"] }) {
  const iconProps = { className: "w-7 h-7 text-[#35C6E8]", strokeWidth: 2 };
  switch (name) {
    case "Shield":
      return <Shield {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "AlertOctagon":
      return <AlertOctagon {...iconProps} />;
    case "Share2":
      return <Share2 {...iconProps} />;
    case "HeartHandshake":
      return <HeartHandshake {...iconProps} />;
    case "GraduationCap":
      return <GraduationCap {...iconProps} />;
    case "Building":
      return <Building {...iconProps} />;
    case "BookOpen":
      return <BookOpen {...iconProps} />;
    default:
      return <Shield {...iconProps} />;
  }
}

export default function InitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">Educational Programs</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Key Initiatives
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Practical, accessible frameworks designed to build proactive cyber defense habits and
            responsible digital citizenship across India.
          </p>
        </div>
      </section>

      {/* Initiatives Directory Overview */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-xl font-bold text-[#123A63]">Curriculum Overview</h2>
            <p className="text-sm text-slate-600">
              Select any initiative below to jump straight to its detailed scope and practical takeaways.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {initiativesData.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#F3F7FB] border border-slate-200 text-[#123A63] hover:border-[#35C6E8] hover:bg-[#123A63] hover:text-[#35C6E8] transition-all"
              >
                {idx + 1}. {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Initiatives Content */}
      <section className="py-16 md:py-20 bg-[#F3F7FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {initiativesData.map((initiative, index) => (
            <article
              key={initiative.id}
              id={initiative.id}
              className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-md space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#071A2F] border border-[#35C6E8]/30 flex items-center justify-center shrink-0">
                    <InitiativeIcon name={initiative.iconName} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#35C6E8] uppercase tracking-wider bg-[#071A2F] px-2.5 py-0.5 rounded">
                      Initiative 0{index + 1} • {initiative.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123A63] mt-1">
                      {initiative.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-base font-semibold text-slate-800 leading-relaxed">
                  {initiative.summary}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>

              {/* Key Topics & Practical Actionable Tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Topics Covered */}
                <div className="rounded-2xl bg-[#F3F7FB] p-5 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123A63]">
                    <CheckCircle className="w-4 h-4 text-[#35C6E8]" />
                    <span>Key Focus Modules</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {initiative.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#123A63] mt-1.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Action Tips */}
                <div className="rounded-2xl bg-[#071A2F] text-white p-5 border border-[#38D6B0]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38D6B0]">
                    <Lightbulb className="w-4 h-4 text-[#38D6B0]" />
                    <span>Everyday Practical Rules</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {initiative.actionableTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38D6B0] mt-1.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Request session link */}
              <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Want to bring this curriculum to your school or community?</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#123A63] hover:text-[#35C6E8] inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Request Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#123A63] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Collaborate With CyberGuard YUVA</h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto">
            We partner with student bodies, educators, and community organizations to share these
            vital cybersecurity awareness modules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-bold text-sm hover:bg-[#38D6B0] transition-colors shadow-lg"
            >
              <span>Get In Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
