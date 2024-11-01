import { AnimatedPinDemo } from "@/components/ui/AnimatedPin";
import { projects } from "@/data";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="pt-[10px]">
      <h4 className="heading mb-10 text-white">
        A small collection of{" "}
        <span className="text-purple">recent projects</span>
      </h4>
      <div className="gap-y-15 mx-auto flex w-full max-w-[1400px] flex-wrap justify-between gap-x-7">
        {projects.map((el) => (
          <AnimatedPinDemo {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
