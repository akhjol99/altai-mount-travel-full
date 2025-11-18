import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft } from "lucide-react";
import { POSTS } from "@/data/blog";



function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return null;

  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <p>Post not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-brand-800 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative h-60 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xs uppercase tracking-wide text-brand-700 mb-1">
              {post.category}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <div
              className="prose prose-sm md:prose-base max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
/>
          </div>
        </article>
      </div>
    </main>
  );
}