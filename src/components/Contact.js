import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    // Fade in effect when component mounts
    setOpacity(1);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  // Color palette variables
  const colors = {
    darkest: "#0B0C10",    // Very dark blue/black
    dark: "#1F2833",       // Dark blue-gray
    light: "#C5C6C7",      // Light gray
    accent: "#66FCF1",     // Bright teal
    accentDark: "#45A29E"  // Muted teal
  };

  return (
    <section 
      id="contact" 
      className="py-20" 
      style={{ 
        background: `linear-gradient(to bottom, ${colors.dark}, ${colors.darkest})`,
        opacity: opacity,
        transition: "opacity 1.5s ease-in-out"
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-block" style={{ color: colors.accent }}>
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 transform origin-left transition-all duration-300 hover:scale-x-110" style={{ backgroundColor: colors.accent }}></span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: colors.light }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div 
            className="p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" 
            style={{ 
              backgroundColor: colors.darkest,
              boxShadow: `0 10px 15px -3px rgba(102, 252, 241, 0.2)`,
              opacity: opacity,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "0.2s"
            }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.accent }}>Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(102, 252, 241, 0.2)', color: colors.accent }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.light }}>Email</p>
                  <a 
                    href="mailto:hewageuvindu@gmail.com" 
                    className="hover:underline transition-all duration-300"
                    style={{ color: colors.accent }}
                  >
                    hewageuvindu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(102, 252, 241, 0.2)', color: colors.accent }}>
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.light }}>LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/uvindu-udakara-magedara-hewage" 
                    className="hover:underline transition-all duration-300"
                    style={{ color: colors.accent }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uvindu Udakara Magedara Hewage
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(102, 252, 241, 0.2)', color: colors.accent }}>
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.light }}>GitHub</p>
                  <a 
                    href="https://github.com/U-WarlockX" 
                    className="hover:underline transition-all duration-300"
                    style={{ color: colors.accent }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    U-WarlockX
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(102, 252, 241, 0.2)', color: colors.accent }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: colors.light }}>Phone</p>
                  <p style={{ color: colors.light }}>Available upon request</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(197, 198, 199, 0.2)' }}>
              <h4 className="font-medium mb-4" style={{ color: colors.light }}>Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/U-WarlockX" 
                  className="p-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: 'rgba(197, 198, 199, 0.2)', color: colors.light }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = colors.darkest;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(197, 198, 199, 0.2)';
                    e.currentTarget.style.color = colors.light;
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/uvindu-udakara-magedara-hewage" 
                  className="p-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: 'rgba(197, 198, 199, 0.2)', color: colors.light }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = colors.darkest;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(197, 198, 199, 0.2)';
                    e.currentTarget.style.color = colors.light;
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:hewageuvindu@gmail.com" 
                  className="p-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: 'rgba(197, 198, 199, 0.2)', color: colors.light }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = colors.darkest;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(197, 198, 199, 0.2)';
                    e.currentTarget.style.color = colors.light;
                  }}
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className="p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" 
            style={{ 
              backgroundColor: colors.darkest,
              boxShadow: `0 10px 15px -3px rgba(102, 252, 241, 0.2)`,
              opacity: opacity,
              transition: "all 0.5s ease-in-out",
              transitionDelay: "0.4s"
            }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.accent }}>Send a Message</h3>
            
            {submitted ? (
              <div className="border-l-4 p-4 mb-6 rounded animate-fade-in" style={{ backgroundColor: 'rgba(102, 252, 241, 0.1)', borderColor: colors.accent, color: colors.accent }}>
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: colors.light }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.dark, 
                    color: colors.light,
                    borderColor: 'rgba(197, 198, 199, 0.3)'
                  }}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: colors.light }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.dark, 
                    color: colors.light,
                    borderColor: 'rgba(197, 198, 199, 0.3)'
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: colors.light }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.dark, 
                    color: colors.light,
                    borderColor: 'rgba(197, 198, 199, 0.3)'
                  }}
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                style={{ 
                  backgroundColor: colors.accentDark,
                  color: colors.darkest
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = colors.accent;
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = colors.accentDark;
                }}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;