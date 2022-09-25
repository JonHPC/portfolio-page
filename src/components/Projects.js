// src/components/Projects.js
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black dark:text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded  shadow-md"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 dark:border-gray-700 bg-gray-300 dark:bg-gray-900 rounded opacity-0 transition ease-in-out hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-600 dark:text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}