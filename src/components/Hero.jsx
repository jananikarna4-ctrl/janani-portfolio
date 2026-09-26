import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0F0D] text-[#F5F5F0]"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* =========================
              LEFT SIDE - INTRO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Hello */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Janani
              <span className="block text-emerald-400">
                Karna
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-2xl font-medium text-[#D6DDD8] sm:text-3xl"
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-8 text-[#9CA8A1] sm:text-lg"
            >
              I build practical web applications and explore
              AI-powered solutions that turn ideas into useful
              digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* Projects Button */}
              <a
                href="#projects"
                className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-[#06100B] transition duration-300 hover:bg-emerald-400"
              >
                View Projects
              </a>

              {/* GitHub Button */}
              <a
  href="https://github.com/jananikarna4-ctrl"
  target="_blank"
  rel="noreferrer"
  className="rounded-full border border-white/10 px-6 py-3 font-medium transition duration-300 hover:border-emerald-400/50 hover:text-emerald-400"
>
  GitHub
</a>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT SIDE - PHOTO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Emerald Glow */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl" />

              {/* Photo Placeholder */}
              <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-[#111815] shadow-2xl shadow-emerald-950/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <div className="relative h-72 w-72 overflow-hidden rounded-full border border-emerald-400/30 bg-[#111815] shadow-2xl shadow-emerald-950/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
  <img
    src={profileImage}
    alt="Janani Karna"
    className="h-full w-full object-cover"
  />
</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-[#6F7D75] transition hover:text-emerald-400"
        >
          <ArrowDown
            size={22}
            className="animate-bounce"
          />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;