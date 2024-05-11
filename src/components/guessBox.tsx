"use client";
import { useState } from "react";

export default function GuessBox({ className, token, uri, handleSubmit }: any) {
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

  const searchItems = autofill.map((item, i) => (
    <div
      className="w-60 text-center text-black hover:bg-gray-400 border-gray-500"
      onMouseMove={() => setInput(item)}
      onClick={() => handleSubmit(item)}
      key={i}
    >
      {item}
    </div>
  ));

  return (
    <div className={className}>
      <div className="text-cetner text-white">
        <input
          className="text-black"
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        ></input>
        <button onClick={() => search(input)}>Enter</button>
        <div className="bg-spotify-black">
          <div className="w-60 justify-center bg-white">{searchItems}</div>
        </div>
      </div>
    </div>
  );
}
