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
        "Delivered 2 high-rated fintech mobile apps (4.6* avg) for iOS/Android.",
      "Improved app performance by reducing initial bundle size by 40MB through async routes and image optimization.",
"Led agile feature planning, reducing delivery time by 40% while ensuring design and engineering alignment.",
"Engineered a reusable design library reducing code redundancy by 60% and accelerating timelines by 3 days.",
"Decreased release cycles from 1 week to 3 days by implementing a CI/CD pipeline using GitLab CI and Expo.",
    ],
    date: "Mar 2024 - Jun 2025",
  },
  {
    job: "Prism Driving School",
    position: "Software Engineer, Full stack",
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
            "Deployed booking platform handling 200+ monthly student lessons, reducing scheduling downtime by 80%.",
"Integrated Redis caching to optimize query performance (1.2s → 0.7s avg response time).",
"Automated deployment workflows via Vercel, reducing update time from 2 hours to 15 minutes.",
"Migrated legacy student/payment data to Supabase with real-time sync, saving 15+ hours/week in admin effort.",
"Built CSS component library to standardize UI across app screens, reducing feature dev time from 3 to 1 day(s).",
      
    ],
    date: "May 2022 - March 2024",
  },
  {
    job: "Hakka Designs",
    position: "Freelance Software Engineer, Full stack",
    skills: ["SvelteKit", "CSS", "TailwindCSS", "Vercel", "Cypress", "GitHub"],
    descItems: [
      "Built portfolio website replacing designer’s outdated WordPress site.",
      "Reduced image payload by 70% via WebP conversion and responsive optimization with Next.js Image component.",
"Integrated Contentful CMS, enabling clients to publish new projects in under 10 minutes (previously 2+ hours)."
    ],
    date: "April 2023 - May 2023",
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
