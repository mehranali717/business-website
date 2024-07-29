import React from "react";

export default function GradientText({ text }: { text: string }) {
  return (
    <p className="font-sora text-[30px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#F33CC0_13.43%,_#4349FF_73.37%)]">
      {text}
    </p>
  );
}
