import ExperienceSet from "./ExperienceBento"
const ExperienceSetCombine = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between break-all my-14 items-center">
                <div className="text-6xl font-bold">Experience</div>
                <div className="text-4xl rounded-full bg-white p-4">💼</div>
            </div>

            <div className="flex flex-col gap-4">
                {/*  Developed a responsive web application leveraging React, Next.js, and Node.js, enhancing user experience
• Implemented a high-performance back end infrastructure using Redis cloud caching, achieving a 40% improvement in data
retrieval speed and a 50% boost in application performance.
• Implemented Supabase as the secure hosting solution, ensuring 99.9% uptime and robust data security
• Incorporated Google APIs into a student registration and management system, utilizing OAuth for secure authentication
resulting in a 30% reduction in administrative overhead and smoother operations.
• Designed intuitive and visually appealing interfaces using CSS and TailwindCSS, aligning with modern design principles.
• Managed CI/CD pipelines via Vercel, automating build, test, and deployment processes to reduce manual errors and expedite
time-to-market, Reducing deployment times by 60% and errors by 45%, resulting in faster releases and higher-quality
software.
• Conducted automated comprehensive end-to-end and component testing with Cypress, ensuring application reliability and
early issue detection, identifying and resolving 80% of potential issues before deployment, significantly reducing post-release
bugs */}
                <ExperienceSet
                    skills={["React", "Next.js", "Supabase", "Javascript", "TailwindCSS", "Redis", "Google OAuth", "Vercel", "Cypress"]}
                    descItems={["Developed a responsive web application leveraging React, Next.js, and Node.js, enhancing user experience.",
                        "Implemented a high-performance back end infrastructure using Redis cloud caching, achieving a 40% improvement in data retrieval speed and a 50% boost in application performance.",
                        "Implemented Supabase as the secure hosting solution, ensuring 99.9% uptime and robust data security.",
                        "Incorporated Google APIs into a student registration and management system, utilizing OAuth for secure authentication resulting in a 30% reduction in administrative overhead and smoother operations.",
                        "Designed intuitive and visually appealing interfaces using CSS and TailwindCSS, aligning with modern design principles.",
                        "Managed CI/CD pipelines via Vercel, automating build, test, and deployment processes to reduce manual errors and expedite time-to-market, Reducing deployment times by 60% and errors by 45%, resulting in faster releases and higher-quality software.",
                        "Conducted automated comprehensive end-to-end and component testing with Cypress, ensuring application reliability and early issue detection, identifying and resolving 80% of potential issues before deployment, significantly reducing post-release bugs."]}
                    position={"Freelance Software Engineer, Full stack"}
                    job={"Prism Driving School"}
                />

                {/*  Engineered a portfolio website using SvelteKit, leveraging its component-based architecture and optimized compilation for a
lean, high-performance site that meets modern web standards, yielding a 30% reduction in page load times and a 20% increase
in site responsiveness.
• Collaborated with a Graphic Designer to develop a responsive, intuitive design using CSS and TailwindCSS, enhancing
smooth navigation and user engagement.
• Streamlined deployment process by implementing Vercel CLI, enabling seamless Git integration; automated build, test,
deployment cycles, reducing manual errors and accelerating time-to-market for new features and updates by 40%.
• Ensured cross-browser compatibility and optimal performance using Cypress automated testing, achieving a 95%
compatibility rate and a 20% improvement in load times across all browsers.

*/}

                <ExperienceSet
                    skills={["SvelteKit", "CSS", "TailwindCSS", "Vercel", "Cypress", "GitHub"]}
                    descItems={[
                        "Engineered a portfolio website using SvelteKit, leveraging its component-based architecture and optimized compilation for a lean, high-performance site that meets modern web standards, yielding a 30% reduction in page load times and a 20% increase in site responsiveness.",
                        "Collaborated with a Graphic Designer to develop a responsive, intuitive design using CSS and TailwindCSS, enhancing smooth navigation and user engagement.",
                        "Streamlined deployment process by implementing Vercel CLI, enabling seamless Git integration; automated build, test, deployment cycles, reducing manual errors and accelerating time-to-market for new features and updates by 40%.",
                        "Ensured cross-browser compatibility and optimal performance using Cypress automated testing, achieving a 95% compatibility rate and a 20% improvement in load times across all browsers."]
                    }
                    position={"Freelance Software Engineer, Full stack"}
                    job={"Glen Chan-Choong"}
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