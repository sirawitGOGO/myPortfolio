import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  year: string;
  title: string;
  place: string;
  description: string;
  responsibility: string;
  additional: string;
  tools: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "November 2024 - Present",
    title: "Full Stack Developer",
    place: "Learning institute KMUTT",
    description:
      "Building websites based on requirements for the eLearning Forum Asia 2025 conference with the team.",
    responsibility: "Implementing both frontend and backend development and designing UX/UI for the website.",
    additional: "Ongoing backend process and planning to use Golang.",
    tools: ["React.js", "Typescript", "Tailwind CSS", "Golang"],
  },
  {
    year: "September 2024 - Present",
    title: "Full Stack Developer",
    description:
      "Building websites and databases based on the requirements of the 2B-KMUTT project for the 2B-KMUTT 19 Future Leader Camp with the team.",
    place: "Admission and recruitment office KMUTT",
    responsibility:
      "Handling both frontend and backend development in sending/checking labs and staff registration features.",
    additional: "",
    tools: ["Next.js", "Typescript" , "Tailwind CSS" , "Node.js" , "PostgreSQL" , "Prisma"],
  },
  {
    year: "Febuary 2024 - Augest 2024",
    title: "Front-End Developer",
    place: "Learning institute KMUTT",
    description: "Building Learning Institute websites based on requirements with using Wordpress.",
    responsibility: "Customized themes and templates using php to align with branding requirements, enhancing creativity and problem-solving skills.",
    additional: "",
    tools: ["Wordpress" , "php"],
  },
];

export const Experience: React.FC = () => {
  return (
    <div
      id="experiences"
      className="w-screen min-h-screen flex flex-col pt-36 justify-start items-center text-primary secondary font-titillium z-10 relative"
    >
      <div className="flex flex-col items-start w-2/3 mb-16">
        <h1 className="text-primary text-lg md:text-4xl font-bold">Experiences</h1>
        <span className="border border-teal-600 w-full"></span>
      </div>

      <div className="w-2/3">
        <ul className="relative">
          {experiences.map((experience, index) => (
            <motion.li
              key={index}
              className="mb-12 flex flex-col sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Year Circle */}
              <div className="w-72 h-10 bg-teal-600 rounded-full flex justify-center items-center text-white pl-2 pr-2 mb-6 sm:mb-0 sm:mr-8">
                <span className="text-xs xl:text-md">{experience.year}</span>
              </div>

              <div className="ml-0 sm:ml-8 w-full">
                {/* Title and Place */}
                <h3 className="text-xl font-semibold">{experience.place}</h3>
                <h3 className="text-lg">{experience.title}</h3>

                {/* Description and Responsibility */}
                <p className="text-md md:text-lg mt-2">- {experience.description}</p>
                <p className="text-md text-lg mt-2">- {experience.responsibility}</p>
                <p className="text-md text-md mt-2">{experience.additional}</p>

                {/* Tools */}
                {experience.tools.length > 0 && (
                  <div className="mt-4 flex gap-3 flex-wrap">
                    {experience.tools.map((tool, index) => (
                      <div
                        key={index}
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
