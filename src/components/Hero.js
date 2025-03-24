import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the GSAP TextPlugin for text animation
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const spinnerRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Create timeline for sequenced animations
    const tl = gsap.timeline();
    
    // Start with the loading spinner visible
    setTimeout(() => {
      // Hide the spinner and trigger the animations
      tl.to(spinnerRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => setIsLoaded(true)
      })
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        titleRef.current,
        { text: "" },
        {
          text: "Hi, I'm Uvindu",
          duration: 2,
          ease: "power2.out",
        }
      )
      .fromTo(
        subtitleRef.current,
        { text: "", opacity: 0 },
        {
          text: "Full-Stack Developer & Tech Enthusiast",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.5"
      );
      
      // Create a separate timeline for the recurring glitch effect
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
      
      glitchTl.to(titleRef.current, {
        duration: 0.1,
        textShadow: "2px 0 #66FCF1, -2px 0 #45A29E",
        ease: "none",
      })
      .to(titleRef.current, {
        duration: 0.1,
        textShadow: "0 0 5px #66FCF1, 0 0 10px #66FCF1",
        ease: "none",
      })
      .to(titleRef.current, {
        duration: 0.1,
        textShadow: "none",
        ease: "none",
      });
    }, 1000);
    
    // Clean up animations on unmount
    return () => {
      tl.kill();
      gsap.killTweensOf(titleRef.current);
    };
  }, []);

  return (
    <section 
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden" 
      style={{ backgroundColor: "#0B0C10" }}
    >
      {/* Background elements - circuit pattern overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #1F2833 1px, transparent 1px), linear-gradient(to bottom, #1F2833 1px, transparent 1px)",
             backgroundSize: "40px 40px" 
           }}>
      </div>
      
      {/* Animated glowing accent elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10" 
           style={{ backgroundColor: "#45A29E", filter: "blur(50px)" }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full opacity-15" 
           style={{ backgroundColor: "#66FCF1", filter: "blur(60px)" }}></div>
      
      {/* Loading Spinner */}
      <div
        ref={spinnerRef}
        className="absolute flex items-center justify-center opacity-100"
      >
        <div className="w-16 h-16 border-t-4 border-solid rounded-full animate-spin" 
             style={{ borderColor: "#66FCF1" }}></div>
      </div>

      {/* Content Container */}
      <div 
        ref={containerRef} 
        className="relative z-10 text-center px-4 opacity-0"
      >
        {/* Main text with cursor effect */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold mb-4 relative"
          aria-live={isLoaded ? "polite" : "off"}
          style={{ color: "#C5C6C7" }}
        >
          Hi, I'm Uvindu
          <span className="inline-block w-1 h-12 ml-1 animate-pulse" style={{ backgroundColor: "#66FCF1" }}></span>
        </h1>
        
        {/* Subtitle */}
        <h2
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8"
          style={{ color: "#45A29E" }}
        ></h2>
        
        {/* CTA Button */}
        <button
          ref={buttonRef}
          className="px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 border"
          style={{ 
            backgroundColor: "#1F2833", 
            color: "#66FCF1",
            borderColor: "#66FCF1",
            boxShadow: "0 0 10px rgba(102, 252, 241, 0.3)"
          }}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              backgroundColor: "#66FCF1",
              color: "#0B0C10",
              duration: 0.3
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              backgroundColor: "#1F2833",
              color: "#66FCF1",
              duration: 0.3
            });
          }}
        >
          Explore My Work
        </button>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="animate-bounce" style={{ color: "#C5C6C7" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;