import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups, certifications } from "@/lib/data";

// Real SVG logos inline
const TechLogo = ({ name }) => {
  const logos = {
    "React.js": (
      <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <text x="4" y="18" fontSize="11" fontWeight="bold" fill="#000">JS</text>
      </svg>
    ),
    "HTML": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" fill="#E34F26"/>
        <path d="M12 20.5l5.2-1.4 1.4-15.1H12v16.5z" fill="#EF652A"/>
        <text x="6.5" y="15" fontSize="7" fontWeight="bold" fill="white">H5</text>
      </svg>
    ),
    "CSS": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" fill="#1572B6"/>
        <path d="M12 20.5l5.2-1.4 1.4-15.1H12v16.5z" fill="#33A9DC"/>
        <text x="6" y="15" fontSize="7" fontWeight="bold" fill="white">CS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.217C13.29 10.48 14.21 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.217C15.21 6.92 14.29 6 12 6zm-4.5 6C5.1 12 3.6 13.2 3 15.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.217C8.79 16.48 9.71 17.4 12 17.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.217C11.71 12.92 10.79 12 7.5 12z" fill="#38BDF8"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 1.85L3 6.57v10.86L12 22.15l9-4.72V6.57L12 1.85z" fill="#339933"/>
        <text x="6" y="15.5" fontSize="6" fontWeight="bold" fill="white">No</text>
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <rect width="24" height="24" rx="3" fill="#333"/>
        <text x="3" y="15.5" fontSize="7" fontWeight="bold" fill="white">ex</text>
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2C8 2 8.5 4 8.5 4v2H12v1H5.5S3 6.8 3 10s2 3.5 2 3.5H6.5v-2s-.1-2 2-2H15s2 .2 2-2V4.5S17.5 2 12 2z" fill="#3776AB"/>
        <path d="M12 22c4 0 3.5-2 3.5-2v-2H12v-1h6.5S21 17.2 21 14s-2-3.5-2-3.5H17.5v2s.1 2-2 2H9s-2-.2-2 2v3.5S6.5 22 12 22z" fill="#FFD43B"/>
      </svg>
    ),
    "Java": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M8.5 17.5s-.8.5.6.6c1.6.2 2.4.2 4.2-.2 0 0 .5.3.11.5-1.7.7-5.5.5-6.7-.2-.4-.3.2-.7.8-.7z" fill="#E76F00"/>
        <path d="M8 15.8s-.9.7.5.8c1.8.2 3.2.2 5.6-.3 0 0 .3.3.9.5-2.5.7-5.3.6-6.7-.1-.5-.3 0-.7-.3-.9z" fill="#E76F00"/>
        <path d="M13.2 11.6c1 1.2-.3 2.2-.3 2.2s2.6-1.3 1.4-3c-1.1-1.5-2-2.3 2.7-4.9 0 0-7.4 1.8-3.8 5.7z" fill="#E76F00"/>
        <path d="M17.5 19s.6.5-.6.9c-2.3.7-9.5.9-11.5.1-.7-.3.6-.7 1-.8.4-.1.7-.1.7-.1-.8-.6-5.3 1.1-2.3 1.6 8.3 1.3 15.1-.6 12.7-1.7z" fill="#E76F00"/>
      </svg>
    ),
    "C++": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#00599C"/>
        <text x="5.5" y="15.5" fontSize="7" fontWeight="bold" fill="white">C++</text>
      </svg>
    ),
    "REST APIs": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <rect width="24" height="24" rx="3" fill="#7C3AED"/>
        <text x="2" y="15" fontSize="6.5" fontWeight="bold" fill="white">API</text>
      </svg>
    ),
    "MySQL": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M16.4 5.4c-1.4-.1-2.5.3-3.3.9-.3.2-.7.2-.5-.3.5-1 1.4-2.5 3.8-2.5 2.6 0 3.5 2.2 3.5 2.2-.1 0-2-.2-3.5-.3z" fill="#00618A"/>
        <path d="M3 16l2.5-8h1.7L9 13.4 10.8 8h1.7l-2.5 8H8.3L6.5 11 4.7 16H3z" fill="#00618A"/>
        <path d="M14 16V8h1.7v8H14zm3.3 0V8H19v8h-1.7z" fill="#00618A"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M11.9 2L4 14.2h7.1L9.5 22l10.5-11.4h-7.2L11.9 2z" fill="#3ECF8E"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2C7 2 3 5.6 3 10c0 3.5 2.2 6.5 5.4 7.8L8 22h1.5l.5-3.5c.7.1 1.3.1 2 .1s1.3 0 2-.1L14.5 22H16l-.4-4.2C18.8 16.5 21 13.5 21 10c0-4.4-4-8-9-8z" fill="#336791"/>
        <text x="7" y="13.5" fontSize="7" fontWeight="bold" fill="white">PG</text>
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2s-5 5.3-5 10.3c0 2.8 2.2 5 5 5s5-2.2 5-5C17 7.3 12 2 12 2z" fill="#13AA52"/>
        <rect x="11.3" y="17" width="1.4" height="5" fill="#13AA52"/>
      </svg>
    ),
    "Firebase": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M5.8 18.4l.5-8.5 4.3-7.7.1 5.2L5.8 18.4z" fill="#FFA000"/>
        <path d="M18.2 18.4L13 3.2l-2.3 4.2 5.2 11z" fill="#F57C00"/>
        <path d="M5.8 18.4l6.4-3.8 6 3.8-6 2.4-6.4-2.4z" fill="#FFCA28"/>
        <path d="M12.2 14.6l6 3.8-5.2-11-.8 7.2z" fill="#FFA000"/>
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M22.2 11.2L12.8 1.8c-.5-.5-1.3-.5-1.8 0L9 3.8l2.3 2.3c.5-.2 1.1-.1 1.5.4.4.4.5 1 .4 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.4.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.4-1.5l-2-2v5.4c.1 0 .3.1.4.2.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.1-.1.3-.2.5-.3V9.2c-.2-.1-.4-.2-.5-.3-.4-.4-.5-1-.4-1.5L8.2 5l-6.4 6.4c-.5.5-.5 1.3 0 1.8l9.4 9.4c.5.5 1.3.5 1.8 0l9.2-9.2c.5-.5.5-1.3 0-1.8z" fill="#F05032"/>
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.1 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.52-4.48-10-10-10z" fill="#181717"/>
      </svg>
    ),
    "Figma": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M8 2h4a4 4 0 0 1 0 8H8V2z" fill="#F24E1E"/>
        <path d="M8 10h4a4 4 0 0 1 0 8H8v-8z" fill="#FF7262"/>
        <path d="M8 18a4 4 0 0 0 4 4v-4H8z" fill="#1ABCFE"/>
        <path d="M2 14a4 4 0 0 0 4 4h2v-8H6a4 4 0 0 0-4 4z" fill="#0ACF83"/>
        <path d="M2 6a4 4 0 0 0 4 4h2V2H6a4 4 0 0 0-4 4z" fill="#A259FF"/>
      </svg>
    ),
    "Vercel": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M12 2L22 20H2L12 2z" fill="#000"/>
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
        <path d="M17 1.5l-9 8.5-4-3L1.5 8.5l4.5 3.5-4.5 3.5L4 17l4-3 9 8.5 2.5-1v-19L17 1.5z" fill="#007ACC"/>
      </svg>
    ),
  };

  return logos[name] || (
    <span className="text-[9px] font-bold leading-none">{name.slice(0, 2)}</span>
  );
};

