"use client";

export default function Guesses({ token, className }: any) {
  const guessValues = ["", null, null, null, null, null];
  const guesses: any[] = [];
  for (let i = 0; i < 6; i++) {
    const guess = guessValues[i] ? guessValues[i] : "";

    guesses.push(
      <div
        className="mb-1 min-h-9 w-auto min-w-72 border-2 border-spotify-green p-1 text-center text-white"
        key={i}
      >
        {guess}
      </div>,
    );
  }
  return (
    <div className={className}>
      <div>{guesses}</div>
    </div>
  );
}
