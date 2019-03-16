import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

// graphql 연결
import { Query } from "react-apollo";
import { MOVIE_HOME } from "../../graphql/queries";

const Container = styled.div`
  padding: 16px;
`;

const HomePresenter = () => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    <Container>
      <Query query={MOVIE_HOME}>
        {({ loading, data, error }) => {
          if (loading) return <Loader />;
          if (error) return <Message color="#e30000" text={error} />;
          return (
            <div>
              <Section title="Now Playing">
                {data.movie_nowplaying.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
              <Section title="Upcoming Movies">
                {data.movie_upcoming.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
              <Section title="Popular Movies">
                {data.movie_popular.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
              <Section title="TopRated Movies">
                {data.movie_toprated.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
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
export default HomePresenter;
