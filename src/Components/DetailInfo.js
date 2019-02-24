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

const SectionDiv = styled.div``;

const Homepage = styled.span`
  display: flex;
  flex-direction: column;
`;

const CompaniesDiv = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Logo = styled.div`
  background-image: url(${props => props.Url});
  width: 200px;
  height: 48px;
  background-size: cover;
  background-position: center center;
  background-color: #ffffff;
  margin-right: 16px;
`;

const CollectionDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 300px;
`;

const CollectionPoster = styled.div`
  background-image: url(${props => props.Url});
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const Companies = styled.span`
  font-size: 16px;
`;

const DetailInfo = ({ Data, isMovie }) => (
  <Container>
    <SectionDiv>
      {console.log(Data)}
      {console.log(isMovie)}
      <Homepage>
        <SectionTitle>Homepage</SectionTitle>
        <a href={Data.homepage}>{Data.homepage}</a>
      </Homepage>
    </SectionDiv>
    <SectionDiv>
      <SectionTitle>Production_Companies</SectionTitle>
      {Data.production_companies.length < 1
        ? `제작 회사 정보가 없습니다`
        : Data.production_companies.map(item => (
            <CompaniesDiv key={item.id}>
              <Logo
                Url={
                  item.logo_path
                    ? `https://image.tmdb.org/t/p/w300${item.logo_path}`
                    : require("../assets/noPosterSmall.png")
                }
              />
              <Companies>{item.name}</Companies>
            </CompaniesDiv>
          ))}
    </SectionDiv>
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
          <CompaniesDiv>{Data.belongs_to_collection.name}</CompaniesDiv>
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
            <Companies key={item.id}>{item.name}</Companies>
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
