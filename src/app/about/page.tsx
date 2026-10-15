import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Target,
  Compass,
  Award,
  Users,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | CyberGuard YUVA",
  description:
    "Learn about CyberGuard YUVA, our mission, vision, core values, founder Hashim Bashir, and dedication to youth cybersecurity awareness in India.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Security",
      description:
        "Fostering vigilant digital defense instincts, proactive account protection, and safeguarding personal and community data.",
      icon: Shield,
    },
    {
      title: "Education",
      description:
        "Delivering clear, accessible, jargon-free knowledge that demystifies threats and equips youth with everyday cyber hygiene.",
      icon: Target,
    },
    {
      title: "Responsibility",
      description:
        "Cultivating ethical behavior online, respect for privacy and digital law, and mindful handling of information.",
      icon: HeartHandshake,
    },
    {
      title: "Empowerment",
      description:
        "Inspiring young people to take charge of their digital lives and emerge as active peer advocates in their peer groups.",
      icon: Award,
    },
    {
      title: "Community",
      description:
        "Extending safety knowledge beyond individual circles to schools, elders, and neighborhood communities across India.",
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">About Our Organization</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About CyberGuard YUVA
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A youth-centric cyber defense club empowering the next generation to build a safer,
            more secure digital nation.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-[#071A2F] p-4 border border-[#35C6E8]/30 shadow-2xl flex items-center justify-center">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="320px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="cyber-badge">Our Identity</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123A63]">
                Youth Cyber Defense Club
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                CyberGuard YUVA is an educational initiative dedicated to cybersecurity awareness,
                digital safety education, and responsible technology use among students and youth
                across India.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With India leading the world in digital connectivity, digital payments, and
                smartphone adoption, young citizens represent both the future of the nation&apos;s
                digital economy and the primary demographic interacting across internet platforms.
                CyberGuard YUVA was established to bridge the awareness divide, transforming youth
                from vulnerable targets into conscious, proactive cyber defenders.
              </p>

              <div className="p-4 rounded-xl bg-[#F3F7FB] border border-slate-200 text-sm text-slate-700 space-y-1">
                <p className="font-semibold text-[#123A63]">Guiding Tagline:</p>
                <p className="text-base font-bold text-[#35C6E8] tracking-wider uppercase">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-[#F3F7FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#123A63]">Our Mission</h2>
              <blockquote className="border-l-4 border-[#35C6E8] pl-4 italic text-slate-700 text-base sm:text-lg leading-relaxed">
                &ldquo;To promote cybersecurity awareness, responsible digital behaviour, and
                practical online safety knowledge among young people and communities.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                We fulfill this mission by crafting actionable learning resources, conducting
                structured awareness modules, and guiding students on recognizing threats before
                harm can occur.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#071A2F] text-[#38D6B0] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#123A63]">Our Vision</h2>
              <blockquote className="border-l-4 border-[#38D6B0] pl-4 italic text-slate-700 text-base sm:text-lg leading-relaxed">
                &ldquo;To empower a generation of cyber-aware young citizens who contribute to a
                safer and more responsible digital India.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                We envision an India where every young internet user possesses the critical judgment
                to identify fraudulent schemes, maintain high personal privacy, and uphold ethics in
                digital communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="cyber-badge">Core Pillars</div>
            <h2 className="text-3xl font-extrabold text-[#123A63]">Our Core Values</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The fundamental principles that define our conduct and community initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-[#F3F7FB] rounded-2xl p-6 border border-slate-200/80 hover:border-[#35C6E8] transition-all text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#123A63] text-[#35C6E8] mx-auto flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123A63]">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-[#F3F7FB] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg text-center space-y-4">
            <div className="cyber-badge mx-auto">Leadership</div>
            <h2 className="text-3xl font-extrabold text-[#123A63]">Founder</h2>

            <div className="pt-2">
              <h3 className="text-2xl font-bold text-[#071A2F]">{siteConfig.founder.name}</h3>
              <p className="text-sm font-semibold text-[#35C6E8] uppercase tracking-wider mt-1">
                {siteConfig.founder.role}
              </p>
            </div>

            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed pt-2">
              Dedicated to youth cybersecurity awareness, digital education, and fostering responsible
              technology habits across India.
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#123A63] hover:text-[#35C6E8] uppercase tracking-wider"
              >
                <span>Contact Leadership: {siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="cyber-badge mx-auto">Strategic Roadmap</div>
            <h2 className="text-3xl font-extrabold text-[#123A63]">Our Objectives</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              How CyberGuard YUVA structures its impact to achieve measurable improvements in digital
              safety and youth literacy.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3F7FB] border border-slate-200/80">
              <CheckCircle2 className="w-6 h-6 text-[#38D6B0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#123A63] text-base">
                  Widespread Cybersecurity Awareness
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Deliver foundational cybersecurity education to students, demystifying prevalent
                  threat vectors such as phishing, credential theft, malware, and unauthorized access.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3F7FB] border border-slate-200/80">
              <CheckCircle2 className="w-6 h-6 text-[#38D6B0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#123A63] text-base">Practical Digital Hygiene</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Train individuals in implementing reliable safeguards: password managers, 2FA
                  authenticators, application permission controls, and regular encrypted backups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3F7FB] border border-slate-200/80">
              <CheckCircle2 className="w-6 h-6 text-[#38D6B0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#123A63] text-base">Ethical Technology Adoption</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Promote awareness of legal frameworks (such as the IT Act) and cultivate digital
                  empathy, anti-cyberbullying standards, and respectful collaboration online.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3F7FB] border border-slate-200/80">
              <CheckCircle2 className="w-6 h-6 text-[#38D6B0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#123A63] text-base">Youth Participation &amp; Leadership</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Foster student-driven cyber defense clubs in academic institutions, empowering
                  youth to lead discussions and assist peers in addressing technical privacy issues.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3F7FB] border border-slate-200/80">
              <CheckCircle2 className="w-6 h-6 text-[#38D6B0] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#123A63] text-base">Community Education &amp; Outreach</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Bridge knowledge gaps for senior citizens, small local businesses, and vulnerable
                  demographics by providing clear, accessible scam recognition advisories.
                </p>
              </div>
            </div>
          </div>

          {/* End Tagline Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-[#071A2F] text-center text-white space-y-3 border border-[#35C6E8]/30">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              CyberGuard YUVA Core Motto
            </span>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#38D6B0] tracking-wider">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Committed to building a resilient, educated, and empowered digital future for India.
            </p>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-14 bg-[#123A63] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Want to Support or Collaborate?</h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto">
            Discover our initiatives or reach out directly to join hands for cyber safety in your community.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/initiatives"
              className="px-6 py-3 rounded-xl bg-[#35C6E8] text-[#071A2F] font-bold text-sm hover:bg-[#38D6B0] transition-colors"
            >
              Explore Initiatives
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#071A2F] text-white border border-[#35C6E8]/40 font-semibold text-sm hover:border-[#35C6E8] transition-colors inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#35C6E8]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
