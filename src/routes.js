import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import MovieDetail from "./components/pages/MovieDetail";
import Profile from "./components/pages/Profile";
import SortFilterMovie from "./components/pages/SortFilterMovie";
import SearchMovie from "./components/sections/SearchMovie";

const routes = [
  { title: "Home", path: "/", element: Home, isNav: true },
  { title: "About", path: "about", element: About, isNav: true },
  { title: "Login", path: "login", element: Login, isNav: true },
  {
    title: "MovieDetail",
    path: "/:movieId",
    element: MovieDetail,
    isNav: false,
  },
  { title: "Profile", path: "profile", element: Profile, isNav: true },
  {
    title: "Search",
    path: "search",
    element: SearchMovie,
    isNav: false,
  },
  {
    title: "SortFilterMovie",
    path: "login",
    element: SortFilterMovie,
    isNav: false,
  },
];

export default routes;
