// src/components/Contact.js

import React from "react";
import {MailIcon, DownloadIcon, ChevronDoubleUpIcon} from "@heroicons/react/solid";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
      clearForm();
  }

    function clearForm() {
        document.getElementById("contact-form").reset();
    }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex-column sm:flex-nowrap flex-wrap">
        <form
            id="contact-form"
            data-netlify="true"
            method="POST"
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-1/2 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-black dark:text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Contact Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Please contact me by filling out the form. You could also e-mail me directly by clicking on the icon below.
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="relative mb-4">
                    <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <h2 className="title-font font-semibold text-black dark:text-white tracking-widest text-xs text-center">
                            E-MAIL
                        </h2>
                        <h2 className="title-font font-semibold text-black dark:text-white tracking-widest text-xs text-center">
                            TO TOP
                        </h2>                      
                    </div>
                    <div className="flex justify-between">
                        <a href="mailto:jonathanchen832@gmail.com" className="text-indigo-500 leading-relaxed">
                            <MailIcon className="w-12 h-12 hover:text-indigo-600" />
                        </a>
                        <a href="#top">
                            <ChevronDoubleUpIcon className="w-12 h-12 text-gray-500 hover:text-green-500 animate-bounce" />
                        </a>
                    </div>
                </div>
            </form>
      </div>
    </section>
  );
}
