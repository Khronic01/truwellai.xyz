import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import { articles, getAllCategories } from "@/lib/articles"

export default function AllArticlesPage() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint via-white to-mint">
      <Header />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-6xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
                ← Back to Blog
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-balance">All Articles</h1>
            <p className="text-xl text-charcoal/70 mb-8 text-pretty max-w-3xl">
              Explore our complete collection of articles covering AI technology, product safety, health tips, and
              how-to guides. {articles.length} articles and counting.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 pr-4 py-3 bg-white border-primary/20 focus:border-primary"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[200px] bg-white border-primary/20">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[200px] bg-white border-primary/20">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="longest">Longest Read</SelectItem>
                  <SelectItem value="shortest">Shortest Read</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={article.id}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover-glow cursor-pointer group fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary text-xs hover-glow">{article.category}</Badge>
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-charcoal group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-charcoal/70 mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-charcoal/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>{article.author}</span>
                      </div>
                      <Link href={`/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                          Read
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Subscribe to get the latest articles on AI technology, product safety, and health tips delivered to your
              inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-white text-charcoal placeholder:text-charcoal/50"
              />
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 whitespace-nowrap button-hover"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
