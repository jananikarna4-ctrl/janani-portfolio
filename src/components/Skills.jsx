import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Web Fundamentals",
      subtitle: "Frontend foundations",
      description:
        "Building web pages and interactive experiences using core web technologies.",
      icon: Code2,
      skills: ["HTML5", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "Database",
      subtitle: "Data & persistence",
      description:
        "Working with MongoDB to store, manage, and retrieve application data.",
      icon: Database,
      skills: ["MongoDB"],
    },
    {
      number: "03",
      title: "Development",
      subtitle: "Programming & web development",
      description:
        "Developing practical applications while strengthening programming and web development skills.",
      icon: Server,
      skills: ["Web Development", "Python"],
    },
    {
      number: "04",
      title: "Productivity",
      subtitle: "Computer & productivity tools",
      description:
        "Using essential computer and productivity tools for academic and development work.",
      icon: Sparkles,
      skills: [
        "Basic Computer Knowledge",
        "MS Word",
        "PowerPoint",
        "Learning Attitude",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-120px] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
                Skills
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Technologies I
                <span className="block text-emerald-400">
                  work with.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#89958E]">
                A growing set of technologies and tools I use to build
                practical web applications and strengthen my development
                skills.
              </p>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#59655E] lg:flex">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </motion.div>

        {/* Skills Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.025] sm:p-8"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/[0.04] blur-3xl transition duration-500 group-hover:bg-emerald-400/[0.08]" />

                {/* Card Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                    <Icon
                      size={22}
                      className="text-emerald-400 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-[#59655E]">
                    {group.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative mt-7">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-sm text-emerald-400/80">
                    {group.subtitle}
                  </p>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#6F7D75]">
                    {group.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-[#C8D0CB] transition-all duration-300 group-hover:border-emerald-400/20 group-hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-8 h-px w-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="h-full bg-emerald-400/50"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#6F7D75]">
            Currently strengthening my development skills through hands-on
            projects, practical experience, and continuous learning.
          </p>

          <span className="flex items-center gap-2 text-sm text-[#59655E]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Always learning
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;