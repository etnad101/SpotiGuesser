"use client";

import GuessBox from "./guessBox";

export default function Guesses({ token, className, uri }: any) {
  const guessValues: any = [null, null, null, null, null, null];
  const guesses: any[] = [];

  const submitGuess = (guess: string) => {
    console.log(guess);
    guessValues[0] = guess;
  };

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
      <div className="flex-col">
        <div>{guesses}</div>
        <GuessBox token={token} uri={uri} handleSubmit={() => submitGuess} />
      </div>
    </div>
  );
}
