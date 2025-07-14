"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import { motion } from "motion/react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaGoogle,
  FaGitlab,
} from "react-icons/fa";
import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import RightProjectText from "@/components/RightProjectText";
import LeftProjectText from "@/components/LeftProjectText";
import LeftFixedSocial from "@/components/LeftFixedSocial";
import RightFixedSocial from "@/components/RightFixedSocial";

const jobs = [
  {
    position: "Co-founder, Lead Developer, Sorta",
    startDate: "2025",
    endDate: "PRESENT",
    desc: "Co-founder of a startup",
    link: "https://trysorta.com",
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
    link: "https://www.doctalk.com/",
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
    link: "https://github.com/Cockatrice/Cockatrice",
  },
  {
    position: "Traffic Sign Detection",
    startDate: "2025",
    desc: "Built a full-stack autonomous driving simulation app using a custom-trained YOLOv11n model on 3K+ traffic sign images. Improved model accuracy by 40% through hyperparameter tuning. Developed a Flask backend to serve the model and a React frontend for live demos, delivering a seamless interactive experience.",
    link: "https://github.com/msabeeh01/TrafficSignDetection_YoloV8",
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
      className="relative w-full grid grid-cols-12 items-center"
      style={{
        
        transition: "background 0.1s ease-out",
      }}
    >
      <div className="col-span-1">
        <LeftFixedSocial />
      </div>

      <div className="col-span-10">
        <div className="px-[300px] h-screen flex flex-col w-full justify-center">
          <Intro />
        </div>

        <motion.div className="lg:px-[200px] flex flex-col gap-[200px] items-center">
          <AboutMe />
          <Experience />
          <motion.div
            whileInView={{
              y: 0, // Changed from position: 0
              opacity: 1, // Changed from opacity: 100
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            initial={{ y: 40, opacity: 0 }} // Changed from position: 40
            exit={{ y: 40, opacity: 0 }} // Changed from position: 40
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-row items-center w-full gap-4"
          >
            <p className="numbered">03.</p>
            <p className="subheading">Some of my work</p>
            <div className="h-[1px] w-[300px] block bg-[#233554]"></div>
          </motion.div>
          <RightProjectText
            projectDesc={projects[0].desc}
            projectTitle={projects[0].position}
            projectLink={projects[0].link}
          />
          <LeftProjectText
            projectDesc={projects[1].desc}
            projectTitle={projects[1].position}
            projectLink={projects[1].link}
          />
        </motion.div>
      </div>

      <div className="col-span-1">
        <></>
      </div>

      {/* <RightFixedSocial /> */}
    </div>
  );
}
