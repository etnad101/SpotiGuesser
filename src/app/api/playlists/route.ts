import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = headers();
  const token = headersList.get("Authorization");

  const res = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  const playlists: Playlists = {
    total: data.total,
    items: [],
  };

  for (let item of data.items) {
    const playlist = { name: item.name, imageURL: item.images[0].url };
    playlists.items.push(playlist);
  }

  return NextResponse.json(playlists);
}
