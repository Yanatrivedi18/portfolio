import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}) {
  const { ref, isInView } = useScrollReveal();

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
