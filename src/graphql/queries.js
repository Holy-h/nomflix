import gql from "graphql-tag";

export const MOVIE_HOME = gql`
  {
    movie_nowplaying{
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_upcoming{
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_popular{
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_toprated{
      id
      poster_path
      title
      vote_average
      release_date
    }
  }
`;