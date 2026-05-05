import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/sarilabswhite.svg";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/projects", label: "Proyek" },
  { href: "/blog", label: "Blog" },
  { href: "/apps", label: "Aplikasi" },
];

interface NavProps {
  currentPath?: string;
}

export default function Nav({ currentPath = "/" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("sl-theme");
    setIsDark(saved !== "light");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("sl-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("sl-theme", "light");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 dark:bg-navy-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm dark:shadow-none"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_2px_12px_rgba(37,99,235,0.4)]">
            <img src={logo.src} alt="SarilabStudio" className="w-4 h-4" />
          </div>
          <span className="font-heading font-bold text-slate-900 dark:text-white text-sm tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            SarilabStudio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-body",
                currentPath === link.href ||
                  (link.href !== "/" && currentPath?.startsWith(link.href))
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: dark mode + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200"
            title="Ganti tema"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <a
            href="mailto:hello@sarilabstudio.com"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-[0_2px_12px_rgba(37,99,235,0.3)] font-heading"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-navy-800/95 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  currentPath === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@sarilabstudio.com"
              className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg text-center font-heading"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
