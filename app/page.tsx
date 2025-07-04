"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import ExperienceItem from "@/components/ExperienceItem";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaGoogle,
  FaGitlab,
} from "react-icons/fa";

const jobs = [
  {
    position: "Co-founder, Lead Developer, Sorta",
    startDate: "2025",
    endDate: "PRESENT",
    desc: "Co-founder of a startup",
    link: "https://planwithsorta.com",
  },
  {
    position: "Frontend Mobile Engineer, Turina Technologies",
    startDate: "2024",
    endDate: "PRESENT",
    desc: "Lead the development of two cross-platform fintech mobile applications using React Native, consistently rated 4.6★+ on both iOS and Android. Engineered and shipped a design system to unify UI/UX across the apps, reducing engineering redundancy and speeding up time-to-release. Collaborated with designers and backend engineers to scope, prioritize, and deliver features in an agile environment. Owned performance and CI/CD improvements, enabling faster, leaner deployments.",
    link: "https://turinatech.ca/",
  },
  {
    position: "Fullstack Developer, DocTalk",
    startDate: "2023",
    endDate: "2024",
    desc: "Engineered modular platform tools in Next.js for seamless reuse across multiple internal applications. Transformed user-generated content from the Notion API into structured JSON for dynamic rendering via custom templates. Developed a branching form builder in React that adapts to user input and supports complex, client-specific logic. Implemented real-time messaging with Supabase Realtime and persisted shared video session state for Agora-powered calls. Designed and integrated a real-time and scheduled notification system using RabbitMQ. Managed authentication and ABAC-based authorization with Auth0 to ensure secure, role-aware access across environments.",
    link: "https://www.doctalk.com/"
  },

  {
    position: "Full stack Engineer, Prism Driving School",
    startDate: "2022",
    endDate: "2023",
    desc: "Designed and deployed a scalable lesson booking platform supporting 200+ monthly users. Modernized infrastructure with Redis caching and Supabase migration to streamline performance and reduce admin overhead. Standardized UI components and automated deployments, cutting delivery cycles by over 80%. Owned end-to-end architecture across frontend, backend, and cloud layers.",
    link: "https://prismdriving.ca",
  },
  {
    position: "Frontend Engineer, Hakka Designs",
    startDate: "2023",
    endDate: "2023",
    desc: "Rebuilt a high-performance portfolio site for a creative agency, replacing a legacy WordPress installation. Achieved 70% reduction in image payload via responsive image optimization. Integrated Contentful CMS to enable clients to manage and publish content independently in minutes.",
    link: "https://glendotcc.vercel.app/",
  },
];

