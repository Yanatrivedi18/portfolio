export function Footer() {
  return (
    <footer className="border-t border-[#EAE4FF] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#CDB8FF] flex items-center justify-center">
            <span className="font-display text-[11px] font-semibold text-[#3D1F8A]">Y</span>
          </div>
          <span className="text-sm font-medium text-[#333333]">Yana Trivedi</span>
        </div>

        <p className="text-xs text-[#CCCCCC]">
          © {new Date().getFullYear()} · All rights reserved
        </p>

        <div className="flex items-center gap-4">
          {[
            { label: "GitHub", href: "https://github.com/Yanatrivedi18" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/yanatrivedi18/" },
            { label: "Email", href: "mailto:yanatrivedi111@gmail.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#BBBBBB] hover:text-[#111111] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
