import ExperienceSet from "./ExperienceBento"
const ExperienceSetCombine = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between break-all my-14 items-center">
                <div className="text-6xl font-bold">Experience</div>
                <div className="text-4xl rounded-full bg-white p-4">💼</div>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceSet
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
                    skills={["React", "Next.js", "Supabase", "Javascript", "TailwindCSS", "Redis", "Google OAuth", "Vercel"]}
                    descItems={["Engineered a dynamic, fully responsive website utilizing React and Next.js 13, ensuring a seamless user experience tailored to modern standards and industry best practices.",
                        "Architected and implemented a robust backend infrastructure with Redis caching, enhancing data retrieval speed and application performance. Supabase served as the secure and scalable hosting solution, guaranteeing reliable uptime and data security.",
                        "Integrated Google APIs to create a comprehensive student registration and management system, incorporating OAuth for secure authentication, streamlining administrative processes and improving user account management.",
                        "Leveraged CSS and TailwindCSS to craft visually appealing and intuitive interfaces, adhering to modern design principles and ensuring a cohesive and engaging user journey.",
                        "Managed continuous integration and delivery (CI/CD) pipelines through Vercel, automating the build, test, and deployment cycles, thus reducing manual errors and accelerating time-to-market.",
                        "Executed end-to-end and component testing using Cypress, ensuring the fidelity and reliability of the entire application, and identifying potential issues early in the development lifecycle."]}
                    position={"QA Tester"}
                    job={"GamePill"}
                />

            </div>

        </div>
    )
}

export default ExperienceSetCombine