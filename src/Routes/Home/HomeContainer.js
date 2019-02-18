import React from "react";
import HomePresenter from "./HomePresenter.js";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        topRated,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie info",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      nowPlaying,
      upcoming,
      topRated,
      popular,
      error,
      loading,
    } = this.state;

    console.log(this.state);

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
