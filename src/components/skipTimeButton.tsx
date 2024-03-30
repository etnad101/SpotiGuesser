export default function SkipTimeButton({ className, onClick }: any) {
  return (
    <button className={className}>
      <div
        className="flex justify-center text-center items-center bg-spotify-green h-12 w-16 text-black font-bold rounded-xl"
        onClick={() => onClick()}
      >
        Skip
      </div>
    </button>
  );
}
