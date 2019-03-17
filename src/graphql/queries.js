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

export const Movie_Detail = gql`
  query getMovieDetails($id: Int!) {
    movie_detail(id: $id) {
      id
      title
      genres {
        name
      }
      vote_average
      poster_path
      backdrop_path
      belongs_to_collection {
        id
        name
        poster_path
        backdrop_path
      }
      homepage
      overview
      release_date
      runtime
      production_companies {
        name
        id
        logo_path
        origin_contry
      }
    }
    movie_videos(id: $id) {
      id
      key
      name
      type
    }
  }
`;

export const TV_Detail = gql`
  query getTVDetails($id: Int!) {
    tv_detail(id: $id) {
      id
      original_name
      vote_average
      poster_path
      backdrop_path
      overview
      genres {
        name
      }
      seasons {
        air_date
        episode_count
        id
        name
        overview
        poster_path
        season_number
      }
      first_air_date
      episode_run_time
      production_companies {
        name
        id
        logo_path
        origin_contry
      }
    }
    tv_videos(id: $id) {
      id
      key
      name
      type
    }
  }
`;
