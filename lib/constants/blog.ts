import { BlogPost } from "@/types";

// Placeholder articles — structured for future migration to MDX/CMS/database.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "resco-vs-capex",
    title: "RESCO vs CAPEX: Which Solar Model Fits Your Business?",
    category: "RESCO",
    excerpt:
      "A look at how the RESCO and CAPEX (EPC) ownership models differ, and the business factors that typically influence the choice.",
    isSample: true,
  },
  {
    slug: "understanding-open-access",
    title: "Understanding Open Access Renewable Power",
    category: "Open Access",
    excerpt:
      "An overview of how Open Access works for eligible commercial and industrial consumers, and what feasibility depends on.",
    isSample: true,
  },
  {
    slug: "ci-solar-transition-planning",
    title: "How C&I Businesses Can Plan Their Solar Transition",
    category: "C&I Solar",
    excerpt:
      "Key questions industrial and commercial energy buyers should ask before starting a solar project.",
    isSample: true,
  },
  {
    slug: "solar-epc-project-lifecycle",
    title: "Solar EPC Project Lifecycle Explained",
    category: "Solar EPC",
    excerpt:
      "From energy assessment to commissioning — a walkthrough of how an EPC solar project comes together.",
    isSample: true,
  },
];
