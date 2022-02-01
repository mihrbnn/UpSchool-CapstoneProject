import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme";
import { userReducer } from "./userLogin";
import { FavoriteReducer } from "./favorites";
import { SeenMoviesReducer } from "./seen";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  favorites: FavoriteReducer,
  seenMovies: SeenMoviesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["theme", "user", "favorites", "seenMovies"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
store.subscribe(() => console.log("STATE LOG:::", store.getState()));
export const persistor = persistStore(store);
