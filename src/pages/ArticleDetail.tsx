import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'
import { articles, getArticleBySlug } from '../data/articles'

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#34d399;text-decoration:none;">$1</a>')
    .replace(/<\/li>\n<li>/g, '</li><li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n/g, '<br/>')
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <link rel="canonical" href={`https://www.snapforest.in/articles/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://www.snapforest.in/articles/${article.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="pt-32 pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            {/* Article Header */}
            <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-emerald-800/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
              <span className="text-8xl opacity-20">📝</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Ved Prakash Arya
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {article.h1}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.keywords.slice(0, 5).map((keyword, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs rounded-full">
                  <Tag className="w-3 h-3" />
                  {keyword}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
            />

            {/* CTA Box */}
            <div className="mt-12 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Create?
              </h3>
              <p className="text-gray-400 mb-6">
                Book your studio at Snapforest – the best creator space in Gaya.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition-all"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Internal Links */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link to="/" className="text-emerald-400 hover:text-emerald-300 text-sm">
                ← Back to Snapforest Home
              </Link>
              <Link to="/founder" className="text-emerald-400 hover:text-emerald-300 text-sm">
                Meet Ved Prakash Arya →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={`/articles/${related.slug}`}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-emerald-400 transition-colors">
                  {related.title}
                </h3>
                <p className="text-gray-400 text-sm">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
