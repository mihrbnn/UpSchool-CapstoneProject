import "./App.css";
import Navbar from "./components/base/Navbar";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styledComponents/styledTheme";
import { useSelector } from "react-redux";

function App() {
  // const { theme } = useSelector((state) => state);
  // const [theme, setTheme] = useState("light");
  const theme = useSelector((state) => state.theme);
  console.log("themee", theme);

  document.getElementById("root").style.backgroundColor = theme
    ? lightTheme.BACKGROUND_COLOR
    : darkTheme.BACKGROUND_COLOR;
  document.getElementById("root").style.color = theme
    ? lightTheme.TEXT_COLOR
    : darkTheme.TEXT_COLOR;

  return (
    <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
