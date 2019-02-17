import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    airingToday: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { airingToday, topRated, popular, error, loading } = this.state;
    return (
      <TVPresenter
        airingToday={airingToday}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
