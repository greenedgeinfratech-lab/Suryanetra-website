import { Project } from "@/types";

// NOTE: All entries below are placeholders clearly marked as Sample Projects.
// Replace with real, verified project data before production launch.
export const PROJECTS: Project[] = [
  {
    id: "sample-1",
    name: "Sample Project — Industrial Rooftop",
    image: "/images/projects/placeholder-1.jpg",
    capacity: "1.2 MW",
    location: "Sample Location, India",
    type: ["EPC", "Rooftop", "C&I"],
    clientSector: "Manufacturing (sample)",
    status: "Commissioned",
    isSample: true,
  },
  {
    id: "sample-2",
    name: "Sample Project — RESCO C&I Asset",
    image: "/images/projects/placeholder-2.jpg",
    capacity: "3.5 MW",
    location: "Sample Location, India",
    type: ["RESCO", "Ground Mount", "C&I"],
    clientSector: "Warehousing & Logistics (sample)",
    status: "Under Construction",
    isSample: true,
  },
  {
    id: "sample-3",
    name: "Sample Project — Open Access Supply",
    image: "/images/projects/placeholder-3.jpg",
    capacity: "5.0 MW",
    location: "Sample Location, India",
    type: ["Open Access"],
    clientSector: "Group-Captive Consumers (sample)",
    status: "In Development",
    isSample: true,
  },
  {
    id: "sample-4",
    name: "Sample Project — Institutional Rooftop",
    image: "/images/projects/placeholder-4.jpg",
    capacity: "800 kW",
    location: "Sample Location, India",
    type: ["EPC", "Rooftop"],
    clientSector: "Educational Institution (sample)",
    status: "Commissioned",
    isSample: true,
  },
];

export const PROJECT_FILTERS = [
  "All",
  "EPC",
  "RESCO",
  "Open Access",
  "Rooftop",
  "Ground Mount",
  "C&I",
] as const;
