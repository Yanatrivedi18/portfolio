import { motion } from "framer-motion";
import { Globe, Wrench, Sparkles, Lightbulb } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { interests } from "@/lib/data";

const iconMap = { Globe, Wrench, Sparkles, Lightbulb };
const cardColors = [
  { bg: "#F5F2FF", border: "#E0D5FF", icon: "#8B5CF6", iconBg: "#EDE9FE" },
  { bg: "#F0FAFA", border: "#C7EAEA", icon: "#0E9090", iconBg: "#CCFBF1" },
  { bg: "#FFF8F3", border: "#FFE0CB", icon: "#C2571A", iconBg: "#FEE9D8" },
  { bg: "#F8F5FF", border: "#DDD0FF", icon: "#7C3AED", iconBg: "#F0EBFF" },
];

export function Interests() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Interests</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-10"
        >
          Things I enjoy<br /><em className="not-italic text-[#BBBBBB]">building.</em>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((interest, i) => {
          const Icon = iconMap[interest.icon] || Globe;
          const color = cardColors[i % cardColors.length];
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -8, boxShadow: `0 16px 32px ${color.border}80`, transition: { duration: 0.22 } }}
              className="rounded-2xl border p-6 flex flex-col gap-4 cursor-default"
              style={{ background: color.bg, borderColor: color.border }}
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: color.iconBg }}
              >
                <Icon size={18} style={{ color: color.icon }} />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2 }}
                  className="font-semibold text-[#111111] text-base mb-1.5"
                >
                  {interest.title}
                </motion.h3>
                <p className="text-xs text-[#777777] leading-relaxed">{interest.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
