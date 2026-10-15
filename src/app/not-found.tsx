import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-[#071A2F] text-[#35C6E8] flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-[#35C6E8] uppercase tracking-wider bg-[#071A2F] px-2.5 py-1 rounded">
            Error 404
          </span>
          <h1 className="text-2xl font-extrabold text-[#123A63] mt-2">Page Not Found</h1>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          The cybersecurity resource or page you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#123A63] text-white font-bold text-sm hover:bg-[#071A2F] transition-colors shadow-md w-full"
          >
            <ArrowLeft className="w-4 h-4 text-[#35C6E8]" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
