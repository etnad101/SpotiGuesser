import axios from "axios";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "fa9e42bf5c974f8d869fdd6c43b46c8d";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const code = searchParams["code"];

  return (
    <div className="bg-spotify-black">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}
