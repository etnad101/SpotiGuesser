import Controls from "./controls";
import Guesses from "./guesses";
import Player from "./player";
import PlaylistSelect from "./playlistSelect";

export default async function Game({ code }: { code: string }) {
  const url = `${process.env.URI}api/login`;
  const res = await fetch(url, {
    headers: {
      Authorization: code,
    },
  });
  const data = await res.json();
  const token = data.access_token;

  console.log(token);

  return (
    <div className="h-screen bg-spotify-black">
      <h1 className="mb-7 text-center text-5xl font-extrabold text-white">
        SpotiGuesser
      </h1>
      <Guesses className="flex justify-center" token={token} />
      <Controls
        className="flex justify-center"
        token={token}
        uri={process.env.URI}
      />
      <PlaylistSelect token={token} />
      <Player token={token} />
    </div>
  );
}
