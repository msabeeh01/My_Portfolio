"use client"
import BentoCard from "@/components/FirstSet/BentoCardStuff/BentoCard";
import AboutMe from "./AboutMe";
import MemojiBento from "./MemojiBento";
import { Button } from "../ui/Button";

const FirstSetCombine = () => {
  return (
    // grid container, first col is 2/3, second col is 1/3
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4">

      {/* about me and bento */}
      <div className="flex flex-col grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 gap-2">


        <div className="h-full">
          <AboutMe />
          <Button onClick={() => { console.debug('HELLO') }}>
            <p>hello</p>
          </Button>

        </div>

        <div className="gap-1 flex flex-wrap md:flex-row md:gap-4 w-full lg:justify-stretch place-items-center" data-aos="fade-right">
          <BentoCard skill={"React"} progress={100} />
          <BentoCard skill={"Next.js"} progress={100} />
          <BentoCard skill={"NodeJS"} progress={100} />
          <BentoCard skill={"Javascript"} progress={100} />
          <BentoCard skill={"C#"} progress={85} />
          <BentoCard skill={"Git"} progress={100} />
        </div>
      </div>

      {/* memoji bento */}
      <div className="flex grid-rows-subgrid row-span-2">
        <MemojiBento />
      </div>
    </div>
  )

}

export default FirstSetCombine
