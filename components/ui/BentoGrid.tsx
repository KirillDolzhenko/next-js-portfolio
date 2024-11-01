"use client";

import { cn } from "@/lib/utils";
import { IPropsBentoGrid, IPropsBentoGridItem } from "@/types/types.props";
import { GradientBg } from "./GradientBg";
import { GlobeDemo } from "./GlobeDemo";
import ButtonBorderMagic from "./ButtonBorderMagic";
import { FaCopy } from "react-icons/fa6";
import { useCallback, useState } from "react";
import Lottie from "react-lottie";
import lottie_confetti from "../../data/lottie_confetti.json";

export const BentoGrid = ({ className, items }: IPropsBentoGrid) => {
  return (
    <div
      className={cn(
        "mx-auto mb-5 grid max-w-7xl gap-4 md:grid-cols-6 lg:grid-cols-5",
        className,
      )}
    >
      {items.map((el, index) => (
        <BentoGridItem key={index} {...el}></BentoGridItem>
      ))}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img = "",
  titleClassName = "",
  imgClassName = "",
  spareImg = "",
}: IPropsBentoGridItem) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    if (!copied) {
      navigator.clipboard.writeText("manfeed3@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento justify-betweenover flow-hidden relative row-span-1 flex flex-col overflow-hidden rounded-xl border border-transparent bg-white shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-[linear-gradient(126deg,_rgba(0,3,25,1)_0,_rgba(0,3,40,1)_100%)] dark:shadow-none",
        className,
      )}
    >
      <div
        className={cn(
          `flex h-full min-h-[200px] flex-col items-start justify-center p-4 duration-200`,
          id === 6 ? "flex items-center" : "",
          titleClassName,
        )}
      >
        {id === 6 && <GradientBg />}
        <div
          className={cn(
            "px-1 py-5",
            id === 2 &&
              "pointer-events-none relative z-20 mx-auto select-none lg:z-10",
          )}
        >
          <div className="relative z-[10] font-sans text-xs font-normal text-neutral-600 group-hover/bento:translate-x-2 group-hover/bento:will-change-transform dark:text-neutral-300">
            <p className="text-[14px]">{description}</p>
          </div>
          <div className="relative z-[10] my-1 font-sans text-xl font-bold text-neutral-600 group-hover/bento:translate-x-2 group-hover/bento:will-change-transform dark:text-neutral-200 md:text-lg">
            <h5
              className={cn(
                "text-5 sm:text-2xl md:text-3xl",
                id === 2 && "mx-auto text-center",
                id === 6 && "mb-[10px]",
              )}
            >
              {title}
            </h5>
            {id === 6 && (
              <>
                <div className="relative">
                  <div className="pointer-events-none absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%]">
                    <Lottie
                      key={Number(copied)}
                      width={200}
                      height={200}
                      isClickToPauseDisabled={true}
                      options={{
                        loop: false,
                        autoplay: copied,
                        animationData: lottie_confetti,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                    />
                  </div>

                  <ButtonBorderMagic
                    className="cursor-pointer"
                    handleClick={handleClick}
                    icon={<FaCopy />}
                  >
                    {!copied ? "Copy Email!" : "Email copied!"}
                  </ButtonBorderMagic>
                </div>
              </>
            )}
          </div>
        </div>

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="pointer-events-none absolute -right-2 top-0 z-30 flex select-none gap-3 md:gap-4">
            <div className="text-4 md:text-5 flex flex-col gap-2 text-white md:gap-7">
              {["", "React", "Nest.js", "Tailwind", "Docker"].map((el, ind) => (
                <span key={ind} className="min-h-10 rounded bg-black-300/5 px-[20px] py-2 text-center opacity-20 small-sm:opacity-50 lg:opacity-100">
                  {el}
                </span>
              ))}
            </div>
            <div className="text-4 md:text-5 flex flex-col gap-2 pt-2 text-white md:gap-7">
              {["Next.js", "SCSS", "MongoDB", "", ""].map((el, ind) => (
                <span key={ind} className="min-h-10 rounded bg-black-300/5 px-[20px] py-2 text-center opacity-20 small-sm:opacity-50 lg:opacity-100">
                  {el}
                </span>
              ))}
            </div>
          </div>
        )}

        {spareImg && (
          <div className="absolute right-0 top-0 size-full">
            <img
              src={spareImg}
              className="absolute -right-[160px] top-2 size-full"
              alt={spareImg}
            />
          </div>
        )}
        <div className="absolute left-0 top-0 h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
