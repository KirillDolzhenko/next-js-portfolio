import { BentoGrid } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
import React from "react";

const Grid = () => {
  return (
    <section className="relative z-0">
      <BentoGrid items={gridItems} />
    </section>
  );
};

export default Grid;
