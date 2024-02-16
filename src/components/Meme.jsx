import React from "react";
import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(randomMeme.url);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
