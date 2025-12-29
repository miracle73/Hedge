import { useEffect, useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SecondLogo from "../assets/images/SafeguardMedia8.svg";
import Logo from "../assets/images/safeguardmedia-5.png";
import { Button } from "../components/ui/button";
import { getArticles, getImageUrl } from "../../services/sanityApi";
import type { Article } from "../../services/sanityApi";

const ResourcesPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({});
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

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

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "AI Detection":
        "bg-gradient-to-r from-[#0F2FA3] to-[#0080FF] bg-clip-text text-transparent border-[#0F2FA3]",
      "Media Verification":
        "bg-gradient-to-r from-[#0080FF] to-[#00C4FF] bg-clip-text text-transparent border-[#0080FF]",
      Cybersecurity:
        "bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent border-[#7C3AED]",
    };
    return colors[category] || "text-gray-700 border-gray-300";
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const styles = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .gradient-text {
      background: linear-gradient(270deg, #0F2FA3, #0080FF, #00C4FF);
      background-size: 600% 600%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient 3s ease infinite;
    }
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(15, 47, 163, 0.15);
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(15, 47, 163, 0.1);
    }
    .button-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
      <div className="flex w-full justify-center py-4 sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md">
        <header className="bg-gradient-to-r from-[#E9E9E9] to-[#83838300] border-b rounded-full border-gray-200 w-[80%] md:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full flex items-center justify-center">
                  <img src={SecondLogo} alt="logo" className="max-lg:h-16 max-lg:w-16" />
                </div>
              </div>
              <nav className="max-md:text-xs md:flex space-x-4 max-sm:space-x-2">
                <a className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => navigate("/")}>Home</a>
                <a className="text-gray-900 hover:text-gray-700 cursor-pointer" onClick={() => navigate("/about")}>About</a>
                <a className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => navigate("/technology")}>Technology</a>
                <a className="text-gray-600 hover:text-gray-900 sm:hidden cursor-pointer" onClick={() => navigate("/contact")}>Contact</a>
              </nav>
              <div className="flex items-center space-x-4">
                <Button className="hidden sm:inline-flex bg-[#0F2FA3] hover:bg-[#0F2FA3]/90 cursor-pointer" onClick={() => navigate("/contact")}>Contact</Button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7EAEE] via-[#F0F3F7] to-[#E7EAEE]"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6" data-animate>
            <span className="text-[#0F2FA3] font-medium text-lg">Our blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-animate>
            Resources and <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed" data-animate>
            The latest industry news, research findings, and expert insights on media verification, AI detection, and digital trust.
          </p>
          <div className="relative max-w-md mx-auto" data-animate>
            <Search className="absolute left-3 top-4 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F2FA3] focus:border-transparent shadow-sm glass-card"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F2FA3]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article._id}
                  className="glass-card rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer"
                  data-animate
                  onClick={() => navigate(`/blog/${article.slug.current}`)}
                >
                  <div className="relative">
                    <img
                      src={getImageUrl(article.featuredImage)}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {article.stats && (
                      <div className="absolute top-4 left-4 flex gap-2">
                        {article.stats.fill && (
                          <span className="bg-[#0F2FA3] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article.stats.fill}
                          </span>
                        )}
                        {article.stats.hug && (
                          <span className="bg-[#00C4FF] text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article.stats.hug}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#0F2FA3] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0F2FA3] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={getImageUrl(article.authorAvatar)}
                        alt={article.author}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{article.author}</p>
                        <p className="text-gray-500 text-xs">{formatDate(article.publishedDate)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Ahead of Digital <span className="text-[#00C4FF]">Deception</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Get the latest insights on AI detection, media verification, and digital forensics delivered to your inbox.
          </p>
          <Button size="lg" className="w-full sm:w-auto bg-[#0F2FA3] button-hover text-lg px-8 py-4" onClick={() => navigate("/get-started")}>
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <img src={Logo} alt="SafeguardMedia Logo" className="w-16 h-16 rounded-full" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300 text-lg">Solutions</h4>
              <ul className="space-y-3">
                {["AI Deepfake Detection", "AI-Assisted Fact-Checking", "Cybersecurity & Fraud Prevention", "Detection & Analysis tools"].map((item, index) => (
                  <li key={index}><div className="text-gray-400 hover:text-white cursor-pointer">{item}</div></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300 text-lg">Legal & Trust</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms Of Service", "Compliance (GDPR, CCPA, NDPR)"].map((item, index) => (
                  <li key={index}><div className="text-gray-400 hover:text-white cursor-pointer">{item}</div></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">© 2025 SafeguardMedia. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesPage;