import { BentoGrid } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
import React from "react";

const Grid = () => {
  return (
    <section id="about" className="relative z-0 pt-[10px]">
      <BentoGrid items={gridItems} />
    </section>
  );
};

export default Grid;
