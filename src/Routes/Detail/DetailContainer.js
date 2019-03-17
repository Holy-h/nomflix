import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
        url,
      },
    } = props;
    this.state = {
      isMovie: url.includes("/movie/"),
      isPreview: true,
      id: parseInt(id),
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
      history: { push },
    } = this.props;
    const { id } = this.state;
    if (isNaN(id)) {
      return push("/");
    }
  }

  render() {
    const { isPreview, isMovie, id } = this.state;

    return (
      <DetailPresenter
        handleClick={this.handleClick}
        isPreview={isPreview}
        isMovie={isMovie}
        id={id}
      />
    );
  }
}
