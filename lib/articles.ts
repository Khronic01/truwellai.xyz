export interface Article {
  id: string
  slug: string
  category: string
  title: string
  excerpt: string
  content?: string
  date: string
  readTime: string
  author: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "advanced-scanning-technology",
    category: "AI Technology",
    title: "How TruWell AI's Advanced Scanning Technology Works",
    excerpt:
      "Dive deep into the machine learning algorithms, computer vision systems, and natural language processing that power our ingredient analysis.",
    date: "January 15, 2025",
    readTime: "8 min",
    author: "Dr. Sarah Chen",
    featured: true,
  },
  {
    id: "2",
    slug: "ai-ingredient-analysis",
    category: "AI Technology",
    title: "Understanding AI-Powered Ingredient Analysis",
    excerpt:
      "Learn how our machine learning models process millions of ingredient combinations to provide personalized safety assessments.",
    date: "January 12, 2025",
    readTime: "6 min",
    author: "Dr. Michael Rodriguez",
  },
  {
    id: "3",
    slug: "ocr-technology",
    category: "AI Technology",
    title: "The Science Behind OCR Text Recognition",
    excerpt: "Explore the optical character recognition technology that reads ingredient labels with 98% accuracy.",
    date: "December 30, 2024",
    readTime: "8 min",
    author: "Dr. Sarah Chen",
  },
  {
    id: "4",
    slug: "machine-learning-models",
    category: "AI Technology",
    title: "Training Machine Learning Models for Health Safety",
    excerpt:
      "Discover how we train our AI models on millions of data points to detect health risks and allergens with precision.",
    date: "December 28, 2024",
    readTime: "10 min",
    author: "Dr. Michael Rodriguez",
  },
  {
    id: "5",
    slug: "real-time-processing",
    category: "AI Technology",
    title: "Real-Time Processing: Speed Meets Accuracy",
    excerpt: "Learn how TruWell AI delivers instant results without compromising on accuracy or detail.",
    date: "December 25, 2024",
    readTime: "7 min",
    author: "Emily Watson",
  },
  {
    id: "6",
    slug: "computer-vision-breakthrough",
    category: "AI Technology",
    title: "Computer Vision Breakthrough in Product Scanning",
    excerpt:
      "Explore the latest advancements in computer vision that enable TruWell AI to scan products in any lighting condition.",
    date: "December 20, 2024",
    readTime: "9 min",
    author: "Dr. Sarah Chen",
  },
  {
    id: "7",
    slug: "hidden-allergens",
    category: "Product Safety",
    title: "Hidden Allergens: What Labels Don't Tell You",
    excerpt:
      "Discover the most common hidden allergens in everyday products and how TruWell AI helps you identify them instantly.",
    date: "January 10, 2025",
    readTime: "5 min",
    author: "Emily Watson",
  },
  {
    id: "8",
    slug: "safety-scores-explained",
    category: "Product Safety",
    title: "Decoding Safety Scores: What Do They Mean?",
    excerpt: "Understand how we calculate safety scores and what each rating means for your health and wellness.",
    date: "January 3, 2025",
    readTime: "5 min",
    author: "Dr. Michael Rodriguez",
  },
  {
    id: "9",
    slug: "toxic-ingredients-guide",
    category: "Product Safety",
    title: "Complete Guide to Toxic Ingredients in Consumer Products",
    excerpt:
      "A comprehensive breakdown of harmful chemicals commonly found in household products and personal care items.",
    date: "December 27, 2024",
    readTime: "12 min",
    author: "Emily Watson",
  },
  {
    id: "10",
    slug: "pregnancy-product-safety",
    category: "Product Safety",
    title: "Product Safety During Pregnancy: What to Avoid",
    excerpt:
      "Essential guidance for expectant mothers on identifying and avoiding harmful ingredients during pregnancy.",
    date: "December 22, 2024",
    readTime: "8 min",
    author: "Dr. Sarah Chen",
  },
  {
    id: "11",
    slug: "health-profile-guide",
    category: "Health Tips",
    title: "Building Your Personalized Health Profile",
    excerpt:
      "A comprehensive guide to setting up your health profile for the most accurate product safety recommendations.",
    date: "January 8, 2025",
    readTime: "7 min",
    author: "Emily Watson",
  },
  {
    id: "12",
    slug: "allergen-management",
    category: "Health Tips",
    title: "Managing Multiple Allergies with TruWell AI",
    excerpt:
      "Expert strategies for tracking and avoiding multiple allergens using our personalized scanning technology.",
    date: "December 29, 2024",
    readTime: "6 min",
    author: "Dr. Michael Rodriguez",
  },
  {
    id: "13",
    slug: "clean-beauty-guide",
    category: "Health Tips",
    title: "The Ultimate Clean Beauty Guide",
    excerpt: "Learn how to identify truly clean beauty products and avoid greenwashing with AI-powered analysis.",
    date: "December 24, 2024",
    readTime: "9 min",
    author: "Emily Watson",
  },
  {
    id: "14",
    slug: "scanning-tips",
    category: "How-To Guides",
    title: "Mastering Product Scanning: Tips & Tricks",
    excerpt: "Get the best scanning results with these expert tips on lighting, angles, and camera positioning.",
    date: "January 5, 2025",
    readTime: "4 min",
    author: "Emily Watson",
  },
  {
    id: "15",
    slug: "barcode-scanning-guide",
    category: "How-To Guides",
    title: "Quick Start: Barcode Scanning for Instant Results",
    excerpt: "Learn how to use barcode scanning for lightning-fast product lookups and safety assessments.",
    date: "December 26, 2024",
    readTime: "5 min",
    author: "Dr. Michael Rodriguez",
  },
  {
    id: "16",
    slug: "community-features",
    category: "How-To Guides",
    title: "Leveraging Community Insights for Better Decisions",
    excerpt: "Discover how to use community reviews, ratings, and experiences to make informed product choices.",
    date: "December 21, 2024",
    readTime: "6 min",
    author: "Emily Watson",
  },
]

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((article) => article.featured)
}

export function getLatestArticles(limit = 6): Article[] {
  return articles.slice(0, limit)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(articles.map((article) => article.category)))
}

export function getCategoryCount(category: string): number {
  return articles.filter((article) => article.category === category).length
}
