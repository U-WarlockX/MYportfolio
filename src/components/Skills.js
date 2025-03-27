import React from "react";
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiFirebase, SiPython, SiMongodb, SiR, SiGithub, SiTailwindcss} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={50} />, color: "#66FCF1", level: 70 },
  { name: "React", icon: <FaReact size={50} />, color: "#66FCF1", level: 85 },
  { name: "Node.js", icon: <FaNodeJs size={50} />, color: "#66FCF1", level: 80 },
  { name: "SQL", icon: <SiMysql size={50} />, color: "#66FCF1", level: 75 },
  { name: "Firebase", icon: <SiFirebase size={50} />, color: "#66FCF1", level: 60 },
  { name: "Python", icon: <SiPython size={50} />, color: "#66FCF1", level: 85 },
  { name: "MongoDB", icon: <SiMongodb size={50} />, color: "#66FCF1", level: 75 },
  { name: "HTML", icon: <FaHtml5 size={50} />, color: "#66FCF1", level: 95 },
  { name: "CSS", icon: <FaCss3Alt size={50} />, color: "#66FCF1", level: 90 },
  { name: "R", icon: <SiR size={50} />, color: "#66FCF1", level: 50 },
  { name: "Git", icon: <SiGithub size={50} />, color: "#66FCF1", level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} />, color: "#66FCF1", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0B0C10"}}>

      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #1F2833 1px, transparent 1px), linear-gradient(to bottom, #1F2833 1px, transparent 1px)", 
          backgroundSize: "30px 30px"
        }}
      ></div>

      <div
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full z-0"
        style={{ backgroundColor: "#45A29E", opacity: "0.1", filter: "blur(80px)" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full z-0"
        style={{ backgroundColor: "#66FCF1", opacity: "0.08", filter: "blur(60px)" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#C5C6C7" }}>Technical Skills</h2>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: "#66FCF1" }}></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: "#1F2833",
                transform: "scale(1)",
                transition: "transform 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div 
                className="mb-4 p-4 rounded-full flex items-center justify-center"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="font-medium text-lg" style={{ color: "#C5C6C7" }}>{skill.name}</span>
              
              {/* Skill level indicator */}
              <div className="w-full rounded-full h-2.5 mt-3" style={{ backgroundColor: "#0B0C10" }}>
                <div 
                  className="h-2.5 rounded-full"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: "#45A29E" 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
