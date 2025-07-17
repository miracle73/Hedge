import FirstImage from "../assets/images/FirstImage-3.png";
import Logo from "../assets/images/safeguardmedia-5.png";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Menu, Download, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      {/* Header */}
      <div className="flex w-full justify-center py-4">
        <header className="bg-gradient-to-r from-[#E9E9E9] to-[#83838300] border-b  rounded-full border-gray-200 w-[50%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-24 h-20 rounded-full flex items-center justify-center">
                  <div className="logo">
                    <img src={SecondLogo} alt="logo" className="logo" />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Our Technology
                </a>
              </nav>

              {/* Contact Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <Button className="hidden sm:inline-flex bg-[#0F2FA3]">
                  Contact
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <main className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-10 mt-20 rounded-lg bg-[#E7EAEE]">
        <div className="text-center mb-12">
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Restoring Trust in a Digitally Distorted World
          </h1>

          {/* Subtitle */}
          <p className="text-base text-[#252525] sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A unified platform for detecting AI-generated and manipulated media
            in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto bg-[#0F2FA3]">
              Request Early Access
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16 flex justify-center items-center">
          <div className="relative max-w-4xl mx-auto rounded-lg">
            <img
              src={FirstImage}
              alt="Forensic analysis of tampered media with verification overlays"
              className="main-image"
            />
          </div>
        </div>

        {/* Bottom Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-[#F5F8FA] px-2">
          {/* Why It Matters */}
          <div className="bg-[#0F2FA333] p-6 lg:p-8 rounded-lg">
            <h2 className="ttext-lg font-bold text-gray-900 mb-4">
              Why Media Integrity Matters
            </h2>
            <p className="text-gray-700 leading-relaxed text-bas">
              Synthetic media—from deepfakes to low-tech video edits—is
              spreading faster than the truth. Without powerful tools to
              validate what we see and hear, misinformation thrives and public
              trust collapses.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-[#F4F4F4] p-6 lg:p-8 rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              AI-Powered Media Verification
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              SafeguardMedia provides real-time detection of manipulated images,
              video, and audio. Our platform integrates cutting-edge detection
              models, fact-checking APIs, and metadata analysis to enable users
              to instantly assess content credibility.
            </p>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="mt-20 bg-[#00000080] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-full mx-auto">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Deepfake Detection */}
              <div className="bg-white text-center p-6 rounded-lg">
                <div className="flex justify-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Deepfake Detection
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analyze image, video, and audio content for AI-generated
                  manipulations using CNN and Whisper-based models.
                </p>
              </div>

              {/* Cheapfake/Shallowfake Detection */}
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="flex justify-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cheapfake/Shallowfake Detection
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Detect basic edits, such as speed changes, splicing, or
                  cropping, using OpenCV and FFmpeg.
                </p>
              </div>

              {/* Metadata & Geolocation Analysis */}
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="flex justify-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Metadata & Geolocation Analysis
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reveal hidden metadata and map geolocation to verify context
                  and source.
                </p>
              </div>

              {/* Fact-Check Integration */}
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="flex justify-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fact-Check Integration
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Automatically compare claims with public databases, such as
                  Google Fact Check Tools and ClaimReview schema.
                </p>
              </div>

              {/* Risk Scoring Engine */}
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="flex items-start gap-3 mb-3 justify-center ">
                  <h3 className="text-lg font-semibold  text-gray-900">
                    Risk Scoring Engine
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Assign a credibility score to media based on forensic signals,
                  context, and third-party validation.
                </p>
              </div>

              {/* Visual Reporting */}
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="flex items-start gap-3 mb-3 justify-center  ">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Visual Reporting
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Generate clear, shareable reports in PDF or web format to
                  support decision-making and public transparency.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">
                See how our AI-powered forensics platform is redefining
                <br />
                the future of truth in digital media.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Join the Waitlist
                  <Users className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Download Overview
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Browser Extension Section */}
            <div className="bg-gray-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Verify What You See. As You See It.
              </h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Coming soon: A browser extension that flags manipulated media in
                real-time while you browse online content. Stay informed without
                leaving the page.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up for Beta Access
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={Logo}
                  alt="SafeguardMedia Logo"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="px-2 flex justify-start gap-4 items-center">
                <div>
                  <a
                    href="https://www.instagram.com/safe_guard_media/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://x.com/safeguardmedia1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/safeguardmedia/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:admin@safeguardmedia.org"
                    className="text-gray-400 hover:text-white text-sm flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">AI Deepfake Detection</div>
                </li>
                <li>
                  <div className="text-gray-400">AI-Assisted Fact-Checking</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Cybersecurity & Fraud Prevention
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4 text-gray-300">
                Legal & Trust
              </div>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-400">Privacy Policy</div>
                </li>
                <li>
                  <div className="text-gray-400">Terms Of Service</div>
                </li>
                <li>
                  <div className="text-gray-400">
                    Compliance (GDPR, CCPA, NDPR)
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 SafeguardMedia. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
