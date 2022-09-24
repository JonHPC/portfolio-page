// src/components/Skills.js

import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-200 dark:bg-gray-700 rounded flex p-4 h-full items-center shadow-md">
                <img src={skill.image} alt="" className="object-contain h-12 w-12 "/>
                <span className="title-font font-medium text-black dark:text-white pl-4 ">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

