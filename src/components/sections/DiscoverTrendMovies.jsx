import { useQuery } from "react-query";
import {
  fetchDiscoverMovies,
  fetchTrendingMovies,
  fetchMovieGenres,
} from "../../data";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Button } from "../../styledComponents";
import Slider from "react-slick";
import sliderSettings from "../sections/slider";

const DiscoverTrendMovies = (props) => {
  //trending movies
  const [period, setPeriod] = useState("week");

  const { data: trendMovies } = useQuery(
    ["trending", period],
    () => fetchTrendingMovies(period),
    { select: (data) => data.data.results },
    {
      retry: false,
    }
  );

  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // fetchTrendingMovies(period);
    setTrends(trendMovies);
    console.log("period", period);
  }, [trendMovies, period]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTrendMovies(data);
  //   }, 200);
  // }, [data]);

  //discover movies
  const discovers = useQuery("discovers", fetchDiscoverMovies, {
    retry: false,
  });

  //genres
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });

  return (
    <>
      <div className="mt-4 py-5">
        <h2 className="py-4 text-center">DISCOVER</h2>
        <Slider {...sliderSettings}>
          {discovers?.data?.data?.results?.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              genresMovie={genres?.data?.data?.genres?.filter((genre) =>
                item?.genre_ids?.includes(genre.id)
              )}
            ></Card>
          ))}
        </Slider>
      </div>

      <div className="py-4">
        <h2 className="py-5 text-center">TRENDING</h2>
        <div className="d-flex ms-4 mb-4">
          <Button
            type="button"
            onClick={() => {
              setPeriod("day");
            }}
          >
            Daily
          </Button>

          <Button
            type="button"
            onClick={() => {
              setPeriod("week");
            }}
          >
            Weekly
          </Button>
        </div>

        <Slider {...sliderSettings}>
          {trends?.map((item, index) => (
            <Card
              id={item.id}
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              genresMovie={genres?.data?.data?.genres?.filter((genre) =>
                item?.genre_ids?.includes(genre.id)
              )}
            ></Card>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DiscoverTrendMovies;
