import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT() {
  const headersList = headers();
  const token = headersList.get("Authorization");

  const seekRes = await fetch(
    "https://api.spotify.com/v1/me/player/seek?position_ms=0",
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "applicatsion/json",
      },
    },
  );

  const playRes = await fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "applicatsion/json",
    },
  });

  const data = {
    seek_status: seekRes.status,
    play_status: playRes.status,
  };
  return NextResponse.json(data);
}
