import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { getBlogs, getBlogBySlug } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <article className="container-grid max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <FadeIn>
          <Badge variant="accent">{post.category}</Badge>
          <h1 className="mt-4 font-display text-4xl font-bold text-text-primary">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-text-tertiary">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-invert mt-12 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </article>
    </div>
  );
}
