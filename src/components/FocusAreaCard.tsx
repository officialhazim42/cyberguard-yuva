import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  AlertTriangle,
  Zap,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { FocusArea } from "@/data/focus-areas";

interface FocusAreaCardProps {
  item: FocusArea;
  isDark?: boolean;
}

export function FocusAreaCard({ item, isDark = false }: FocusAreaCardProps) {
  const renderIcon = () => {
    const iconProps = { className: "w-6 h-6", strokeWidth: 2 };
    switch (item.iconName) {
      case "ShieldAlert":
        return <ShieldAlert {...iconProps} />;
      case "Lock":
        return <Lock {...iconProps} />;
      case "AlertTriangle":
        return <AlertTriangle {...iconProps} />;
      case "Zap":
        return <Zap {...iconProps} />;
      case "Users":
        return <Users {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      default:
        return <ShieldAlert {...iconProps} />;
    }
  };

  return (
    <div
      className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? "bg-[#071A2F]/80 border border-[#35C6E8]/20 hover:border-[#35C6E8]/60 hover:shadow-xl hover:shadow-[#35C6E8]/10 text-white"
          : "bg-white border border-slate-200/80 hover:border-[#35C6E8]/70 hover:shadow-xl hover:shadow-[#123A63]/8 text-slate-800"
      }`}
    >
      <div>
        {/* Top bar with icon and number */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              isDark
                ? "bg-[#123A63] text-[#35C6E8] border border-[#35C6E8]/30"
                : "bg-[#123A63]/10 text-[#123A63] border border-[#123A63]/15 group-hover:bg-[#123A63] group-hover:text-[#35C6E8]"
            }`}
          >
            {renderIcon()}
          </div>
          <span
            className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md ${
              isDark ? "bg-[#123A63]/60 text-slate-400" : "bg-slate-100 text-slate-500"
            }`}
          >
            {item.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-lg font-bold tracking-tight mb-2.5 group-hover:text-[#35C6E8] transition-colors ${
            isDark ? "text-white" : "text-[#123A63]"
          }`}
        >
          {item.title}
        </h3>

        {/* Short description */}
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {item.shortDescription}
        </p>
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-slate-100/60 dark:border-slate-800/60">
        <Link
          href={item.href}
          className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase transition-colors ${
            isDark
              ? "text-[#35C6E8] hover:text-[#38D6B0]"
              : "text-[#123A63] hover:text-[#35C6E8]"
          }`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
