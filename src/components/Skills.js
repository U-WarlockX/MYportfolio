import React from "react";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiFirebase, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={50} />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact size={50} />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs size={50} />, color: "#339933" },
  { name: "SQL", icon: <SiMysql size={50} />, color: "#4479A1" },
  { name: "Firebase", icon: <SiFirebase size={50} />, color: "#FFCA28" },
  { name: "Python", icon: <SiPython size={50} />, color: "#3776AB" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="skill-card flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="icon-container mb-4 p-4 rounded-full flex items-center justify-center"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="font-medium text-gray-800 text-lg">{skill.name}</span>
              
              {/* Skill level indicator */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div 
                  className="skill-progress-bar h-2.5 rounded-full"
                  style={{ 
                    width: `${75 + Math.random() * 25}%`,
                    backgroundColor: skill.color 
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;