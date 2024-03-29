import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT() {
  const headersList = headers();
  const token = headersList.get("Authorization");

  const res = await fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "applicatsion/json",
    },
  });

  const data = {
    status: "Playback started",
  };
  return NextResponse.json(data);
}