const projects = [
  {
    position: "Cockatrice/Webatrice",
    startDate: "2025",
    desc: "Contributed to porting a legacy C++ card game to the web using Vue.js, supporting 800+ daily users. Developed real-time client-server communication with WebSockets and Express.js. Integrated gRPC proto headers for seamless cross-platform play and implemented Quasar for a consistent, material-design UI.",
    link: "https://github.com/Cockatrice/Cockatrice"
  },
  {
    position: "Traffic Sign Detection",
    startDate: "2025",
    desc: "Built a full-stack autonomous driving simulation app using a custom-trained YOLOv11n model on 3K+ traffic sign images. Improved model accuracy by 40% through hyperparameter tuning. Developed a Flask backend to serve the model and a React frontend for live demos, delivering a seamless interactive experience.",
    link: "https://github.com/msabeeh01/TrafficSignDetection_YoloV8"
  },
];

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, #2D0D89, #03071e`,
        transition: "background 0.1s ease-out",
      }}
    >
      {/* Grid layout with sticky left and scrollable right */}
      <div className="flex flex-col xl:flex-row lg:mx-80 items-center lg:items-start lg:py-0 justify-center">
        {/* LEFT: Sticky */}
        <div className="h-screen xl:block xl:w-[50%] xl:sticky xl:top-0 xl:h-screen py-24 xl:px-24 xl:flex-col xl:justify-center">
          <div className="flex flex-col h-full">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Muhammad Sabeeh
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-400 sm:text-xl">
              Full Stack Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              Full-stack developer blending design finesse with engineering depth — from performant UIs to scalable backends.
            </p>

            <div className="h-full flex flex-col justify-between">
              <ul className="mt-16 w-max">
                {["about", "experience", "projects"].map((item) => (
                  <li key={item}>
                    <a
                      className="group flex items-center py-3"
                      href={`#${item}`}
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="text-slate-200 flex-row flex gap-4 ">
                <a href="https://github.com/msabeeh01" target="_">
                  <div className="text-[#8A98B7] hover:text-[#E2E8F0] transition-all duration-300">
                    <FaGithub size={24} />
                  </div>
                </a>
                <a href="https://instagram.com/iamsabeehbro" target="_">
                  <div className="text-[#8A98B7] hover:text-[#E2E8F0] transition-all duration-300">
                    <FaInstagram size={24} />
                  </div>
                </a>
                <a href="https://linkedin.com/in/msabeeh01" target="_">
                  <div className="text-[#8A98B7] hover:text-[#E2E8F0] transition-all duration-300">
                    <FaLinkedin size={24} />
                  </div>
                </a>
                <a href="https://gitlab.com/msabeeh01" target="_">
                  <div className="text-[#8A98B7] hover:text-[#E2E8F0] transition-all duration-300">
                    <FaGitlab size={24} />
                  </div>
                </a>
                <a href="mailto:msabeeh.dev@gmail.com" target="_">
                  <div className="text-[#8A98B7] hover:text-[#E2E8F0] transition-all duration-300">
                    <FaGoogle size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Scrollable Content */}
        <div className="w-full flex justify-center items-center flex-col xl:block xl:w-[50%] py-24 text-white">
          <div className="flex flex-col gap-4 max-w-[90%] inactive" id="about">
            <div>
              I'm a software developer who loves building well-crafted digital
              experiences—whether that means fine-tuning a mobile UI, optimizing
              backend performance, or designing scalable full-stack systems. My
              work spans the entire stack, but I’m especially energized by
              projects that combine thoughtful design with robust engineering.
            </div>
            <div>
              Currently, I’m a Frontend Engineer at Turina Technologies, where
              I’ve delivered production-ready fintech apps using React Native,
              improved performance and release cycles, and led feature planning
              to align engineering with design.
            </div>
            <div>
              Beyond client and product work, I’ve contributed to open-source
              projects like Cockatrice, where I helped port a C++ desktop game
              client to the web using Vue.js and WebSockets—enabling
              cross-platform play for hundreds of daily users. I also enjoy
              experimenting with machine learning, like building a traffic sign
              detection app.
            </div>
            <div>
              When I’m not coding, I’m likely playing Magic: The Gathering,
              assembling Lego kits, learning a new language, or diving into the
              systems that make my favorite games tick. I love trying out new
              tools and tech, and I’m always looking for ways to grow as both a
              developer and a problem-solver.
            </div>
          </div>

          <ul className="mt-16 space-y-2 max-w-[90%]" id="experience">
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Experience
            </h2>
            {jobs.map((item, index) => (
              <li
                key={index}
                className="text-black"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ExperienceItem
                  position={item.position}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  desc={item.desc}
                  link={item.link}
                  isHovered={hoveredIndex === index}
                  isAnyHovered={hoveredIndex !== null}
                />
              </li>
            ))}
          </ul>

          <ul className="mt-16 space-y-2 max-w-[90%]" id="projects">
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Open Source Contributions
              {/* <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z"
                    fill="#E2E8F0"
                  ></path>{" "}
                  <path
                    d="M1 2H6V4H3V13H12V10H14V15H1V2Z"
                    fill="#E2E8F0"
                  ></path>{" "}
                </g>
              </svg> */}
            </h2>
            {projects.map((item, index) => (
              <li
                key={index}
                className="text-black"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ExperienceItem
                  position={item.position}
                  startDate={item.startDate}
                  desc={item.desc}
                  link={item.link}
                  isHovered={hoveredIndex === index}
                  isAnyHovered={hoveredIndex !== null}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
