import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-emerald-400">
              meaningful.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#89958E] sm:text-lg">
            I&apos;m currently looking for opportunities to strengthen my
            development skills, contribute to real-world projects, and
            continue growing as a Full Stack Developer.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {/* Email */}
          <motion.a
            href="mailto:janikarna4@gmail.com"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/[0.04] blur-3xl transition duration-500 group-hover:bg-emerald-400/[0.09]" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                <Mail
                  size={21}
                  className="text-emerald-400 transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#59655E] transition duration-300 group-hover:border-emerald-400/30 group-hover:text-emerald-400">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="relative mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#59655E]">
                Email
              </p>

              <p className="mt-3 break-all text-lg font-medium text-[#E8EEE9] sm:text-xl">
                janikarna4@gmail.com
              </p>

              <p className="mt-2 text-sm text-[#6F7D75]">
                Send me an email
              </p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/janani-karna-477a05312/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/[0.04] blur-3xl transition duration-500 group-hover:bg-emerald-400/[0.09]" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                <span className="text-lg font-bold text-emerald-400">
                  in
                </span>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#59655E] transition duration-300 group-hover:border-emerald-400/30 group-hover:text-emerald-400">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="relative mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#59655E]">
                LinkedIn
              </p>

              <p className="mt-3 text-lg font-medium text-[#E8EEE9] sm:text-xl">
                Connect with me
              </p>

              <p className="mt-2 text-sm text-[#6F7D75]">
                View my professional profile
              </p>
            </div>
          </motion.a>
        </div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-emerald-400/25"
        >
          <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025]">
                <span className="text-sm font-bold tracking-tight text-[#89958E] transition duration-300 group-hover:text-emerald-400">
                  GH
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#59655E]">
                  GitHub
                </p>

                <p className="mt-1 text-lg font-medium text-[#E8EEE9]">
                  Explore my projects
                </p>
              </div>
            </div>

            <a
              href="https://github.com/jananikarna4-ctrl"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[#C8D0CB] transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:text-emerald-400"
            >
              Visit GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex items-center gap-3 border-t border-white/10 pt-7"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <p className="text-sm text-[#59655E]">
            Open to learning, building, and meaningful opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;