import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Video from "../../Components/Video";
import DetailInfo from "../../Components/DetailInfo";

// graphql 연결
import { Query } from "react-apollo";
import { Movie_Detail, TV_Detail } from "../../graphql/queries";

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

const DetailPresenter = ({ handleClick, isPreview, isMovie, id }) => (
  <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    <Query query={isMovie ? Movie_Detail : TV_Detail} variables={{ id }}>
      {({ loading, data, error }) => {
        if (loading) return <Loader />;
        if (error) return <Message color="e30000" text={error} />;
        return (
          <Container>
            {console.log(data)}
            <Helmet>
              <title>
                {isMovie
                  ? data.movie_detail.title
                  : data.tv_detail.original_name}
                | Nomflix
              </title>
            </Helmet>
            <Backdrop
              bgImage={
                isMovie
                  ? `https://image.tmdb.org/t/p/original${
                      data.movie_detail.backdrop_path
                    }`
                  : `https://image.tmdb.org/t/p/original${
                      data.tv_detail.backdrop_path
                    }`
              }
            />
            <Content>
              <Cover
                bgImage={
                  isMovie
                    ? `https://image.tmdb.org/t/p/original${
                        data.movie_detail.poster_path
                      }`
                    : `https://image.tmdb.org/t/p/original${
                        data.tv_detail.poster_path
                      }`
                }
              />
              {/*Cover 이미지가 없을때는?*/}
              <Data>
                <Title>
                  {isMovie
                    ? data.movie_detail.title
                    : data.tv_detail.original_name}
                </Title>
                <InfoContainer>
                  <Info>
                    {isMovie
                      ? `${data.movie_detail.release_date.substring(0, 4)} ⦁ `
                      : data.tv_detail.seasons.map((item, index) =>
                          index !== data.tv_detail.seasons.length - 1 &&
                          item.air_date
                            ? `${item.air_date.substring(0, 4)} ⦁ `
                            : null,
                        )}
                  </Info>
                  <Info>
                    {isMovie
                      ? data.movie_detail.runtime
                      : data.tv_detail.episode_run_time[0]}
                    min
                  </Info>
                  <Divider>⦁</Divider>
                  <Info>
                    {isMovie
                      ? data.movie_detail.genres.map((item, index) =>
                          index !== data.movie_detail.genres.length - 1
                            ? `${item.name} / `
                            : item.name,
                        )
                      : data.tv_detail.genres.map((item, index) =>
                          index !== data.tv_detail.genres.length - 1
                            ? `${item.name} / `
                            : item.name,
                        )}
                  </Info>
                </InfoContainer>
                <Overview>
                  {isMovie
                    ? data.movie_detail.overview
                    : data.tv_detail.overview}
                </Overview>
                <VideoTab onClick={handleClick}>
                  {isPreview ? `상세정보` : `예고편`}
                </VideoTab>
                {isPreview ? (
                  <Video video={isMovie ? data.movie_videos : data.tv_videos} />
                ) : (
                  <DetailInfo
                    Data={isMovie ? data.movie_detail : data.tv_detail}
                    isMovie={isMovie}
                  />
                )}
              </Data>
            </Content>
          </Container>
        );
      }}
    </Query>
  </>
);

DetailPresenter.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default DetailPresenter;
