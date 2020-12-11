import React from "react";
import "./App.css";

var ogv = require("ogv");
ogv.OGVLoader.base = `${process.env.PUBLIC_URL}/ogv`;

const audioUrls = [
  "https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0",
  "https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.ogg?alt=media&token=f28993d5-d9fa-4dc1-95c9-8a7b0ba4a5f6",
  "https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517",
  "https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f",
  "https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347",
];

// const audioUrls = [
//   "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
//   "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
//   "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
//   "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
//   "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg",
// ];

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
