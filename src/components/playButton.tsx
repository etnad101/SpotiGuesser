"use client";

import { useState } from "react";
import Image from "next/image"; 

export default function PlayButton({ token }: { token: string }) {
  const [playing, setPlaying] = useState(false);
  const [delay, setDelay] = useState(3000);

  const play = async () => {
    const url = "http://localhost:3000/api/play";
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    setPlaying(true);
  };

  const pause = async () => {
    const url = "http://localhost:3000/api/pause";
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    setPlaying(false);
  };

  const handleClick = async () => {
    await play();
    await setTimeout(pause, delay);
  };

  return (
    <div className="bg-spotify-green rounded-[100%] w-[50px] h-[50px] flex justify-center items-center">
      <Image onClick={handleClick} width={40} height={40} src={playing ? "/img/dots.svg" : "/img/play.svg"} alt="play"/>
    </div>
  );
}
