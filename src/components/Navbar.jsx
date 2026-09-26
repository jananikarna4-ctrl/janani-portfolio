import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0B0F0D]/80 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">

        {/* LOGO */}
        <a
          href="#home"
          className="group flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-xl font-bold tracking-tight text-[#F5F5F0]">
            Janani
          </span>

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 transition group-hover:scale-125" />

          <span className="text-xl font-bold tracking-tight text-emerald-400">
            K
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#A7B0AA] transition duration-300 hover:text-emerald-400"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-emerald-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden rounded-full border border-emerald-400/30 bg-emerald-400/5 px-5 py-2.5 text-sm font-medium text-emerald-400 transition duration-300 hover:border-emerald-400/60 hover:bg-emerald-400/10 md:block"
        >
          Let's Talk
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#F5F5F0] transition hover:border-emerald-400/40 hover:text-emerald-400 md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F0D]/95 px-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/5 py-4 text-sm font-medium text-[#A7B0AA] transition hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-full bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-[#06100B] transition hover:bg-emerald-300"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;