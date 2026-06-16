import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { getBlogs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on design process, frontend tips, and learning journey.",
};

export default function BlogPage() {
  const posts = getBlogs();

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-4xl">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Writing</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">Blog</h1>
          <p className="mt-4 text-text-secondary">
            Thoughts on design, development, and the journey of building better products.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface transition-all hover:border-border-strong hover:shadow-md sm:flex-row"
              >
                <div className="relative aspect-[16/9] w-full bg-surface-elevated sm:aspect-auto sm:w-1/3">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="accent">{post.category}</Badge>
                    <span className="text-xs text-text-tertiary">{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-text-tertiary">{formatDate(post.publishedAt)}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
