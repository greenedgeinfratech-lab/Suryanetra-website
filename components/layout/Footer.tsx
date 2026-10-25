import Link from "next/link";
import { Globe, AtSign, Share2, Camera } from "lucide-react";
import { COMPANY } from "@/lib/constants/company";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Solar EPC", href: "/solutions/epc" },
      { label: "RESCO", href: "/solutions/resco" },
      { label: "Open Access", href: "/solutions/open-access" },
      { label: "O&M", href: "/solutions/om" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Calculator", href: "/calculator" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div>
          <div className="text-lg font-bold tracking-wide">SURYNETRA ENERGY</div>
          <div className="text-xs tracking-[0.2em] opacity-60">PRIVATE LIMITED</div>
          <p className="mt-4 max-w-xs text-sm text-white/70">{COMPANY.description}</p>
          <div className="mt-6 flex gap-4">
            <a href={COMPANY.social.linkedin} aria-label="LinkedIn" className="text-white/70 hover:text-white">
              <Share2 className="h-5 w-5" />
            </a>
            <a href={COMPANY.social.twitter} aria-label="Twitter/X" className="text-white/70 hover:text-white">
              <AtSign className="h-5 w-5" />
            </a>
            <a href={COMPANY.social.facebook} aria-label="Facebook" className="text-white/70 hover:text-white">
              <Globe className="h-5 w-5" />
            </a>
            <a href={COMPANY.social.instagram} aria-label="Instagram" className="text-white/70 hover:text-white">
              <Camera className="h-5 w-5" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-semibold text-white/90">{col.title}</div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col gap-2 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</span>
          <span>{COMPANY.email} · {COMPANY.phone}</span>
        </div>
      </div>
    </footer>
  );
}
