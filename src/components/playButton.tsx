"use client";

import { useState } from "react";
import Image from "next/image";

export default function PlayButton({ className, onClick, playing }: any) {
  return (
    <button className={className}>
      <div className="flex h-12 w-12 items-center justify-center rounded-[100%] bg-spotify-green">
        <Image
          onClick={() => onClick()}
          width={40}
          height={40}
          src={playing ? "/img/dots.svg" : "/img/play.svg"}
          alt="play"
        />
      </div>
    </button>
  );
}
