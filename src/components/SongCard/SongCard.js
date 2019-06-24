import React from "react";

export class SongCard extends React.Component {
  handleValuesBack = () => {
    this.props.onPlayOrPause(this.props.song.url);
  };

  render() {
    const { song } = this.props;
    return (
      <div className="col s12 m6">
        <div className="card horizontal">
          <div className="card-image">
            <img src={song.img} style={{ width: 150 }} alt={song.title} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{song.title}</span>
              <p>{song.artist}</p>
              <button
                className="btn btn-small waves-effect waves-light red"
                onClick={this.handleValuesBack}
              >
                <i className="material-icons">play_arrow</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongCard;
