import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal } from "@/lib/data";

const contactLinks = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail, external: false },
  { label: "GitHub", value: "Yanatrivedi18", href: personal.github, icon: Github, external: true },
  { label: "LinkedIn", value: "yanatrivedi18", href: personal.linkedin, icon: Linkedin, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(205,184,255,0.1), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-[#111111] leading-tight mb-6">
              Let's build<br />something<br /><span className="accent-gradient-text">meaningful.</span>
            </h2>
            <p className="text-[#777777] leading-relaxed max-w-sm text-[15px]">
              Whether you have a product idea, an opportunity, or just want to talk about building cool things — my inbox is open.
            </p>
            <div className="flex items-center gap-2 mt-5 text-sm text-[#AAAAAA]">
              <MapPin size={12} className="text-[#CDB8FF]" />
              Pune, Maharashtra, India
            </div>
          </motion.div>

          <div className="space-y-3">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={{ x: 5, boxShadow: "0 4px 20px rgba(167,139,250,0.12)" }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-[#EAE4FF] bg-white hover:border-[#CDB8FF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0EBFF] flex items-center justify-center group-hover:bg-[#E8D5FF] transition-colors flex-shrink-0">
                    <Icon size={15} className="text-[#A78BFA]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#BBBBBB] uppercase tracking-widest mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-[#111111] truncate">{link.value}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#DDCCFF] group-hover:text-[#A78BFA] transition-colors flex-shrink-0" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
