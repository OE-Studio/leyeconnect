import React from "react";
import audio from "../assets/audio/audio1.mp3";

const Audio = () => {
  React.useEffect(() => {
    // window.addEventListener('DOMContentLoaded', () => {

    // })

    window.addEventListener('load', () => {
      const audio = document.getElementById("audio");
      audio.volume = 0.2;
      audio.play();

      // Set up audio context
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      // eslint-disable-next-line
      let currentBuffer = null;

      // eslint-disable-next-line
      const url = "../assets/audio/audio1.mp3";

      const visualizeAudio = (url) => {
        fetch(url)
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
          .then((audioBuffer) => audioBuffer);
      };

      console.log(visualizeAudio(audio));

      audioContext.resume();

    //   const filterData = (audioBuffer) => {
    //     const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
    //     const samples = 5; // Number of samples we want to have in our final data set
    //     const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
    //     const filteredData = [];
    //     for (let i = 0; i < samples; i++) {
    //       filteredData.push(rawData[i * blockSize]);
    //     }
    //     return filteredData;
    //   };

    //   const normalizeData = (filteredData) => {
    //     const multiplier = Math.pow(Math.max(...filteredData), -1);
    //     return filteredData.map((n) => n * multiplier);
    //   };
    });
  }, []);
  return (
    // <div></div>
    <audio src={audio} id="audio" autoPlay={true}></audio>
  );
};

export default Audio;
