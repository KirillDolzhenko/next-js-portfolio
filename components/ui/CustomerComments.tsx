"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const CustomerComments = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto w-full max-w-[250px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] small-sm:max-w-[400px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[990px] 2xl:max-w-screen-xl",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, ind) => (
          <li
            key={ind}
            className="relative flex w-[350px] max-w-full flex-shrink-0 items-center justify-center rounded-3xl border-[2px] border-slate-700/20 p-10 md:w-[600px]"
            style={{
              background:
                "linear-gradient(180deg, #000319, rgba(128, 0, 128, 0.1)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm font-normal leading-[1.6] text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex items-center gap-[10px]">
                <div className="relative h-[50px] flex-[50px] flex-shrink-0 flex-grow-0 overflow-hidden rounded-full">
                  <img
                    src={"/satisfied.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="customer"
                  />
                </div>
                <span className="flex flex-shrink flex-col gap-px">
                  <span className="text-lg font-normal text-white">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
