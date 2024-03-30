"use client"

export default function Guesses({ token, className }: any) {
  const guessValues = ["", null, null, null, null, null];
  const guesses: any[] = [];
  for (let i = 0; i < 6; i++) {
    const guess = guessValues[i] ? guessValues[i] : "";

    guesses.push(
      <div
        className="text-white text-center border-2 border-spotify-green mb-1 p-1 w-auto min-w-72 min-h-9"
        key={i}
      >
        {guess}
      </div>
    );
  }
  return (
    <div className={className}>
      <div>{guesses}</div>
    </div>
  );
}
