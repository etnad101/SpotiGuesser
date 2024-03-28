"use client";

import { useEffect, useState } from "react";

export default function Player({ token }: { token: string }) {
  const [player, setPlayer] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "SpotiGuesser",
        getOAuthToken: (cb: (...args: any) => void) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }: { device_id: any }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }: { device_id: any }) => {
        console.log("Device has gone offline", device_id);
      });

      player.connect();
    };
  }, []);

  return (
    <div>
      <div className="text-white">Player</div>
    </div>
  );
}
