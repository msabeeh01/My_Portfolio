import ExperienceBento from "./ExperienceBento";

// array of experience, each object contains job, position, skills, descItems, date
const experiences = [
  {
    job: "Turina Techonologie Inc.",
    position: "Software Engineer, Front-end",
    skills: [
      "React Native",
      "JavaScript",
      "CSS",
      "TypeScript",
      "Expo",
      "C#",
      "ASP.NET",
      "MSSQL",
      "GitHub",
    ],
    descItems: [
      "Constructed high‑performance iOS/Android mobile application and front‑end for a start up company featuring using React Native.",
      "Regularly collaborated in an agile setting with stakeholders and designers to develop a responsive, intuitive design using CSS and various libraries, focusing on user experience and engagement.",
      "Reduced overall development time of project and front end by implenting themes and re‑usable components",
      "Resolved full stack bugs in timely manner to ensure flawless integration with existing backend and meet deadlines",
      "Configured and tested C# ASP.NET Web Api and MSSQL database",
    ],
    date: "Mar 2024 - Present",
  },
  {
    job: "Prism Driving School",
    position: "Freelance Software Engineer, Full stack",
    skills: [
      "React",
      "Next.js",
      "Supabase",
      "Javascript",
      "TailwindCSS",
      "Redis",
      "Google OAuth",
      "Vercel",
      "Cypress",
    ],
    descItems: [
      "Developed a responsive web application over a period of 3 months leveraging React, Next.js, and Node.js, enhancing user experience",
      "Implemented a high-performance back end infrastructure using Redis cloud caching, achieving a 40% improvement in data retrieval speed and a 50% boost in application performance.",
      "Implemented Supabase as the secure hosting solution, ensuring 99.9% uptime and robust data security",
      "Incorporated Google APIs into a student registration and management system, utilizing OAuth for secure authentication resulting in a 30% reduction in administrative overhead and smoother operations.",
      "Designed intuitive and visually appealing interfaces using CSS and TailwindCSS, decreasing front-end development time by 60%.",
      "Managed CI/CD pipelines via Vercel, reducing deployment times by 60% and errors by 45%, resulting in faster releases and higher-quality software.",
      "Conducted comprehensive end-to-end and component testing with Cypress, identifying and resolving 80% of potential issues before deployment, significantly reducing post-release bugs",
    ],
    date: "Dec 2023 - Present",
  },
  {
    job: "Hakka Designs",
    position: "Freelance Software Engineer, Full stack",
    skills: ["SvelteKit", "CSS", "TailwindCSS", "Vercel", "Cypress", "GitHub"],
    descItems: [
      "Engineered a portfolio website using SvelteKit, leveraging its component-based architecture and optimized compilation for a lean, high-performance site that meets modern web standards, yielding a 30% reduction in page load times and a 20% increase in site responsiveness.",
      "Collaborated with a Graphic Designer over 2 months to develop a responsive, intuitive design using CSS and TailwindCSS, enhancing smooth navigation and user engagement.",
      "Streamlined deployment process by implementing Vercel CLI, enabling seamless Git integration, automating build, test, and deployment cycles, reducing manual errors and accelerating time-to-market for new features and updates by 40%.",
      "Ensured cross-browser compatibility and optimal performance using Cypress automated testing, achieving a 95% compatibility rate and a 20% improvement in load times across all browsers.",
    ],
    date: "Jan 2024 - Feb 2024",
  },
  {
    job: "Game Pill",
    position: "Volunteer QA Tester",
    skills: ["QA Testing", "Excel", "Google Forms and Sheets"],
    descItems: [
      "Executed comprehensive test cases with a group of 13 for an unannounced project",
      "Authored 25 detailed bug reports, each with clear, concise steps to reproduce issues, significantly enhancing communication with the development team.",
      "Maintained effective communication with 2 supervisors of the QA team, proactively escalating critical issues for timely resolution.",
    ],
    date: "Feb 2024",
  },
];

const ExperienceSetCombine = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between break-all my-14 items-center">
        <div className="text-6xl font-bold">Experience</div>
        <div className="text-4xl rounded-full bg-white p-4">💼</div>
      </div>

      <div className="flex flex-col gap-4">
        {/* experience bento cards mapped here */}
        {experiences.map((experience) => (
          <ExperienceBento
            job={experience.job}
            position={experience.position}
            skills={experience.skills}
            descItems={experience.descItems}
            date={experience.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSetCombine;
