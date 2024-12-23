import React, { useState, useEffect } from "react";
import { motion , AnimatePresence } from "framer-motion";
import Gradex01 from "../../../public/images/GradexProject/GraDex01.png"
import Gradex02 from "../../../public/images/GradexProject/GraDex02.png"
import Gradex03 from "../../../public/images/GradexProject/GraDex03.png"
import Gradex04 from "../../../public/images/GradexProject/GraDex04.png"
import Gradex05 from "../../../public/images/GradexProject/GraDex05.png"
import Gradex06 from "../../../public/images/GradexProject/GraDex06.png"
import Gradex07 from "../../../public/images/GradexProject/GraDex07.png"
import Gradex08 from "../../../public/images/GradexProject/GraDex08.png"
import kiki01 from "../../../public/images/Kiki'sTheaterProject/kiki01.png"
import kiki02 from "../../../public/images/Kiki'sTheaterProject/kiki02.png"
import kiki03 from "../../../public/images/Kiki'sTheaterProject/kiki03.png"
import kiki04 from "../../../public/images/Kiki'sTheaterProject/kiki04.png"
import kiki05 from "../../../public/images/Kiki'sTheaterProject/kiki05.png"
import port01 from "../../../public/images/portfolioImage/port01.png"
import port02 from "../../../public/images/portfolioImage/port02.png"

interface ProjectItem {
  img_url: string[];
  year: string;
  title: string;
  description: string;
  responsibility: string;
  source_code: string;
  view: string;
  tools: string[];
}

const experiences: ProjectItem[] = [
  {
    img_url: [
        Gradex01,
        Gradex02,
        Gradex03,
        Gradex04,
        Gradex05,
        Gradex06,
        Gradex07,
        Gradex08,
    ],
    year: "September 2024 - December 2024",
    title: "GraDex Subscription Platform Project",
    description:
      "Designed and developed a subscription-based food preparation platform with features such as meal preparation per month, shipping system, and ingredient management using React.js, Express.js, and MongoDB.",
    responsibility: "Focused on backend development for shipping system and ingredient management features. Implemented efficient APIs and optimized database structures.",
    source_code: "https://github.com/orgs/SE-GraDex/teams/se/repositories",
    view: "https://gradex-cpe.bangmod.engineer/",
    tools: ["React.js", "Tailwind CSS", "Node.js", "Typescript" , "Express.js" , "MongoDB" ],
  },
  {
    img_url: [
        kiki01,
        kiki02,
        kiki03,
        kiki04,
        kiki05
    ],
    year: "April 2024 - May 2024",
    title: "Kiki's Theater Booking System Project",
    description:
      "Designed and developed a theater seat booking platform using React.js and MySQL.",
    responsibility:
      "Focusing on front-end development for theater seat booking feature and gained experience with React.js for the first time.",
    source_code: "https://github.com/sirawitGOGO/MovieTheater-DBproject",
    view: "https://movie-theater-d-bproject.vercel.app/",
    tools: ["React.js" , "Tailwind CSS" , "Node.js" , "MySQL" , "Javascript"],
  },
  {
    img_url: [
        port01,
        port02,
    ],
    year: "December 2024 - Present",
    title: "Portfolio website",
    description:
      "Designed and developed my portfolio website",
    responsibility:
      "Focused on frontend development",
    source_code: "https://github.com/sirawitGOGO/myPortfolio",
    view: "https://sirawit-portfolio-lyart.vercel.app/",
    tools: ["React.js", "Typescript" , "Tailwind CSS"],
  },
];

export const Project: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(Array(experiences.length).fill(0));

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndexes) =>
          prevIndexes.map((currentIndex, i) =>
            (currentIndex + 1) % experiences[i].img_url.length
          )
        );
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div
        id="projects"
        className="w-screen min-h-screen flex flex-col pt-36 justify-start items-center text-primary secondary font-titillium z-10 relative"
      >
        <div className="flex flex-col items-start w-2/3 mb-16">
          <h1 className="text-primary text-lg md:text-4xl font-bold">Projects</h1>
          <span className="border border-teal-600 w-full"></span>
        </div>
  
        <div className="w-2/3">
          <ul className="relative">
            {experiences.map((experience, index) => (
              <motion.li
                key={index}
                className="mb-16 flex flex-col lg:flex-row gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Slideshow Section */}
                <div className="w-full lg:w-1/2 h-56 sm:h-72 relative rounded-lg overflow-hidden bg-gray-200">
                  <AnimatePresence>
                    <motion.img
                      key={currentImageIndex[index]}
                      src={experience.img_url[currentImageIndex[index]]}
                      alt={`Slide ${currentImageIndex[index]}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>
                </div>
  
                {/* Details Section */}
                <div className="w-full lg:w-1/2">
                  <div className="w-72 h-10 bg-teal-600 rounded-full flex justify-center items-center text-white pl-2 pr-2 mb-6">
                    <span className="text-md xl:text-lg">{experience.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{experience.title}</h3>
                  <p className="text-md md:text-lg mt-2">- {experience.description}</p>
                  <p className="text-md md:text-lg mt-2">- {experience.responsibility}</p>
                  <div className="flex flex-row flex-wrap gap-3 mt-4">
                    <a
                      href={experience.source_code}
                      target="blank"
                      className="text-sm w-24 h-8 border-2 border-teal-600 rounded-full flex justify-center items-center text-primary transition-color duration-300 hover:border-none hover:bg-teal-500 hover:text-white"
                    >
                      source code
                    </a>
                    {experience.view && (
                      <a
                        href={experience.view}
                        target="blank"
                        className="text-sm w-24 h-8 border-2 border-teal-600 rounded-full flex justify-center items-center text-primary transition-color duration-300 hover:border-none hover:bg-teal-500 hover:text-white"
                      >
                        view
                      </a>
                    )}
                  </div>
                  {experience.tools.length > 0 && (
                    <div className="mt-4 flex gap-3 flex-wrap">
                      {experience.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="w-24 h-8 bg-teal-600 rounded-full flex justify-center items-center text-white cursor-default"
                        >
                          <span className="text-sm">{tool}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
