import { motion } from "motion/react";

const techList: String[] = ["React", "TypeScript", "Flutter"];

const techList2: String[] = ["React Native", "Node.JS", "AWS"];

const AboutMe = () => {
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
      className="w-[1000px] flex-col flex gap-8 lg:items-start items-center"
    >
      <div className="flex flex-row items-center gap-4">
        <p className="numbered">01.</p>
        <p className="subheading">About Me</p>
        <div className="h-[1px] w-[100px] block bg-[#233554]"></div>
      </div>

      <div className="flex gap-4 justify-between flex-col lg:flex-row lg:items-start items-center">
        <div className="flex flex-col gap-4 w-[60%] text-[20px]">
          <p>
            I'm a software developer who loves building well-crafted digital
            experiences. Whether that means fine-tuning a mobile UI, optimizing
            backend performance, or designing scalable full-stack systems. My
            work spans the entire stack, but I’m especially energized by
            projects that combine thoughtful design with robust engineering.
          </p>

          <p>
            Currently, I’m a Frontend Engineer at Turina Technologies, where
            I’ve delivered production-ready fintech apps using React Native,
            improved performance and release cycles, and led feature planning to
            align engineering with design.
          </p>

          <p>
            Beyond client and product work, I’ve contributed to open-source
            projects like Cockatrice, where I helped port a C++ desktop game
            client to the web using Vue.js and WebSockets; enabling
            cross-platform play for hundreds of daily users. I also enjoy
            experimenting with machine learning, like building a traffic sign
            detection app.
          </p>

          <p>
            When I’m not coding, I’m likely playing Magic: The Gathering,
            assembling Lego kits, learning a new language, or diving into the
            systems that make my favorite games tick. I love trying out new
            tools and tech, and I’m always looking for ways to grow as both a
            developer and a problem-solver.
          </p>

          <div className="grid grid-cols-2 text-white ">
            <ul className="list-disc ml-4 ">
              {techList.map((item, index) => (
                <li className="text-[13px]">{item}</li>
              ))}
            </ul>
            <ul className="list-disc ml-4">
              {techList2.map((item, index) => (
                <li className="text-[13px]">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <img
            height="300"
            width="300"
            style={{ background: "black" }}
            // src="https://v4.brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
