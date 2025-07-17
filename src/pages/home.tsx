import React, { useEffect, useState } from "react";
import FirstImage from "../assets/images/FirstImage-3.png";
import Logo from "../assets/images/safeguardmedia-5.png";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Download } from "lucide-react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  index: number;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which elements are in viewport
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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    delay = 0,
    className = "",
    index,
  }) => (
    <div
      data-animate
      className={`transition-all duration-1000 ease-out ${
        isVisible[index]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

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
  `;

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <div className="flex w-full justify-center py-4">
        <header className="bg-gradient-to-r from-[#E9E9E9] to-[#83838300] border-b  rounded-full border-gray-200 w-[80%] md:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-24 h-20 rounded-full flex items-center justify-center">
                  <div className="logo">
                    <img
                      src={SecondLogo}
                      alt="logo"
                      className="max-lg:h-16 max-lg:w-16"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="max-md:text-xs md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Technology
                </a>
              </nav>

              {/* Contact Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <Button className="hidden sm:inline-flex bg-[#0F2FA3]">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 mt-2 md:mt-10">
        <div className="rounded-2xl bg-gradient-to-br from-[#E7EAEE] via-[#F0F3F7] to-[#E7EAEE] p-6 lg:p-12 relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 animate-gradient"></div>

          <div className="text-center mb-12 relative z-10">
            {/* Badge */}
            <div className="mb-6">
              <Badge
                variant="secondary"
                className="bg-[#0F2FA30D] rounded-full border bg-gradient-to-r from-[#0F2FA3] to-[#0080FF] bg-clip-text text-transparent text-blue-700 border-[#0F2FA3] px-4 py-2"
              >
                AI-Powered Media Verification Platform
              </Badge>
            </div>

            {/* Headline */}
            <AnimatedSection delay={400} index={1}>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Restoring Trust in a{" "}
                <span className="gradient-text">Digitally Distorted</span> World
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection delay={600} index={2}>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                A unified platform for detecting AI-generated and manipulated
                media in real-time. Powered by cutting-edge AI technology.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={800} index={3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0F2FA3] button-hover text-lg px-8 py-4"
                >
                  Request Early Access
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto group hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-4"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Image */}
          <AnimatedSection delay={1000} index={4}>
            <div className="mb-8 lg:-mb-8 flex justify-center items-center">
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={FirstImage}
                  alt="Forensic analysis of tampered media with verification overlays"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom Content Sections */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {/* Why It Matters */}
            <AnimatedSection delay={1200} index={5}>
              <div className="bg-gradient-to-br from-[#0F2FA333] to-[#0F2FA320] p-6 lg:p-8 rounded-2xl card-hover backdrop-blur-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Why Media Integrity Matters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Synthetic media—from deepfakes to low-tech video edits—is
                  spreading faster than the truth. Without powerful tools to
                  validate what we see and hear, misinformation thrives and
                  public trust collapses.
                </p>
              </div>
            </AnimatedSection>

            {/* What We Do */}
            <AnimatedSection delay={1400} index={6}>
              <div className="bg-gradient-to-br from-[#F4F4F4] to-[#FFFFFF] p-6 lg:p-8 rounded-2xl border border-gray-200 card-hover backdrop-blur-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  AI-Powered Media Verification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  SafeguardMedia provides real-time detection of manipulated
                  images, video, and audio. Our platform integrates cutting-edge
                  detection models, fact-checking APIs, and metadata analysis to
                  enable users to instantly assess content credibility.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Capabilities
              </h2>
              <p className="text-[#FCFCFC] text-lg max-w-4xl mx-auto leading-relaxed">
                Our comprehensive platform combines advanced AI detection
                models, forensic analysis tools, and real-time verification
                systems to combat misinformation at its source.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                {
                  title: "Deepfake Detection",
                  description:
                    "Analyze image, video, and audio content for AI-generated manipulations using CNN and Whisper-based models.",
                  delay: 400,
                },
                {
                  title: "Cheapfake/Shallowfake Detection",
                  description:
                    "Detect basic edits, such as speed changes, splicing, or cropping, using OpenCV and FFmpeg.",
                  delay: 600,
                },
                {
                  title: "Metadata & Geolocation Analysis",
                  description:
                    "Reveal hidden metadata and map geolocation to verify context and source.",
                  delay: 800,
                },
                {
                  title: "Fact-Check Integration",
                  description:
                    "Automatically compare claims with public databases, such as Google Fact Check Tools and ClaimReview schema.",
                  delay: 1000,
                },
                {
                  title: "Risk Scoring Engine",
                  description:
                    "Assign a credibility score to media based on forensic signals, context, and third-party validation.",
                  delay: 1200,
                },
                {
                  title: "Visual Reporting",
                  description:
                    "Generate clear, shareable reports in PDF or web format to support decision-making and public transparency.",
                  delay: 1400,
                },
              ].map((capability, index) => (
                <AnimatedSection
                  delay={capability.delay}
                  index={8 + index}
                  key={index}
                >
                  <div className="bg-white/95 backdrop-blur-sm p-6 lg:p-8 rounded-2xl text-center card-hover group h-full flex flex-col justify-between">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action */}
            {/* <AnimatedSection delay={1600} index={14}> */}
            <div className="text-center mb-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                See how our AI-powered forensics platform is redefining
                <br className="block" />
                {""}the future of truth in digital media.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="outline"
                  className="bg-white text-gray-900 hover:bg-gray-100 button-hover text-lg px-8 py-4"
                >
                  Download Overview
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* </AnimatedSection> */}

            {/* Browser Extension Section */}
            {/* <AnimatedSection delay={1800} index={15}> */}
            <div className="bg-gray-700 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Verify What You See. As You See It.
                </h3>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg">
                  Coming soon: A browser extension that flags manipulated media
                  in real-time while you browse online content. Stay informed
                  without leaving the page.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white button-hover text-lg px-8 py-4">
                  Sign Up for Beta Access
                </Button>
              </div>
            </div>
            {/* </AnimatedSection> */}
          </div>
        </div>
      </main>

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
                  className="w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110 animate-pulse-soft"
                />
              </div>
              {/* <div className="flex justify-start gap-4 items-center">
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
                </div> */}
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
