import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/sections/BlogCard";
import { BLOG_POSTS } from "@/lib/constants/blog";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles on Solar EPC, RESCO, Open Access, C&I solar, energy economics, policy and sustainability.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="Insights" title="Renewable Energy Insights" description="Perspectives on Solar EPC, RESCO, Open Access, C&I solar and energy economics." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
