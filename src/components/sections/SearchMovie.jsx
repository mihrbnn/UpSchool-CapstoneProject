import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSearchMovie } from "../../data";
import { FormGroup, Input, Button } from "../../styledComponents";

const SearchMovie = () => {
  const [filter, setFilter] = useState("");
  const { data } = useQuery(["searchMovie", filter], () =>
    fetchSearchMovie(filter)
  );
  console.log("searchdata:::", data);

  const handleSearch = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormGroup onSubmit={handleSubmit}>
        <Input value={filter} onChange={handleSearch} />
        <Button> Search </Button>
      </FormGroup>
    </div>
  );
};

export default SearchMovie;
