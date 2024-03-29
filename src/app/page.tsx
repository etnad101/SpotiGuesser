import Dashboard from "@/components/dashboard";
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
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}
