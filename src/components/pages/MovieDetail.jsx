import { fetchMovie, fetchCast } from "../../data";
import { useQuery } from "react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../sections/DetailCard";
const MovieDetail = () => {
  const params = useParams();

  //movie
  const [movieId, setMovieId] = useState("");
  const { data } = useQuery(
    ["movideDetail", movieId],
    () => fetchMovie(params.movieId),
    {
      retry: false,
    }
  );

  //crew-cast
  const castData = useQuery(
    ["castData", movieId],
    () => fetchCast(params.movieId),
    {
      retry: false,
    }
  );

  return (
    <DetailCard
      poster_path={data?.data?.poster_path}
      title={data?.data?.title}
      overview={data?.data?.overview}
      release_date={data?.data?.release_date.split("-")[0]}
      runtime={data?.data?.runtime}
      crewName1={castData?.data?.data?.crew[0].name}
      crewName2={castData?.data?.data?.crew[1].name}
      crewName3={castData?.data?.data?.crew[2].name}
      crewDepart1={castData?.data?.data?.crew[0].known_for_department}
      crewDepart2={castData?.data?.data?.crew[1].known_for_department}
      crewDepart3={castData?.data?.data?.crew[2].known_for_department}
      cast={castData?.data?.data?.cast}
    />
  );
};

export default MovieDetail;
