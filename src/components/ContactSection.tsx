import React from "react";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
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
          bottom-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
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
        >

          <p
            className="
              mb-5
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            06 — GET IN TOUCH
          </p>

          <h2
            className="
              max-w-5xl
              text-5xl
              font-bold
              uppercase
              leading-[0.9]
              tracking-tight
              sm:text-6xl
              md:text-8xl
            "
          >
            LET'S
            <br />
            CONNECT.
          </h2>

          <p
            className="
              mt-8
              max-w-xl
              text-sm
              leading-8
              text-gray-400
            "
          >
            Have a project idea, collaboration opportunity,
            internship opportunity or simply want to connect?
            Feel free to reach out.
          </p>

        </motion.div>


        {/* =====================================================
            CONTACT CONTENT
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-[1fr_1.2fr]
          "
        >

          {/* =================================================
              LEFT — CONTACT DETAILS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-4"
          >

            {/* EMAIL */}

            <a
              href="mailto:sureshg.gu23@gmail.com"
              className="
                group
                block
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-white/[0.04]
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
                EMAIL
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <span
                  className="
                    break-all
                    text-sm
                    text-gray-300
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  sureshg.gu23@gmail.com
                </span>

                <span
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </div>

            </a>


            {/* PHONE */}

            <a
              href="tel:+918637480500"
              className="
                group
                block
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-white/[0.04]
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
                PHONE
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <span
                  className="
                    text-sm
                    text-gray-300
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  +91 86374 80500
                </span>

                <span
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/sureshggu23-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-white/[0.04]
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
                GITHUB
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <span
                  className="
                    break-all
                    text-sm
                    text-gray-300
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  github.com/sureshggu23-eng
                </span>

                <span
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </div>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/suresh-g-841b3330b/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-white/[0.04]
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
                LINKEDIN
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <span
                  className="
                    break-all
                    text-sm
                    text-gray-300
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  linkedin.com/in/suresh-g-841b3330b
                </span>

                <span
                  className="
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </div>

            </a>

          </motion.div>


          {/* =================================================
              RIGHT — OPPORTUNITIES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              flex-col
              justify-between
              border
              border-white/10
              bg-white/[0.02]
              p-8
              sm:p-10
            "
          >

            <div>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                AVAILABLE FOR
              </p>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  uppercase
                  leading-tight
                  sm:text-4xl
                "
              >
                PROJECTS
                <br />
                & OPPORTUNITIES
              </h3>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  leading-8
                  text-gray-400
                "
              >
                I am interested in opportunities where I can
                apply my skills in Python, data analytics,
                machine learning, computer vision and software
                development.
              </p>


              {/* Skills */}

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "Python",
                  "Data Analytics",
                  "Machine Learning",
                  "Computer Vision",
                  "Java",
                  "Web Development",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="
                      border
                      border-white/10
                      px-4
                      py-2
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-500
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-12
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >

              {/* GitHub */}

              <a
                href="https://github.com/sureshggu23-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/20
                  px-6
                  py-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-500
                  hover:text-black
                "
              >
                VIEW GITHUB

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/suresh-g-841b3330b/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/10
                  px-6
                  py-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:text-white
                "
              >
                LINKEDIN

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </a>


              {/* Email */}

              <a
                href="mailto:sureshg.gu23@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/10
                  px-6
                  py-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:text-white
                "
              >
                EMAIL ME

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>

              </a>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            FOOTER
        ====================================================== */}

        <motion.footer
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
            mt-24
            border-t
            border-white/10
            pt-7
          "
        >

          <div
            className="
              flex
              flex-col
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
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
               SURESH G
            </p>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
            >
              PYTHON • DATA • AI • DEVELOPMENT
            </p>

            <a
              href="#"
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-600
                transition-colors
                hover:text-white
              "
            >
              BACK TO TOP ↑
            </a>

          </div>

        </motion.footer>

      </div>
    </section>
  );
};

export default ContactSection;