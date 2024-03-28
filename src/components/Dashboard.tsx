import Player from "./Player";

export default async function Dashboard({ code }: { code: string | string[] }) {
  const url = `http://localhost:3000/api/login?code=${code}`;
  const res = await fetch(url);
  const data = await res.json();
  const token = data.access_token;
  return (
    <div>
      <Player token={token} />
    </div>
  );
}
