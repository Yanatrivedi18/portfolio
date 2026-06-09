import { motion } from "framer-motion";
import { Github, Linkedin, FileText, MapPin, ArrowDown } from "lucide-react";
import { personal } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const FloatingOrb = ({ style, delay, size, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size, height: size,
      background: `radial-gradient(circle, ${color}28 0%, ${color}08 60%, transparent 100%)`,
      ...style,
    }}
    animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
    transition={{ duration: 9 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background orbs */}
      <FloatingOrb style={{ top: "5%", left: "-8%" }} size={500} color="#CDB8FF" delay={0} />
      <FloatingOrb style={{ top: "30%", right: "-5%" }} size={380} color="#A78BFA" delay={2.5} />
      <FloatingOrb style={{ bottom: "10%", left: "30%" }} size={280} color="#E8D5FF" delay={1.5} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #A78BFA 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <motion.div variants={container} initial="hidden" animate="show">

            <motion.div variants={fromLeft} className="mb-5">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#888888]">
                <MapPin size={12} className="text-[#CDB8FF]" />
                Pune, Maharashtra, India
              </span>
            </motion.div>

            <motion.h1
              variants={fromLeft}
              className="font-display font-semibold text-[#111111] leading-[1.04] tracking-tight mb-5"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Yana<br />
              <span className="accent-gradient-text">Trivedi</span>
            </motion.h1>

            <motion.p
              variants={fromLeft}
              className="font-display text-xl lg:text-2xl text-[#555555] leading-snug mb-6 max-w-lg"
            >
              Full Stack Developer,{" "}
              <em className="not-italic text-[#999999]">Creative Builder</em>{" "}
              & Product-Minded Engineer.
            </motion.p>

            <motion.p
              variants={fromLeft}
              className="text-[#777777] leading-relaxed max-w-md mb-10 text-[15px]"
            >
              {personal.bio}
            </motion.p>

            {/* Buttons — all same style */}
            <motion.div variants={fromBottom} className="flex flex-wrap gap-3">
              {[
                { href: personal.resumeUrl, label: "Resume", icon: FileText, external: true },
                { href: personal.github, label: "GitHub", icon: Github, external: true },
                { href: personal.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
              ].map(({ href, label, icon: Icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2, boxShadow: "0 6px 20px rgba(167,139,250,0.18)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-[#D5CAFF] bg-white text-[#333333] hover:border-[#A78BFA] hover:text-[#6D28D9] transition-colors duration-200"
                >
                  <Icon size={14} />
                  {label}
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              variants={fromBottom}
              className="mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={14} className="text-[#CCBBFF]" />
              </motion.div>
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#BBBBBB]">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #CDB8FF, #A78BFA, #E8D5FF, #CDB8FF)",
                  opacity: 0.35,
                  filter: "blur(8px)",
                }}
              />

              {/* Soft accent ring */}
              <div
                className="absolute -inset-1 rounded-full"
                style={{ background: "linear-gradient(135deg, #EDE9FE, #F5F0FF)", opacity: 0.8 }}
              />

              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl"
                style={{ width: 340, height: 340, boxShadow: "0 20px 60px rgba(167,139,250,0.25)" }}
              >
                <img
                  src={personal.photo}
                  alt="Yana Trivedi"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating badge — top right only */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 bg-white border border-[#EAE4FF] rounded-2xl px-3.5 py-2.5 shadow-lg shadow-[#CDB8FF]/20"
              >
                <p className="text-[10px] text-[#AAAAAA] uppercase tracking-wider mb-0.5">Currently at</p>
                <p className="text-xs font-semibold text-[#333333]">MIT-ADT University</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAF9FF] to-transparent pointer-events-none" />
    </section>
  );
}
