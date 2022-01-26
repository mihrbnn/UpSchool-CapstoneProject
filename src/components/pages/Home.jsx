import { useQuery } from "react-query";
import {
  fetchDiscoverMovies,
  fetchTrendingMovies,
  fetchMovieGenres,
} from "../../data";
import SearchMovie from "../sections/SearchMovie";
import Card from "../sections/Card";
import { useState, useEffect } from "react";
import { CardButton } from "../../styledComponents";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Home = (props) => {
  //trending movies
  const [period, setPeriod] = useState("week");
  const [trendMovies, setTrendMovies] = useState([]);
  const { search } = props;
  console.log("home", search);
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

  console.log("genres.:", genres);

  //horizontal-scrolling
  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };
  const LeftArrow = Arrow({ text: "<", className: "arrow-prev" });
  const RightArrow = Arrow({ text: ">", className: "arrow-next" });

  return (
    <>
      <div id="home-header">
        <div className="container">
          <SearchMovie />
        </div>
      </div>

      <h1>Discover</h1>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {discovers?.data?.data?.results.map((item) => (
          <Card
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
          ></Card>
        ))}
      </ScrollMenu>
      <h1>Trending</h1>
      <CardButton
        type="button"
        onClick={() => {
          setPeriod("week");
        }}
      >
        WEEK
      </CardButton>
      <CardButton
        type="button"
        onClick={() => {
          setPeriod("day");
        }}
      >
        DAY
      </CardButton>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {trendMovies?.data?.results.map((item) => (
          <Card
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
            // genres={genres?.data?.data?.genres?.filter((genre) =>
            //   item?.genre_ids?.includes(genre.id)
            // )}
          ></Card>
        ))}
      </ScrollMenu>
    </>
  );
};

export default Home;
