import axios from "axios";

const api_key = "6dc4f99e549c459b904864c62422845e";
const BASE_URL = axios.create({ baseURL: "https://api.themoviedb.org/3" });

//discovers
export const fetchDiscoverMovies = () =>
  BASE_URL.get(`/discover/movie?api_key=${api_key}`);
//trends
export const fetchTrendingMovies = (timeWindow) =>
  BASE_URL.get(`/trending/movie/${timeWindow}?api_key=${api_key}`);
//genres
export const fetchMovieGenres = () =>
  BASE_URL.get(`/genre/movie/list?api_key=${api_key}`);
//search movie
export const fetchSearchMovie = (query) =>
  query && BASE_URL.get(`search/movie?api_key=${api_key}&query=${query}`);
//movie detail
export const fetchMovie = (movieId) =>
  BASE_URL.get(`/movie/${movieId}?api_key=${api_key}`);
//cast
export const fetchCast = (movieId) =>
  BASE_URL.get(`/movie/${movieId}/credits?api_key=${api_key}`);

//sort;
export const fetchSortFilter = (sortValue, startDate, endDate, genre) =>
  BASE_URL.get(
    `/discover/movie?api_key=${api_key}&sort_by=${sortValue}&release_date.lte=${startDate}&release_date.gte=${endDate}&with_genres=${genre}`
  );

//top rated-popular
export const fetchTopRatedPopular = (category, page) =>
  BASE_URL.get(`/movie/${category}?api_key=${api_key}&page=${page}`);

// //popular
// export const fetchPopular = (page) =>
//   BASE_URL.get(`/movie/popular?api_key=${api_key}&page=${page}`);
