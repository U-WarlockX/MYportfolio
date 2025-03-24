import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ backgroundColor: "#0B0C10" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-bold mb-2 transition-colors duration-300"
              style={{ color: "#66FCF1" }}
            >
              Uvindu Hewage
            </h3>
            <p style={{ color: "#C5C6C7" }}>
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
                    className="transition-colors duration-300 hover:underline"
                    style={{ color: "#C5C6C7" }}
                    onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                    onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors duration-300 hover:underline"
                    style={{ color: "#C5C6C7" }}
                    onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                    onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="transition-colors duration-300 hover:underline"
                    style={{ color: "#C5C6C7" }}
                    onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                    onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors duration-300 hover:underline"
                    style={{ color: "#C5C6C7" }}
                    onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                    onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social links with animations */}
          <div>
            <h4 
              className="text-lg font-semibold mb-2 text-center md:text-left"
              style={{ color: "#66FCF1" }}
            >
              Connect
            </h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://github.com/yourprofile"
                className="transform hover:scale-110 transition-all duration-300"
                style={{ color: "#C5C6C7" }}
                onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                className="transform hover:scale-110 transition-all duration-300"
                style={{ color: "#C5C6C7" }}
                onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                className="transform hover:scale-110 transition-all duration-300"
                style={{ color: "#C5C6C7" }}
                onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="transform hover:scale-110 transition-all duration-300"
                style={{ color: "#C5C6C7" }}
                onMouseOver={(e) => e.target.style.color = "#66FCF1"}
                onMouseOut={(e) => e.target.style.color = "#C5C6C7"}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-sm text-center" style={{ borderColor: "#1F2833", color: "#45A29E" }}>
          <p>
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;