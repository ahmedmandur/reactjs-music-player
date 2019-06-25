import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import SongCard from "./components/SongCard/SongCard";
import Songs from "./songs-file";
import Player from "./components/Player/Player";
import Spinner from "./components/Ui/Spinner";

export default class App extends Component {
  state = {
    songUrl: "",
    showPlayer: false,
    songsList: Songs.songs,
    isLoading: true
  };

  onClickPlayFromSongCard = (songUrl, id) => {
    var songsBeforeUpdate = this.state.songsList;

    var item = songsBeforeUpdate.find(x => x.id === id);
    if (item) {
      item.isPlaying = !item.isPlaying;
    }
    this.setState({
      isLoading: false,
      songUrl: songUrl,
      showPlayer: item.isPlaying,
      songsList: songsBeforeUpdate
    });
  };

  onMusicEnded = () => {
    this.setState({ songUrl: "", showPlayer: false, songsList: Songs.songs });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <Layout>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div className="row">
            {this.state.songsList.map(aSong => {
              return (
                <SongCard
                  id={aSong.id}
                  song={aSong}
                  key={aSong.id}
                  onPlayOrPause={this.onClickPlayFromSongCard}
                  isPlaying={aSong.isPlaying}
                />
              );
            })}
          </div>
        )}

        {this.state.showPlayer ? <Player url={this.state.songUrl} /> : null}
      </Layout>
    );
  }
}

export const updateObject = (oldObject, updateProperties) => {
  return {
    ...oldObject,
    ...updateProperties
  };
};
