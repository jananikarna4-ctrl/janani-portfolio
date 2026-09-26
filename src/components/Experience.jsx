import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

function Experience() {
  const experience = {
    company: "Zeptoware Systems Private Limited",
    role: "Python Full Stack Developer Intern",
    location: "Chennai",
    duration: "June 2024 — August 2024",
    description:
      "Completed a Python Full Stack Development internship with hands-on exposure to frontend and web application development.",
    points: [
      "Worked with HTML, CSS, and JavaScript fundamentals for web development.",
      "Practiced DOM manipulation, events, forms, browser APIs, and client-side storage.",
      "Worked with APIs, Fetch, asynchronous programming, Promises, and JSON.",
      "Worked with Angular fundamentals including components, data binding, directives, forms, routing, services, HTTP Client, and CRUD operations.",
      "Built practice applications and tasks as part of the internship learning process.",
    ],
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-140px] top-1/3 h-96 w-96 rounded-full bg-emerald-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Experience
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Where I gained
                <span className="block text-emerald-400">
                  experience.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#89958E]">
                A hands-on internship experience that helped me strengthen my
                web development fundamentals and explore full-stack concepts.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#59655E] lg:flex">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/50 via-white/10 to-transparent md:block" />

          {/* Timeline point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-[11px] top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0B0F0D] md:flex"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
          </motion.div>

          {/* Experience card */}
          <motion.article
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative md:ml-16"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-emerald-400/30 hover:bg-emerald-400/[0.02]">
              
              {/* Top accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="p-7 sm:p-9 lg:p-10">
                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                      <Briefcase
                        size={21}
                        className="text-emerald-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-emerald-400">
                        {experience.company}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {experience.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-[#89958E]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">
                      <CalendarDays
                        size={15}
                        className="text-emerald-400"
                      />
                      {experience.duration}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">
                      <MapPin
                        size={15}
                        className="text-emerald-400"
                      />
                      {experience.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 max-w-3xl">
                  <p className="text-base leading-8 text-[#89958E]">
                    {experience.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* What I worked with */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D8DED9]">
                      What I worked with
                    </h4>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {experience.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                        className="group/item flex gap-3 rounded-2xl border border-white/5 bg-white/[0.015] p-4 transition duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/[0.02]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70 transition duration-300 group-hover/item:bg-emerald-400" />

                        <p className="text-sm leading-6 text-[#89958E]">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom label */}
                <div className="mt-8 flex items-center gap-2 text-sm text-[#59655E]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Internship Experience
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Experience;