import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }) {
  return (
    <div className={cn("flex items-center gap-3 mb-10", className)}>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CDB8FF]" />
      <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#999999]">
        {children}
      </span>
      <span className="flex-1 h-px bg-[#EAE4FF]" />
    </div>
  );
}
