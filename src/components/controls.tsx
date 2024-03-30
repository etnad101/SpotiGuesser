"use client";

import { useState } from "react";
import PlayButton from "./playButton";
import SkipTimeButton from "./skipTimeButton";

export default function Controls({ token, className }: any) {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const playTime = [1000, 3000, 5000, 10000, 15000, 30000];

  const play = async () => {
    const url = `${process.env.URL}/api/play`;
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    setPlaying(true);
  };

  const pause = async () => {
    const url = `${process.env.URL}/api/pause`;
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    setPlaying(false);
  };

  const handlePlay = async () => {
    await play();
    await setTimeout(pause, playTime[time]);
  };

  const handleSkipTime = () => {
    pause();
    if (time < 5) {
      setTime(time + 1);
    }
  };

  return (
    <div className={className}>
      <div className="flex gap-4">
        <PlayButton onClick={() => handlePlay()} playing={playing} />
        <SkipTimeButton onClick={() => handleSkipTime()} />
        <div className="text-white">{playTime[time] / 1000}</div>
        <button className="text-white" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
