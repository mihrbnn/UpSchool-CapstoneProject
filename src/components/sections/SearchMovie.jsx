// // import { useState, useEffect } from "react";
// // import { useQuery } from "react-query";
// // import { fetchSearchMovie } from "../../data";
// // import { FormGroup, Input, Button } from "../../styledComponents";
// // import Card from "../sections/Card";
// // import debounce from "lodash.debounce";

// const SearchMovie = () => {
//   // const [filter, setFilter] = useState("");
//   // const [searched, setSearched] = useState([]);
//   // // console.log("searchedmap:", searched);
//   // const { data: searchData } = useQuery(["filterMovie", filter], () =>
//   //   fetchSearchMovie(filter)
//   // );
//   // // console.log("searchdata:", searchdata);

//   // useEffect(() => {
//   //   setSearched(
//   //     searchData?.data?.results?.filter((item) => {
//   //       return item.title.toLowerCase().includes(filter.toLowerCase());
//   //     })
//   //   );
//   // }, [filter, searchData]);
//   // console.log("searchedmovie::", searched);

//   // const handleSearch = (event) => {
//   //   event.preventDefault();
//   //   setFilter(event.target.value);
//   // };

//   // const debouncedOnChange = debounce(handleSearch, 3000);

//   return (
//     <>
//       <div searched={searched} className="col-md-6">
//         <Input onChange={debouncedOnChange} placeholder="search movie" />
//       </div>
//       {searched?.map((item) => (
//         <Card
//           poster_path={item.poster_path}
//           title={item.title}
//           release_date={item.release_date}
//         />
//       ))}
//     </>
//   );
// };

// export default SearchMovie;