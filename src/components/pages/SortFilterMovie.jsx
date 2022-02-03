// import { useQuery } from "react-query";
// import {
//   fetchSortFilter,
//   fetchTopRatedPopular,
//   fetchMovieGenres,
// } from "../../data";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Card from "../sections/Card";

// const SortFilter = () => {
//   const category = useParams().category;
//   // console.log(category);
//   const location = useLocation();
//   // console.log(location);

//   const [sortValue, setSortValue] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [genre, setGenre] = useState("");
//   const [page, setPage] = useState(1);
//   // const [visible, setVisible] = useState(10);

//   const { data: sortFilter } = useQuery(
//     ["popular", sortValue, startDate, endDate, genre],
//     () => fetchSortFilter(sortValue, startDate, endDate, genre),
//     {
//       select: (data) => data.data.results,
//     }
//   );

//   const { data: topRatedPopular } = useQuery(
//     ["topratedpopular", category, page],
//     () => fetchTopRatedPopular(category, page),
//     {
//       select: (data) => data.data.results,
//     }
//   );

//   useEffect(() => {
//     fetchTopRatedPopular(category);
//   }, [location]);

//   const [filterData, setFilterData] = useState(topRatedPopular);

//   useEffect(() => {
//     setFilterData(topRatedPopular);
//   }, [topRatedPopular]); //1

//   useEffect(() => {
//     fetchSortFilter(sortValue, startDate, endDate, genre);
//     setFilterData(sortFilter); //2
//   }, [sortValue, startDate, endDate, genre]);

//   console.log("filter", filterData);

//   //genres
//   const genres = useQuery("genres", fetchMovieGenres, {
//     retry: false,
//   });

//   useEffect(() => {
//     if (sortValue === "original_title.asc") {
//       setSortValue(sortValue);
//     } else if (sortValue === "original_title.desc") {
//       setSortValue(sortValue);
//     } else if (sortValue === "release_date.asc") {
//       setSortValue(sortValue);
//     } else if (sortValue === "release_date.desc") {
//       setSortValue(sortValue);
//     } else if (sortValue === "popularity.desc") {
//       setSortValue(sortValue);
//     } else if (sortValue === "popularity.asc") {
//       setSortValue(sortValue);
//     }
//   }, [sortValue]);

//   // console.log("topdata", topRatedPopular);
//   // console.log("populardata", topRatedPopular);
//   // console.log("sortvalue:", sortValue);

//   return (
//     <>
//       <h1>sort filter</h1>
//       <select
//         class="form-select"
//         onChange={(e) => setSortValue(e.target.value)}
//       >
//         <option selected value="sort">
//           Sort by
//         </option>
//         <option value="original_title.asc">A-Z</option>
//         <option value="original_title.desc">Z-A</option>
//         <option value="release_date.asc">Last Released</option>
//         <option value="release_date.desc">New Released</option>
//         <option value="popularity.desc">Most Popular</option>
//         <option value="popularity.asc">Least Popular</option>
//       </select>

//       {filterData?.map((item) => (
//         <Card
//           id={item.id}
//           key={item.id}
//           poster_path={item.poster_path}
//           title={item.title}
//           release_date={item.release_date}
//           genresMovie={genres?.data?.data?.genres?.filter((genre) =>
//             item?.genre_ids?.includes(genre.id)
//           )}
//         />
//       ))}
//       {/* <button onClick={() => setVisible((prev) => prev + 10)}>Load More</button> */}
//     </>
//   );
// };

// export default SortFilter;

// // .slice(0, visible)

import {
  fetchSortFilter,
  fetchTopRatedPopular,
  fetchMovieGenres,
} from "../../data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../sections/Card";
import { Button } from "../../styledComponents";

const SortFilter = () => {
  const category = useParams().category;
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState({
    page: page,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getFilterData = (pageParam = page) => {
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
    fetchTopRatedPopular(category, page).then((response) => {
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
  }, [page]);

  useEffect(() => {
    getPopularData();
  }, [category]);

  return (
    <>
      <h1>Genre filter</h1>
      <select
        className="form-select"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre.id} selected value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      <input
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
      <h1>sort filter</h1>
      <select
        className="form-select"
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
      {filterData.page < filterData.total_pages && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => {
              setPage(page + 1);
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
