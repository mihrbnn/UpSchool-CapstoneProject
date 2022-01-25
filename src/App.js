import "./App.css";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { GlobalStyle } from "../src/styledComponents";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
    // </ThemeProvider>
  );
}

export default App;
