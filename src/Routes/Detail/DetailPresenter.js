import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Video from "../../Components/Video";
import DetailInfo from "../../Components/DetailInfo";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 40px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(1px);
  opacity: 0.3;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Cover = styled.div`
  height: 100%;
  width: 30%;
  border-radius: 8px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 1;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 24px;
  z-index: 1;
  overflow: auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const InfoContainer = styled.div`
  margin-bottom: 16px;
`;

const Info = styled.span`
  font-size: 16px;
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Overview = styled.p`
  line-height: 1.5;
  width: 70%;
  margin-bottom: 40px;
`;

const VideoTab = styled.button``;

const DetailPresenter = ({
  result,
  error,
  loading,
  handleClick,
  isPreview,
  isMovie,
}) => (
  <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message color="e30000" text={error} />
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <InfoContainer>
              <Info>
                {result.release_date
                  ? `${result.release_date.substring(0, 4)} ⦁ `
                  : result.seasons.map((item, index) =>
                      index !== result.seasons.length - 1 && item.air_date
                        ? `${item.air_date.substring(0, 4)} ⦁ `
                        : null,
                    )}
              </Info>
              <Info>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Info>
              <Divider>⦁</Divider>
              <Info>
                {result.genres &&
                  result.genres.map((item, index) =>
                    index !== result.genres.length - 1
                      ? `${item.name} / `
                      : item.name,
                  )}
              </Info>
            </InfoContainer>
            <Overview>{result.overview}</Overview>
            <VideoTab onClick={handleClick}>
              {isPreview ? `상세정보` : `예고편`}
            </VideoTab>
            {isPreview ? (
              <Video video={result.videos.results} />
            ) : (
              <DetailInfo Data={result} isMovie={isMovie} />
            )}
          </Data>
        </Content>
      </Container>
    )}
  </>
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default DetailPresenter;
