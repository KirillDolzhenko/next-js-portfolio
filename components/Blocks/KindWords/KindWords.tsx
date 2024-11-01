import { CustomerComments } from "@/components/ui/CustomerComments";
import { companies, testimonials } from "@/data";
import { div, image } from "framer-motion/client";
import React from "react";

const KindWords = () => {
  return (
    <div id="words" className="flex flex-col gap-10 px-[10px] pt-[20px]">
      <h4 className="heading mb-10 text-white">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h4>
      <CustomerComments items={testimonials}></CustomerComments>
      <div className="mx-auto flex max-w-screen-lg flex-col flex-wrap items-center justify-between gap-7 small-sm:flex-row">
        {companies.map((el) => (
          <div className="mx-auto flex items-center justify-center gap-2">
            <img src={el.img} alt={el.name} />

            <img src={el.nameImg} alt={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KindWords;
