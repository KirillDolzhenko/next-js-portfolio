import React from "react";

function ButtonGlow({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative z-20 inline-flex h-16 animate-shimmer items-center justify-center rounded-[15px] border border-slate-800 bg-[linear-gradient(110deg,#03071C,45%,#1e2631,55%,#03071C)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)]">
      {children}
    </button>
  );
}

export default ButtonGlow;
