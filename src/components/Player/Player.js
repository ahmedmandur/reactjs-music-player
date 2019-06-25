import React from "react";
import AudioPlayer from "react-h5-audio-player";

const Player = props => {
  return <AudioPlayer autoPlay src={props.url} />;
};

export default Player;
