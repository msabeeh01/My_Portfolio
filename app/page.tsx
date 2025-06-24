"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import ExperienceItem from "@/components/ExperienceItem";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    // page
    <div
      className="flex flex-col lg:grid lg:grid-cols-2 justify-items-center lg:place-items-center h-screen"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px,  #370617, #03071e`,
        transition: "background 0.1s ease-out",
      }}
    >
      {/* LEFT SIDE */}
      <div className="h-full py-24 lg:px-0 px-24">
        {/* FLEX COL FOR STACK */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl cz-color-15788258 cz-color-15460325">
            Muhammad Sabeeh
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl cz-color-15788258 cz-color-15460325">
            Front End Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal inactive">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:py-24 h-screen gap-12 px-24 lg:px-0 w-full text-white overflow-y-scroll">
        <div className="flex flex-col gap-4 inactive lg:w-[58%]">
          <div>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </div>
          <div>
            Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing
            in accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo’s frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience.
          </div>
          <div>
            In the past, I've had the opportunity to develop software across a
            variety of settings — from advertising agencies and large
            corporations to start-ups and small digital product studios.
            Additionally, I also released a comprehensive video course a few
            years ago, guiding learners through building a web app with the
            Spotify API.
          </div>
          <div>
            In my spare time, I’m usually climbing, reading, hanging out with my
            wife and two cats, or running around Hyrule searching for Korok
            seedsKorok seeds.
          </div>
        </div>
        <ul className="space-y-2 p-4 lg:w-[58%]">
          {Array.from({ length: 30 }, (_, i) => (
            <li key={i} className="text-black">
              <ExperienceItem />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
