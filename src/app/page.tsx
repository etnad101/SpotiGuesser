import Game from "@/components/game";
import Login from "@/components/login";

const TOKEN_URL = "https://accounts.spotify.com/api/token";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const code = searchParams["code"]?.toString();

  return (
    <div className="bg-spotify-black">
      {code ? <Game code={code} /> : <Login />}
    </div>
  );
}
