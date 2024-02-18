import ExperienceSet from "@/components/ExperienceSet/ExperienceSet";
import FirstSetCombine from "@/components/FirstSet/FirstSetCombine";
import ProjectSet from "@/components/ProjectSet/ProjectSet";

export default function Home() {
  return (
    // page
    <div className="flex flex-col place-items-center justify-center min-w-screen place-self-center min-h-screen">
      {/* content holder */}
      <div className="flex flex-col w-full md:w-2/3 min-h-full bg-[#F5F5F7] p-4 gap-2">
        {/* content */}
        <FirstSetCombine />
        <ProjectSet />

        <div className="flex flex-col md:flex-row md:justify-between break-all my-6">
          <div className="text-6xl font-bold">Experience</div>
          <div className="text-4xl">💼</div>
        </div>

        <ExperienceSet
          title={"Prism Driving School"}
          skills={["React", "Next.js", "Supabase", "Javascript", "TailwindCSS", "Redis", "Google OAuth", "Vercel"]}
          descItems={["Engineered a dynamic, fully responsive website utilizing React and Next.js 13, ensuring a seamless user experience tailored to modern standards and industry best practices.",
            "Architected and implemented a robust backend infrastructure with Redis caching, enhancing data retrieval speed and application performance. Supabase served as the secure and scalable hosting solution, guaranteeing reliable uptime and data security.",
            "Integrated Google APIs to create a comprehensive student registration and management system, incorporating OAuth for secure authentication, streamlining administrative processes and improving user account management.",
            "Leveraged CSS and TailwindCSS to craft visually appealing and intuitive interfaces, adhering to modern design principles and ensuring a cohesive and engaging user journey.",
            "Managed continuous integration and delivery (CI/CD) pipelines through Vercel, automating the build, test, and deployment cycles, thus reducing manual errors and accelerating time-to-market.",
            "Executed end-to-end and component testing using Cypress, ensuring the fidelity and reliability of the entire application, and identifying potential issues early in the development lifecycle."]}
          position={"Freelance Software Engineer, Fullstack"}
          job={"Prism Driving School"}
        />

<ExperienceSet
          title={"Prism Driving School"}
          skills={["React", "Next.js", "Supabase", "Javascript", "TailwindCSS", "Redis", "Google OAuth", "Vercel"]}
          descItems={["Engineered a dynamic, fully responsive website utilizing React and Next.js 13, ensuring a seamless user experience tailored to modern standards and industry best practices.",
            "Architected and implemented a robust backend infrastructure with Redis caching, enhancing data retrieval speed and application performance. Supabase served as the secure and scalable hosting solution, guaranteeing reliable uptime and data security.",
            "Integrated Google APIs to create a comprehensive student registration and management system, incorporating OAuth for secure authentication, streamlining administrative processes and improving user account management.",
            "Leveraged CSS and TailwindCSS to craft visually appealing and intuitive interfaces, adhering to modern design principles and ensuring a cohesive and engaging user journey.",
            "Managed continuous integration and delivery (CI/CD) pipelines through Vercel, automating the build, test, and deployment cycles, thus reducing manual errors and accelerating time-to-market.",
            "Executed end-to-end and component testing using Cypress, ensuring the fidelity and reliability of the entire application, and identifying potential issues early in the development lifecycle."]}
          position={"Freelance Software Engineer, Fullstack"}
          job={"Prism Driving School"}
        />



      </div>
    </div>
  );
}
