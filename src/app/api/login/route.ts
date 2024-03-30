import { NextResponse } from "next/server";
import { headers } from "next/headers";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export async function GET() {
  const headerList = headers();
  const headerCode = headerList.get("Authorization");
  console.log(headerCode);
  const code = headerCode ? headerCode : "";

  const auth = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

  const URL = `https://accounts.spotify.com/api/token`;
  const redirect_uri = process.env.URL ? process.env.URL : "";

  const urlencoded = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirect_uri,
  });

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded,
  });

  const data = await res.json();

  return NextResponse.json(data);
}
