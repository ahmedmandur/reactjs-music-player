import React from "react";
import AudioPlayer from "react-h5-audio-player";

const Player = props => {
  return (
    <AudioPlayer
      autoPlay
      src={props.url}
      onPlay={e => console.log("onPlay")}
      onEnded={e => console.log("onEnded")}
      onPause={e => console.log("onPause")}
    />
  );
};

export default Player;
