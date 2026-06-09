import { motion } from "framer-motion";
import { MapPin, GraduationCap, Globe, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { achievements, education, personal } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>About</SectionLabel>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        {/* LEFT: Text content — wider */}
        <div className="lg:col-span-2 space-y-7">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight mb-5">
              Builder by<br /><em className="not-italic text-[#BBBBBB]">instinct.</em>
            </h2>

            {/* Animated text lines */}
            {[
              "I'm a Computer Science undergraduate at MIT-ADT University, Pune — and more importantly, someone who genuinely loves building things that people actually use.",
              "I'm a full stack developer who works across the entire product — from designing clean React interfaces to building robust backend systems with Node.js, Express and databases. I take ownership of every layer I touch.",
              "When I'm not coding, I'm exploring new technologies, basketball, or sketching out ideas for the next thing I want to build.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.55 }}
                className="text-[#666666] leading-relaxed text-[15px] mb-3"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              {[
                { icon: MapPin, text: "Pune, Maharashtra, India" },
                { icon: GraduationCap, text: "B.Tech. CSE · 8.63 CGPA" },
                { icon: Globe, text: "English · Hindi · Gujarati" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-sm text-[#777777]"
                >
                  <Icon size={13} className="text-[#CDB8FF]" />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(205,184,255,0.15)" }}
            className="rounded-2xl border border-[#EAE4FF] bg-white p-6 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={14} className="text-[#A78BFA]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AAAAAA]">Education</span>
            </div>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-semibold text-[#111111] text-lg"
                >
                  {education.institution}
                </motion.p>
                <p className="text-sm text-[#777777] mt-0.5">{education.degree}</p>
                <p className="text-xs text-[#AAAAAA] mt-0.5">{education.location}</p>
                <p className="text-xs text-[#A78BFA] font-mono mt-2">CGPA: {education.cgpa}</p>
              </div>
              <Badge variant="outline">{education.period}</Badge>
            </div>
          </motion.div>

          {/* Achievements grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={13} className="text-[#A78BFA]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AAAAAA]">Highlights</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.45 }}
                  whileHover={{ y: -3, borderColor: "#CDB8FF", boxShadow: "0 6px 16px rgba(205,184,255,0.2)" }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[#EAE4FF] bg-white transition-all cursor-default"
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="text-lg leading-none mt-0.5"
                  >
                    {a.icon}
                  </motion.span>
                  <div>
                    <p className="text-sm font-medium text-[#111111]">{a.title}</p>
                    <p className="text-xs text-[#999999] mt-0.5">{a.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Photo only — no duplicate */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative self-start sticky top-24">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl overflow-hidden border border-[#EAE4FF] shadow-xl shadow-[#CDB8FF]/15"
              style={{ width: 260, height: 300 }}
            >
              <img src={personal.photo} alt="Yana Trivedi" className="w-full h-full object-cover object-top" />
            </motion.div>
            <div className="absolute -inset-3 rounded-3xl -z-10"
              style={{ background: "linear-gradient(135deg, #EDE9FE22, #F5F0FF22)", border: "1px solid #EAE4FF" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
