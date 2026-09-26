import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, ArrowUpRight } from "lucide-react";

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-140px] bottom-0 h-96 w-96 rounded-full bg-emerald-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Education
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                My academic
                <span className="block text-emerald-400">
                  journey.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#89958E]">
                Currently pursuing my degree while building practical skills
                through projects and hands-on development.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#59655E] lg:flex">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16"
        >
          {/* Timeline */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/50 via-white/10 to-transparent md:block" />

          {/* Timeline point */}
          <div className="absolute left-[11px] top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0B0F0D] md:flex">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
          </div>

          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 md:ml-16">
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-400/[0.035] blur-3xl transition duration-500 group-hover:bg-emerald-400/[0.07]" />

            <div className="relative p-7 sm:p-9 lg:p-10">
              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                    <GraduationCap
                      size={22}
                      className="text-emerald-400 transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-emerald-400">
                      Prince Shri Venkateshwara Arts And Science College
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Bachelor of Computer Applications
                    </h3>

                    <p className="mt-2 text-sm text-[#6F7D75]">
                      BCA · Computer Applications
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-[#89958E]">
                  <CalendarDays
                    size={15}
                    className="text-emerald-400"
                  />
                  June 2024 — May 2027
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Current status */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-sm font-medium text-emerald-400">
                      Currently Pursuing
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#89958E]">
                    Pursuing a Bachelor of Computer Applications with a focus
                    on developing practical skills in software and web
                    application development.
                  </p>
                </div>

                <span className="text-5xl font-semibold tracking-tight text-emerald-400/10 sm:text-6xl">
                  BCA
                </span>
              </div>

              {/* Bottom accent */}
              <div className="mt-8 h-px w-full overflow-hidden bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="h-full bg-emerald-400/50"
                />
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;