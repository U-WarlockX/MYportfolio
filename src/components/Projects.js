import React, { useEffect } from "react";

const projects = [
  { 
    name: "Vehicle Rental System", 
    description: "A comprehensive platform for managing vehicle rentals with user authentication, booking management, and payment processing.", 
    link: "https://github.com/U-WarlockX/Vehicle-rental-system-",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Sustainable Community Management", 
    description: "An eco-friendly community management system that helps track resource usage, organize events, and promote sustainable practices.", 
    link: "https://github.com/samidisjg/Cleansy",
    image: "https://plus.unsplash.com/premium_photo-1726736475750-9579e00eb4d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach(el => observer.observe(el));

    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0B0C10" }}>
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
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#66FCF1" }}>Projects</h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-item opacity-0 transition-all duration-1000 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(102, 252, 241, 0.2)" }}>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#66FCF1" }}>{project.name}</h3>
                <p className="mb-6" style={{ color: "#C5C6C7" }}>{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block py-2 px-6 rounded-full transition-colors duration-300"
                  style={{ 
                    backgroundColor: "#45A29E", 
                    color: "#0B0C10"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#66FCF1" }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#45A29E" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
