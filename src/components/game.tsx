import Controls from "./controls";
import Guesses from "./guesses";
import Player from "./player";

export default async function Game({ code }: { code: string }) {
  const url = `${process.env.URI}api/login`;
  const res = await fetch(url, {
    headers: {
      Authorization: code,
    },
  });
  const data = await res.json();
  const token = data.access_token;

  console.log(token)

  return (
    <div className="bg-spotify-black h-screen">
      <h1 className="text-white font-extrabold text-center text-5xl mb-7">
        SpotiGuesser
      </h1>
      <Guesses className="flex justify-center" token={token} />
      <Controls className="flex justify-center" token={token} uri={process.env.URI}/>
      <Player token={token} />
    </div>
  );
}
