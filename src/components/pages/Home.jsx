import { useQuery } from "react-query";
import { fetchDiscoverMovies, fetchTrendingMovies } from "../../data";
import Card from "../sections/Card";
import { useState, useEffect } from "react";
import { CardButton } from "../../styledComponents";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Home = () => {
  const discovers = useQuery("discovers", fetchDiscoverMovies, {
    retry: false,
  });

  const [period, setPeriod] = useState("week");

  const { data } = useQuery(
    ["trending", period],
    () => fetchTrendingMovies(period),
    {
      retry: false,
    }
  );

  const [trendMovies, setTrendMovies] = useState([]);

  console.log("trendsss::", trendMovies);

  useEffect(() => {
    setTrendMovies(data);
  }, [data]);

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const LeftArrow = Arrow({ text: "<", className: "arrow-prev" });
  const RightArrow = Arrow({ text: ">", className: "arrow-next" });

  return (
    <>
      <h1>Discover</h1>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {discovers?.data?.data?.results.map((item) => (
          <Card
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
          ></Card>
        ))}
        {/* <Card data={discovers?.data?.data?.results}></Card> */}
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
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
          ></Card>
        ))}
      </ScrollMenu>
    </>
  );
};

export default Home;
