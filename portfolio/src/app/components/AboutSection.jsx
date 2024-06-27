"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-row flex-wrap ">
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40 ">Node.js</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">Express</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">Tailwind</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">TypeScript</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">JavaScript</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">React</li>
        <li className="px-5 py-2 bg-gray-700 rounded-xl mr-4 mb-3 z-10 backdrop-blur-md bg-opacity-40">Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p className="leading-6 font-extralight text-slate-400">Currently pursuing Bachelor of Technology in Electronics and Communication Engineering from <span className="font-semibold ">IIT (ISM) Dhanbad</span></p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-10 h-auto md:h-[100vh] overflow-hidden" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 justify-around items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 content-center">
        <Image src="/images/about-image.jpeg" className="rounded-2xl drop-shadow-[-2px_2px_5px_#000000]" alt="About" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full pl-5">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base  text-slate-200 font-thin">
          I am a full stack web developer passionate about creating interactive and responsive web applications. With experience in JavaScript, React, Redux, Node.js, Express, Next.js, Tailwind, HTML, CSS, and Git, I am always eager to expand my knowledge and skill set. As a quick learner and a team player, I am enthusiastic about collaborating with others to build amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8 font-light text-sm">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
