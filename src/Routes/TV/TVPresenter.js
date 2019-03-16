import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

// graphql 연결
import { Query } from "react-apollo";
import { TV_HOME } from "../../graphql/queries";

const Container = styled.div`
  padding: 16px;
`;

const TVPresenter = () => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    <Container>
      <Query query={TV_HOME}>
        {({ loading, data, error }) => {
          if (loading) return <Loader />;
          if (error) return <Message color="#e30000" text={error} />;
          return (
            <div>
              {/* {console.log(data)} */}
              <Section title="Airing Today">
                {data.tv_airingtoday.map(tv => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
              <Section title="Popular TVshows">
                {data.tv_popular.map(tv => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
              <Section title="TopRated Shows">
                {data.tv_toprated.map(tv => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
              <Section title="On the air">
                {data.tv_ontheair.map(tv => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
            </div>
          );
        }}
      </Query>
    </Container>
  </>
);

export default TVPresenter;
