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

  onClickPlayFromSongCard = songUrl => {
    this.setState({ isLoading: true, songUrl: "", showPlayer: false });
    setTimeout(() => {
      this.setState({ isLoading: false, songUrl: songUrl, showPlayer: true });
    }, 2000);
  };

  onMusicEnded = () => {
    this.setState({ songUrl: "", showPlayer: false });
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
                  song={aSong}
                  key={aSong.title}
                  onPlayOrPause={this.onClickPlayFromSongCard}
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
