import { cn } from "@/lib/utils";
import { IPropsBentoGrid, IPropsBentoGridItem } from "@/types/types.props";
import { GradientBg } from "./GradientBg";
import { GlobeDemo } from "./GlobeDemo";

export const BentoGrid = ({ className, items }: IPropsBentoGrid) => {
  return (
    <div
      className={cn(
        "mx-auto mb-5 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5",
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
  return (
    <div
      className={cn(
        "group/bento justify-betweenover flow-hidden relative row-span-1 flex flex-col overflow-hidden rounded-xl border border-transparent bg-white shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-[linear-gradient(126deg,_rgba(0,3,25,1)_0,_rgba(0,3,40,1)_100%)] dark:shadow-none",
        className,
      )}
    >
      <div
        className={cn(
          `flex h-full flex-col items-start justify-center p-4 duration-200`,
          id === 6 ? "flex items-center" : "",
          titleClassName,
        )}
      >
        {id === 6 && <GradientBg />}
        <div className="px-1 py-5">
          <div className="relative z-[10] font-sans text-xs font-normal text-neutral-600 group-hover/bento:translate-x-2 group-hover/bento:will-change-transform dark:text-neutral-300">
            <p className="text-[14px]">{description}</p>
          </div>
          <div className="relative z-[10] my-1 font-sans text-xl font-bold text-neutral-600 group-hover/bento:translate-x-2 group-hover/bento:will-change-transform dark:text-neutral-200 md:text-lg">
            <h5 className="text-5">{title}</h5>
          </div>
        </div>

        {id === 2 && <GlobeDemo />}

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
