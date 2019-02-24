import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.span`
  margin-bottom: 16px;
`;

const Videodiv = styled.div`
  position: relative;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  z-index: 10;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 11;
  left: 0;
`;

const Video = ({ video }) => (
  <Container>
    {video &&
      video.map(item => (
        <VideoContainer key={item.key}>
          <VideoTitle>{item.name}</VideoTitle>
          <Videodiv>
            <VideoThumbnail
              src={`https://img.youtube.com/vi/${item.key}/0.jpg`}
            />
            <VideoPlayer src={`https://www.youtube.com/embed/${item.key}`} />
          </Videodiv>
        </VideoContainer>
      ))}
  </Container>
);

Video.propTypes = {
  video: PropTypes.array,
};

export default Video;
