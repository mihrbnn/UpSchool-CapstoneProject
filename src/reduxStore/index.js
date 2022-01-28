import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme";
import { WatchedMovieReducer } from "./watchHistory";

const rootReducer = combineReducers({
  watchHistory: WatchedMovieReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
store.subscribe(() => console.log("STATE LOG:::", store.getState()));
export const persistor = persistStore(store);
