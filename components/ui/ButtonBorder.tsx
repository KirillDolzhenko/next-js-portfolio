"use client";
import { Button } from "./moving-border";

function ButtonBorder({
  duration = 4000,
  rx,
  ry,
  //   id: number;
  title,
  desc,
  thumbnail,
}: {
  duration?: number;
  rx?: string;
  ry?: string;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <div className="col-span-2">
      <Button
        rx={rx}
        ry={ry}
        duration={duration}
        borderRadius="1.75rem"
        className="border-black-500 px-[30px] py-[25px] text-white lg:px-[45px] lg:py-[30px]"
      >
        <article className="flex gap-5">
          <div className="relative h-[100px] w-[100px]">
            <img
              src={thumbnail}
              className="absolute h-full w-full object-contain"
              alt="icon"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h6 className="text-start text-xl font-bold">{title}</h6>
            <p className="text-6 max-w-[350px] text-start text-white-100">
              {desc}
            </p>
          </div>
        </article>
      </Button>
    </div>
  );
}

export default ButtonBorder;
