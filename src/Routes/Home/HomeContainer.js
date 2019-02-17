import React from "react";
import HomePresenter from "./HomePresenter.js";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const {
      nowPlaying,
      upcoming,
      topRated,
      popular,
      error,
      loading,
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
