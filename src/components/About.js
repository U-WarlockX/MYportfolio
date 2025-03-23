import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import image correctly
import HewageDP from "../assets/HewageDP.jpeg"; // Correct import from src/assets

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 }, // Initial state
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Animated state
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center flex flex-col md:flex-row items-center">
      {/* Image */}
      <div className="md:w-1/3 p-4">
        <img
          src={HewageDP} // Use imported image path
          alt="Uvindu"
          className="rounded-full w-48 h-48 object-cover mx-auto shadow-2xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className="md:w-2/3 p-4 mt-6 md:mt-0 flex flex-col justify-center items-start"
      >
        <h2 className="text-6xl font-extrabold text-white mb-4 max-w-md md:max-w-full text-shadow-lg">
          About Me
        </h2>
        <p className="text-lg text-white opacity-90 max-w-3xl md:max-w-full text-center md:text-left mt-4 md:mt-6">
          A dedicated software engineering student at SLIIT, passionate about building scalable web applications. Skilled in JavaScript,
          React, and backend technologies. Always eager to learn new things and enhance my skills through hands-on projects.
        </p>
      </div>
    </section>
  );
};

export default About;
