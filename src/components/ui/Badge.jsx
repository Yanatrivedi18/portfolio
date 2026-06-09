import { cn } from "@/lib/utils";

export function Badge({ children, className, variant = "default" }) {
  const variants = {
    default:
      "bg-[#F0EBFF] text-[#6D4FC2] border border-[#DDD0FF]",
    outline:
      "bg-transparent text-[#666666] border border-[#EAE4FF]",
    accent:
      "bg-[#CDB8FF] text-[#3D2A7A] border border-[#B89EEF]",
    live:
      "bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]",
    mono:
      "bg-[#F8F8F8] text-[#444444] border border-[#E5E5E5] font-mono text-[11px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
