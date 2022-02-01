import { useQuery } from "react-query";
import {
  fetchSortFilter,
  fetchTopRatedPopular,
  fetchMovieGenres,
} from "../../data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../sections/Card";

const SortFilter = () => {
  const category = useParams().category;
  // console.log(category);
  const location = useLocation();
  // console.log(location);

  const [sortValue, setSortValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);

  const { data: sortFilter } = useQuery(
    ["popular", sortValue, startDate, endDate, genre],
    () => fetchSortFilter(sortValue, startDate, endDate, genre),
    {
      select: (data) => data.data.results,
    }
  );

  const { data: topRatedPopular } = useQuery(
    ["topratedpopular", category, page],
    () => fetchTopRatedPopular(category, page),
    {
      select: (data) => data.data.results,
    }
  );

  const [filterData, setFilterData] = useState(topRatedPopular);

  useEffect(() => {
    setFilterData(topRatedPopular);
  }, []);

  useEffect(() => {
    fetchSortFilter(sortValue, startDate, endDate, genre);
    setFilterData(sortFilter);
  }, [sortValue, startDate, endDate, genre]);

  console.log("filter", filterData);

  //genres
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });

  useEffect(() => {
    if (sortValue === "original_title.asc") {
      setSortValue(sortValue);
    } else if (sortValue === "original_title.desc") {
      setSortValue(sortValue);
    } else if (sortValue === "release_date.asc") {
      setSortValue(sortValue);
    } else if (sortValue === "release_date.desc") {
      setSortValue(sortValue);
    } else if (sortValue === "popularity.desc") {
      setSortValue(sortValue);
    } else if (sortValue === "popularity.asc") {
      setSortValue(sortValue);
    }
  }, [sortValue]);

  useEffect(() => {
    fetchTopRatedPopular(category);
  }, [location]);

  // console.log("topdata", topRatedPopular);
  // console.log("populardata", topRatedPopular);
  // console.log("sortvalue:", sortValue);

  // const showMoreItems = () => {
  //   setVisible((prevValue) => prevValue + 10);
  // };
  return (
    <>
      <h1>sort filter</h1>
      <select
        class="form-select"
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option selected value="sort">
          Sort by
        </option>
        <option value="original_title.asc">A-Z</option>
        <option value="original_title.desc">Z-A</option>
        <option value="release_date.asc">Last Released</option>
        <option value="release_date.desc">New Released</option>
        <option value="popularity.desc">Most Popular</option>
        <option value="popularity.asc">Least Popular</option>
      </select>

      {filterData?.map((item) => (
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
    </>
  );
};

export default SortFilter;
