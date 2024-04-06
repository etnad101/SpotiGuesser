import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const token = headersList.get("Authorization");

  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q");

  const baseUrl = "https://api.spotify.com/v1/search?";
  const query = `q=${q}&type=track`;

  const res = await fetch(baseUrl + query, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (res.status != 200) {
    return NextResponse.json(res);
  }

  const data = await res.json();
  const rawTracks = data.tracks.items;

  const tracks: string[] = [];

  for (let track of rawTracks) {
    tracks.push(track.name);
  }

  return NextResponse.json(tracks);
}
