import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <article>
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.h1}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <button className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {article.h1}
          </h1>

          <div
            className="prose prose-invert prose-emerald max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-emerald-400 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-blockquote:border-emerald-400 prose-blockquote:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br/>").replace(/#{2,3}\s+(.*?)<br\/>/g, "<h3 class='text-xl font-bold text-white mt-8 mb-4'>$1</h3>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)<br\/>/g, "<li class='text-gray-300'>$1</li>").replace(/>\s+(.*?)<br\/>/g, "<blockquote class='border-l-2 border-emerald-400 pl-4 italic text-gray-300 my-4'>$1</blockquote>") }}
          />
        </article>
      </div>
    </div>
  );
}
