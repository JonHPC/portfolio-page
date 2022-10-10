//src/components/About.js

import React from "react";

export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md-pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
                        Hi, I'm Jonathan.
                        <br className="hidden lg:inline-block" /> I love building and creating awesome stuff!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm an enthusiastic and highly motivated full stack developer who loves constantly learning about new technologies. I am willing to do whatever it takes to get the job done!
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-indigo-600 dark:bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 dark:hover:bg-green-600 rounded text-lg">
                           Contact Me
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-800 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white rounded text-lg">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-5/6 md:w-1/2 md:ml-4  w-5/6">
                    <img className="object-cover object-center rounded shadow-md" alt="hero" src="./images/jon_headshot.jpg"/>
                </div>
            </div>
        </section>
    );
}
