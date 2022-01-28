import { fetchMovie, fetchRecommendations } from "../../data";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MovieContainer,
  MovieContent,
  MovieImgDiv,
  MovieImg,
  MovieContentText,
  MovieContentTitle,
  MovieText,
} from "../../styledComponents";

const MovieDetail = () => {
  const params = useParams();
  console.log("movieparams:::", params.movieId);

  const [movieId, setMovieId] = useState("");
  // const [movies, setMovies] = useState([]);

  const { data } = useQuery(
    ["movideDetail", movieId],
    () => fetchMovie(params.movieId),
    {
      retry: false,
    }
  );

  // useEffect(() => {
  //   setMovies(data);
  // }, []);

  // console.log("movies", movies);
  console.log("dataaa", data?.data);

  return (
    <MovieContainer>
      <MovieContent>
        <MovieImgDiv>
          <MovieImg
            src={`https://image.tmdb.org/t/p/w300${data?.data?.poster_path}`}
            alt="Movie Poster"
          />
        </MovieImgDiv>
        <MovieContentText>
          <MovieContentTitle>
            {data?.data?.title} ({data?.data?.release_date.split("-")[0]})
            <MovieText className="p-2">{data?.data?.runtime} min</MovieText>
          </MovieContentTitle>
          <MovieText>{data?.data?.overview}</MovieText>
        </MovieContentText>
      </MovieContent>
    </MovieContainer>
  );
};

export default MovieDetail;
