import { EnumPosition, IPropsButtonMagic } from "@/types/types.props";
import React from "react";

const ButtonBorderMagic = ({
  children,
  position = EnumPosition.RIGHT,
  icon = <></>,
  className,
  handleClick,
}: IPropsButtonMagic) => {
  return (
    <button
      onClick={handleClick}
      className="animate-appearing relative inline-flex h-12 flex-grow-0 justify-self-center overflow-hidden rounded-[10px] p-[1px] text-center"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full cursor-pointer items-center justify-center gap-1 rounded-[10px] bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl ${className}`}
      >
        {position == EnumPosition.LEFT ? icon : <></>}
        {children}
        {position == EnumPosition.RIGHT ? icon : <></>}
      </span>
    </button>
  );
};

export default ButtonBorderMagic;
