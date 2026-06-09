import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Experience</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-10"
        >
          Where I've<br /><em className="not-italic text-[#BBBBBB]">worked.</em>
        </motion.h2>
      </motion.div>

      <div className="space-y-5">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-[#EAE4FF] bg-white p-7 lg:p-10 hover:border-[#CDB8FF] hover:shadow-lg hover:shadow-[#CDB8FF]/10 transition-all"
          >
            {/* Top accent on hover */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl origin-left"
              style={{ background: "linear-gradient(90deg, #CDB8FF, #A78BFA, #8B5CF6)" }}
            />

            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 rounded-2xl bg-[#F0EBFF] border border-[#EAE4FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8D5FF] transition-colors"
              >
                <Briefcase size={18} className="text-[#A78BFA]" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="font-semibold text-[#111111] text-xl"
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-[#A78BFA] font-medium mt-0.5"
                    >
                      {exp.role}
                    </motion.p>
                    {exp.location && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={11} className="text-[#CCCCCC]" />
                        <span className="text-xs text-[#AAAAAA]">{exp.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#AAAAAA] flex-shrink-0">
                    <Calendar size={11} />
                    {exp.period}
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="text-[#666666] leading-relaxed text-[15px] mb-5"
                >
                  {exp.description}
                </motion.p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s, si) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + si * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <Badge variant="mono">{s}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
