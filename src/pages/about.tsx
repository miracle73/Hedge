import { useEffect, useState } from "react";
import FirstImage from "../assets/images/real9.png";
import Logo from "../assets/images/safeguardmedia-5.png";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import { Button } from "../components/ui/button";
import BgImg from "../assets/images/about2.jpeg";
import BgImg2 from "../assets/images/about3.jpg";
import BgImg3 from "../assets/images/about4.jpeg";
import { useNavigate } from "react-router-dom";

// interface AnimatedSectionProps {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
//   index: number;
// }

export default function About() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const [showFoundation, setShowFoundation] = useState(true);
  const [selectedStoryCard, setSelectedStoryCard] = useState<number | null>(
    null
  );
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredStoryCard, setHoveredStoryCard] = useState<number | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [activeCards, setActiveCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
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

  // Toggle between Foundation and Mission/Vision every 5 seconds
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setIsExiting(true);

      setTimeout(() => {
        setShowFoundation((prev) => !prev);
        setIsExiting(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  //   const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  //     children,
  //     delay = 0,
  //     className = "",
  //     index,
  //   }) => (
  //     <div
  //       data-animate
  //       className={`transition-all duration-1000 ease-out ${
  //         isVisible[index]
  //           ? "opacity-100 translate-y-0"
  //           : "opacity-0 translate-y-8"
  //       } ${className}`}
  //       style={{ transitionDelay: `${delay}ms` }}
  //     >
  //       {children}
  //     </div>
  //   );

  const handleStoryCardClick = (cardIndex: number) => {
    setSelectedStoryCard(selectedStoryCard === cardIndex ? null : cardIndex);
  };

  const handleStoryCardHover = (cardIndex: number | null) => {
    setHoveredStoryCard(cardIndex);
  };

  const getStoryCardBackground = (cardIndex: number) => {
    if (selectedStoryCard === cardIndex) {
      switch (cardIndex) {
        case 0:
          return "bg-gradient-to-br from-[#0F2FA315] to-[#0F2FA325] border-[#0F2FA3]";
        case 1:
          return "bg-gradient-to-br from-[#FF6B3515] to-[#FF6B3525] border-[#FF6B35]";
        case 2:
          return "bg-gradient-to-br from-[#00C4FF15] to-[#00C4FF25] border-[#00C4FF]";
        default:
          return "bg-gradient-to-br from-gray-50 to-white border-gray-200";
      }
    }
    return "story-card border-gray-100";
  };

  const styles = `
  
    @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideOutToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
  
  @keyframes slideOutToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
  
  .vision-card {
    transform: translateX(-100px);
    opacity: 0;
  }
  
  .mission-card {
    transform: translateX(100px);
    opacity: 0;
  }
    .gradient-text {
      background: linear-gradient(135deg, #0F2FA3, #0080FF, #00C4FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .gradient-text-orange {
      background: linear-gradient(135deg, #FF6B35, #FF8E53, #FFA07A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .diagonal-bg {
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
    
    .reverse-diagonal-bg {
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    }
    
    .hexagon {
      clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
    }
    
    .custom-shadow {
      box-shadow: 0 25px 50px -12px rgba(15, 47, 163, 0.15);
    }
    
    .glass-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(15, 47, 163, 0.1);
    }
    
    .story-card {
      background: linear-gradient(135deg, rgba(252, 252, 252, 0.95) 0%, rgba(247, 250, 252, 0.95) 100%);
      backdrop-filter: blur(10px);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .story-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 35px rgba(15, 47, 163, 0.1);
    }
    
    .fade-transition {
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(15, 47, 163, 0.15);
    }

    .foundation-enter {
      transform: translateY(20px) scale(0.95);
      opacity: 0;
    }
    
    .foundation-enter-active {
      transform: translateY(0) scale(1);
      opacity: 1;
      transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .foundation-exit {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    
    .foundation-exit-active {
      transform: translateY(-20px) scale(0.95);
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .story-section-bg {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.6s ease-in-out;
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
                <div className="w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full flex items-center justify-center">
                  <img
                    src={SecondLogo}
                    alt="logo"
                    className="max-lg:h-16 max-lg:w-16"
                  />
                </div>
              </div>
              <nav className="max-md:text-xs md:flex space-x-4  max-sm:space-x-2">
                <a
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
                <a
                  className="text-gray-900 hover:text-gray-700 font-medium cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                  onClick={() => {
                    navigate("/technology");
                  }}
                >
                  Technology
                </a>
                <a
                  className="text-gray-600 hover:text-gray-900 sm:hidden cursor-pointer"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  contact
                </a>
              </nav>
              <div className="flex items-center space-x-4 ">
                <Button
                  className="hidden sm:inline-flex bg-[#0F2FA3] hover:bg-[#0F2FA3]/90 cursor-pointer"
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

      {/* Hero Section - Unique Split Layout */}
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 diagonal-bg bg-gradient-to-br from-[#E7EAEE] via-[#F0F3F7] to-[#E7EAEE]"></div>

        <div className="relative z-10 w-full pt-10 lg:pt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh] lg:min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl max-lg:text-center font-bold text-gray-900 mb-6 leading-tight">
                Pioneering the Future of{" "}
                <span className="gradient-text">Digital Truth</span>
              </h1>

              <p className="text-lg sm:text-xl max-lg:text-center  text-gray-600 max-w-3xl leading-relaxed">
                Born from urgency, built with precision. Learn how our team of
                engineers, journalists, and AI researchers are reshaping how the
                world verifies digital content.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-none">
              <div className="relative overflow-hidden">
                <img
                  src={FirstImage}
                  alt="Media verification interface"
                  className="w-[240%] lg:w-[130%] h-auto "
                />
                <div className="absolute inset-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Cards with Animation that toggles with Foundation */}
      {/* Vision & Mission - Cards with Animation that toggles with Foundation */}
      <section className="py-14 lg:py-20 relative">
        <div className="absolute inset-0 reverse-diagonal-bg bg-gradient-to-br from-gray-50 to-white"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle between Foundation and Mission/Vision */}
          <div className="text-center mb-16">
            {showFoundation ? (
              <div
                className="transform transition-all duration-700 ease-out opacity-100 translate-y-0"
                key="foundation"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="gradient-text">Foundation</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Built on principles of truth, transparency, and technological
                  innovation
                </p>
              </div>
            ) : (
              <div
                className="grid md:grid-cols-2 gap-8 lg:gap-12"
                key="mission-vision"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Vision */}
                <div
                  className="vision-card"
                  style={{
                    animation: isExiting
                      ? "slideOutToLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                      : "slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                  }}
                >
                  <div className="bg-gradient-to-br from-[#0F2FA333] to-[#0F2FA320] p-6 lg:p-8 rounded-2xl card-hover backdrop-blur-sm">
                    <div className="flex items-center justify-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 text-center">
                        Our Vision
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg text-center">
                      To restore trust in digital content by empowering people
                      to independently verify the authenticity of what they see
                      and hear instantly, and at scale.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div
                  className="mission-card"
                  style={{
                    animation: isExiting
                      ? "slideOutToRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                      : "slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                  }}
                >
                  <div className="bg-gradient-to-br from-[#F4F4F4] to-[#FFFFFF] p-6 lg:p-8 rounded-2xl border border-gray-200 card-hover backdrop-blur-sm">
                    <div className="flex items-center mb-6 justify-center">
                      <h2 className="text-2xl font-bold text-gray-900 text-center">
                        Our Mission
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg text-center">
                      SafeguardMedia is developing an integrated platform that
                      empowers journalists, fact-checkers, researchers, and the
                      public to identify, evaluate, and report on manipulated or
                      misleading media through advanced AI, metadata analysis,
                      and fact-check integration.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story - Asymmetrical Layout */}
      {/* Our Story - Asymmetrical Layout */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Title Column */}
            <div className="lg:col-span-1">
              {/* <AnimatedSection delay={400} index={1}> */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Engineered for Truth.</span>{" "}
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gray-900">Inspired by</span>{" "}
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
                {" "}
                Urgency.
              </h1>
              {/* </AnimatedSection> */}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div
                className={`${getStoryCardBackground(
                  0
                )} rounded-2xl p-8 lg:p-10 transition-all duration-300`}
                onClick={() => handleStoryCardClick(0)}
                onMouseEnter={() => handleStoryCardHover(0)}
                onMouseLeave={() => handleStoryCardHover(null)}
                style={{
                  backgroundImage:
                    hoveredStoryCard === 0
                      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgImg})`
                      : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    hoveredStoryCard === 0 ? "text-white" : "text-gray-900"
                  }`}
                >
                  The Challenge
                </h3>
                <p
                  className={`text-lg leading-relaxed transition-colors duration-300 ${
                    hoveredStoryCard === 0 ? "text-white" : "text-gray-700"
                  }`}
                >
                  The 2020s ushered in an era where AI-generated content,
                  deepfakes, shallowfakes, voice clones, and synthetic visuals
                  outpaced our ability to distinguish truth from fiction. From
                  elections to education, from social media to mainstream news,
                  manipulated media have blurred the line between reality and
                  artificiality. This didn't just challenge truth, it challenged
                  trust.
                </p>
              </div>

              <div
                className={`${getStoryCardBackground(
                  1
                )} rounded-2xl p-8 lg:p-10  transition-all duration-300`}
                onClick={() => handleStoryCardClick(1)}
                onMouseEnter={() => handleStoryCardHover(1)}
                onMouseLeave={() => handleStoryCardHover(null)}
                style={{
                  backgroundImage:
                    hoveredStoryCard === 1
                      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgImg2})`
                      : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    hoveredStoryCard === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Foundation
                </h3>
                <p
                  className={`text-lg leading-relaxed transition-colors duration-300 ${
                    hoveredStoryCard === 1 ? "text-white" : "text-gray-700"
                  }`}
                >
                  SafeguardMedia was founded by a collective of Software
                  engineers, journalists, and AI Researchers who recognized that
                  traditional verification tools were no longer enough. Built on
                  scalable cloud infrastructure, our platform uses
                  state-of-the-art multimodal AI to assess images, video, and
                  audio for signs of manipulation. We combine detection models
                  with contextual metadata and public fact-checking APIs to
                  surface media credibility in real time.
                </p>
              </div>

              <div
                className={`${getStoryCardBackground(
                  2
                )} rounded-2xl p-8 lg:p-10  transition-all duration-300`}
                onClick={() => handleStoryCardClick(2)}
                onMouseEnter={() => handleStoryCardHover(2)}
                onMouseLeave={() => handleStoryCardHover(null)}
                style={{
                  backgroundImage:
                    hoveredStoryCard === 2
                      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgImg3})`
                      : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    hoveredStoryCard === 2 ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Purpose
                </h3>
                <p
                  className={`text-lg leading-relaxed transition-colors duration-300 ${
                    hoveredStoryCard === 2 ? "text-white" : "text-gray-700"
                  }`}
                >
                  Our goal isn't just to label false content, it's to equip
                  people with the tools to understand the digital world around
                  them. From live browser extensions to shareable risk reports,
                  we believe fighting misinformation and disinformation isn't
                  just about technology, it's about defending what's real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for the Frontlines - Dark Section with Grid Animation */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Built for the <span className="text-[#00C4FF]">Frontlines</span>{" "}
              of Information
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're a newsroom editor, policy analyst, fact-checker, or
              concerned citizen, SafeguardMedia helps you verify content at the
              speed of the internet. No uploads. No guesswork. Just actionable
              insight.
            </p>
          </div>

          {/* Features Grid with Animation - Enhanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Newsroom Editors",
                description:
                  "Real-time verification during breaking news cycles with comprehensive media analysis",
                gradient: "from-[#0F2FA3] via-[#1E40AF] to-[#3B82F6]",
                accentColor: "border-blue-400/30",
                shadowColor: "shadow-blue-500/20",
              },
              {
                title: "Policy Analysts",
                description:
                  "Evidence-based assessment of information campaigns with detailed forensic reporting",
                gradient: "from-[#7C3AED] via-[#8B5CF6] to-[#A78BFA]",
                accentColor: "border-purple-400/30",
                shadowColor: "shadow-purple-500/20",
              },
              {
                title: "Fact-Checkers",
                description:
                  "Forensic-grade tools for comprehensive verification with multi-source validation",
                gradient: "from-[#059669] via-[#10B981] to-[#34D399]",
                accentColor: "border-emerald-400/30",
                shadowColor: "shadow-emerald-500/20",
              },
              {
                title: "Researchers",
                description:
                  "Academic-quality analysis with detailed reporting and citation-ready documentation",
                gradient: "from-[#DC2626] via-[#EF4444] to-[#F87171]",
                accentColor: "border-red-400/30",
                shadowColor: "shadow-red-500/20",
              },
              {
                title: "Citizens",
                description:
                  "User-friendly tools for everyday media consumption with instant credibility scores",
                gradient: "from-[#EA580C] via-[#F97316] to-[#FB923C]",
                accentColor: "border-orange-400/30",
                shadowColor: "shadow-orange-500/20",
              },
              {
                title: "Organizations",
                description:
                  "Enterprise solutions for institutional verification with scalable API integration",
                gradient: "from-[#4338CA] via-[#6366F1] to-[#818CF8]",
                accentColor: "border-indigo-400/30",
                shadowColor: "shadow-indigo-500/20",
              },
            ].map((feature, index) => {
              const isActive = activeCards[index] || false;

              const handleCardToggle = () => {
                setActiveCards((prev) => ({
                  ...prev,
                  [index]: !prev[index],
                }));
              };

              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border ${feature.accentColor} hover:border-white/40 transition-all duration-500 h-full hover:scale-105 hover:-translate-y-2 ${feature.shadowColor} hover:shadow-2xl cursor-pointer`}
                  onClick={handleCardToggle}
                  onTouchStart={handleCardToggle}
                >
                  {/* Gradient overlay on hover and click/touch */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      feature.gradient
                    } ${
                      isActive ? "opacity-10" : "opacity-0"
                    } group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon container */}
                  <div className="relative mb-6">
                    {/* Decorative accent */}
                    <div
                      className={`absolute -top-2 -right-2 bg-gradient-to-br ${feature.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300 text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${
                      feature.gradient
                    } ${
                      isActive ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Ready to Join the Fight for Truth?
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#0F2FA3] hover:bg-[#0F2FA3]/90 button-hover text-lg px-8 py-4 text-white"
              >
                Start Free Trial
              </Button>
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
                  "Detection & Analysis tools",
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
