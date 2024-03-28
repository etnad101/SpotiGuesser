import { NextResponse, type NextRequest } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const praramCode = searchParams.get("code");
  const code = praramCode ? praramCode : "";

  const auth = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

  const URL = `https://accounts.spotify.com/api/token`;

  const urlencoded = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000",
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
