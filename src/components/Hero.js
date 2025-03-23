import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the GSAP TextPlugin for text animation
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const titleRef = useRef(null);
  const spinnerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start with the loading spinner visible
    setTimeout(() => {
      // Hide the spinner and trigger the typewriting effect smoothly
      gsap.to(spinnerRef.current, {
        opacity: 0, // Fade out the spinner
        duration: 1, // Duration of fade-out
        onComplete: () => {
          setIsLoaded(true); // You can use this state to conditionally render something if needed

          // Continuous typewriting effect with pause between each repetition
          gsap.fromTo(
            titleRef.current,
            {
              text: "", // Initial text is empty
            },
            {
              text: "Hi, I'm Uvindu", // The text to animate
              duration: 3, // Duration for each cycle (3 seconds)
              ease: "power2.out", // Easing for smooth animation
              repeat: -1, // Repeat indefinitely
              repeatDelay: 1, // Delay between each repetition (1 second)
            }
          );
        },
      });
    }, 1000); // Delay for loading spinner before the animation starts
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
      {/* Loading Spinner */}
      <div
        ref={spinnerRef}
        className="absolute flex items-center justify-center opacity-100"
      >
        <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
      </div>

      {/* Text */}
      <h1
        ref={titleRef}
        className="text-6xl font-bold absolute text-center"
        aria-live={isLoaded ? "polite" : "off"} // Use aria-live only once loading is done
      >
        Hi, I'm Uvindu {/* Default content for accessibility */}
      </h1>
    </section>
  );
};

export default Hero;
