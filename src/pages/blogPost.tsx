import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Calendar, User, Clock, BookmarkPlus } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Logo from "../assets/images/safeguardmedia-5.png";
import { getArticleBySlug, getImageUrl } from "../../services/sanityApi";
import type { Article } from "../../services/sanityApi";
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "AI Detection": "from-[#0F2FA3] to-[#0080FF]",
      "Media Verification": "from-[#0080FF] to-[#00C4FF]",
      Cybersecurity: "from-[#7C3AED] to-[#A78BFA]",
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  const styles = `
    .gradient-text {
      background: linear-gradient(270deg, #0F2FA3, #0080FF, #00C4FF);
      background-size: 600% 600%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient 3s ease infinite;
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .content-section p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      color: #4A5568;
    }
    .content-section h2 {
      margin: 2rem 0 1rem 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #1A202C;
    }
    .content-section ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      list-style-type: disc;
    }
    .content-section li {
      margin-bottom: 0.5rem;
      color: #4A5568;
    }
  `;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F2FA3]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4">Article not found</p>
        <button onClick={() => navigate("/blog")} className="text-[#0F2FA3] hover:underline">
          Back to Resources
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center text-[#0F2FA3] hover:text-[#0080FF] transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Back to Resources</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-6">
            <span className={`bg-gradient-to-r ${getCategoryColor(article.category)} bg-clip-text text-transparent font-medium text-sm uppercase tracking-wide`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.publishedDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <BookmarkPlus className="w-4 h-4" />
              Save
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={getImageUrl(article.featuredImage)}
              alt={article.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none content-section">
          <PortableText value={article.content} />
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white py-16 px-6 lg:px-12 relative overflow-hidden mt-20">
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

export default BlogPostPage;