import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-orbitron font-medium title-font mb-4 text-white">
            My Portfolio
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Browse the gallery of my projects below, each project links to the
            git repository or deployed application.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray bg-black opacity-0 hover:opacity-100">
                  <div className="flex justify-center space-x-2 mb-1">
                    {project.techStack.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.icon}
                        alt={tech.name}
                        className="h-8 w-8"
                      />
                    ))}
                  </div>
                  <h1 className="title-font text-lg font-orbitron font-medium text-white mb-3">
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
