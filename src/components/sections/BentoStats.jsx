import { motion } from "framer-motion";
import { Code2, Layers, Zap, Star } from "lucide-react";

const stats = [
  { icon: Code2, value: "8+", label: "Projects Built", sub: "Across personal & academic work", accent: "#F0EBFF", iconColor: "#8B5CF6" },
  { icon: Layers, value: "Full Stack", label: "Developer", sub: "Frontend to backend", accent: "#F0FDF4", iconColor: "#059669" },
  { icon: Zap, value: "8.63", label: "CGPA", sub: "MIT-ADT University", accent: "#FFF7ED", iconColor: "#D97706" },
  { icon: Star, value: "SIH '24", label: "Idea Selected", sub: "Smart India Hackathon", accent: "#FFF1F2", iconColor: "#E11D48" },
];

export function BentoStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-4 pb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-[#EAE4FF] p-5 flex flex-col gap-3 cursor-default"
              style={{ background: stat.accent }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/70">
                <Icon size={15} style={{ color: stat.iconColor }} />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-[#111111]">{stat.value}</p>
                <p className="text-xs font-medium text-[#333333] mt-0.5">{stat.label}</p>
                <p className="text-[11px] text-[#888888] mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
