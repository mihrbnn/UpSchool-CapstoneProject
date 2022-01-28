import { useQuery } from "react-query";
import { fetchSearchMovie, fetchMovieGenres } from "../../data";
import DiscoverTrendMovies from "../sections/DiscoverTrendMovies";
import Card from "../sections/Card";
import { useState, useEffect } from "react";
import { Input } from "../../styledComponents";
import debounce from "lodash.debounce";
import Slider from "react-slick";
import sliderSettings from "../sections/slider";

const Home = (props) => {
  //search movie
  const [filter, setFilter] = useState("");
  const [searched, setSearched] = useState([]);
  const { data: searchData } = useQuery(["filterMovie", filter], () =>
    fetchSearchMovie(filter)
  );

  useEffect(() => {
    setSearched(
      searchData?.data?.results?.filter((item) => {
        return item.title.toLowerCase().includes(filter.toLowerCase());
      })
    );
    console.log("searchdata::", searchData);
    console.log("searched::", searched);
  }, [filter, searchData]);

  const handleSearch = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  //genres
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });

  //debounce search
  const debouncedOnChange = debounce(handleSearch, 3000);

  return (
    <>
      <div id="home-header">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <Input onChange={debouncedOnChange} placeholder="search movie" />
          </div>
        </div>
      </div>
      {searched != null ? (
        <>
          <h3 className="mt-5 p-4">Search Results</h3>
          <Slider {...sliderSettings}>
            {searched?.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                genresMovie={genres?.data?.data?.genres?.filter((genre) =>
                  item?.genre_ids?.includes(genre.id)
                )}
              />
            ))}
          </Slider>
        </>
      ) : (
        <DiscoverTrendMovies />
      )}
    </>
  );
};

export default Home;
