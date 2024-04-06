"use client";

import { useState } from "react";
import PlayButton from "./playButton";
import SkipTimeButton from "./skipTimeButton";
import GuessBox from "./guessBox";

export default function Controls({ className, token, uri }: any) {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const playTime = [1000, 3000, 5000, 10000, 15000, 30000];

  const play = async () => {
    const url = `${uri}api/play`;
    console.log(url);
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });
    setPlaying(true);
  };

  const pause = async () => {
    const url = `${uri}api/pause`;
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
    setTimeout(pause, playTime[time]);
  };

  const handleSkipTime = () => {
    pause();
    if (time < 5) {
      setTime(time + 1);
    }
  };

  const nextSong = async () => {
    setTime(0);
    await fetch("https://api.spotify.com/v1/me/player/next", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setTimeout(pause, playTime[time]);
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
        <button
          className="flex h-12 w-16 items-center justify-center rounded-xl bg-spotify-green text-center font-bold text-black"
          onClick={() => nextSong()}
        >
          Next Song
        </button>
      </div>
    </div>
  );
}
