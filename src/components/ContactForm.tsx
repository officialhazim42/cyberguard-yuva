"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ENQUIRY_CATEGORIES = [
  "General Enquiry",
  "Collaboration",
  "Volunteering",
  "Cybersecurity Awareness",
  "Events",
  "Other",
] as const;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: ENQUIRY_CATEGORIES[0],
    message: "",
    privacyAccepted: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      setStatus("error");
      setFeedbackMessage("Please accept the privacy policy acknowledgment before submitting.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message ||
          "Thank you for contacting CyberGuard YUVA. Your enquiry has been received and our team will review it shortly."
      );
      setFormData({
        name: "",
        email: "",
        category: ENQUIRY_CATEGORIES[0],
        message: "",
        privacyAccepted: false,
      });
    } catch (err: unknown) {
      setStatus("error");
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact us directly at cyberguardyuva@gmail.com"
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-6 sm:p-8 md:p-10 text-slate-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status message */}
        {status === "success" && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-emerald-900">Message Received!</p>
              <p className="mt-0.5 text-emerald-700">{feedbackMessage}</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-red-900">Submission Notice</p>
              <p className="mt-0.5 text-red-700">{feedbackMessage}</p>
            </div>
          </div>
        )}

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#35C6E8] focus:border-transparent text-sm placeholder:text-slate-400 bg-slate-50/50"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#35C6E8] focus:border-transparent text-sm placeholder:text-slate-400 bg-slate-50/50"
          />
        </div>

        {/* Enquiry Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-2">
            Enquiry Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#35C6E8] focus:border-transparent text-sm text-slate-700 bg-slate-50/50"
          >
            {ENQUIRY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={3000}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your question, collaboration proposal, or topic..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#35C6E8] focus:border-transparent text-sm placeholder:text-slate-400 bg-slate-50/50 resize-y"
          />
          <p className="text-xs text-slate-500 mt-1">Maximum 3000 characters.</p>
        </div>

        {/* Privacy Policy Acknowledgement */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            required
            checked={formData.privacyAccepted}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-slate-300 text-[#123A63] focus:ring-[#35C6E8]"
          />
          <label htmlFor="privacyAccepted" className="text-xs text-slate-600 leading-relaxed">
            I understand that the information submitted will be used solely by CyberGuard YUVA to
            respond to my enquiry in accordance with the{" "}
            <a href="/privacy" className="text-[#123A63] underline font-semibold hover:text-[#35C6E8]">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#123A63] text-white font-bold text-sm hover:bg-[#071A2F] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#123A63]/25"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#35C6E8]" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
