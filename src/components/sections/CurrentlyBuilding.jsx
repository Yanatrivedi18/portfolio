import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useMousePosition } from "@/hooks/useMousePosition";
import { featured } from "@/lib/data";

export function CurrentlyBuilding() {
  const cardRef = useRef(null);
  useMousePosition(cardRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Currently Building</SectionLabel>
      </motion.div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileHover={{ y: -2 }}
        className="relative rounded-3xl border border-[#EAE4FF] bg-white overflow-hidden group spotlight-card"
      >
        {/* Spotlight glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle 500px at var(--mouse-x,50%) var(--mouse-y,50%), rgba(205,184,255,0.12), transparent 60%)" }}
        />

        {/* Top strip */}
        <div className="h-1 w-full bg-gradient-to-r from-[#CDB8FF] via-[#A78BFA] to-[#8B5CF6]" />

        <div className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="live">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mr-1.5 animate-pulse inline-block" />
                  Live
                </Badge>
                <Badge variant="default">Featured Project</Badge>
              </div>

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-3"
              >
                {featured.name}
              </motion.h3>

              <p className="font-display text-lg text-[#999999] italic mb-6">"{featured.tagline}"</p>
              <p className="text-[#666666] leading-relaxed text-[15px] mb-8 max-w-lg">{featured.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    <Badge variant="mono">{t}</Badge>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(111,63,245,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] transition-colors"
                >
                  View Live Demo <ArrowUpRight size={14} />
                </motion.a>
                <motion.a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-[#D5CAFF] text-[#333333] hover:border-[#A78BFA] transition-colors"
                >
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* Right — browser mockup */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="rounded-2xl border border-[#EAE4FF] bg-[#FAF9FF] overflow-hidden shadow-xl shadow-[#CDB8FF]/15">
                  <div className="bg-[#F0EBFF] px-4 py-3 flex items-center gap-2 border-b border-[#EAE4FF]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EAE4FF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EAE4FF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CDB8FF]" />
                    <div className="flex-1 mx-2 bg-white rounded-full px-3 py-1 text-[10px] text-[#AAAAAA] font-mono">speci-wise-2-0.vercel.app</div>
                  </div>
                  <div className="p-6 flex flex-col gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CDB8FF] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#A78BFA]/30">
                      <Sparkles size={22} className="text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-display text-lg font-semibold text-[#111111] mb-0.5">SpeciiWise</p>
                      <p className="text-xs text-[#888888]">Career Discovery Platform</p>
                    </div>
                    <div className="w-full space-y-2">
                      {[["Explore Interests", true], ["Discover Pathways", false], ["Get Recommendations", false]].map(([s, active]) => (
                        <div key={s} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EAE4FF]">
                          <div className={`w-1.5 h-1.5 rounded-full ${active ? "bg-[#A78BFA]" : "bg-[#E5E5E5]"}`} />
                          <span className="text-xs text-[#666666]">{s}</span>
                          {active && <span className="ml-auto text-[10px] bg-[#F0EBFF] text-[#6D4FC2] px-2 py-0.5 rounded-full">Active</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 bg-white border border-[#EAE4FF] rounded-xl px-3 py-2 shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <Zap size={11} className="text-[#A78BFA]" />
                    <span className="text-[11px] font-medium text-[#333333]">Built from scratch</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
