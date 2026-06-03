import React from "react";

export default function AboutMe() {
  return (
    <section className="bg-gray-900 px-4 py-8 antialiased dark:bg-gray-900 md:py-16" id="about">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-0 md:gap-8 rounded-lg bg-gray-850 p-6 dark:bg-slate-800 lg:p-16">

        {/* Image */}
        <div className="flex justify-center">
          <img
            className="md:w-48 rounded-lg md:flex hidden"
            src="logo.png"
            alt="About Me Image"
          />
        </div>

        {/* Content */}
        <div className="rounded-xl bg-gray-900 p-6">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Hello, I'm Omar Hatem
          </h1>

          <p className="mb-6 text-gray-400">
            I'm a software engineer with experience in building scalable web
            applications. I’m also a graphic designer and have worked with
            Eldawlia Company.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}