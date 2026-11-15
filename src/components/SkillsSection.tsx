import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "PROGRAMMING",
    skills: ["Python", "Java", "SQL"],
  },
  {
    number: "02",
    title: "DATA & ANALYTICS",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Analytics"],
  },
  {
    number: "03",
    title: "AI & MACHINE LEARNING",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
    ],
  },
  {
    number: "04",
    title: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "05",
    title: "TOOLS",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
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
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/5
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

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
            03 — EXPERTISE
          </p>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
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
              SKILLS
            </h2>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-gray-400
              "
            >
              Technologies and tools I use to build
              applications, analyze data and explore
              artificial intelligence.
            </p>
          </div>
        </motion.div>


        {/* =====================================================
            SKILL GRID
        ====================================================== */}

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                min-h-[260px]
                bg-black
                p-7
                transition-all
                duration-500
                hover:bg-[#080808]
                sm:p-10
              "
            >

              {/* Top accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-0
                  bg-blue-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />


              {/* Number */}

              <div className="flex items-start justify-between">

                <span
                  className="
                    text-4xl
                    font-light
                    text-gray-700
                    transition-colors
                    duration-500
                    group-hover:text-blue-500
                  "
                >
                  {group.number}
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-700
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* Title */}

              <h3
                className="
                  mt-12
                  text-xl
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                {group.title}
              </h3>


              {/* Skills */}

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      border
                      border-white/10
                      px-4
                      py-2
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:border-blue-500/20
                      group-hover:text-gray-200
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}


          {/* =================================================
              CURRENTLY LEARNING
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              group
              relative
              min-h-[260px]
              bg-black
              p-7
              transition-all
              duration-500
              hover:bg-[#080808]
              sm:p-10
            "
          >

            <div
              className="
                absolute
                left-0
                top-0
                h-px
                w-0
                bg-blue-500
                transition-all
                duration-500
                group-hover:w-full
              "
            />

            <div className="flex items-start justify-between">

              <span
                className="
                  text-4xl
                  font-light
                  text-gray-700
                  transition-colors
                  duration-500
                  group-hover:text-blue-500
                "
              >
                06
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-700
                "
              >
                LEARNING
              </span>

            </div>

            <h3
              className="
                mt-12
                text-xl
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              CURRENTLY EXPLORING
            </h3>

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2
              "
            >

              {[
                "Artificial Intelligence",
                "Advanced Python",
                "Data Science",
                "Deep Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    border
                    border-blue-500/20
                    px-4
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-blue-400
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-10
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-white/10
            pt-6
            sm:flex-row
          "
        >

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-600
            "
          >
            ALWAYS LEARNING • ALWAYS BUILDING
          </p>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-600
            "
          >
            PYTHON • DATA • AI
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;