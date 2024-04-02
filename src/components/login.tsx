import Link from "next/link";

const CLIENT_ID = process.env.CLIENT_ID;
const SCOPE =
  "streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20user-modify-playback-state";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${process.env.URI}&scope=${SCOPE}`;

export default async function Login() {
  console.log(AUTH_URL);
  return (
    <div className="flex h-screen items-center justify-center">
      <Link
        href={AUTH_URL}
        className="flex h-16 w-44 items-center justify-center rounded-xl bg-spotify-green text-white transition ease-in hover:translate-y-[-3px]"
      >
        Login With Spotify
      </Link>
      <br />
    </div>
  );
}
