"use client";
import React from "react";

export default function Sales() {
  return (
    <div className="w-full h-10 flex flex-row items-center justify-center bg-black text-white text-xs">
      <span className="uppercase border-r-[1px] pr-3">January Sale</span>
      <span className="px-3">Up to 40% off</span>
      <span className="border-l-[1px] pl-3">Ends in 00d:02h:16m:53s</span>
    </div>
  );
}
