import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    console.log(this.props);
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }

  render() {
    // console.log(this.props);

    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

/* To-Do
  1. is id number?
  2. "/movie/:id" or "/tv/:id"
  3. what is the id?
*/
