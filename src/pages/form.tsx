import type React from "react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  CheckCircle,
  //   Play,
  //   Shield,
  //   Users,
  AlertCircle,
  Check,
} from "lucide-react";
import Logo from "../assets/images/safeguardmedia-5.png";
import { useDemoRequestMutation } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";

export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    primaryUseCase: "",
    contentType: "",
    urgency: "",
    specificQuestion: "",
    agreeToComms: false,
  });

  type Errors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    profession?: string;
    primaryUseCase?: string;
    agreeToComms?: string;
    submit?: string;
    [key: string]: string | undefined;
  };

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoRequest] = useDemoRequestMutation();

  // Validation functions
  interface ValidateBusinessEmailResult {
    (email: string): string;
  }

  const validateBusinessEmail: ValidateBusinessEmailResult = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailError = validateBusinessEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }

    if (!formData.profession) {
      newErrors.profession = "Please select your role";
    }
    if (!formData.primaryUseCase) {
      newErrors.primaryUseCase = "Please select your main goal";
    }

    if (!formData.agreeToComms) {
      newErrors.agreeToComms = "Please agree to receive communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    console.log(formData, 5000);

    try {
      // Map form data to API expected format
      const apiPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.profession,
        goal: formData.primaryUseCase,
        contentType: formData.contentType,
        urgencyLevel: formData.urgency,
        metadata: JSON.stringify({
          specificQuestion: formData.specificQuestion,
          agreeToComms: formData.agreeToComms,
          source: "demo-request-form",
          submittedAt: new Date().toISOString(),
        }),
      };

      console.log("Submitting to API:", apiPayload);

      // Call the API
      const response = await demoRequest(apiPayload).unwrap();

      console.log("API Response:", response);

      if (response.success) {
        // Reset form after successful submission

        setIsSubmitted(true);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrors({
          submit: response.message || "Failed to submit demo request",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Handle different types of errors
      let errorMessage = "Something went wrong. Please try again.";

      if (error && typeof error === "object") {
        if (
          "data" in error &&
          error.data &&
          typeof error.data === "object" &&
          "message" in error.data
        ) {
          errorMessage = error.data.message as string;
        } else if ("message" in error && typeof error.message === "string") {
          errorMessage = error.message;
        }
      }

      setErrors({ submit: errorMessage });
    } finally {
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        primaryUseCase: "",
        contentType: "",
        urgency: "",
        specificQuestion: "",
        agreeToComms: false,
      });
    }
  };

  const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex items-center space-x-2 text-red-600 text-sm mt-1">
      <AlertCircle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );

  const SuccessMessage = () => (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-2 text-green-800">
        <Check className="w-5 h-5" />
        <span className="font-medium">Request submitted successfully!</span>
      </div>
      <p className="text-green-700 text-sm mt-2">
        Check your mail to get started.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
                  className="text-gray-900 hover:text-gray-700 cursor-pointer"
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
                  className="text-gray-600 hover:text-gray-900 sm:hidden cursor-pointer font-medium"
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

      {/* Main Content */}
      <main className="px-6 lg:px-12 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Value Proposition */}
            <div>
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#080808] font-[Lufga] mb-6">
                  Protect Yourself & Reputation
                </h1>
                <p className="text-xl text-gray-600 font-[Lora] leading-relaxed mb-8">
                  See how SafeguardMedia helps creators, journalists, and
                  professionals verify content authenticity and protect against
                  deepfakes in real-time.
                </p>
              </div>

              {/* What You'll Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  What you'll experience in your demo:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Upload and verify your own content instantly
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Learn to spot deepfakes and manipulated media
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Discover tools tailored to your content type
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Get personalized recommendations for your workflow
                    </span>
                  </div>
                </div>
              </div>

              {/* Perfect For Section */}
              {/* <div className="mb-8">
                <h3 className="text-xl font-bold text-[#080808] font-[Lufga] mb-4">
                  Perfect for:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Content Creators</strong>
                    <br />
                    Protect your brand from impersonation
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Journalists</strong>
                    <br />
                    Verify sources and user-generated content
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Educators</strong>
                    <br />
                    Teach media literacy and fact-checking
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-sm">
                    <strong className="text-[#080808]">Researchers</strong>
                    <br />
                    Analyze and verify digital evidence
                  </div>
                </div>
              </div> */}

              {/* Stats */}
              {/* <div className="bg-white p-6 rounded-lg border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Play className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      10 min
                    </div>
                    <div className="text-sm text-gray-600">
                      Interactive demo
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Creators protected
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="w-6 h-6 text-[#250DAD]" />
                    </div>
                    <div className="text-2xl font-bold text-[#080808]">
                      Free
                    </div>
                    <div className="text-sm text-gray-600">
                      Basic protection
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Testimonial */}
              {/* <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-[#250DAD]">
                <blockquote className="text-gray-700 italic mb-3">
                  "As a journalist, SafeguardMedia has become essential for
                  verifying user-submitted videos. It's saved me from publishing
                  manipulated content multiple times."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">
                  — Sarah M., Investigative Journalist
                </cite>
              </div> */}
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#080808] font-[Lufga] mb-2">
                      Try SafeguardMedia for Free
                    </h2>
                    <p className="text-gray-600">Get instant access</p>
                  </div>

                  {isSubmitted && <SuccessMessage />}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.firstName ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.firstName && (
                          <ErrorMessage message={errors.firstName} />
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-[#080808] font-[Lufga] font-medium"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                            errors.lastName ? "border-red-500" : ""
                          }`}
                          required
                        />
                        {errors.lastName && (
                          <ErrorMessage message={errors.lastName} />
                        )}
                      </div>
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your email "
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {errors.email && <ErrorMessage message={errors.email} />}
                      <p className="text-xs text-gray-500">
                        Please use your business email (not Gmail, Yahoo, etc.)
                      </p>
                    </div>

                    {/* Profession/Role */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="profession"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What best describes you? *
                      </Label>
                      <Select
                        value={formData.profession}
                        onValueChange={(value) =>
                          handleInputChange("profession", value)
                        }
                      >
                        <SelectTrigger
                          className={`border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD] ${
                            errors.profession ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Content Creator/Influencer">
                            Content Creator/Influencer
                          </SelectItem>
                          <SelectItem value="Journalist/Reporter">
                            Journalist/Reporter
                          </SelectItem>
                          <SelectItem value="Educator/Teacher">
                            Educator/Teacher
                          </SelectItem>
                          <SelectItem value="Researcher/Academic">
                            Researcher/Academic
                          </SelectItem>
                          <SelectItem value="Freelancer/Consultant">
                            Freelancer/Consultant
                          </SelectItem>
                          <SelectItem value="Student">Student</SelectItem>
                          <SelectItem value="Individual User">
                            Individual User
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.profession && (
                        <ErrorMessage message={errors.profession} />
                      )}
                    </div>

                    {/* Primary Use Case */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="primaryUseCase"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What's your main goal? *
                      </Label>
                      <Select
                        value={formData.primaryUseCase}
                        onValueChange={(value) =>
                          handleInputChange("primaryUseCase", value)
                        }
                      >
                        <SelectTrigger
                          className={`border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD] ${
                            errors.primaryUseCase ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="What do you want to achieve?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Verify content I receive">
                            Verify content I receive
                          </SelectItem>
                          <SelectItem value="Protect my personal brand">
                            Protect my personal brand
                          </SelectItem>
                          <SelectItem value="Fact-checking and research">
                            Fact-checking and research
                          </SelectItem>
                          <SelectItem value="Teaching/learning about deepfakes">
                            Teaching/learning about deepfakes
                          </SelectItem>
                          <SelectItem value="Detect manipulated media">
                            Detect manipulated media
                          </SelectItem>
                          <SelectItem value="General digital security">
                            General digital security
                          </SelectItem>
                          <SelectItem value="Just curious about the technology">
                            Just curious about the technology
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.primaryUseCase && (
                        <ErrorMessage message={errors.primaryUseCase} />
                      )}
                    </div>

                    {/* Content Type */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contentType"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        What type of content do you work with most?
                      </Label>
                      <Select
                        value={formData.contentType}
                        onValueChange={(value) =>
                          handleInputChange("contentType", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Videos">Videos</SelectItem>
                          <SelectItem value="Images/Photos">
                            Images/Photos
                          </SelectItem>
                          <SelectItem value="Audio content">
                            Audio content
                          </SelectItem>
                          <SelectItem value="Social media posts">
                            Social media posts
                          </SelectItem>
                          <SelectItem value="News articles">
                            News articles
                          </SelectItem>
                          <SelectItem value="User-generated content">
                            User-generated content
                          </SelectItem>
                          <SelectItem value="Mixed content types">
                            Mixed content types
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Urgency */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="urgency"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        How urgent is this for you?
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-[#250DAD] w-full focus:ring-[#250DAD]">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Need help right now">
                            Need help right now
                          </SelectItem>
                          <SelectItem value="Within this week">
                            Within this week
                          </SelectItem>
                          <SelectItem value="Within this month">
                            Within this month
                          </SelectItem>
                          <SelectItem value="Planning for the future">
                            Planning for the future
                          </SelectItem>
                          <SelectItem value="Just exploring options">
                            Just exploring options
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Specific Question */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="specificQuestion"
                        className="text-[#080808] font-[Lufga] font-medium"
                      >
                        Any specific questions or concerns?
                      </Label>
                      <Textarea
                        id="specificQuestion"
                        placeholder="e.g., I received a suspicious video and want to verify it, worried about deepfakes of myself, need to check sources for my articles..."
                        value={formData.specificQuestion}
                        onChange={(e) =>
                          handleInputChange("specificQuestion", e.target.value)
                        }
                        className="border-gray-300 focus:border-[#250DAD] focus:ring-[#250DAD] min-h-[80px] resize-none"
                        rows={3}
                      />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToComms"
                          checked={formData.agreeToComms}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "agreeToComms",
                              checked as boolean
                            )
                          }
                          className={`mt-1 border-[#250DAD] data-[state=checked]:bg-[#250DAD] data-[state=checked]:border-[#250DAD] ${
                            errors.agreeToComms ? "border-red-500" : ""
                          }`}
                        />
                        <Label
                          htmlFor="agreeToComms"
                          className="text-sm text-[#080808] font-[Lora] leading-relaxed cursor-pointer"
                        >
                          I'd like to receive helpful tips and updates about
                          digital security from SafeguardMedia.
                        </Label>
                      </div>
                      {errors.agreeToComms && (
                        <ErrorMessage message={errors.agreeToComms} />
                      )}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <ErrorMessage message={errors.submit} />
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-[#250DAD] hover:bg-blue-700 text-white font-[Lufga] font-medium py-4 px-8 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          "Get Started for Free"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
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
