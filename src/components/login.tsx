import Link from "next/link";

const CLIENT_ID = process.env.CLIENT_ID;
const SCOPE =
  "streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20user-modify-playback-state";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${process.env.URL}&scope=${SCOPE}`;

export default async function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        href={AUTH_URL}
        className="flex text-white items-center justify-center h-16 w-44 bg-spotify-green rounded-xl hover:translate-y-[-3px] transition ease-in"
      >
        Login With Spotify
      </Link>

      <br />
    </div>
  );
}
