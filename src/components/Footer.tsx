import { Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import logo from "@/assets/sarilabswhite.svg";

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/sarilabstudio",
    label: "GitHub",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/sarilabstudio",
    label: "Twitter",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/sarilabstudio",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:hello@sarilabstudio.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/5 bg-slate-50/80 dark:bg-navy-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_1px_8px_rgba(37,99,235,0.35)]">
                <img
                  src={logo.src}
                  alt="SarilabStudio"
                  className="w-3.5 h-3.5"
                />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-slate-100 text-sm">
                SarilabStudio
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-xs font-mono">
              Membangun Solusi Digital yang Berdampak 🌴
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-body"
            >
              Proyek
            </a>
            <a
              href="/blog"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-body"
            >
              Blog
            </a>
            <a
              href="/apps"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-body"
            >
              Aplikasi
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 dark:text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} SarilabStudio. Hak cipta dilindungi.
          </p>
          <p className="text-slate-400 dark:text-slate-600 text-xs font-mono">
            Dibuat dengan Astro + React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
