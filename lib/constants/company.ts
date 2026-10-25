export const COMPANY = {
  name: "Surynetra Energy",
  legalName: "Surynetra Energy Private Limited",
  tagline: "Powering Business. Enabling Clean Growth.",
  description:
    "A renewable energy and power infrastructure company delivering Solar EPC, RESCO and Open Access solutions for industrial and commercial businesses across India.",
  phone: "+91-00000-00000", // TODO: replace with real number
  email: "info@surynetraenergy.com", // TODO: replace with real email
  whatsapp: "+91-00000-00000", // TODO: replace with real number
  address: {
    line1: "Office Address Line 1", // TODO
    line2: "Office Address Line 2", // TODO
    city: "City",
    state: "State",
    pincode: "000000",
    country: "India",
  },
  mapsEmbedUrl: "", // TODO: add Google Maps embed URL
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
  disclaimers: {
    openAccess:
      "Open Access structures, eligibility, charges and regulatory requirements vary by state, consumer category and applicable regulations. Final project structures should be evaluated based on current regulations and a project-specific feasibility assessment.",
    calculator:
      "Indicative estimate — subject to technical and commercial feasibility.",
    general:
      "Subject to feasibility, applicable regulations, project structure and commercial assessment.",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Solar EPC", href: "/solutions/epc" },
      { label: "RESCO", href: "/solutions/resco" },
      { label: "Open Access", href: "/solutions/open-access" },
      { label: "O&M", href: "/solutions/om" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
