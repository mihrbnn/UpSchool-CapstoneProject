const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const addFavorites = (id, title, genre, release_date) => ({
  type: ADD_FAVORITES,
  payload: { id, title, genre, release_date },
});

const removeFavorites = (id) => ({
  type: REMOVE_FAVORITES,
  payload: id,
});
const FavoriteReducer = (favorites = [], action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return [action.payload, ...favorites];
    case REMOVE_FAVORITES:
      return favorites.filter((item) => item.id !== action.payload);
    default:
      return favorites;
  }
};
export { addFavorites, removeFavorites, FavoriteReducer };
