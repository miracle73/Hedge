import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import Logo from "../assets/images/safeguardmedia-5.png";

export default function Contact() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport && !isVisible[index]) {
          setIsVisible((prev) => ({ ...prev, [index]: true }));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (subject: string) => {
    setFormData((prev) => ({ ...prev, subject }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
    .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
    .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
    .animate-pulse-soft { animation: pulse 2s ease-in-out infinite; }
    .animate-gradient { animation: gradient 15s ease infinite; }
    
    .gradient-text {
      background: linear-gradient(270deg, #0F2FA3, #0080FF, #00C4FF);
      background-size: 600% 600%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient 3s ease infinite;
    }
    
    .hero-parallax {
      transform: translateY(${scrollY * 0.3}px);
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(15, 47, 163, 0.15);
    }
    
    .button-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .button-hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    .button-hover:hover::before {
      left: 100%;
    }
    
    .button-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(15, 47, 163, 0.3);
    }

    .contact-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 250, 252, 0.95) 100%);
      backdrop-filter: blur(10px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .contact-info-card {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      position: relative;
      overflow: hidden;
    }
    
    .contact-info-card::before {
      content: '';
      position: absolute;
      bottom: -50px;
      right: -50px;
      width: 200px;
      height: 200px;
      background: rgba(15, 47, 163, 0.1);
      border-radius: 50%;
    }
    
    .contact-info-card::after {
      content: '';
      position: absolute;
      bottom: -100px;
      right: -100px;
      width: 300px;
      height: 300px;
      background: rgba(0, 196, 255, 0.05);
      border-radius: 50%;
    }
  `;

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <div className="flex w-full justify-center py-4 sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md">
        <header className="bg-gradient-to-r from-[#E9E9E9] to-[#83838300] border-b rounded-full border-gray-200 w-[80%] md:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                  <img
                    src={SecondLogo}
                    alt="logo"
                    className="max-lg:h-16 max-lg:w-16"
                  />
                </div>
              </div>
              <nav className="max-md:text-xs md:flex space-x-4  max-sm:space-x-2">
                <a
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
                <a
                  className="text-gray-900 hover:text-gray-700"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => {
                    navigate("/technology");
                  }}
                >
                  Technology
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 sm:hidden font-medium"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button
                  className="hidden sm:inline-flex bg-[#0F2FA3] hover:bg-[#0F2FA3]/90"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Contact Form Container */}
          {/* Contact Form Container */}
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto"
            data-animate
          >
            <div className="grid lg:grid-cols-5 min-h-[600px]">
              {/* Contact Form - Right Side (First on mobile, second on desktop) */}
              <div className="lg:col-span-3 order-1 lg:order-2 p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-[#0F2FA3] focus:ring-0"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-[#0F2FA3] focus:ring-0"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-[#0F2FA3] focus:ring-0"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="flex">
                        <select className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent focus:border-[#0F2FA3] focus:ring-0 mr-2">
                          <option>+1</option>
                          <option>+44</option>
                          <option>+91</option>
                        </select>
                        <Input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="1012 3456 789"
                          className="flex-1 border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-[#0F2FA3] focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Subject?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        "General Inquiry",
                        "Support Request",
                        "Partnership",
                        "Feedback",
                      ].map((subject) => (
                        <label
                          key={subject}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            checked={formData.subject === subject}
                            onChange={() => handleSubjectChange(subject)}
                            className="w-4 h-4 text-[#0F2FA3] focus:ring-[#0F2FA3]"
                          />
                          <span className="text-sm text-gray-700">
                            {subject}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message.."
                      rows={4}
                      className="w-full border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-[#0F2FA3] focus:ring-0 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6">
                    <Button
                      type="submit"
                      className="bg-[#0F2FA3] hover:bg-[#0080FF] text-white px-8 py-3 rounded-lg button-hover"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information - Left Side (Second on mobile, first on desktop) */}
              <div className="lg:col-span-2 order-2 lg:order-1 contact-info-card text-white p-8 lg:p-12 relative z-10">
                <div className="relative z-20 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      Contact Information
                    </h3>
                    <p className="text-gray-300 mb-8">
                      Say something, we are waiting to hear from you
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-5 h-5 text-white" />
                        <span>+1012 3456 789</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Mail className="w-5 h-5 text-white" />
                        <span>info@safeguardmedia.org</span>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-white mt-1" />
                        <div>
                          <p>132 Dartmouth Street Boston,</p>
                          <p>Massachusetts 02156 United States</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social media section moved to bottom */}
                  <div className="flex space-x-4 mt-12">
                    <div className="space-y-6">
                      <div className="flex justify-start gap-4 items-center">
                        {[
                          {
                            href: "https://www.instagram.com/safe_guard_media/",
                            icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                          },
                          {
                            href: "https://x.com/safeguardmedia1",
                            icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                          },
                          {
                            href: "https://www.linkedin.com/company/safeguardmedia/about/?viewAsMember=true",
                            icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                          },
                          {
                            href: "mailto:admin@safeguardmedia.org",
                            icon: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z",
                          },
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-white/10"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d={social.icon} />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={Logo}
                  alt="SafeguardMedia Logo"
                  className="w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300 text-lg">
                Solutions
              </h4>
              <ul className="space-y-3">
                {[
                  "AI Deepfake Detection",
                  "AI-Assisted Fact-Checking",
                  "Cybersecurity & Fraud Prevention",
                ].map((item, index) => (
                  <li key={index}>
                    <div className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300 text-lg">
                Legal & Trust
              </h4>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms Of Service",
                  "Compliance (GDPR, CCPA, NDPR)",
                ].map((item, index) => (
                  <li key={index}>
                    <div className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              © 2025 SafeguardMedia. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
