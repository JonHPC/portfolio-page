// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {

    function toggleMode(){
        if(localStorage.theme === 'dark'){
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else{
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    }

  return (
    <header className="bg-gray-200 dark:bg-gray-800 md:sticky top-0 z-10 position-relative">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about"className="title-font font-medium text-black dark:text-white mb-4 md:mb-0">
          <p className="ml-3 text-xl">
            Jonathan Chen
          </p>
        </a>
        <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#skills" className="mr-5 hover:text-black dark:hover:text-white">
              Skills
            </a>
            <a href="#projects" className="mr-5 hover:text-black dark:hover:text-white">
                Projects
            </a>
            <a href="#profiles" className="mr-5 hover:text-black dark:hover:text-white">
                Profiles
            </a>
        </nav>
        <button onClick={toggleMode} className="py-2 px-3 mr-5">Toggle Mode</button>
        <a
          href="#contact"
          className="inline-flex items-center  dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}