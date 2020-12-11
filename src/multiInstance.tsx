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

const html5Audio = audioUrls.map((url) => new Audio(url));
const ogvAudio = audioUrls.map((url) => {
  const ogvAudio = new ogv.OGVPlayer();
  try {
    ogvAudio.src = url;
    return ogvAudio;
  } catch (error) {
    console.log(error);
    return ogvAudio;
  }
});

// const delayMS = 50;

export const MultiInstance = () => {
  let html5Index = 0;
  let ogvIndex = 0;

  const onClickBackHTML5 = () => {
    if (html5Index === 0) {
      return;
    }
    html5Audio[html5Index].pause();
    html5Index--;
    html5Audio[html5Index].play();
  };

  const onClickPlayHTML5 = () => {
    html5Audio[html5Index].play();
  };

  const onClickPauseHTML5 = () => {
    html5Audio[html5Index].pause();
  };

  const onClickNextHTML5 = () => {
    if (html5Index === audioUrls.length - 1) {
      return;
    }
    html5Audio[html5Index].pause();
    html5Index++;
    html5Audio[html5Index].play();
  };

  const onClickBackOGV = async () => {
    if (ogvIndex === 0) {
      return;
    }
    ogvAudio[ogvIndex].pause();
    ogvIndex--;
    ogvAudio[ogvIndex].currentTime = 0;
    ogvAudio[ogvIndex].play();
  };

  const onClickPlayOGV = async () => {
    ogvAudio[ogvIndex].play();
  };

  const onClickPauseOGV = async () => {
    ogvAudio[ogvIndex].pause();
  };

  const onClickNextOGV = async () => {
    if (ogvIndex === audioUrls.length - 1) {
      return;
    }
    ogvAudio[ogvIndex].pause();
    ogvIndex++;
    ogvAudio[ogvIndex].currentTime = 0;
    ogvAudio[ogvIndex].play();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="App">
      <br />
      <div>MultiInstance</div>
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
