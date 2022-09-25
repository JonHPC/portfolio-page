// src/components/Profiles

import React from "react";
import { profiles } from "../data";

export default function Profiles() {
  return (
    <section id="profiles">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black dark:text-white mb-12">
          Profiles
        </h1>
        <div className="flex flex-wrap m-4">
          {profiles.map((profile) => (
            <div key={profile.company} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-700 bg-opacity-40 p-4 rounded shadow-md">
                <p className="leading-relaxed mb-4">{profile.quote}</p>
                <a href={profile.url}>
                  <div className="inline-flex items-center rounded p-1">
                    <img
                      alt="testimonial"
                      src={profile.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black dark:text-white">
                        {profile.name}
                      </span>
                      <span className="text-gray-500 text-sm uppercase">
                        {profile.company}
                      </span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}