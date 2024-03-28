import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

const TOKEN_URL = "https://accounts.spotify.com/api/token";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const code = searchParams["code"];

  return (
    <div className="bg-spotify-black">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}
