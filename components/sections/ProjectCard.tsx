import { Project } from "@/types";
import { MapPin } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div
        className="flex h-48 items-center justify-center text-xs font-medium text-white/70"
        style={{ background: "linear-gradient(135deg, var(--navy), var(--energy-blue))" }}
      >
        Image placeholder
      </div>
      <div className="p-6">
        {project.isSample && (
          <span className="mb-2 inline-block rounded-full bg-[var(--solar-gold)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--warm-orange)]">
            Sample Project
          </span>
        )}
        <h3 className="text-base font-bold text-[var(--navy)]">{project.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-[var(--graphite)]/60">
          <MapPin className="h-3.5 w-3.5" /> {project.location}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-[var(--off-white)] px-2.5 py-1 font-medium">{project.capacity}</span>
          <span className="rounded-full bg-[var(--off-white)] px-2.5 py-1 font-medium">{project.status}</span>
        </div>
        <div className="mt-3 text-xs text-[var(--graphite)]/60">{project.clientSector}</div>
      </div>
    </div>
  );
}
