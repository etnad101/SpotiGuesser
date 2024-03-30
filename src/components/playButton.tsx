"use client";

import { useState } from "react";
import Image from "next/image";

export default function PlayButton({ className, onClick, playing }: any) {
  return (
    <button className={className}>
      <div className="bg-spotify-green rounded-[100%] w-12 h-12 flex justify-center items-center">
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
