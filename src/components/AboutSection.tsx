import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "PYTHON",
    text: "Building practical applications and automation solutions with Python.",
  },
  {
    number: "02",
    title: "DATA ANALYTICS",
    text: "Working with data to discover patterns, generate insights and create visualizations.",
  },
  {
    number: "03",
    title: "MACHINE LEARNING",
    text: "Exploring machine learning and computer vision to solve real-world problems.",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        px-6
        py-24
        text-white
        sm:px-10
        lg:px-16
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-600/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            01 — ABOUT ME
          </p>

          <h2
            className="
              text-5xl
              font-bold
              uppercase
              leading-none
              tracking-tight
              sm:text-6xl
              md:text-7xl
            "
          >
            WHO I AM
          </h2>
        </motion.div>


        {/* Main content */}

        <div
          className="
            grid
            gap-16
            lg:grid-cols-[1fr_1.3fr]
            lg:items-center
          "
        >

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div
              className="
                absolute
                -left-4
                top-0
                h-full
                w-px
                bg-gradient-to-b
                from-blue-500
                via-blue-500/30
                to-transparent
              "
            />

            <div className="pl-8">

              <p
                className="
                  text-2xl
                  font-light
                  leading-relaxed
                  text-gray-200
                  sm:text-3xl
                "
              >
                I am{" "}
                <span className="font-semibold text-white">
                  Suresh G
                </span>
                , a passionate developer interested in
                building practical technology solutions.
              </p>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-sm
                  leading-8
                  text-gray-400
                "
              >
                I enjoy working with Python, data analytics,
                machine learning and computer vision. My
                projects focus on applying technology to
                real-world problems and continuously improving
                my technical skills.
              </p>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-8
                  text-gray-400
                "
              >
                I am currently developing my knowledge across
                software development, artificial intelligence
                and data-driven applications while building
                projects that demonstrate my practical skills.
              </p>

            </div>
          </motion.div>


          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >

            {highlights.map((item) => (

              <div
                key={item.number}
                className="
                  group
                  relative
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  transition-all
                  duration-500
                  hover:border-blue-500/40
                  hover:bg-white/[0.04]
                "
              >

                <div className="flex gap-6">

                  <span
                    className="
                      text-2xl
                      font-light
                      text-gray-700
                      transition-colors
                      duration-300
                      group-hover:text-blue-500
                    "
                  >
                    {item.number}
                  </span>

                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-gray-400
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </motion.div>

        </div>


        {/* Bottom stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            grid
            border-y
            border-white/10
            sm:grid-cols-3
          "
        >

          <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">
              04
            </p>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              PROJECTS
            </p>
          </div>


          <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold text-white">
              AI
            </p>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              INTEREST
            </p>
          </div>


          <div className="p-7">
            <p className="text-3xl font-semibold text-white">
              2026
            </p>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              CURRENT JOURNEY
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;