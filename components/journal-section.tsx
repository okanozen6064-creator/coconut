import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "The Art of Slow Travel",
    excerpt: "Discover how embracing a slower pace transforms your journey from a checklist into a meaningful experience.",
    category: "Travel Philosophy",
    date: "January 15, 2026",
    image: "/images/bungalow-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Hidden Gems: Local Markets Worth Exploring",
    excerpt: "Our curated guide to the island's most authentic markets, from dawn fish auctions to artisan craft fairs.",
    category: "Local Guide",
    date: "January 8, 2026",
    image: "/images/bungalow-2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Seasonal Flavors: What to Taste This Month",
    excerpt: "Executive Chef Mira shares her favorite seasonal ingredients and where to find them.",
    category: "Culinary",
    date: "January 2, 2026",
    image: "/images/bungalow-3.jpg",
    featured: false,
  },
]

export function JournalSection() {
  const featuredArticle = articles.find((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)

  return (
    <section id="journal" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-cyan text-sm tracking-[0.3em] uppercase">
              Our Journal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mt-4">
              Stories & Insights
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-navy text-sm tracking-widest uppercase flex items-center gap-2 hover:text-cyan transition-colors group"
          >
            View All Articles
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <article className="group bg-background overflow-hidden lg:row-span-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="text-cyan">{featuredArticle.category}</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-navy mb-4 group-hover:text-cyan transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/journal/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 text-navy text-sm tracking-widest uppercase hover:text-cyan transition-colors"
                >
                  Read Article
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          )}

          {/* Other Articles */}
          <div className="flex flex-col gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-background overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="relative aspect-square sm:aspect-auto sm:w-48 flex-shrink-0">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="text-cyan">{article.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-cyan transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/journal/${article.id}`}
                    className="inline-flex items-center gap-2 text-navy text-sm tracking-widest uppercase hover:text-cyan transition-colors"
                  >
                    Read More
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
