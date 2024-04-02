import Image from "next/image";

export default async function PlaylistSelect({ className, token }: any) {
  const url = `${process.env.URI}api/playlists`;
  const res = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const data = await res.json();
  const playlists: any[] = [];

  for (let i = 0; i < data.total; i++) {
    const playlist = data.items[i];
    playlists.push(
      <div key={i}>
        <Image
          src={playlist.imageURL}
          width={20}
          height={20}
          alt="Playlist Cover"
        />
        <div>{playlist.name}</div>
      </div>,
    );
  }

  return <div className={className}>{playlists}</div>;
}
