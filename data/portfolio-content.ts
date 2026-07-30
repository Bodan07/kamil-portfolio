const assetPath = (path: string) =>
  process.env.NODE_ENV === "production" ? `/kamil-portfolio${path}` : path;

export const profile = {
  name: "Muhammad Najmi Kamil",
  handle: "najmi",
  role: "Frontend Engineer",
  location: "Bandung, ID",
  email: "najmi.kamil@gmail.com",
  status: "available for frontend work",
  focus: ["Interface systems", "React / TypeScript", "Applied AI vision"],
};

export const experiences = [
  {
    code: "EXP-01",
    role: "Frontend Engineer",
    place: "PT Tricada Intronik",
    time: "2025 - now",
    detail: "React, TypeScript, Refine, Ant Design, production UI.",
  },
  {
    code: "EXP-02",
    role: "Frontend Developer Intern",
    place: "Telkom Indonesia",
    time: "2024",
    detail: "Meeting-room booking, API integration, PostgreSQL-backed flow.",
  },
  {
    code: "EXP-03",
    role: "Mobile Development Cohort",
    place: "Bangkit Academy",
    time: "2024",
    detail: "Kotlin, TensorFlow Lite, mobile computer vision.",
  },
];

export const projects = [
  {
    code: "PRJ-01",
    name: "Facelify",
    type: "Attendance platform",
    image: assetPath(`/images/Facelify-dash.png`),
    stack: "React / Tailwind / TanStack",
    detail: "Selfie attendance, leave tracker, HR dashboard.",
    href: "https://facelify.web.id",
    repo: "https://github.com/Bodan07/Facelify",
  },
  {
    code: "PRJ-02",
    name: "TemuSync",
    type: "Booking platform",
    image: assetPath(`/images/temusync-dash.png`),
    stack: "React / Shadcn UI / TanStack",
    detail: "Room booking, queue visibility, scheduling flow.",
    href: "https://temusync.web.id",
    repo: "https://github.com/Bodan07/temusync",
  },
  {
    code: "PRJ-03",
    name: "Zebra Cross AI",
    type: "Computer vision",
    image: assetPath(`/images/TA.jpg`),
    stack: "YOLOv9 / Python / Ultralytics",
    detail: "Traffic violation detection for zebra-cross cases.",
    href: "https://github.com/Bodan07/Final-TA",
    repo: "https://github.com/Bodan07/Final-TA",
  },
  {
    code: "PRJ-04",
    name: "RasaGram",
    type: "Android app",
    image: assetPath(`/images/RasaGram.jpg`),
    stack: "Kotlin / TensorFlow / Firebase",
    detail: "Traditional Indonesian food recognition from camera input.",
    href: "https://github.com/RasaGram",
    repo: "https://github.com/RasaGram",
  },
  {
    code: "PRJ-05",
    name: "COOKOS",
    type: "Mobile app",
    image: assetPath(`/images/COOKOS.jpg`),
    stack: "Flutter / Figma / Firebase",
    detail: "Recipe discovery and meal planning interface.",
    href: "https://github.com/Bodan07/COOKOS_NEW",
    repo: "https://github.com/Bodan07/COOKOS_NEW",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Refine",
  "Ant Design",
  "Flutter",
  "Kotlin",
  "Python",
  "YOLO",
  "TensorFlow",
  "Figma",
];

export const slides = ["Index", "Experience", "Projects", "Stack", "Contact"];
