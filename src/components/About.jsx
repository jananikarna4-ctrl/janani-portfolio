import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "BCA · 2024 — 2027",
    },
    {
      icon: Code2,
      title: "Current Focus",
      value: "Full Stack Development",
    },
    {
      icon: Sparkles,
      title: "Exploring",
      value: "AI-powered Applications",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building with purpose,
            <span className="block text-emerald-400">
              learning by creating.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-lg leading-8 text-[#B8C1BB]">
              I&apos;m a BCA student focused on Full Stack Development and
              building practical web applications with a growing interest in
              AI-powered solutions.
            </p>

            <p className="mt-6 text-base leading-8 text-[#89958E]">
              I enjoy turning ideas into working applications — from creating
              responsive interfaces to developing backend APIs, connecting
              databases, implementing authentication, and exploring AI
              integrations.
            </p>

            <p className="mt-6 text-base leading-8 text-[#89958E]">
              My learning has mainly come through hands-on projects rather
              than only theory. I&apos;m currently developing SkillPilot AI,
              an AI-powered career and skill development platform designed to
              help students identify skill gaps, follow personalized learning
              roadmaps, practice skills, and improve career readiness.
            </p>

            <p className="mt-6 text-base leading-8 text-[#89958E]">
              I&apos;ve also contributed to VayalVaasal AI, a team-based smart
              agriculture marketplace project involving farmers, customers,
              products, orders, and administrative workflows.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.025]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/5">
                      <Icon
                        size={20}
                        className="text-emerald-400 transition duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#59655E]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm font-medium text-[#D8DED9]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <p className="max-w-3xl text-sm leading-7 text-[#6F7D75]">
            I&apos;m continuously learning, building, and improving through
            real-world development projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;