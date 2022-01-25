//ACTION TYPES

const ADD_FAVORITES = "ADD_FAVORITES"
const REMOVE_FAVORITES = "REMOVE_FAVORITES"

//ACTION CREATORS

const addFavorites = (movieId) => ({
  type: ADD_FAVORITES,
  payload: movieId,
})

const removeFavorites = (movieId) => ({
  type: REMOVE_FAVORITES,
  payload:movieId,
})

//REDUCER

const favoritesReducer = (favorites = [], action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return [action.payload, ...favorites]
    case REMOVE_FAVORITES:
      return favorites.filter((item) => item.id !== action.payload);
    default:
      return favorites
  }
}

export {addFavorites, removeFavorites,favoritesReducer  }