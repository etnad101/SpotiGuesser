import PlayButton from "./playButton";
import Player from "./player";

export default async function Dashboard({ code }: { code: string }) {
  const url = `http://localhost:3000/api/login`;
  const res = await fetch(url, {
    headers: {
      Authorization: code,
    },
  });
  const data = await res.json();
  const token = data.access_token;
  
  return (
    <div className="bg-spotify-black h-screen">
      <Player token={token} />
      <PlayButton token={token} />
    </div>
  );
}