function SkillPill({ name, color, text, dot, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4, scale: 1.07, boxShadow: `0 8px 20px ${dot}40`, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium border cursor-default select-none"
      style={{ background: color, color: text, borderColor: `${dot}35` }}
    >
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/70 overflow-hidden"
      >
        <TechLogo name={name} />
      </motion.span>
      {name}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Skills & Technologies</SectionLabel>
        <div className="space-y-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: gi * 0.09 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <div className="sm:w-44 flex-shrink-0 pt-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase" style={{ color: group.text }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: group.dot }} />
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <SkillPill key={skill} name={skill} color={group.color} text={group.text} dot={group.dot} index={gi * 6 + si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 pt-7 border-t border-[#EAE4FF] flex flex-col sm:flex-row sm:items-start gap-3"
        >
          <div className="sm:w-44 flex-shrink-0 pt-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-[#AAAAAA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CDB8FF]" />
              Certified
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map(({ name, provider }, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.09, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.04, boxShadow: "0 6px 16px rgba(205,184,255,0.3)", transition: { duration: 0.18 } }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium border border-[#EAE4FF] bg-white text-[#555555] cursor-default"
              >
                <span className="w-5 h-5 rounded-full bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-bold text-[#A78BFA]">✦</span>
                </span>
                {name}
                <span className="text-[10px] text-[#BBBBBB] font-normal">· {provider}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
