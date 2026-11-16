import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    period: "2025 — 2027",
    degree: "MASTER OF COMPUTER APPLICATIONS",
    institution: "HINDUSTHAN COLLEGE OF ARTS AND SCIENCE",
    university: "BHARATHIAR UNIVERSITY • COIMBATORE",
    score: "85.8%",
    status: "CURRENT",
  },
  {
    number: "02",
    period: "2022 — 2025",
    degree: "B.SC. COMPUTER SCIENCE",
    institution: "KONGUNADU ARTS AND SCIENCE COLLEGE",
    university: "BHARATHIAR UNIVERSITY • COIMBATORE",
    score: "83.65%",
    status: "COMPLETED",
  },
  {
    number: "03",
    period: "2020 — 2022",
    degree: "HIGHER SECONDARY • XII",
    institution:
      "JKK NATTRaja MATRICULATION HIGHER SECONDARY SCHOOL",
    university: "KOMARAPALAYAM • MATRICULATION",
    score: "80.7%",
    status: "COMPLETED",
  },
  {
    number: "04",
    period: "2020",
    degree: "SECONDARY • X",
    institution:
      "JKK NATTRaja MATRICULATION HIGHER SECONDARY SCHOOL",
    university: "KOMARAPALAYAM • MATRICULATION",
    score: "80.6%",
    status: "COMPLETED",
  },
];

const certifications = [
  {
    number: "01",
    title: "PYTHON FOR DATA SCIENCE",
    provider: "NPTEL",
    detail: "79% • TOP 5% OF COURSE PARTICIPANTS",
  },
  {
    number: "02",
    title: "DATA SCIENCE & ANALYTICS",
    provider: "HP LIFE",
    detail: "CERTIFIED",
  },
  {
    number: "03",
    title: "DATA ANALYTICS ESSENTIALS",
    provider: "CISCO NETWORKING ACADEMY",
    detail: "CERTIFIED",
  },
  {
    number: "04",
    title: "MACHINE LEARNING",
    provider: "IBM SKILLBUILD",
    detail: "CERTIFIED",
  },
  {
    number: "05",
    title: "OOPS IN JAVA",
    provider: "SIMPLILEARN",
    detail: "CERTIFIED",
  },
  {
    number: "06",
    title: "WEB DEVELOPMENT FUNDAMENTALS",
    provider: "IBM SKILLBUILD",
    detail: "CERTIFIED",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
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

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/5
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-600/5
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="internship-panel mb-20"
        >
          <p className="section-kicker mb-4">PROFESSIONAL EXPERIENCE</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">Python with Data Science Intern</h2>
              <p className="mt-2 text-sm font-medium">Gateway Software Solutions Pvt. Ltd. <span className="internship-location">— Coimbatore</span></p>
              <p className="muted-copy mt-2 text-xs">May 2024 – Jun 2024</p>
            </div>
            <span className="internship-tag">INTERNSHIP · 2 MONTHS</span>
          </div>
          <p className="muted-copy mt-6 max-w-4xl text-sm leading-7">
            Completed a structured internship focused on applying Python for data analysis and interpretation, working with real-world datasets under mentor guidance.
          </p>
          <ul className="internship-list">
            <li>Performed end-to-end dataset analysis, including data cleaning, exploration and interpretation, to derive actionable insights from raw data.</li>
            <li>Built visualizations to represent data trends and patterns clearly, strengthening the ability to translate findings into business-relevant insights.</li>
            <li>Developed a strong foundation in dataset analysis, a core skill applied across academic and personal projects.</li>
          </ul>
        </motion.div>

        {/* =====================================================
            EDUCATION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
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
            04 — ACADEMIC JOURNEY
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
              EDUCATION
            </h2>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-gray-400
              "
            >
              My academic journey in computer science,
              software development, data analytics and
              artificial intelligence.
            </p>

          </div>

        </motion.div>


        {/* =====================================================
            EDUCATION CARDS
        ====================================================== */}

        <div className="space-y-5">

          {education.map((item, index) => (

            <motion.article
              key={item.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-white/[0.04]
              "
            >

              {/* Hover line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-0.5
                  origin-top
                  scale-y-0
                  bg-blue-500
                  transition-transform
                  duration-500
                  group-hover:scale-y-100
                "
              />

              <div
                className="
                  grid
                  gap-7
                  p-7
                  md:grid-cols-[70px_140px_1fr]
                  md:items-start
                  md:p-8
                  lg:grid-cols-[90px_180px_1fr_130px]
                  lg:items-center
                  lg:p-9
                "
              >

                {/* Number */}

                <div>
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
                    {item.number}
                  </span>
                </div>


                {/* Period */}

                <div>

                  <p
                    className="
                      text-sm
                      font-light
                      tracking-wide
                      text-gray-300
                    "
                  >
                    {item.period}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-blue-400
                    "
                  >
                    {item.status}
                  </p>

                </div>


                {/* Education details */}

                <div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      uppercase
                      leading-tight
                      tracking-wide
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-100
                      sm:text-2xl
                    "
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-gray-400
                    "
                  >
                    {item.institution}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-600
                    "
                  >
                    {item.university}
                  </p>

                </div>


                {/* Score */}

                <div
                  className="
                    border-t
                    border-white/10
                    pt-5
                    md:col-start-3
                    lg:col-start-auto
                    lg:border-l
                    lg:border-t-0
                    lg:pl-7
                    lg:pt-0
                  "
                >

                  <p
                    className="
                      text-3xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.score}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-600
                    "
                  >
                    SCORE
                  </p>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =====================================================
            CERTIFICATIONS HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-10 mt-24"
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
            05 — PROFESSIONAL CREDENTIALS
          </p>

          <h2
            className="
              text-4xl
              font-bold
              uppercase
              leading-none
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            CERTIFICATIONS
          </h2>

        </motion.div>


        {/* =====================================================
            CERTIFICATION CARDS
        ====================================================== */}

        <div
          className="
            grid
            gap-px
            border
            border-white/10
            bg-white/10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {certifications.map((certificate, index) => (

            <motion.div
              key={certificate.number}
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
                min-h-[270px]
                bg-black
                p-8
                transition-all
                duration-500
                hover:bg-[#080808]
                sm:p-10
              "
            >

              {/* Top hover line */}

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


              {/* Number and label */}

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
                  {certificate.number}
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                  "
                >
                  CERTIFIED
                </span>

              </div>


              {/* Provider */}

              <p
                className="
                  mt-12
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                {certificate.provider}
              </p>


              {/* Title */}

              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                  uppercase
                  leading-tight
                  tracking-wide
                  text-white
                "
              >
                {certificate.title}
              </h3>


              {/* Details */}

              <p
                className="
                  mt-6
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  leading-6
                  text-gray-500
                "
              >
                {certificate.detail}
              </p>


              {/* Bottom number */}

              <div className="mt-8 flex justify-end">

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-gray-700
                    transition-colors
                    duration-300
                    group-hover:text-blue-500
                  "
                >
                  {certificate.number}
                </span>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================================
            FOOTER
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
            border-t
            border-white/10
            pt-6
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
            EDUCATION • CERTIFICATIONS • CONTINUOUS LEARNING
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;