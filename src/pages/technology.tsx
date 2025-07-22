import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Brain,
  Search,
  CheckCircle,
  BarChart3,
  Globe,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import TechnologyImg from "../assets/images/technology2.png";
import { ChevronDown } from "lucide-react";
import Logo from "../assets/images/safeguardmedia-5.png";
import ImageExt from "../assets/images/browserExt.png";

export default function Technology() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const [expandedTech, setExpandedTech] = useState<Record<number, boolean>>({});

  const toggleTech = (index: number) => {
    setExpandedTech((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

    .tech-grid-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 250, 252, 0.95) 100%);
      backdrop-filter: blur(10px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .tech-grid-card:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 0 25px 50px rgba(15, 47, 163, 0.2);
    }

    .stat-counter {
      background: linear-gradient(135deg, rgba(15, 47, 163, 0.1) 0%, rgba(0, 196, 255, 0.1) 100%);
    }
  `;

  const technologies = [
    {
      title: "Multimodal AI Detection",
      description:
        "We use multiple AI models to detect manipulation across media types",
      details: [
        "Visual Deepfake Detection: GAN and CNN models identify face swaps, frame splicing, and image tampering",
        "Synthetic Audio Detection: Whisper-based models analyze waveform anomalies, phonetic inconsistencies, and AI-cloned voices",
        "Cheapfake Detection: OpenCV and FFmpeg pipelines detect low-tech edits like speed alterations, frame dropping, and inserted text/audio",
      ],
      icon: Brain,
      gradient: "from-[#0F2FA3] to-[#0080FF]",
      delay: 200,
    },
    {
      title: "Metadata & Geolocation Analysis",
      description:
        "Images and videos contain hidden metadata that reveals critical information",
      details: [
        "Camera model and firmware identification",
        "Timestamp and GPS coordinate verification",
        "Editing software detection and analysis",
        "Metadata spoofing and alteration detection using ExifTool and Google Maps API",
      ],
      icon: Search,
      gradient: "from-[#0080FF] to-[#00C4FF]",
      delay: 400,
    },
    {
      title: "Fact-Check API Integration",
      description:
        "Real-time claim verification using trusted databases and sources",
      details: [
        "Google Fact Check Tools API integration",
        "ClaimReview Schema implementation",
        "Trusted sources: Snopes, PolitiFact, and Full Fact",
        "Cross-reference claims in videos and text with existing fact-check records",
      ],
      icon: CheckCircle,
      gradient: "from-[#00C4FF] to-[#0F2FA3]",
      delay: 600,
    },
    {
      title: "Media Risk Scoring Engine",
      description:
        "Proprietary scoring algorithm that evaluates content credibility",
      details: [
        "AI detection confidence analysis",
        "Metadata trustworthiness assessment",
        "Claim verification status tracking",
        "Virality potential based on contextual data",
        "Intuitive credibility score visualization",
      ],
      icon: BarChart3,
      gradient: "from-[#7C3AED] to-[#A78BFA]",
      delay: 800,
    },
    {
      title: "Cloud-Native Architecture",
      description: "Built on Google Cloud Platform with Azure compatibility",
      details: [
        "Vertex AI for scalable model training & deployment",
        "Cloud Functions for real-time media processing",
        "Firebase for user authentication and media storage",
        "End-to-end encryption and privacy compliance (GDPR + NDPR roadmap)",
        "Global scalability with secure media handling",
      ],
      icon: Globe,
      gradient: "from-[#059669] to-[#34D399]",
      delay: 1000,
    },
    {
      title: "Browser Extension",
      description: "Real-time media verification while browsing (Coming Soon)",
      details: [
        "Chrome-based extension for real-time scanning",
        "Flag suspicious images, videos, and claims on social platforms",
        "Display integrity scores and metadata context",
        "Linked fact-checks directly in social media feeds",
        "Seamless integration with existing browsing experience",
      ],
      icon: Download,
      gradient: "from-[#EA580C] to-[#FB923C]",
      delay: 1200,
    },
  ];

  const stats = [
    {
      number: "90%",
      label: "of deepfake videos target individuals maliciously",
      source: "Deeptrace Labs",
    },
    {
      number: "64%",
      label: "of adults believe altered videos make truth harder to determine",
      source: "Pew Research Center",
    },
    {
      number: "80%",
      label: "of viral misinformation spreads without source verification",
      source: "Reuters Institute 2022",
    },
    {
      number: "6 months",
      label: "doubling period for deepfake video creation",
      source: "Deeptrace Labs",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <div className="flex w-full justify-center py-4 sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md">
        <header className="bg-gradient-to-r from-[#E9E9E9] to-[#83838300] border-b rounded-full border-gray-200 w-[80%] md:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="w-20 h-20 max-sm:w-12 max-sm:h-12  rounded-full flex items-center justify-center">
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
                  className="text-gray-900 hover:text-gray-700 "
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 font-medium"
                  onClick={() => {
                    navigate("/technology");
                  }}
                >
                  Technology
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 sm:hidden "
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

      {/* Hero Section */}

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 mt-2 md:mt-10">
        <div className="rounded-2xl p-6 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0  animate-gradient"></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Image */}
              <div className="flex-1 max-w-lg lg:max-w-none">
                <div className="relative  overflow-hidden shadow-2xl">
                  <img
                    src={TechnologyImg}
                    alt="AI-powered media verification technology dashboard"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Right Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-end font-bold text-gray-900 mb-6 leading-tight">
                  Powering the Fight Against{" "}
                  <span className="gradient-text">Manipulated Media</span> with
                  AI
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 text-end mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  SafeguardMedia combines deepfake detection, metadata
                  forensics, and scalable cloud infrastructure to deliver
                  real-time media verification for a trust-first digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Why It Matters - Statistics Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why It Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI-generated disinformation is no longer a future threat, it's a
              current crisis, according to the World Economic Forum's 2023
              Global Risks Report, "widespread misinformation and
              disinformation" ranks as the most severe global risk over the next
              two years.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16 max-w-6xl mx-auto border-l border-r border-gray-200">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 md:p-6 lg:p-8 text-center min-h-[200px] md:min-h-[220px] flex flex-col justify-center ${
                  index !== stats.length - 1 ? "border-r border-gray-200" : ""
                } ${index !== 0 ? "md:border-l md:border-gray-200" : ""}`}
              >
                <div
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3`}
                >
                  {stat.number}
                </div>
                <p className="text-gray-700 font-medium text-sm md:text-base mb-2 leading-relaxed">
                  {stat.label}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  — {stat.source}
                </p>
              </div>
            ))}
          </div>

          {/* What We Do */}

          <div className="bg-gradient-to-br from-[#0F2FA333] to-[#0F2FA320] p-8 lg:p-12 rounded-2xl text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              What We Do
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              SafeguardMedia is building an AI-powered content verification
              stack that detects synthetic media, including deepfakes,
              shallowfakes, and AI-generated audio, while uncovering hidden
              metadata and linking suspicious content to verified fact-check
              databases. Our goal is to equip users to understand media
              trustworthiness instantly, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Comprehensive Detection Across Every Attack Surface
            </h2>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Reality Defender provides multimodal deepfake detection protecting
              critical communication channels from AI-generated fraud and
              impersonation attempts.
            </p>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mt-4">
              Our technology continuously evolves to detect synthetic audio,
              video, and images in real-time, enabling your organization to
              maintain security at the speed of modern communication.
            </p>
          </div>

          {/* Technologies Accordion */}
          <div className="max-w-4xl mx-auto">
            {technologies.map((tech, index) => {
              const isExpanded = expandedTech[index];

              return (
                <div
                  key={index}
                  className="border-t border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  {/* Technology Header - Clickable */}
                  <div
                    className="py-6 cursor-pointer"
                    onClick={() => toggleTech(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                          {tech.title}
                        </h3>
                        <p className="text-gray-300">{tech.description}</p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 ml-4">
                        {isExpanded ? (
                          <ChevronDown className="w-6 h-6 text-white transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white transition-transform duration-300 -rotate-90" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? "max-h-96 opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-0">
                      <ul className="space-y-3">
                        {tech.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom border for last item */}
                  {index === technologies.length - 1 && (
                    <div className="border-b border-white/20"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browser Extension Feature Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Verify What You See.
                <br />
                As You See It.
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Our browser extension seamlessly integrates with your browsing
                experience to automatically checks on videos, images, and claims
                across the web without breaking your flow. Whether you're on
                YouTube, a Salesforce instance, WhatsApp Web, or social media,
                get instant verification insights for extra peace. No technical
                setup. Add Modalities, right where you need it.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden">
                <img
                  src={ImageExt}
                  alt="Browser extension interface showing content verification"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Defending <span className="gradient-text">Digital Truth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Our technology isn't just designed to detect deception, it's built
            to defend digital truth. With AI manipulation accelerating, we're
            committed to developing tools that are proactive, accessible, and
            trusted by journalists, researchers, and the public.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#0F2FA3] button-hover text-lg px-8 py-4"
            >
              Start Free Trial
            </Button>
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
                  className="w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110 animate-pulse-soft"
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
