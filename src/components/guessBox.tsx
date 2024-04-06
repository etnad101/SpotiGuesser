"use client";
import { useState } from "react";

export default function GuessBox({ className, token, uri }: any) {
  const [input, setInput] = useState([]);
  const [autofill, setAutofill] = useState([]);

  const search = async (input: any) => {
    console.log("Searching for " + input);
    const url = `${uri}api/search?q=${input}`;
    const res = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });

    const data = await res.json();
    setAutofill(data);
  };

  const searchItems = autofill.map((item, i) => <div key={i}>{item}</div>);

  return (
    <div className={className}>
      <div>Guess Here</div>
      <input
        className="text-black"
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      ></input>
      <button onClick={() => search(input)}>Enter</button>
      <div className="bg-spotify-black">{searchItems}</div>
    </div>
  );
}
