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
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import PortfolioHeroShader from "@/components/ui/portfolio-hero-with-paper-shaders";
import {
  experiences,
  profile,
  projects,
  skills,
  slides,
} from "@/data/portfolio-content";

type TerminalEntry = {
  command: string;
  output: string;
};

const prompt = "kamil@portfolio:~$";

const welcomeAscii = String.raw`██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝`;

const initialHistory: TerminalEntry[] = [
  {
    command: "welcome",
    output: `${welcomeAscii}

[SYSTEM STARTING UP] - Portfolio v2.0

Welcome to Kamil Portfolio! Type help to see available commands.`,
  },
];

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

function getTerminalOutput(command: string) {
  switch (command) {
    case "help":
      return `commands
about       profile short
projects    selected work
skills      stack list
experience  work history
contact     email and links
clear       reset terminal`;
    case "about":
    case "whoami":
      return `${profile.name}
${profile.role}
${profile.location}

I design and develop digital solutions that blend creativity
with technology. With one year of experience in modern web
development, I specialize in building sleek, high-performance
interfaces—while exploring the future of tech through my passion
for Computer Vision and AI. From concept to code, I turn ideas
into intuitive, impactful digital realities
                
focus
${profile.focus.map((item) => `- ${item}`).join("\n")}`;
    case "projects":
    case "ls selected-work":
      return projects
        .map(
          (project) =>
            `${project.name.padEnd(16)} ${project.type}\n  ${project.stack}\n  ${project.href}`,
        )
        .join("\n");
    case "skills":
      return skills.join("  ");
    case "experience":
      return experiences
        .map(
          (item) =>
            `${item.time.padEnd(12)} ${item.place}\n  ${item.role}\n  ${item.detail}`,
        )
        .join("\n");
    case "contact":
    case "status":
      return `${profile.status}
email: ${profile.email}
github: https://github.com/Bodan07
linkedin: https://www.linkedin.com/in/muhammadnajmikamil/`;
    case "":
      return "";
    default:
      return `command not found: ${command}
type "help" for commands`;
  }
}

export default function PortfolioRebuild() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [terminalHistory, setTerminalHistory] =
    useState<TerminalEntry[]>(initialHistory);
  const [currentCommand, setCurrentCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const goToSlide = (nextSlide: number) => {
    setActiveSlide((nextSlide + slides.length) % slides.length);
  };

  const runTerminalCommand = () => {
    const command = currentCommand.trim().toLowerCase();

    if (command === "clear") {
      setTerminalHistory([]);
    } else {
      setTerminalHistory((history) => [
        ...history,
        { command: currentCommand.trim(), output: getTerminalOutput(command) },
      ]);
    }

    setCurrentCommand("");
    setHistoryIndex(-1);
  };

  const handleTerminalKeyDown = (
    event: ReactKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      runTerminalCommand();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHistoryIndex((index) => {
        const commandHistory = terminalHistory.filter((entry) => entry.command);
        const nextIndex = Math.min(index + 1, commandHistory.length - 1);
        setCurrentCommand(
          commandHistory[commandHistory.length - 1 - nextIndex]?.command || "",
        );
        return nextIndex;
      });
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHistoryIndex((index) => {
        const commandHistory = terminalHistory.filter((entry) => entry.command);
        const nextIndex = Math.max(index - 1, -1);
        setCurrentCommand(
          nextIndex === -1
            ? ""
            : commandHistory[commandHistory.length - 1 - nextIndex]?.command ||
                "",
        );
        return nextIndex;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (isTyping) return;
      if (event.key === "ArrowRight") goToSlide(activeSlide + 1);
      if (event.key === "ArrowLeft") goToSlide(activeSlide - 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ block: "nearest" });
  }, [terminalHistory]);

  const renderTerminalOutput = (output: string) => {
    const linkPattern =
      /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    return output.split(linkPattern).map((part, index) => {
      if (part.startsWith("http")) {
        return (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
          >
            {part}
          </a>
        );
      }

      if (part.includes("@") && part.includes(".")) {
        return (
          <a key={`${part}-${index}`} href={`mailto:${part}`}>
            {part}
          </a>
        );
      }

      return <span key={`${part}-${index}`}>{part}</span>;
    });
  };

  const renderWelcomeOutput = (output: string) => {
    const lines = output.split("\n");
    const ascii = lines.slice(0, 6).join("\n");
    const rest = lines.slice(6).join("\n").trim();

    return (
      <>
        <strong>{ascii}</strong>
        {rest && <span>{rest}</span>}
      </>
    );
  };

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
            <div className="rebuild-panel rebuild-panel--copy rebuild-terminal">
              <div className="rebuild-terminal-header">
                <div aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p>kamil@portfolio:~</p>
                <small>ONLINE</small>
              </div>

              <div
                ref={terminalRef}
                className="rebuild-terminal-screen"
                onClick={() => terminalInputRef.current?.focus()}
              >
                {terminalHistory.map((entry, index) => (
                  <div
                    className="rebuild-terminal-entry"
                    key={`${entry.command}-${index}`}
                  >
                    <p className="rebuild-terminal-command">
                      <span className="rebuild-terminal-prompt">{prompt}</span>{" "}
                      {entry.command}
                    </p>
                    {entry.output && (
                      <pre
                        className={`rebuild-terminal-output ${
                          entry.command === "welcome"
                            ? "rebuild-terminal-output--welcome"
                            : ""
                        }`}
                      >
                        {entry.command === "welcome"
                          ? renderWelcomeOutput(entry.output)
                          : renderTerminalOutput(entry.output)}
                      </pre>
                    )}
                  </div>
                ))}

                <div className="rebuild-terminal-input-row">
                  <span className="rebuild-terminal-prompt">{prompt}</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(event) => setCurrentCommand(event.target.value)}
                    onKeyDown={handleTerminalKeyDown}
                    aria-label="Terminal command"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                <div ref={terminalBottomRef} />
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
