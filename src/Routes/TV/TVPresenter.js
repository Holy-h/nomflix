import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  null;

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
