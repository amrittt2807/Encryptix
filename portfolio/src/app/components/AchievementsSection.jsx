"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AchievementsSection = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] my-8"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-scroll">
        <li>
          <Image
            src="/images/skills/html.svg"
            alt="HTML"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/css.svg"
            alt="CSS"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/javascript.svg"
            alt="JS"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/react.svg"
            alt="React"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/tailwind.svg"
            alt="Tailwind"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/nodejs.svg"
            alt="Node Js"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/mongodb.svg"
            alt="mongoDb"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/next-js.svg"
            alt="Next"
            className="bg-white rounded-full"
            width={60}
            height={60}
          />
        </li>
      </ul>
      <ul
        aria-hidden="true"
        className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-scroll"
      >
        <li>
          <Image
            src="/images/skills/html.svg"
            alt="HTML"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/css.svg"
            alt="CSS"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/javascript.svg"
            alt="JS"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/react.svg"
            alt="React"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/tailwind.svg"
            alt="Tailwind"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/nodejs.svg"
            alt="Node Js"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/mongodb.svg"
            alt="mongoDb"
            className=""
            width={60}
            height={60}
          />
        </li>
        <li>
          <Image
            src="/images/skills/next-js.svg"
            alt="Next"
            className="bg-white rounded-full"
            width={60}
            height={60}
          />
        </li>
      </ul>
    </div>
  );
};

export default AchievementsSection;
