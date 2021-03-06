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
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
        <a href="#about"className="title-font text-center font-medium text-black dark:text-white mb-4 md:mb-0">
          <p className="ml-0 md:ml-3 text-xl">
            Jonathan Chen
          </p>
        </a>
        <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#skills" className="mr-3 md:mr-5 hover:text-black dark:hover:text-white">
              Skills
            </a>
            <a href="#projects" className="mr-3 md:mr-5 hover:text-black dark:hover:text-white">
                Projects
            </a>
            <a href="#profiles" className="mr-0 md:mr-5 hover:text-black dark:hover:text-white">
                Profiles
            </a>
        </nav>
        <button onClick={toggleMode} className="focus:outline-none py-1 px-3 border-2 border-gray-500 mr-0 md:mr-5 hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded">Toggle Mode</button>
        <a
          href="#contact"
          className="inline-flex items-center hover:text-black dark:hover:text-white bg-gray-200 dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-base mt-0 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}