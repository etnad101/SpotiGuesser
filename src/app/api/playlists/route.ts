import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = headers();
  const token = headersList.get("Authorization");

  const res = await fetch("https://api.spotify.com/v1/users/me/playlists", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
