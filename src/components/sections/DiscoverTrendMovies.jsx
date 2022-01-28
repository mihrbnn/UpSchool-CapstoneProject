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
  const [trendMovies, setTrendMovies] = useState([]);

  const { data } = useQuery(
    ["trending", period],
    () => fetchTrendingMovies(period),
    {
      retry: false,
    }
  );

  useEffect(() => {
    setTrendMovies(data);
  }, [data]);

  //discover movies
  const discovers = useQuery("discovers", fetchDiscoverMovies, {
    retry: false,
  });

  //genres
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });

  console.log("trends", data);
  console.log("period::", period);
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
        <Button
          type="button"
          onClick={() => {
            setPeriod("week");
          }}
        >
          WEEKLY
        </Button>
        <Button
          type="button"
          onClick={() => {
            setPeriod("day");
          }}
        >
          DAILY
        </Button>
        <Slider {...sliderSettings}>
          {trendMovies?.data?.results?.map((item, index) => (
            <Card
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
