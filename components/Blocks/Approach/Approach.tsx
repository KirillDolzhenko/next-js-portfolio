import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Card } from "@/components/ui/Cards";
import { approachData } from "@/data";
import React from "react";

function Approach() {
  return (
    <div id="approach" className="flex flex-col gap-10">
      <h4 className="heading text-white">
        My <span className="text-purple">approach</span>
      </h4>
      <div>
        <div className="flex flex-wrap justify-between gap-10 px-3">
          {approachData.map((el, ind) => (
            <Card {...el} key={ind} number={++ind}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={el.colors}
                dotSize={2}
              />
              <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Approach;
