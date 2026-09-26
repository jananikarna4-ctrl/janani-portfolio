import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users } from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "SkillPilot AI",
      type: "Individual Project",
      icon: Sparkles,
      status: "Currently in Testing",
      description:
        "An AI-powered career and skill development platform designed to help students assess their skills, identify skill gaps, follow personalized learning roadmaps, practice skills, and improve career readiness.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini API",
        "JWT",
      ],
      featured: true,
    },
    {
      number: "02",
      title: "VayalVaasal AI",
      type: "Team Project",
      icon: Users,
      status: "Project Completed",
      description:
        "A smart agriculture marketplace involving farmer, customer, and admin workflows, including products and orders.",
      technologies: [
        "Frontend",
        "Backend",
        "Database",
        "REST APIs",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0F0D] px-6 py-28 text-[#F5F5F0] lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Projects
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Things I&apos;ve
                <span className="block text-emerald-400">
                  built.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#89958E]">
                A selection of projects where I have applied my development
                skills to build practical applications.
              </p>
            </div>

            <span className="hidden text-sm text-[#59655E] lg:block">
              02 Projects
            </span>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 ${
                  project.featured ? "lg:p-1" : ""
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-emerald-400/[0.035] blur-3xl transition duration-500 group-hover:bg-emerald-400/[0.08]" />

                <div
                  className={`relative ${
                    project.featured
                      ? "rounded-[22px] bg-[#0D1210]"
                      : ""
                  }`}
                >
                  <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[90px_1fr_190px] lg:p-10">
                    
                    {/* Number */}
                    <div className="flex items-start justify-between lg:block">
                      <span className="text-4xl font-semibold tracking-tight text-emerald-400/50 transition duration-500 group-hover:text-emerald-400/80">
                        {project.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] lg:mt-8">
                        <Icon
                          size={18}
                          className="text-[#6F7D75] transition duration-300 group-hover:text-emerald-400"
                        />
                      </div>
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          {project.title}
                        </h3>

                        <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-[#89958E]">
                          {project.type}
                        </span>
                      </div>

                      <p className="mt-5 max-w-3xl text-base leading-8 text-[#89958E]">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-[#B8C1BB] transition duration-300 group-hover:border-emerald-400/15 group-hover:text-emerald-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex flex-row items-center justify-between border-t border-white/10 pt-6 lg:block lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0 lg:text-right">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#59655E]">
                          Status
                        </p>

                        <p className="mt-2 text-sm font-medium text-emerald-400">
                          {project.status}
                        </p>
                      </div>

                      <div className="mt-5 hidden justify-end lg:flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-emerald-400/30 group-hover:text-emerald-400">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-px w-full overflow-hidden bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: project.featured ? "45%" : "25%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="h-full bg-emerald-400/50"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center gap-3 border-t border-white/10 pt-7"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <p className="text-sm text-[#6F7D75]">
            More projects and live demonstrations will be added as they become
            ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;