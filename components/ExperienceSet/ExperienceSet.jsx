import ProjectBento from "../ProjectSet/ProjectBento"
import PillCard from "./PillCardStuff/PillCard"

const ExperienceSet = () => {

    return (
        <div className="flex gap-4 flex-col">
            {/* title spaces */}
            <div className="flex flex-col md:flex-row md:justify-between break-all">
                <div className="text-6xl font-bold">Experience</div>
                <div className="text-4xl">💼</div>
            </div>

            <div className="flex gap-4 flex-row flex-wrap" data-aos="fade-up">
                <PillCard skill={"React"} />
                <PillCard skill={"Next.js"} />
                <PillCard skill={"Javascript"} />
                <PillCard skill={"Supabase"} />
                <PillCard skill={"TailwindCSS"} />
                <PillCard skill={"Redis"} />
                <PillCard skill={"Google OAuth"} />
                <PillCard skill={"Vercel"} />
            </div>

            <div data-aos="fade-up">
                <div className="bg-white rounded-lg p-4">


                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Prism <span className="font-normal text-[#6E6E73]">Driving School</span></p>
                        <p className="text-[#6E6E73]">Freelance Software Engineer, Fullstack</p>
                    </div>

                    <div className="flex gap-4 flex-row flex-wrap">
                        <ul className="list-disc ml-6 flex gap-2 flex-col">
                            <li>Engineered a dynamic, fully responsive website utilizing React and Next.js 13, ensuring a seamless user experience tailored
                                to modern standards and industry best practices.</li>
                            <li>Architected and implemented a robust backend infrastructure with Redis caching, enhancing data retrieval speed and
                                application performance. Supabase served as the secure and scalable hosting solution, guaranteeing reliable uptime and data
                                security.</li>
                            <li>Integrated Google APIs to create a comprehensive student registration and management system, incorporating OAuth for
                                secure authentication, streamlining administrative processes and improving user account management.</li>
                            <li>Leveraged CSS and TailwindCSS to craft visually appealing and intuitive interfaces, adhering to modern design principles
                                and ensuring a cohesive and engaging user journey.</li>
                            <li>Managed continuous integration and delivery (CI/CD) pipelines through Vercel, automating the build, test, and deployment
                                cycles, thus reducing manual errors and accelerating time-to-market.</li>
                            <li>Executed end-to-end and component testing using Cypress, ensuring the fidelity and reliability of the entire application, and
                                identifying potential issues early in the development lifecycle.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ExperienceSet