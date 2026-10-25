"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/constants/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type.includes(filter as never));

  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader dark eyebrow="Portfolio" title="Our Project Portfolio" description="Sample projects illustrating our EPC, RESCO and Open Access capabilities." />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === f ? "bg-[var(--energy-blue)] text-white" : "bg-[var(--off-white)] text-[var(--graphite)]/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
