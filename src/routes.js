import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SignIn from "./components/pages/Signin";
import MovieDetail from "./components/pages/MovieDetail";
import Profile from "./components/pages/Profile";
import SortFilterMovie from "./components/pages/SortFilterMovie";

const routes = [
  { title: "Home", path: "/", element: Home, isNav: true },
  { title: "About", path: "/about", element: About, isNav: true },
  { title: "Login", path: "/login", element: Login, isNav: false },
  { title: "Signup", path: "/signup", element: SignIn, isNav: false },
  {
    title: "MovieDetail",
    path: "/:movieId",
    element: MovieDetail,
    isNav: false,
  },
  { title: "Profile", path: "/profile", element: Profile, isNav: false },
  {
    title: "SortFilterMovie",
    path: "/sortfilter/:category",
    element: SortFilterMovie,
    isNav: false,
  },
];

export default routes;
