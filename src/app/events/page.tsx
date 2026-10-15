import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Layers,
  Presentation,
  ShieldAlert,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { upcomingEvents, pastActivities } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & Activities | CyberGuard YUVA",
  description:
    "Check verified upcoming events, workshops, awareness campaigns, and community sessions hosted by CyberGuard YUVA.",
};

export default function EventsPage() {
  const categoryHighlights = [
    {
      title: "Workshops",
      description:
        "Hands-on interactive masterclasses on account hardening, multi-factor authentication, and safe network practices.",
      icon: Presentation,
    },
    {
      title: "Cybersecurity Awareness Campaigns",
      description:
        "Focused thematic campaigns spotlighting emerging scams, phishing indicators, and privacy protection across campuses.",
      icon: ShieldAlert,
    },
    {
      title: "Digital Safety Sessions",
      description:
        "Curated introductory sessions tailored for students and parents on digital footprint management and cyberbullying prevention.",
      icon: Compass,
    },
    {
      title: "Community Outreach",
      description:
        "Empowerment drives connecting with senior citizens and grassroots community members to guard against financial frauds.",
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#071A2F] text-white py-16 sm:py-20 border-b border-[#123A63]/60 relative cyber-circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="cyber-badge mx-auto">Verified Public Schedule</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Events &amp; Activities
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Stay updated with genuine, verified workshops, campaigns, and outreach drives led by
            CyberGuard YUVA.
          </p>
        </div>
      </section>

      {/* Categories We Organize */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl font-bold text-[#123A63]">Our Activity Frameworks</h2>
            <p className="text-sm text-slate-600">
              The formats and outreach sessions we offer for youth and academic communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryHighlights.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl bg-[#F3F7FB] border border-slate-200/80 hover:border-[#35C6E8] transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#123A63] text-[#35C6E8] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#123A63] text-base">{cat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-20 bg-[#F3F7FB] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#123A63] text-[#35C6E8] flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#123A63]">Upcoming Events</h2>
              <p className="text-xs text-slate-500">Verified official event announcements</p>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
                >
                  <span className="text-xs font-bold text-[#35C6E8] uppercase bg-[#071A2F] px-2.5 py-1 rounded">
                    {evt.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#123A63]">{evt.title}</h3>
                  <p className="text-sm text-slate-600">{evt.description}</p>
                  <div className="text-xs text-slate-500 pt-2 flex flex-wrap gap-4">
                    <span>Date: {evt.date}</span>
                    <span>Format: {evt.format}</span>
                    <span>Location: {evt.location}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 sm:p-14 border border-slate-200/80 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#123A63]/10 text-[#123A63] mx-auto flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#123A63]">
                No upcoming events have been announced yet.
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Please check back for future cybersecurity awareness activities. All upcoming
                sessions will be published here once dates and schedules are confirmed.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Activities Section */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#071A2F] text-[#38D6B0] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#123A63]">Past Activities &amp; Archive</h2>
              <p className="text-xs text-slate-500">Documented sessions and completed outreach</p>
            </div>
          </div>

          {pastActivities.length > 0 ? (
            <div className="space-y-4">
              {pastActivities.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-[#F3F7FB] rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
                >
                  <h3 className="text-lg font-bold text-[#123A63]">{evt.title}</h3>
                  <p className="text-sm text-slate-600">{evt.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-[#F3F7FB] p-8 sm:p-10 border border-slate-200 text-center space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                Official records of completed workshops and campaigns will be chronicled in this
                archive as verified activities are documented.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Request a Workshop Session */}
      <section className="py-16 bg-[#123A63] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#071A2F] text-xs font-bold text-[#35C6E8] border border-[#35C6E8]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#38D6B0]" />
            <span>Host an Awareness Drive</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight">
            Interested in Organizing a Session?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            If your school, college, youth club, or community organization would like to host a
            CyberGuard YUVA cybersecurity awareness workshop, reach out to our team.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#35C6E8] text-[#071A2F] font-bold text-sm hover:bg-[#38D6B0] transition-colors shadow-lg"
            >
              <span>Contact Us to Request an Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
