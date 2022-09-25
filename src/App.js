//src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles"
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 body-font transition" id="top">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Contact />
    </main>
  );
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark';
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light';
}
