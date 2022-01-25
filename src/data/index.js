import axios from "axios";

const api_key = "6dc4f99e549c459b904864c62422845e";
const BASE_URL = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const fetchDiscoverMovies = () =>
  BASE_URL.get(`/discover/movie?api_key=${api_key}`);

export const fetchTrendingMovies = (timeWindow) =>
  BASE_URL.get(`/trending/movie/${timeWindow}?api_key=${api_key}`);

export const fetchMovieGenres = () =>
  BASE_URL.get(`/genre/movie/list?api_key=${api_key}`);

export const fetchSearchMovie = (query) =>
  BASE_URL.get(`search/movie?api_key=${api_key}&query=${query}`);
