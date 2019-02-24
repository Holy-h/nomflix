import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      isPreview: true,
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isPreview: !prevState.isPreview,
    }));
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      const { data } = isMovie
        ? await moviesApi.movieDetail(parsedId)
        : await tvApi.showDetail(parsedId);
      result = data;
    } catch {
      this.setState({
        error: "Can't find this movie or tv show",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading, isPreview, isMovie } = this.state;

    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        handleClick={this.handleClick}
        isPreview={isPreview}
        isMovie={isMovie}
      />
    );
  }
}
