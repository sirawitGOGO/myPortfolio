import React, { useRef } from "react";
import { Html5Outlined, JavaScriptOutlined, GithubOutlined, DatabaseOutlined, JavaOutlined, PythonOutlined, LinuxOutlined, LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { FaCss3Alt, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { MdOutlineDataObject } from "react-icons/md";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";

export const AboutMe: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML", icon: <Html5Outlined style={{ fontSize: "5rem", color: "#E34C26" }} /> },
    { name: "CSS", icon: <FaCss3Alt style={{ fontSize: "5rem", color: "#264DE4" }} /> },
    { name: "Java", icon: <JavaOutlined style={{ fontSize: "5rem", color: "#F7DF1E" }} /> },
    { name: "Python", icon: <PythonOutlined style={{ fontSize: "5rem", color: "#007acc" }} /> },
    { name: "Javascript", icon: <JavaScriptOutlined style={{ fontSize: "5rem", color: "#F7DF1E" }} /> },
    { name: "Tpyescript", icon: <BiLogoTypescript style={{ fontSize: "5rem", color: "#007acc" }} /> },
    { name: "React.js", icon: <FaReact style={{ fontSize: "5rem", color: "#00BFFF" }} /> },
    { name: "Next.js", icon: <RiNextjsFill style={{ fontSize: "5rem" }} /> },
    { name: "Node.js", icon: <FaNodeJs style={{ fontSize: "5rem", color: "#68A063" }} /> },
    { name: "Express.js", icon: <SiExpress style={{ fontSize: "5rem", color: "#68A063" }} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss style={{ fontSize: "5rem", color: "#00B2E2" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ fontSize: "5rem" }} /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql style={{ fontSize: "5rem", color: "#00A3E0" }} /> },
    { name: "MongoDB", icon: <SiMongodb style={{ fontSize: "5rem", color: "#4CAF50" }} /> },
    { name: "SQL", icon: <DatabaseOutlined style={{ fontSize: "5rem", color: "#0064A5" }} /> },
    { name: "NoSQL", icon: <MdOutlineDataObject style={{ fontSize: "5rem", color: "#0064A5" }} /> },
    { name: "Linux", icon: <LinuxOutlined style={{ fontSize: "5rem" }} /> },
    { name: "Figma", icon: <FaFigma style={{ fontSize: "5rem" }} /> },
    { name: "GitHub", icon: <GithubOutlined style={{ fontSize: "5rem", color: "#333" }} /> },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div id="aboutme" className="w-screen min-h-screen flex flex-col pt-36 justify-start items-center text-primary secondary font-titillium z-10 relative">
      <div className="flex flex-col items-start w-2/3 mb-16">
        <h1 className="text-primary text-lg md:text-4xl font-bold">About me</h1>
        <span className="border border-teal-600 w-full"></span>
        <motion.p 
          className="text-sm md:text-lg pt-3 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A passionate Computer Engineering student with experience in both front-end and back-end development. Proficient in modern frameworks, tools, and database technologies. Adept at designing and developing efficient systems with a strong focus on user experience.
        </motion.p>
      </div>
      <div className="flex flex-col items-start w-2/3 mb-16">
        <h1 className="text-primary text-lg md:text-4xl font-bold">Skills</h1>
        <span className="border border-teal-600 w-full mb-4"></span>
        <div className="inline w-full">
        </div>
        <div className="flex justify-center w-full">
            {/* Skill cards with Framer Motion */}
            <div className="w-3/4 relative">
                <motion.div
                className="flex items-center gap-6 overflow-hidden"
                ref={scrollContainerRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                >
                {[...skills].map((skill, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center justify-center secondary rounded-lg p-3 w-32 h-32"
                    >
                    {skill.icon}
                    <div className="mt-1 text-sm font-semibold">{skill.name}</div>
                    </div>
                ))}
                </motion.div>
                <motion.button
                    onClick={() => handleScroll("left")}
                    className="absolute end-full top-1/2 transform -translate-y-1/2 p-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <LeftCircleFilled className="transition-color duration-300 hover:text-[#76ABAE] active:opacity-50" style={{ fontSize: "3rem" }} />
                </motion.button>
                <motion.button
                    onClick={() => handleScroll("right")}
                    className="absolute start-full top-1/2 transform -translate-y-1/2 p-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <RightCircleFilled className="transition-color duration-300 hover:text-[#76ABAE] active:opacity-50" style={{ fontSize: "3rem" }} />
                </motion.button>

            </div>
        </div>

      </div>
      <div className="flex flex-col items-start w-2/3 mb-16">
        <h1 className="text-primary text-lg md:text-4xl font-bold">Education</h1>
        <span className="border border-teal-600 w-full mb-4"></span>
        <motion.h3 
          className="text-sm md:text-lg pt-3 items-center font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          King Mongkut’s University of Technology Thonburi.
        </motion.h3>
        <motion.p 
          className="text-sm md:text-lg items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
            Bachelor’s Degree in Computer Engineering
        </motion.p>
      </div>

    </div>
  );
};
