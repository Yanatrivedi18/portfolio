import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  ...props
}) {
  const variants = {
    primary:
      "bg-[#111111] text-white hover:bg-[#2a2a2a] border border-[#111111]",
    outline:
      "bg-transparent text-[#111111] border border-[#D0C6F0] hover:border-[#A78BFA] hover:bg-[#F5F0FF]",
    ghost:
      "bg-transparent text-[#666666] border border-transparent hover:text-[#111111] hover:bg-[#F0EBFF]",
    accent:
      "bg-[#CDB8FF] text-[#3D1F8A] border border-[#B89EEF] hover:bg-[#A78BFA] hover:text-white",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-full",
    md: "text-sm px-4 py-2 rounded-full",
    lg: "text-sm px-6 py-3 rounded-full",
  };

  const classes = cn(
    "inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none",
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} onClick={onClick} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
