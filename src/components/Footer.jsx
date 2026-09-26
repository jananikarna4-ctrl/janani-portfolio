import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080C0A] px-6 py-10 text-[#F5F5F0] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">
              Janani<span className="text-emerald-400">.</span>
            </h3>

            <p className="mt-2 text-sm text-[#6F7D75]">
              Full Stack Developer · AI-powered web applications
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {/* GitHub */}
            <a
  href="https://github.com/jananikarna4-ctrl"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-[#89958E] transition duration-300 hover:border-emerald-400/40 hover:text-emerald-400"
>
  GH
</a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/janani-karna-477a05312/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-[#89958E] transition duration-300 hover:border-emerald-400/40 hover:text-emerald-400"
            >
              in
            </a>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#89958E] transition duration-300 hover:border-emerald-400/40 hover:text-emerald-400"
            >
              <ArrowUp size={18} />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-sm text-[#59655E] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Janani Karna. All rights reserved.
            </p>

            <p>
              Built with React & passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;