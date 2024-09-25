"use client";

import Image, { StaticImageData } from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import project_placeholder from "@/public/images/projects/projectplaceholder.jpg";

import PillCard from "../ExperienceSet/PillCardStuff/PillCard";
import ProjectOverlay from "./OverlayStuff/ProjectOverlay";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

interface ProjectBentoProps {
  name: string;
  description: string;
  body?: string;
  skills: string[];
  image: StaticImageData;
  link?: string;
  github?: string;
  bullets?: string[];
}

const ProjectBento: React.FC<ProjectBentoProps> = ({
  name,
  description,
  body,
  skills,
  image,
  link,
  github,
  bullets,
}) => {
  const [open, setOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    Aos.init();
  });

  const handleOverlayOpen = () => {
    setOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setOverlayOpen(false);
  };

  return (
    <>
      <div data-aos="fade-up" className="m-0 p-0 w-full flex">
        {/* Project Card */}
        <div className="group w-full relative shadow-[2px_4px_12px_rgba(0,0,0,.08)] bg-white h-[420px] rounded-2xl md:hover:scale-105 transition-all duration-200">
          {/* Project Image */}
          {link ? (
            <a href={link} target="_blank">
              <Image
                alt="project"
                src={image ? image : project_placeholder}
                quality={100}
                className="object-cover h-full rounded-2xl w-full"
              />
            </a>
          ) : (
            <Image
              alt="project"
              src={image ? image : project_placeholder}
              quality={100}
              className="object-cover h-full rounded-2xl w-full"
              onClick={handleOverlayOpen}
            />
          )}

          {/* if no props provided no div */}
          {/* white text section */}
          {!name && !description && !skills && !image ? (
            <div></div>
          ) : (
            <div className="flex opacity-0 group-hover:opacity-100 transition-all duration-200 text-black rounded-b-2xl absolute bottom-0 p-4 bg-white min-h-[80px] w-full">
              <div className={"flex flex-col w-full" + (open ? " gap-4" : "")}>
                {/* title, description and spaced + sign */}
                <div className="flex-row flex w-full h-full justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="font-bold">{name}</p>
                    <p>{description}</p>
                  </div>

                  <div
                    className="active:bg-[#F5F5F7] hover:bg-[#F5F5F7] transition h-10 w-10 flex justify-center items-center duration-200 rounded-full"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                  >
                    <p>{open ? "-" : "+"}</p>
                  </div>
                </div>

                {/* hidden until hover - skills */}
                <div className="flex flex-col w-full">
                  {open && (
                    <div className="flex w-full gap-2 flex-wrap">
                      {skills.map((skill) => (
                        <PillCard key={skill} skill={skill} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {overlayOpen && (
        <ProjectOverlay
          name={name}
          body={body}
          skills={skills}
          link={link}
          github={github}
          bullets={bullets}
          onClose={handleOverlayClose}
        />
      )}
    </>
  );
};

export default ProjectBento;

