import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--energy-blue)]">
        {post.category}
      </span>
      <h3 className="mt-2 text-lg font-bold text-[var(--navy)]">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]/70">{post.excerpt}</p>
      {post.isSample && (
        <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-wide text-[var(--graphite)]/40">
          Sample article
        </span>
      )}
    </article>
  );
}
