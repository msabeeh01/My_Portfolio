import { useState } from "react";
import { motion } from "motion/react";
const ExperienceSet = [
  {
    position: "Turina Technologies",
    role: "Frontend Engineer",
    items: [
      "Lead the development of two cross-platform fintech mobile applications using React Native, consistently rated 4.6★+ on both iOS and Android.",
      "Engineered and shipped a design system to unify UI/UX across the apps, reducing engineering redundancy and speeding up time-to-release.",
      "Collaborated with designers and backend engineers to scope, prioritize, and deliver features in an agile environment.",
      "Owned performance and CI/CD improvements, enabling faster, leaner deployments.",
    ],
  },
  {
    position: "DocTalk",
    role: "Fullstack Developer",
    items: [
      "Engineered modular platform tools in Next.js for seamless reuse across multiple internal applications.",
      "Transformed user-generated content from the Notion API into structured JSON for dynamic rendering via custom templates.",
      "Developed a branching form builder in React that adapts to user input and supports complex, client-specific logic.",
      "Implemented real-time messaging with Supabase Realtime and persisted shared video session state for Agora-powered calls.",
      "Designed and integrated a real-time and scheduled notification system using RabbitMQ.",
      "Managed authentication and ABAC-based authorization with Auth0 to ensure secure, role-aware access across environments.",
    ],
  },
  {
    position: "Prism Driving School",
    role: "Fullstack Developer",
    items: [
      "Designed and deployed a scalable lesson booking platform supporting 200+ monthly users.",
      "Modernized infrastructure with Redis caching and Supabase migration to streamline performance and reduce admin overhead.",
      "Standardized UI components and automated deployments, cutting delivery cycles by over 80%.",
      "Owned end-to-end architecture across frontend, backend, and cloud layers.",
    ],
  },
  {
    position: "Hakka Designs",
    role: "Frontend Engineer",
    items: [
      "Rebuilt a high-performance portfolio site for a creative agency, replacing a legacy WordPress installation.",
      "Achieved 70% reduction in image payload via responsive image optimization.",
      "Integrated Contentful CMS to enable clients to manage and publish content independently in minutes.",
    ],
  },
];

const Experience = () => {
  const [currentSelection, setCurrentSelection] = useState(ExperienceSet[0]);
  return (
    <motion.div
      whileInView={{
        y: 0, // Changed from position: 0
        opacity: 1, // Changed from opacity: 100
      }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      initial={{ y: 40, opacity: 0 }} // Changed from position: 40
      exit={{ y: 40, opacity: 0 }} // Changed from position: 40
      viewport={{ once: false, amount: 0.2 }}
      className="w-[800px] flex flex-col gap-8 py-[100px]"
    >
      <div className="flex flex-row items-center gap-4">
        <div className="numbered">02. </div>
        <h2 className="subheading">Where I've Worked</h2>
        <div className="h-[1px] w-[300px] block bg-[#233554]"></div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 place-content-center">
        <div className="col-span-1">
          <ul>
            {ExperienceSet.map((item, index) => (
              <p
                onClick={() => setCurrentSelection(item)}
                className={`hover:bg-[#112240] hover:text-[#64FFDA] items-center flex cursor-pointer px-[20px] h-[42px] text-[13px] transition-all
        border-l-4 
        ${
          currentSelection.position === item.position
            ? "border-[#64FFDA] font-bold text-[#64FFDA]"
            : "border-[#233554] "
        }
      `}
              >
                {item.position}
              </p>
            ))}
          </ul>
        </div>
        <div className="col-span-2 gap-4 flex flex-col">
          <h3 className="text-[#CCD6F6] font-semibold">
            <span className="text-[22px]">{currentSelection.role}</span>
            <span className="text-[22px] text-[#64FFDA]">
              {" "}
              @ {currentSelection.position}
            </span>

            <h3>DATE - DATE</h3>
          </h3>

          <ul className="list-disc ml-4 flex flex-col gap-4">
            {currentSelection.items.map((items, index) => (
              <li key={index} className="text-[##8892B0]">
                {items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
