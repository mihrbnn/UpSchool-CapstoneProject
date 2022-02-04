<<<<<<< HEAD
=======

>>>>>>> 417fbf45a72cbba6f2ae262649b07d503045fd55
import {
  fetchSortFilter,
  fetchTopRatedPopular,
  fetchMovieGenres,
} from "../../data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../sections/Card";
import { Button, Select } from "../../styledComponents";

const SortFilter = () => {
  const category = useParams().category;
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filterData, setFilterData] = useState({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getFilterData = (pageParam = filterData.page) => {
    fetchSortFilter(
      pageParam,
      sortValue,
      startDate,
      endDate,
      selectedGenre
    ).then((response) => {
      const data = response.data;
      if (pageParam !== 1) {
        data.results = [...filterData.results, ...data.results];
      }
      setFilterData(data);
    });
  };

  const getPopularData = () => {
    fetchTopRatedPopular(category, filterData.page).then((response) => {
      const data = response.data;
      setFilterData(data);
    });
  };

  useEffect(() => {
    getFilterData(1);
  }, [sortValue, startDate, endDate, selectedGenre, location]);

  useEffect(() => {
    fetchMovieGenres().then((response) => {
      setGenres(response.data.genres);
    });
    getPopularData();
  }, []);

  useEffect(() => {
    getFilterData();
  }, [filterData.page]);

  useEffect(() => {
    getPopularData();
  }, [category]);

  return (
    <>
      <div className="mt-5">
        <h5 className="mb-4 ms-4">Filter by: </h5>
        <input
          className="ms-4"
          type="date"
          id="from_date"
          name="from_date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          id="to_date"
          name="to_date"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        <Select
          className="form-select"
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre.id} selected value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
        <br />
        <Select
          className="form-select"
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option selected value="sort">
            Sort by
          </option>
          <option value="original_title.asc">Movie Title (from A to Z)</option>
          <option value="original_title.desc">Movie Title (from Z to A)</option>
          <option value="release_date.asc">Oldest Released</option>
          <option value="release_date.desc">Newest Released</option>
          <option value="popularity.desc">Most Popular</option>
          <option value="popularity.asc">Least Popular</option>
        </Select>
        <div className="d-flex flex-wrap justify-content-center">
          {filterData?.results.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              genresMovie={genres?.filter((genre) =>
                item?.genre_ids?.includes(genre.id)
              )}
            />
          ))}
        </div>
      </div>
      {filterData.page < filterData.total_pages && (
        <div className="d-flex justify-content-center">
          <Button
            className="mt-3"
            onClick={() => {
              setFilterData({ ...filterData, page: filterData.page + 1 });
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default SortFilter;
