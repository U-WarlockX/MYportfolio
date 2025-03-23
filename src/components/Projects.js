import React, { useEffect } from "react";

const projects = [
  { 
    name: "Vehicle Rental System", 
    description: "A comprehensive platform for managing vehicle rentals with user authentication, booking management, and payment processing.", 
    link: "https://github.com/U-WarlockX",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Sustainable Community Management", 
    description: "An eco-friendly community management system that helps track resource usage, organize events, and promote sustainable practices.", 
    link: "https://github.com/U-WarlockX",
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-item opacity-0 transition-all duration-1000 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
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
    </section>
  );
};

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Projects;