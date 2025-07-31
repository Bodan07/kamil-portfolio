"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Code,
  Zap,
  Rocket,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ];

  const experiences = [
    {
      title: "Frontend Engineer",
      company: "PT Tricada Intronik",
      period: "2025 - Present",
      description:
        "Develop of responsive web applications using React and AntDesign. Collaborated with design team to implement pixel-perfect UI components.",
      technologies: ["React", "TypeScript", "Ant Design", "Refine.dev"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Frontend Developer Intern",
      company: "Telkom Indonesia",
      period: "2024",
      description:
        "Developed internal meeting room booking web application using React.js, ensuring seamless implementation of pre-designed UI/UX. Integrated with the backend via APIs, enabling efficient data processing.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Mobile Development Cohort",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "2024",
      description:
        "Learned Android app development using Kotlin through a comprehensive curriculum from Dicoding. Explored Machine Learning applications in Android, including integrating TensorFlow Lite for image recognition. Developed the capstone project 'RasaGram', an Android application that recognizes Indonesian traditional dishes using Computer Vision. ",
      technologies: ["Kotlin", "Firebase", "TensorFlow", "Jetpack Compose"],
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  const projects = [
    {
      title: "Zebra Cross Violation Detection with YOLOv9",
      description:
        "Developed an AI-based traffic violation detection system using YOLOv9 to identify zebra cross violations in Indonesia.",
      image: "/kamil-portfolio/images/TA.jpg",
      technologies: ["YOLO", "TensorFlow", "Ultralytics"],
      github: "https://github.com/Bodan07/Final-TA",
      demo: "#projects",
    },
    {
      title: "RasaGram",
      description:
        "Developed an android application utilizes Machine Learning and Computer Vision to recognize traditional Indonesian dishes.",
      image: "/kamil-portfolio/images/RasaGram.jpg",
      technologies: ["Kotlin", "Figma", "Jetpack Compose", "Firebase"],
      github: "https://github.com/RasaGram",
      demo: "#projects",
    },
    {
      title: "COOKOS",
      description:
        "COOKOS is a recipe app designed to help users find and cook delicious meals that suit their budget. It makes meal planning simple, affordable, and accessible for everyone.",
      image: "/kamil-portfolio/images/COOKOS.jpg",
      technologies: ["Flutter", "Figma", "Firebase"],
      github: "https://github.com/Bodan07/COOKOS_NEW",
      demo: "#projects",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Najmi Kamil
            </h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative group hover:text-cyan-400 transition-all duration-300"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative">
                <Image
                  src="/kamil-portfolio/images/kamil-profile.png"
                  alt="Kamil profile"
                  width={250}
                  height={250}
                  className="rounded-full border-2 border-cyan-400/50 relative z-10"
                />
                <div
                  className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-spin"
                  style={{ animationDuration: "10s" }}
                />
              </div>
            </div>
            <div className="text-center lg:text-left flex-1">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Muhammad Najmi Kamil
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-gray-300 mb-6 font-light">
                  <span className="text-cyan-400">Frontend Engineer</span> &{" "}
                  <span className="text-purple-400">
                    Computer Vision Enthusiast
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                I design and develop digital solutions that blend creativity
                with technology. With one year of experience in modern web
                development, I specialize in building sleek, high-performance
                interfaces—while exploring the future of tech through my passion
                for Computer Vision and AI. From concept to code, I turn ideas
                into
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  intuitive, impactful digital realities
                </span>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="/kamil-portfolio/files/CV_Muhammad%20Najmi%20Kamil.pdf"
                  download
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
                <a href="mailto:najmi.kamil@gmail.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </a>
              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/Bodan07" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/muhammadnajmikamil/",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/najmikml_",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="group relative p-3 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    <social.icon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  My Journey
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate Frontend Engineer with a strong interest in
                  AI and Computer Vision, blending creative design with
                  intelligent systems. My journey began at Telkom University,
                  where I studied Informatics and discovered how code can shape
                  meaningful digital experiences.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Over the years, I’ve honed my skills across mobile and web
                  development ecosystems, combining modern tools and frameworks
                  to build digital experiences that feel intuitive and
                  futuristic. I’m deeply committed to writing clean,
                  maintainable, scalable code, and ensuring that every product
                  delivers a user experience with a touch of magic.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I’m always curious, always learning, and driven by the
                  challenge of turning complex ideas into seamless user
                  experiences.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Bandung, Jawa Barat" },
                    { icon: Calendar, text: "1 Year Experience" },
                    { icon: Mail, text: "najmi.kamil@gmail.com" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <item.icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-cyan-400">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mobile Development",
                      "Web Development",
                      "UI/UX Design",
                      "Computer Vision",
                      "AI Integration",
                    ].map((interest, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-purple-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gray-800/50 text-gray-300 border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: [
                  "React",
                  "Flutter",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vite",
                ],
                gradient: "from-cyan-500/20 to-blue-500/20",
              },
              {
                title: "Artificial Intelligence",
                skills: ["YOLO", "Python", "TensorFLow", "Anaconda"],
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                title: "Tools & Cloud",
                skills: ["Git", "Docker", "Figma", "Jenkins"],
                gradient: "from-green-500/20 to-teal-500/20",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${category.gradient} border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gray-800/50 text-gray-300 border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 z-10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/kamil-portfolio/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gray-800/50 text-gray-300 border-gray-600/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into extraordinary digital
            experiences? I'm always excited to collaborate on innovative
            projects that push the boundaries of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-lg px-8 py-6"
            >
              <Link href="mailto:john.doe@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
            >
              <Link href="https://linkedin.com/in/johndoe">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800/50 z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} John Doe. Crafted with passion and
            cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
