import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useMousePosition } from "@/hooks/useMousePosition";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  useMousePosition(cardRef);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl border border-[#EAE4FF] bg-white overflow-hidden spotlight-card flex flex-col h-full"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle 400px at var(--mouse-x,50%) var(--mouse-y,50%), rgba(205,184,255,0.1), transparent 60%)" }}
      />

      {/* Animated top accent bar */}
      <motion.div
        className="h-0.5 w-full origin-left"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
      />

      <div className="p-7 flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div>
            <Badge variant="outline" className="mb-3">{project.category}</Badge>
            <motion.h3
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              className="font-display text-2xl font-semibold text-[#111111]"
            >
              {project.name}
            </motion.h3>
            <p className="text-sm text-[#999999] mt-1 italic font-display">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            {project.githubUrl && (
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2, rotate: -5 }} whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full border border-[#EAE4FF] bg-white flex items-center justify-center text-[#888888] hover:text-[#111111] hover:border-[#CDB8FF] transition-all">
                <Github size={14} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2, rotate: 5 }} whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full border border-[#EAE4FF] bg-white flex items-center justify-center text-[#888888] hover:text-[#111111] hover:border-[#CDB8FF] transition-all">
                <ArrowUpRight size={14} />
              </motion.a>
            )}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="text-sm text-[#666666] leading-relaxed flex-1 mb-6"
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
              whileHover={{ scale: 1.08, y: -1 }}
            >
              <Badge variant="mono">{t}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight"
          >
            Products I've<br /><em className="not-italic text-[#BBBBBB]">shipped.</em>
          </motion.h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
