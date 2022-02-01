const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES";
const REMOVE_SEEN_MOVIES = "REMOVE_SEEN_MOVIES";
const addSeenMovies = (id, title, genre, release_date) => ({
  type: ADD_SEEN_MOVIES,
  payload: { id, title, genre, release_date },
});
const removeSeenMovies = (id) => ({
  type: REMOVE_SEEN_MOVIES,
  payload: id,
});
const SeenMoviesReducer = (seenList = [], action) => {
  switch (action.type) {
    case ADD_SEEN_MOVIES:
      return [action.payload, ...seenList];
    case REMOVE_SEEN_MOVIES:
      return seenList.filter((item) => item.id !== action.payload);
    default:
      return seenList;
  }
};
export { addSeenMovies, removeSeenMovies, SeenMoviesReducer };
