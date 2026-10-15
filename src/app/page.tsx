import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ShieldCheck,
  BookOpen,
  Users,
  Lock,
  ArrowRight,
  ExternalLink,
  Calendar,
  Sparkles,
  CheckCircle,
  ArrowUpRight,
  FileText,
  UserPlus,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { focusAreas } from "@/data/focus-areas";
import { initiativesData } from "@/data/initiatives";
import { upcomingEvents } from "@/data/events";
import { FocusAreaCard } from "@/components/FocusAreaCard";
import { SocialPlatformIcon } from "@/components/SocialIcons";
import { RegistrationSection } from "@/components/RegistrationSection";

export default function HomePage() {
  const featuredInitiatives = initiativesData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================================================== */}
      {/* 5. HOMEPAGE HERO SECTION */}
      {/* ================================================== */}
      <section className="relative bg-[#061426] cyber-circuit-bg text-white pt-12 pb-20 md:py-24 lg:py-28 overflow-hidden border-b border-[#123A63]/60">
        {/* Ambient lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#35C6E8]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#38D6B0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123A63]/70 border border-[#35C6E8]/40 text-[#35C6E8] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#38D6B0]" />
                <span>{siteConfig.brandMessage}</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                  CYBERGUARD{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35C6E8] via-[#38D6B0] to-white">
                    YUVA
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-wide">
                  {siteConfig.subtitle}
                </p>
                <div className="inline-block pt-1">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#38D6B0] uppercase bg-[#123A63]/60 px-3 py-1 rounded border border-[#38D6B0]/30">
                    {siteConfig.tagline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {siteConfig.description}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/join"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all duration-200 shadow-lg shadow-[#35C6E8]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <UserPlus className="w-4 h-4 shrink-0" />
                  <span>JOIN CYBERGUARD YUVA</span>
                </Link>
                <Link
                  href="/initiatives"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#123A63]/80 hover:bg-[#123A63] text-white border border-[#35C6E8]/30 font-semibold text-sm transition-all duration-200 hover:border-[#35C6E8]"
                >
                  <span>EXPLORE INITIATIVES</span>
                  <ArrowRight className="w-4 h-4 text-[#35C6E8]" />
                </Link>
              </div>

              {/* Platform association note */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#38D6B0] animate-pulse" />
                <span>Associated through the spirit of {siteConfig.platformAssociation.name}</span>
              </div>
            </div>

            {/* Right: Official Logo Composition */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Circuit pulse rings */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#35C6E8]/20 via-[#38D6B0]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="absolute -inset-1 rounded-full border border-[#35C6E8]/30 animate-pulse pointer-events-none" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-[#071A2F] border-2 border-[#35C6E8]/50 shadow-2xl shadow-[#061426] p-2">
                  <Image
                    src={siteConfig.logo.src}
                    alt={siteConfig.logo.alt}
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION A: INTRODUCTION */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="cyber-badge">Our Calling</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
              Building a Safer Digital Future Together
            </h2>
            <div className="w-16 h-1 bg-[#35C6E8] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              As digital technology becomes deeply embedded in daily life, education, and commerce
              across India, the necessity for robust cybersecurity literacy has never been more
              critical. CyberGuard YUVA stands at the intersection of youth empowerment and digital
              defense—equipping young citizens with the understanding, critical thinking, and
              practical vigilance required to navigate the digital world safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <div className="p-6 rounded-2xl bg-[#F3F7FB] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#123A63] text-[#35C6E8] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-[#123A63]">Proactive Defense</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than reacting only after compromise occurs, we teach preventative habits—from
                identifying suspicious message structures to maintaining strong verification protocols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F7FB] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#123A63] text-[#35C6E8] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-[#123A63]">Youth Leadership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Youth are India&apos;s most active digital natives. By empowering students with sound
                cyber knowledge, we create natural digital safety ambassadors for families and communities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3F7FB] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#123A63] text-[#35C6E8] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-[#123A63]">Ethical Responsibility</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We advocate for responsible technology stewardship, empathy in online interactions,
                respect for privacy, and adherence to legal frameworks governing cyberspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION B: OUR FOCUS AREAS */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="cyber-badge">Pillars of Action</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
                Our Focus Areas
              </h2>
              <p className="text-slate-600 text-base">
                Six core dimensions through which CyberGuard YUVA builds practical awareness and
                responsible digital participation.
              </p>
            </div>
            <div>
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#123A63] hover:text-[#35C6E8] transition-colors"
              >
                <span>View All Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {focusAreas.map((area) => (
              <FocusAreaCard key={area.id} item={area} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION C: SECURE • EDUCATE • EMPOWER */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-[#071A2F] text-white border-y border-[#123A63]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#38D6B0] uppercase bg-[#123A63]/60 px-3 py-1 rounded border border-[#38D6B0]/30">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              SECURE • EDUCATE • EMPOWER
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              The three core pillars that guide every workshop, advisory, and initiative launched by
              CyberGuard YUVA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SECURE */}
            <div className="relative rounded-2xl bg-[#061426] p-8 border border-[#35C6E8]/30 space-y-5 hover:border-[#35C6E8] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Lock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-[#35C6E8] uppercase tracking-wider">
                  Pillar I
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">SECURE</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Establishing resilient cyber hygiene habits. We guide individuals and youth to lock
                down accounts, deploy strong multi-factor authentication, safeguard personal privacy,
                and shield critical devices against modern threats.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Account &amp; credential lockdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Data backup &amp; encryption hygiene</span>
                </li>
              </ul>
            </div>

            {/* EDUCATE */}
            <div className="relative rounded-2xl bg-[#061426] p-8 border border-[#38D6B0]/30 space-y-5 hover:border-[#38D6B0] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#123A63] text-[#38D6B0] flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-[#38D6B0] uppercase tracking-wider">
                  Pillar II
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">EDUCATE</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Demystifying technical jargon into accessible, actionable guidance. We dissect
                phishing techniques, social engineering tactics, financial scams, and online
                frauds so people can identify risks before falling victim.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Interactive awareness modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Practical threat recognition guides</span>
                </li>
              </ul>
            </div>

            {/* EMPOWER */}
            <div className="relative rounded-2xl bg-[#061426] p-8 border border-[#35C6E8]/30 space-y-5 hover:border-[#35C6E8] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-[#35C6E8] uppercase tracking-wider">
                  Pillar III
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">EMPOWER</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cultivating youth leadership and confidence. We inspire young citizens to act as peer
                educators and community cyber champions, driving positive digital citizenship and
                safer technology use across institutions.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Peer-led knowledge sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38D6B0]" />
                  <span>Responsible digital leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION D: ABOUT OUR CLUB */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-[#071A2F] border-2 border-[#123A63] p-4 flex items-center justify-center shadow-xl">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="288px"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="cyber-badge">Our Organization</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
                Dedicated to Youth Digital Defense
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                CyberGuard YUVA is an educational youth cyber defense club founded by{" "}
                <strong className="text-[#123A63]">{siteConfig.founder.name}</strong> to champion
                digital hygiene, online safety education, and youth empowerment in India.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We believe that by educating young people early about safe browsing practices,
                financial scam indicators, and privacy protection, we can build a strong frontline
                against online vulnerabilities and foster a responsible digital generation.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#123A63] text-white font-bold text-sm hover:bg-[#071A2F] transition-colors shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#35C6E8]" />
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F3F7FB] text-[#123A63] border border-slate-300 font-semibold text-sm hover:border-[#35C6E8] transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-[#35C6E8]" />
                  <span>Join Our Club</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION E: FEATURED INITIATIVES */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-[#F3F7FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="cyber-badge">Action Curriculum</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
              Featured Initiatives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore some of our core awareness programs designed to translate cyber defense concepts
              into actionable habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredInitiatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#35C6E8] uppercase tracking-wider px-2.5 py-1 bg-[#071A2F] rounded-md">
                      {item.category}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#38D6B0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#123A63]">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.summary}</p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Curriculum &amp; Awareness</span>
                  <Link
                    href={`/initiatives#${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123A63] hover:text-[#35C6E8] uppercase"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/initiatives"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-[#123A63] font-bold text-sm hover:border-[#35C6E8] hover:text-[#35C6E8] transition-all shadow-sm"
            >
              <span>Explore All 8 Initiatives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* REGISTRATION CALL-TO-ACTION AFTER INITIATIVES */}
      {/* "Your Journey Towards a Safer Digital India Starts Here" */}
      {/* ================================================== */}
      <section className="py-16 bg-[#123A63] text-white relative overflow-hidden border-b border-[#071A2F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#071A2F] text-[#35C6E8] border border-[#35C6E8]/30 mx-auto flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#38D6B0]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Your Journey Towards a Safer Digital India Starts Here
          </h2>

          <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Join CyberGuard YUVA and support cybersecurity awareness, digital education, and
            community empowerment.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.registration.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>REGISTER WITH CYBERGUARD YUVA</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#071A2F] text-white border border-[#35C6E8]/40 hover:border-[#35C6E8] font-bold text-sm transition-all"
            >
              <span>View Registration Guide &amp; MY Bharat</span>
              <ArrowRight className="w-4 h-4 text-[#35C6E8]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION F: EVENTS AND ACTIVITIES */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="cyber-badge">Schedule &amp; Updates</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
              Events and Activities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We adhere strictly to verified public scheduling. Below is the verified status of
              scheduled activities:
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {/* Dynamically renders if verified events exist */}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200/80 bg-[#F3F7FB] p-8 sm:p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#123A63]/10 text-[#123A63] mx-auto flex items-center justify-center">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#123A63]">No Upcoming Events Announced</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                  No upcoming events have been announced yet. Please check back for future
                  cybersecurity awareness activities.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#123A63] hover:text-[#35C6E8] uppercase tracking-wider"
                  >
                    <span>Request an awareness session for your institution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION G: MY BHARAT */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-[#071A2F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#123A63] text-xs font-bold uppercase tracking-wider text-[#35C6E8] border border-[#35C6E8]/30">
                Youth Development Synergy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Mera Yuva Bharat (MY Bharat) Connection
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                CyberGuard YUVA operates with deep inspiration from the ethos of{" "}
                <strong className="text-white">MY Bharat (Mera Yuva Bharat)</strong>, the national
                platform facilitating youth empowerment and youth-led development across India.
                Our mission contributes directly to nurturing digitally safe, responsible, and
                informed youth leaders.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#061426] p-3 rounded-xl border border-[#123A63] max-w-lg">
                <span className="font-semibold text-[#38D6B0]">Referral Code:</span>
                <span className="font-mono font-bold text-white bg-[#123A63] px-2 py-0.5 rounded">
                  {siteConfig.registration.myBharatReferralCode}
                </span>
                <span className="text-slate-400 text-[11px]">(Use when registering on MY Bharat)</span>
              </div>
              <p className="text-xs text-slate-400">
                Please note: CyberGuard YUVA is an autonomous youth initiative and maintains its own
                independent platform while supporting national youth digital safety goals.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={siteConfig.registration.myBharatRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-bold text-sm hover:bg-[#38D6B0] transition-colors shadow-md"
              >
                <span>REGISTER ON MY BHARAT</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/my-bharat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#123A63] text-white border border-[#35C6E8]/30 font-semibold text-sm hover:border-[#35C6E8] transition-colors"
              >
                <span>Read About Our Connection</span>
                <ArrowRight className="w-4 h-4 text-[#35C6E8]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 1. DEDICATED MEMBERSHIP REGISTRATION SECTION ON HOMEPAGE */}
      {/* ================================================== */}
      <RegistrationSection showSteps={true} />

      {/* ================================================== */}
      {/* SOCIAL MEDIA SECTION: Stay Connected. Stay Cyber Aware */}
      {/* ================================================== */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="cyber-badge mx-auto">Official Community</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123A63] tracking-tight">
              Stay Connected. Stay Cyber Aware.
            </h2>
            <div className="w-16 h-1 bg-[#35C6E8] mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              Follow CyberGuard YUVA for cybersecurity awareness, digital safety tips, educational
              content, and updates about our initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.socialLinks.map((social) => (
              <div
                key={social.id}
                className="bg-[#F3F7FB] rounded-2xl p-7 border border-slate-200/90 hover:border-[#35C6E8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#071A2F] text-[#35C6E8] flex items-center justify-center group-hover:bg-[#123A63] group-hover:scale-105 transition-all">
                      <SocialPlatformIcon id={social.id} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#38D6B0] bg-[#071A2F] px-2 py-0.5 rounded">
                      Official
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#123A63] group-hover:text-[#35C6E8] transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{social.handle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {social.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#123A63] text-white hover:bg-[#071A2F] text-xs font-bold transition-all shadow-md group-hover:shadow-[#123A63]/20"
                    aria-label={social.ariaLabel}
                  >
                    <span>{social.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#35C6E8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION H: FINAL CALL TO ACTION */}
      {/* ================================================== */}
      <section className="py-20 bg-gradient-to-br from-[#123A63] via-[#071A2F] to-[#061426] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#35C6E8]/10 border border-[#35C6E8]/30 text-[#35C6E8] mx-auto flex items-center justify-center">
            <Shield className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Be Part of a Safer Digital India
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Learn, share knowledge, and help promote responsible digital practices in your
            community.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-extrabold text-sm hover:bg-[#38D6B0] transition-all duration-200 shadow-xl shadow-[#35C6E8]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <UserPlus className="w-4 h-4 shrink-0" />
              <span>JOIN CYBERGUARD YUVA</span>
            </Link>
            <Link
              href="/initiatives"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <span>EXPLORE INITIATIVES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
