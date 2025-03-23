import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors duration-300">
              Uvindu Hewage
            </h3>
            <p className="text-gray-400">
              © {currentYear} - All Rights Reserved
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <nav>
              <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social links with animations */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-center md:text-left">Connect</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://github.com/yourprofile" // Replace with your actual GitHub URL
                className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile" // Replace with your actual LinkedIn URL
                className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourprofile" // Replace with your actual Twitter URL
                className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:youremail@example.com" // Replace with your actual email address
                className="transform hover:scale-110 hover:text-blue-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-sm text-gray-500 text-center">
          <p>
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
