export const KEY = "17bff1dc1b955410737dc167aa10c7f3";

const requests = {
  fetchTrendingMovie: `/trending/movie/week?api_key=${KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${KEY}&language=en-US`,
};

export default requests;
