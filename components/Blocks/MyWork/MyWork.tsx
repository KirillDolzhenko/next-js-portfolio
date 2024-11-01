import ButtonBorder from "@/components/ui/ButtonBorder";
import { workExperience } from "@/data";
import React from "react";

function MyWork() {
  return (
    <div id="work" className="flex flex-col gap-10 p-[10px]">
      <h4 className="heading text-white">
        My <span className="text-purple">work experience</span>
      </h4>
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-2 grid-rows-2 flex-wrap gap-x-[40px] gap-y-[30px] md:grid-cols-4">
          {workExperience.map((el, ind) => (
            <ButtonBorder
              key={ind}
              {...el}
              duration={Math.random() * 10000 + 30000}
            ></ButtonBorder>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyWork;
