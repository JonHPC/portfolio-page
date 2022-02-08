// src/components/Profiles

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { profiles } from "../data";

export default function Profiles() {
  return (
    <section id="profiles">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Profiles
        </h1>
        <div className="flex flex-wrap m-4">
          {profiles.map((profile) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-700 bg-opacity-40 p-8 rounded ">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{profile.quote}</p>
                <a href={profile.url}>
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={profile.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
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