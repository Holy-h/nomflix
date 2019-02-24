import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin-top: 16px;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompaniesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 16px;
`;

const Logo = styled.div`
  background-image: url(${props => props.Url});
  width: 100%;
  height: 48px;
  background-size: cover;
  background-position: center center;
  background-color: #ffffff;
`;

const CollectionDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 16px;
  grid-template-rows: 300px;
  align-items: center;
`;

const CollectionPoster = styled.div`
  background-image: url(${props => props.Url});
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const Text = styled.span`
  font-size: 18px;
`;

const DetailInfo = ({ Data, isMovie }) => (
  <Container>
    {console.log(Data)}
    {console.log(isMovie)}
    {Data.homepage ? (
      <SectionDiv>
        <SectionTitle>Homepage</SectionTitle>
        <a href={Data.homepage}>{Data.homepage}</a>
      </SectionDiv>
    ) : (
      <></>
    )}
    {Data.production_companies.length < 1 ? (
      <></>
    ) : (
      <SectionDiv>
        <SectionTitle>Production_Companies</SectionTitle>
        <CompaniesDiv>
          {Data.production_companies.map(item => (
            <>
              <Logo
                key={item.id}
                Url={
                  item.logo_path
                    ? `https://image.tmdb.org/t/p/w300${item.logo_path}`
                    : require("../assets/noPosterSmall.png")
                }
              />
              <Text key={item.id}>{item.name}</Text>
            </>
          ))}
        </CompaniesDiv>
      </SectionDiv>
    )}
    {isMovie && Data.belongs_to_collection ? (
      <SectionDiv>
        <SectionTitle>Movie Collection</SectionTitle>
        <CollectionDiv>
          <CollectionPoster
            Url={
              Data.belongs_to_collection.poster_path
                ? `https://image.tmdb.org/t/p/w300${
                    Data.belongs_to_collection.poster_path
                  }`
                : require("../assets/noPosterSmall.png")
            }
          />
          <Text>{Data.belongs_to_collection.name}</Text>
        </CollectionDiv>
      </SectionDiv>
    ) : (
      <></>
    )}
    {!isMovie ? (
      <SectionDiv>
        <SectionTitle>TV Seasons</SectionTitle>
        <CompaniesDiv>
          {Data.seasons.map(item => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </CompaniesDiv>
      </SectionDiv>
    ) : (
      <></>
    )}
  </Container>
);

DetailInfo.propTypes = {
  Data: PropTypes.object.isRequired,
  isMovie: PropTypes.bool.isRequired,
};

export default DetailInfo;
