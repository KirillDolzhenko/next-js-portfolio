"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaArrowPointer } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export function AnimatedPinDemo({
  title,
  des,
  img,
  iconLists,
  link,
  //   key,
}: {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  //   key?: string | number;
}) {
  return (
    <div className="mx-auto flex max-w-[250px] items-center justify-center small-sm:max-w-[400px] sm:max-w-[500px]">
      <PinContainer title={link} href={link}>
        <div className="flex min-w-[250px] flex-col gap-3 tracking-tight text-slate-100/50 small-sm:min-w-[300px] sm:min-w-[400px] sm:basis-1/2 2xl:min-w-[500px]">
          <div className="relative mt-4 flex w-full flex-1 overflow-hidden rounded-lg pb-[60%]">
            <img
              src={img}
              className="absolute h-full w-full object-cover"
              alt="image"
            />
          </div>
          <h3 className="m-0 line-clamp-1 max-w-full text-2xl font-bold text-slate-100">
            {title}
          </h3>
          <div className="text-8 !m-0 !p-0 text-base font-normal">
            <span className="line-clamp-2 text-slate-500">{des}</span>
          </div>
          <div className="flex justify-between">
            <ul className="flex items-center">
              {iconLists.map((el, ind) => (
                <li
                  key={ind}
                  className={cn(
                    "overflow-hidden rounded-full border border-solid border-white-100/70 bg-black p-1 transition-all duration-100 ease-in-out hover:border-white-100",
                    `translate-x-[${ind * 20}px]`,
                  )}
                  style={{
                    transform: `translateX(-${ind * 5}px)`,
                  }}
                >
                  <img
                    className="h-3 w-3 sm:h-[20px] sm:w-[20px]"
                    src={el}
                  ></img>
                </li>
              ))}
            </ul>
            <button className="duration-400 flex flex-row items-center gap-2 transition-all ease-in-out hover:text-purple-400">
              <span className="text-sm sm:text-lg">Check Live Site</span>{" "}
              <FaArrowPointer width={20} height={20} />
            </button>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
