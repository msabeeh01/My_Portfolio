import ProjectBento from "./ProjectBento"

// project images
import driveroo_bentoimage from "@/public/images/projects/driveroo_bentoimage.png"
import whiskerwizard_bentoimage from "@/public/images/projects/whiskerwizard_projectimage.png"
import experiments_bentoimage from "@/public/images/projects/experiments_bentoimage.webp"
import probono_freelance_bentoimage from "@/public/images/projects/probono_freelance_bentoimage.jpg"

const ProjectSet = () => {
  return (
    <div className="flex flex-col">
      {/* title spaces */}
      <div className="flex flex-col md:flex-row justify-between items-center my-14" data-aos="fade-up">
        <div className="text-6xl font-bold break-all">Projects</div>
        <div className="text-4xl rounded-full bg-white p-4">📝</div>
      </div>

      {/* projects cards */}
      <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4">


        <ProjectBento
          name={"Whisker Wizard"}
          description={"Powerful Web and Mobile Application for meticulous pet owners"}
          skills={["Flutter", "React", "TypeScript", "JavaScript", "Dart", "Supabase"]}
          image={whiskerwizard_bentoimage}
          github={"https://github.com/msabeeh01/whisker-wizard"}
          body={"Whisker Wizard is a powerful web application designed to help pet owners manage their furry friends' health and well-being with ease. Keep your pets healthy and happy by tracking their health records, scheduling care tasks, and monitoring their progress over time."}
          bullets={["Engineered an application using TypeScript and Dart, with a frontend built on NextJS and a mobile interface crafted with React Native and Flutter.",
            "Designed and implemented reusable UI components with Tailwind and CSS, resulting in a consistent and intuitive user interface.",
            "Integrated Supabase for robust data storage solutions, including image handling and authorization mechanisms, ensuring secure access and efficient data operations.",
            "Optimized web performance by employing Redis caching, significantly improving data fetch times and enhancing user experience.",
            "Developed a backend micro-service architecture to schedule message deliveries based on user-defined schedules using Twilio, providing reliable communication features.",
            "Utilized React’s state management, props, forms, and events to create interactive and dynamic components, contributing to a rich and engaging user experience."]}
        />

        <ProjectBento
          name={"Driveroo"}
          description={"Mobile application that seeks to revolutionize the process of scheduling driving lessons"}
          body={"Driveroo is a mobile application that seeks to revolutionize the process of scheduling driving lessons. It is designed to provide a seamless and efficient experience for both driving instructors and students."}
          skills={["React Native", "NodeJS", "Javascript", "MongoDB / Atlas", "Firebase"]}
          image={driveroo_bentoimage}
          bullets={["Spearheaded the design and development of a ride-sharing platform using JavaScript, React Native, and ExpressJS, with a backend built on NodeJS.",
            "Created a custom authentication flow from scratch using React Context, Expo Secure Store, and JWT, providing a secure and seamless login experience for users.",
            "Managed asynchronous interactions with the backend to facilitate real-time booking, reservation, and data retrieval, enhancing the platform’s usability and responsiveness.",
            "Configured MongoDB Atlas models, controllers, and API routes using Mongoose, establishing a robust and scalable backend infrastructure.",
            "Documented the development process using UML diagrams, test cases, user stories, and conducted acceptance testing to ensure high-quality delivery"]} />




        <ProjectBento
          name={"Graphic Designer's Portfolio"}
          description={"Probono Freelance Web and Mobile Web Development for a graphic designer"}
          skills={["SvelteKit", "JavaScript", "TailwindCSS"]}
          image={probono_freelance_bentoimage}
          link={"https://glenathy-portfolio-msabeeh01.vercel.app"}
        />

        <ProjectBento
          name={"Experiments"}
          description={"A repo for experimenting and learning new things via half baked projects"}
          skills={["Alot"]}
          image={experiments_bentoimage}
          link={"https://github.com/msabeeh01/experiments_library"} />

        <ProjectBento />
        <ProjectBento />

      </div>
    </div>
  )
}

export default ProjectSet