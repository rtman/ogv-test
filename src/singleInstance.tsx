import React from "react";
import "./App.css";

var ogv = require("ogv");
ogv.OGVLoader.base = `${process.env.PUBLIC_URL}/ogv`;

const audioUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
];

export const SingleInstance = () => {
  let html5Index = 0;
  let ogvIndex = 0;

  const html5Audio = new Audio(audioUrls[html5Index]);
  const ogvAudio = new ogv.OGVPlayer();
  ogvAudio.src = audioUrls[ogvIndex];

  const onClickBackHTML5 = () => {
    if (html5Index === 0) {
      return;
    }

    html5Audio.pause();
    html5Index--;
    html5Audio.src = audioUrls[html5Index];
    html5Audio.play();
  };

  const onClickPlayHTML5 = () => {
    html5Audio.play();
  };

  const onClickPauseHTML5 = () => {
    html5Audio.pause();
  };

  const onClickNextHTML5 = () => {
    if (html5Index === audioUrls.length - 1) {
      return;
    }

    html5Audio.pause();
    html5Index++;
    html5Audio.src = audioUrls[html5Index];
    html5Audio.play();
  };

  const onClickBackOGV = async () => {
    if (ogvIndex === 0) {
      return;
    }

    ogvAudio.pause();
    ogvIndex--;
    ogvAudio.src = audioUrls[ogvIndex];
    ogvAudio.play();
  };

  const onClickPlayOGV = async () => {
    ogvAudio.play();
  };

  const onClickPauseOGV = async () => {
    ogvAudio.pause();
  };

  const onClickNextOGV = async () => {
    if (ogvIndex === audioUrls.length - 1) {
      return;
    }
    ogvAudio.pause();
    ogvIndex++;
    ogvAudio.src = audioUrls[ogvIndex];
    ogvAudio.play();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <br />
      <div>SingleInstance</div>
      <br />
      <div>HTML5</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onClickBackHTML5}>Back</button>
        <button onClick={onClickPlayHTML5}>Play</button>
        <button onClick={onClickPauseHTML5}>Pause</button>
        <button onClick={onClickNextHTML5}>Next</button>
      </div>
      <br />
      <div>OGV</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onClickBackOGV}>Back</button>
        <button onClick={onClickPlayOGV}>Play</button>
        <button onClick={onClickPauseOGV}>Pause</button>
        <button onClick={onClickNextOGV}>next</button>
      </div>
    </div>
  );
};
