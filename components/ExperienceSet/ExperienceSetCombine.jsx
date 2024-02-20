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

                {/* dont touch until NDA is confirmed  */}
                {/* <ExperienceSet
                    skills={["QA Testing"]}
                    descItems={["Executed comprehensive test cases for an unannounced title, ensuring product quality and adherence to the software development life cycle.",
                        "Conducted both functional and subjective testing, effectively separating the two to provide a holistic evaluation of the game's performance.",
                        "Wrote detailed bug reports with clear, concise steps to reproduce issues, facilitating efficient communication with the development team.",
                        "Investigated and analyzed game issues to find root causes, contributing to a deeper understanding of the game's mechanics and player experience.",
                        "Communicated effectively with the development team, escalating critical issues when necessary to ensure timely resolution and maintain the quality of the product."]}
                    position={"QA Tester"}
                    job={"GamePill"}
                /> */}

            </div>

        </div>
    )
}

export default ExperienceSetCombine