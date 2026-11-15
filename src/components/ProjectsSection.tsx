import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  number: string; title: string; category: string; description: string;
  details: string[]; technologies: string[]; image: string; github: string;
};
const projects: Project[] = [
  {
    number: "01", title: "AI-Based Suspicious Activity Detection",
    category: "Artificial Intelligence · Computer Vision",
    description: "A real-time surveillance concept that uses computer vision and pose estimation to flag suspicious activity and fall events.",
    details: [
      "Processes visual input to identify people and recognize activity patterns.",
      "Combines object detection and pose-estimation techniques to support fall-event and suspicious-activity monitoring.",
      "Designed around a practical safety-monitoring use case, with an emphasis on clear visual feedback."
    ],
    technologies: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
    image: "/images/suspicious-activity-detection.svg",
    github: "https://github.com/sureshggu23-eng"
  },
  {
    number: "02", title: "Organo Connect",
    category: "Web Development · E-commerce",
    description: "An organic marketplace concept connecting farmers and customers with traditional organic products, nutritional items and snacks.",
    details: [
      "Presents an online marketplace experience for discovering organic and traditionally sourced products.",
      "Focuses on connecting producers and customers through a simple browsing experience.",
      "Built as a front-end web project using core web technologies."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    image: "/images/organo-connect.svg",
    github: "https://github.com/sureshggu23-eng/Organo_Project"
  },
  {
    number: "03", title: "Wild Animal Detection",
    category: "Machine Learning · Object Detection",
    description: "A computer-vision project that detects and identifies wild animals in visual input using object-detection techniques.",
    details: [
      "Applies object-detection methods to identify animal classes in images or video.",
      "Uses a computer-vision workflow to support wildlife observation and detection.",
      "Explores practical applications of machine learning in visual recognition."
    ],
    technologies: ["Python", "YOLO", "OpenCV", "Machine Learning"],
    image: "/images/wild-animal-detection.svg",
    github: "https://github.com/sureshggu23-eng"
  },
  {
    number: "04", title: "Data Analytics & Visualization",
    category: "Data Science · Analytics",
    description: "A data-analysis workflow focused on cleaning datasets, exploring patterns and communicating findings through visualizations.",
    details: [
      "Structures raw data for analysis through cleaning and exploratory analysis.",
      "Uses Python data libraries to interpret trends and patterns in datasets.",
      "Communicates findings through charts and visual summaries that make insights easier to understand."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    github: "https://github.com/sureshggu23-eng"
  }
];

export const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="work" className="portfolio-section relative min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-14">
          <p className="section-kicker mb-4">02 — SELECTED WORK</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-heading">PROJECTS</h2>
            <p className="muted-copy max-w-md">A selection of projects exploring computer vision, machine learning, web development and data analytics. Select a project to learn more.</p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              type="button" key={project.number}
              initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}}
              viewport={{once:true,amount:0.12}} transition={{duration:0.6,delay:index*0.07}}
              onClick={() => setSelected(project)}
              className="project-card group text-left"
              aria-label={`Open details for ${project.title}`}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} project visual`} className="project-image" loading="lazy" />
                <span className="project-image-number">{project.number}</span>
                <span className="project-open">VIEW DETAILS ↗</span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="section-kicker mb-3">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="muted-copy mt-3 text-sm leading-7">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map(tech => <span className="skill-chip" key={tech}>{tech}</span>)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-10 flex justify-end border-t pt-6 portfolio-divider">
          <a href="https://github.com/sureshggu23-eng" target="_blank" rel="noopener noreferrer" className="external-link">EXPLORE GITHUB ↗</a>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="project-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null); }}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="project-modal" initial={{opacity:0,y:25,scale:0.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15,scale:0.98}} transition={{duration:0.22}}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details">×</button>
              <img src={selected.image} alt="" className="modal-image" />
              <div className="p-6 sm:p-8">
                <p className="section-kicker">{selected.category}</p>
                <h3 id="project-dialog-title" className="project-title mt-3">{selected.title}</h3>
                <p className="muted-copy mt-4 leading-7">{selected.description}</p>
                <h4 className="modal-subheading">PROJECT OVERVIEW</h4>
                <ul className="modal-details">{selected.details.map(item => <li key={item}>{item}</li>)}</ul>
                <div className="mt-6 flex flex-wrap gap-2">{selected.technologies.map(tech => <span className="skill-chip" key={tech}>{tech}</span>)}</div>
                <a href={selected.github} target="_blank" rel="noopener noreferrer" className="modal-github">OPEN GITHUB REPOSITORY ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ProjectsSection;
