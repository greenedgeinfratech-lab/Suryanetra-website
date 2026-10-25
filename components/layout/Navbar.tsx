"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants/company";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-[var(--graphite)] hover:text-[var(--energy-blue)]"
              >
                {link.label}
                {"children" in link && link.children && (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                )}
              </Link>
              {"children" in link && link.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="w-56 rounded-lg border border-black/5 bg-white p-2 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-[var(--graphite)] hover:bg-[var(--off-white)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-md bg-[var(--energy-blue)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--navy)]"
          >
            Request Consultation
          </Link>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="ml-3 border-l border-black/10 pl-3">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-2 py-2 text-sm text-[var(--graphite)]/80"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-md bg-[var(--energy-blue)] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Request Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
