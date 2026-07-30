"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import PortfolioHeroShader from "@/components/ui/portfolio-hero-with-paper-shaders";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/kamil-portfolio" : "";

const experiences = [
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

const projects = [
  {
    code: "PRJ-01",
    name: "Facelify",
    type: "Attendance platform",
    image: `${BASE_PATH}/images/Facelify-dash.png`,
    stack: "React / Tailwind / TanStack",
    detail: "Selfie attendance, leave tracker, HR dashboard.",
    href: "https://facelify.web.id",
    repo: "https://github.com/Bodan07/Facelify",
  },
  {
    code: "PRJ-02",
    name: "TemuSync",
    type: "Booking platform",
    image: `${BASE_PATH}/images/temusync-dash.png`,
    stack: "React / Shadcn UI / TanStack",
    detail: "Room booking, queue visibility, scheduling flow.",
    href: "https://temusync.web.id",
    repo: "https://github.com/Bodan07/temusync",
  },
  {
    code: "PRJ-03",
    name: "Zebra Cross AI",
    type: "Computer vision",
    image: `${BASE_PATH}/images/TA.jpg`,
    stack: "YOLOv9 / Python / Ultralytics",
    detail: "Traffic violation detection for zebra-cross cases.",
    href: "https://github.com/Bodan07/Final-TA",
    repo: "https://github.com/Bodan07/Final-TA",
  },
  {
    code: "PRJ-04",
    name: "RasaGram",
    type: "Android app",
    image: `${BASE_PATH}/images/RasaGram.jpg`,
    stack: "Kotlin / TensorFlow / Firebase",
    detail: "Traditional Indonesian food recognition from camera input.",
    href: "https://github.com/RasaGram",
    repo: "https://github.com/RasaGram",
  },
  {
    code: "PRJ-05",
    name: "COOKOS",
    type: "Mobile app",
    image: `${BASE_PATH}/images/COOKOS.jpg`,
    stack: "Flutter / Figma / Firebase",
    detail: "Recipe discovery and meal planning interface.",
    href: "https://github.com/Bodan07/COOKOS_NEW",
    repo: "https://github.com/Bodan07/COOKOS_NEW",
  },
];

const skills = [
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

const slides = ["Index", "Experience", "Projects", "Stack", "Contact"];

function CompactRow({
  left,
  title,
  right,
  children,
}: {
  left: string;
  title: string;
  right: string;
  children: ReactNode;
}) {
  return (
    <div className="rebuild-row">
      <span>{left}</span>
      <strong>{title}</strong>
      <em>{right}</em>
      <p>{children}</p>
    </div>
  );
}

export default function PortfolioRebuild() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const activeProject = useMemo(
    () => projects[Math.min(activeSlide, projects.length - 1)],
    [activeSlide],
  );

  const goToSlide = (nextSlide: number) => {
    setActiveSlide((nextSlide + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goToSlide(activeSlide + 1);
      if (event.key === "ArrowLeft") goToSlide(activeSlide - 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  return (
    <main
      className="rebuild"
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const delta = touchStart - event.changedTouches[0].clientX;
        if (Math.abs(delta) > 42) goToSlide(activeSlide + (delta > 0 ? 1 : -1));
        setTouchStart(null);
      }}
    >
      <div className="rebuild-shell">
        <header className="rebuild-topbar">
          <Link href="#deck" className="rebuild-mark" aria-label="Kamil home">
            m najmi kamil.cv
          </Link>
          <nav aria-label="Portfolio slides">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                className={activeSlide === index ? "is-active" : ""}
                onClick={() => goToSlide(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </nav>
        </header>

        <section
          id="deck"
          className="rebuild-track"
          style={{ transform: `translate3d(${-activeSlide * 100}%, 0, 0)` }}
          aria-live="polite"
        >
          <article className="rebuild-slide rebuild-slide--hero">
            <div className="rebuild-panel rebuild-panel--copy">
              <p className="rebuild-meta">Frontend Engineer / Bandung</p>
              <h1>
                NAJMI KAMIL
                <br />
                FRONTEND ENGINEER
              </h1>
              <div
                className="rebuild-terminal-list"
                aria-label="Profile summary"
              >
                <p>
                  <span>Stack</span>
                  <span>React</span>
                  <span>TypeScript</span>
                </p>
                <p>
                  <span>Focus</span>
                  <span>Interface</span>
                  <span>AI Vision</span>
                </p>
                <p>
                  <span>Base</span>
                  <span>Bandung</span>
                  <span>Remote</span>
                </p>
                <p>
                  <span>MISC</span>
                  <span>Ship fast</span>
                  <span>Stay sharp</span>
                </p>
              </div>
            </div>

            <div className="rebuild-panel rebuild-panel--visual">
              <PortfolioHeroShader className="rebuild-shader" />
              {/* <p>abstract halftone / pink noise</p> */}
            </div>
          </article>

          <article className="rebuild-slide">
            <div className="rebuild-board">
              <div className="rebuild-board-head">
                <span>02</span>
                <h2>Experience</h2>
              </div>
              <div className="rebuild-list">
                {experiences.map((item) => (
                  <div className="rebuild-terminal-row" key={item.code}>
                    <span>{item.place}</span>
                    <span>{item.role}</span>
                    <span>{item.time}</span>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rebuild-slide">
            <div className="rebuild-project-board">
              <div className="rebuild-board-head">
                <span>03</span>
                <h2>Projects</h2>
              </div>
              <div className="rebuild-project-list">
                {projects.map((project) => (
                  <article className="rebuild-project-row" key={project.code}>
                    <Link href={project.href} target="_blank" rel="noreferrer">
                      <span>{project.name}</span>
                      <strong>{project.type}</strong>
                      <em>{project.stack}</em>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                    <div className="rebuild-project-preview">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="260px"
                      />
                      <p>{project.stack}</p>
                      <small>{project.detail}</small>
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github aria-hidden="true" />
                        repo
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article className="rebuild-slide">
            <div className="rebuild-board">
              <div className="rebuild-board-head">
                <span>04</span>
                <h2>Stack</h2>
              </div>
              <ul className="rebuild-skill-grid">
                {skills.map((skill, index) => (
                  <li key={skill}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rebuild-slide">
            <div className="rebuild-board rebuild-board--contact">
              <div className="rebuild-board-head">
                <span>05</span>
                <h2>Contact</h2>
              </div>
              <CompactRow
                left="MAIL"
                title="najmi.kamil@gmail.com"
                right="open"
              >
                Build request, collaboration, or role discussion.
              </CompactRow>
              <CompactRow left="LOC" title="Bandung, West Java" right="ID">
                Remote-friendly. Product UI, frontend systems, applied AI.
              </CompactRow>
              <div className="rebuild-links">
                <a href="mailto:najmi.kamil@gmail.com">
                  <Mail aria-hidden="true" />
                  Email
                </a>
                <Link
                  href="https://github.com/Bodan07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github aria-hidden="true" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammadnajmikamil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin aria-hidden="true" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </article>
        </section>

        <footer className="rebuild-controls">
          <button
            type="button"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <p>
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
            <span>{slides[activeSlide]}</span>
          </p>
          <button
            type="button"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </footer>
      </div>
    </main>
  );
}
