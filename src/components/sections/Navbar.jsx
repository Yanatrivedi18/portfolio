import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-[#EAE4FF] shadow-sm shadow-[#CDB8FF]/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 rounded-lg bg-[#CDB8FF] flex items-center justify-center">
            <span className="font-display text-sm font-semibold text-[#3D1F8A]">Y</span>
          </div>
          <span className="text-sm font-medium text-[#111111] group-hover:text-[#6D4FC2] transition-colors">
            Yana Trivedi
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#666666] hover:text-[#111111] px-3 py-1.5 rounded-full hover:bg-[#F0EBFF] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/Yanatrivedi18"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-sm font-medium px-4 py-1.5 rounded-full bg-[#111111] text-white hover:bg-[#333333] transition-all duration-200"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F0EBFF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={cn("block h-0.5 bg-[#111111] rounded transition-all duration-300", menuOpen && "rotate-45 translate-y-[7.5px]")} />
            <span className={cn("block h-0.5 bg-[#111111] rounded transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("block h-0.5 bg-[#111111] rounded transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[7.5px]")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-[#EAE4FF] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#444444] hover:text-[#111111] py-2 px-3 rounded-lg hover:bg-[#F0EBFF] transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
