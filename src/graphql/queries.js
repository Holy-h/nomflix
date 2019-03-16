import gql from "graphql-tag";

export const MOVIE_HOME = gql`
  {
    movie_nowplaying {
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_upcoming {
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_popular {
      id
      poster_path
      title
      vote_average
      release_date
    }
    movie_toprated {
      id
      poster_path
      title
      vote_average
      release_date
    }
  }
`;

export const TV_HOME = gql`
  {
    tv_airingtoday {
      id
      original_name
      vote_average
      poster_path
      first_air_date
    }
    tv_ontheair {
      id
      original_name
      vote_average
      poster_path
      first_air_date
    }
    tv_popular {
      id
      original_name
      vote_average
      poster_path
      first_air_date
    }
    tv_toprated {
      id
      original_name
      vote_average
      poster_path
      first_air_date
    }
  }
`;

export const Movie_Detail = `
  
`;
