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
  BASE_URL.get(`search/movie?api_key=${api_key}&query=${query}`);
//movie detail
export const fetchMovie = (movieId) =>
  BASE_URL.get(`/movie/${movieId}?api_key=${api_key}`);
//recommendations
export const fetchRecommendations = (movieId) =>
  BASE_URL.get(`/movie/${movieId}/recommendations?api_key=${api_key}`);
