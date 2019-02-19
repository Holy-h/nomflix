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
    };
  }

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

      // if (isMovie) {
      //   ({ data: result } = await moviesApi.movieDetail(parsedId));
      // } else {
      //   ({ data: result } = await tvApi.showDetail(parsedId));
      // }
      // console.log(result);
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
    const { result, error, loading } = this.state;

    // console.log(this.props);
    // console.log(this.state);
    // console.log(result);

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

/* To-Do
  1. is id number?
  2. "/movie/:id" or "/tv/:id"
  3. what is the id?
*/
