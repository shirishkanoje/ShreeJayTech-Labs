import React from "react";
import styles from "../../style";
import { projectsData } from "../../constants";

const Projects = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} py-10 min-h-screen`}>
      <h1 className="text-white text-3xl font-bold mb-10">
        Our Projects
      </h1>

      <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
        {projectsData.map((proj) => (
          
          <div
            key={proj.id}
            className="flex md:flex-row flex-col bg-black-gradient rounded-xl overflow-hidden group"
          >

            {/* LEFT TEXT */}
            <div className="flex-1 p-6">
              <h3 className="text-white text-xl font-semibold">
                {proj.project}
              </h3>

              <p className="text-blue-400">{proj.company}</p>

              <p className="text-gray-300 mt-2">
                {proj.description}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Tech: {proj.tech}
              </p>

              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 mt-3 inline-block"
              >
                View Project →
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.project}
                className="
                  w-full h-full object-cover
                  transition duration-500
                  group-hover:scale-110
                "
              />
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Projects;