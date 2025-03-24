import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HewageDP from "../assets/HewageDP.jpeg"; // Import moved to top

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Start animation when top of the section reaches 75% from top of viewport
        toggleActions: "play none none none"
      }
    });

    // Image animation with glow effect
    tl.fromTo(
      imageRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        boxShadow: "0 0 0 rgba(102, 252, 241, 0)" 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power3.out",
        boxShadow: "0 0 30px rgba(102, 252, 241, 0.6)"
      }
    );

    // Text container fade in
    tl.fromTo(
      textContainerRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6" // Start slightly before previous animation ends
    );

    // Heading animation
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Paragraph animation
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Highlight animation
    tl.fromTo(
      highlightRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.inOut" },
      "-=0.3"
    );

    // Create a hover effect animation for the image
    const imageHover = imageRef.current;
    const handleMouseEnter = () => {
      gsap.to(imageHover, {
        boxShadow: "0 0 40px rgba(102, 252, 241, 0.9)",
        duration: 0.3
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(imageHover, {
        boxShadow: "0 0 30px rgba(102, 252, 241, 0.6)",
        duration: 0.3
      });
    };

    imageHover.addEventListener("mouseenter", handleMouseEnter);
    imageHover.addEventListener("mouseleave", handleMouseLeave);

    // Clean up animations on unmount
    return () => {
      if (imageHover) {
        imageHover.removeEventListener("mouseenter", handleMouseEnter);
        imageHover.removeEventListener("mouseleave", handleMouseLeave);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 flex flex-col md:flex-row items-center relative overflow-hidden" 
      style={{ backgroundColor: "#0B0C10", minHeight: "80vh" }}
    >
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-20 z-0" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #1F2833 1px, transparent 1px), linear-gradient(to bottom, #1F2833 1px, transparent 1px)",
          backgroundSize: "30px 30px" 
        }}
      ></div>
      
      {/* Animated glow spots */}
      <div 
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full z-0" 
        style={{ 
          backgroundColor: "#45A29E", 
          opacity: "0.1", 
          filter: "blur(80px)" 
        }}
      ></div>
      <div 
        className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full z-0" 
        style={{ 
          backgroundColor: "#66FCF1", 
          opacity: "0.08", 
          filter: "blur(60px)" 
        }}
      ></div>

      {/* Image */}
      <div className="md:w-1/3 p-8 relative z-10">
        <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64">
          <div 
            className="absolute inset-0 rounded-full animate-pulse z-0" 
            style={{ 
              background: "linear-gradient(45deg, rgba(102, 252, 241, 0.2), rgba(69, 162, 158, 0.2))",
              filter: "blur(15px)",
              transform: "scale(1.1)"
            }}
          ></div>
          <img
            ref={imageRef}
            src={HewageDP}
            alt="Uvindu"
            className="rounded-full w-full h-full object-cover relative z-10"
            style={{ 
              border: "3px solid #45A29E",
              opacity: 0 // Start invisible for animation
            }}
          />
          <div 
            className="absolute -inset-1 rounded-full z-0 opacity-75" 
            style={{ 
              background: "linear-gradient(45deg, #66FCF1, transparent, #45A29E)",
              filter: "blur(8px)"
            }}
          ></div>
        </div>
      </div>

      {/* Text */}
      <div
        ref={textContainerRef}
        className="md:w-2/3 p-8 flex flex-col justify-center items-start relative z-10"
        style={{ opacity: 0 }} // Start invisible for animation
      >
        <div className="relative mb-8">
          <h2 
            ref={headingRef}
            className="text-6xl font-extrabold mb-2 relative z-10"
            style={{ color: "#C5C6C7" }}
          >
            About Me
          </h2>
          <div 
            ref={highlightRef}
            className="absolute bottom-0 left-0 h-1 z-0" 
            style={{ backgroundColor: "#66FCF1", width: "0%" }}
          ></div>
        </div>
        
        <p 
          ref={paragraphRef}
          className="text-lg md:text-xl relative z-10 mb-6"
          style={{ color: "#C5C6C7", opacity: 0.9, lineHeight: "1.8" }}
        >
          A dedicated software engineering student at <span style={{ color: "#66FCF1" }}>SLIIT</span>, passionate about building 
          scalable web applications. Skilled in <span style={{ color: "#66FCF1" }}>JavaScript</span>, 
          <span style={{ color: "#66FCF1" }}> React</span>, and backend technologies. Always eager to learn new things and 
          enhance my skills through hands-on projects.
        </p>
        
        {/* Tech skills section */}
        <div className="mt-4">
          <h3 
            className="text-xl font-bold mb-3"
            style={{ color: "#45A29E" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Node.js", "MongoDB", "Express"].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 rounded-md text-sm font-medium"
                style={{ 
                  backgroundColor: "#1F2833", 
                  color: "#66FCF1",
                  border: "1px solid #45A29E",
                  boxShadow: "0 0 8px rgba(102, 252, 241, 0.2)"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Removed the decorative HTML sections that were showing in the background */}
    </section>
  );
};

export default About;