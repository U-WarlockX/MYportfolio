import React from "react";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiFirebase, SiPython } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={50} />, color: "#66FCF1" },
  { name: "React", icon: <FaReact size={50} />, color: "#66FCF1" },
  { name: "Node.js", icon: <FaNodeJs size={50} />, color: "#66FCF1" },
  { name: "SQL", icon: <SiMysql size={50} />, color: "#66FCF1" },
  { name: "Firebase", icon: <SiFirebase size={50} />, color: "#66FCF1" },
  { name: "Python", icon: <SiPython size={50} />, color: "#66FCF1" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: "#0B0C10" }}>
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
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
                    width: `${75 + Math.floor(Math.random() * 25)}%`,
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