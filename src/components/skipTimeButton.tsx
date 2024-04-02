export default function SkipTimeButton({ className, onClick }: any) {
  return (
    <button className={className}>
      <div
        className="flex h-12 w-16 items-center justify-center rounded-xl bg-spotify-green text-center font-bold text-black"
        onClick={() => onClick()}
      >
        Skip
      </div>
    </button>
  );
}
