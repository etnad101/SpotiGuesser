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
      <div key={i} className="flex gap-2">
        <img className="w-10" src={playlist.imageURL} alt="Playlist Cover" />
        <div className="text-white">{playlist.name}</div>
      </div>,
    );
  }

  return <div className={className}>{playlists}</div>;
}
