import { useQuery } from "react-query";
import { fetchSearchMovie } from "../../data";
import DiscoverTrendMovies from "../sections/DiscoverTrendMovies";
import Card from "../sections/Card";
import { useState, useEffect } from "react";
import { Input } from "../../styledComponents";
import debounce from "lodash.debounce";

const Home = (props) => {
  //search movie
  const [filter, setFilter] = useState("");
  const [searched, setSearched] = useState([]);
  // console.log("searchedmap:", searched);
  const { data: searchData } = useQuery(["filterMovie", filter], () =>
    fetchSearchMovie(filter)
  );
  // console.log("searchdata:", searchdata);

  useEffect(() => {
    setSearched(
      searchData?.data?.results?.filter((item) => {
        return item.title.toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [filter, searchData]);
  console.log("searchedmovie::", searched);

  const handleSearch = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  //debounce search
  const debouncedOnChange = debounce(handleSearch, 3000);

  return (
    <>
      <div id="home-header">
        <div className="container d-flex justify-content-center align-items-center">
          <div searched={searched} className="col-md-6">
            <Input onChange={debouncedOnChange} placeholder="search movie" />
          </div>
        </div>
      </div>
      <div>
        {searched?.map((item) => (
          <Card
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
          />
        ))}
      </div>
      <DiscoverTrendMovies />
    </>
  );
};

export default Home;
