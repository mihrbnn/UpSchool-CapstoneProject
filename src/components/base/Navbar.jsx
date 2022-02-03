import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ThemeButton,
  Ul,
  NavList,
  NavLink,
  LogOutIcon,
  DropDownList,
  DropDown,
} from "../../styledComponents";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../reduxStore/theme";
import { Link } from "react-router-dom";
import { userLogin } from "../../reduxStore/userLogin";
import { useState } from "react";
const Navbar = (props) => {
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const popular = "popular";
  const topRated = "top_rated";
  const dispatch = useDispatch();

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Movie
          </NavLogo>

          {/* <div className={`dropend me-auto bg-transparent`}>
            <button
              className="btn btn-secondary dropdown-toggle bg-transparent btn-outline-none"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Movies
            </button>
            <ul
              className="dropdown-menu position-absolute p-0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link className="dropdown-item py-1" to="sortfilter/popular">
                  Popular
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-1" to="sortfilter/top_rated">
                  Top Rated
                </Link>
              </li>
            </ul>
          </div> */}
          <div
            flexDirection="column"
            align="center"
            justify="center"
            onMouseLeave={() => setToggle(!toggle)}
            onMouseEnter={() => setToggle(!toggle)}
          >
            <DropDown>
              <span>Movies</span>{" "}
            </DropDown>
            <DropDownList display={toggle === true ? "block" : "none"}>
              <ul>
                <li>
                  <Link to="sortfilter/popular">Popular</Link>
                </li>
                <li>
                  <Link to="sortfilter/top_rated">Top Rated</Link>
                </li>
              </ul>
            </DropDownList>
          </div>
          <Ul>
            <NavList>
              <NavLink to="#">
                <ThemeButton
                  onClick={() => dispatch(changeTheme(state.theme))}
                />
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/">Home</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/about">About</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/login">Login</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/profile" className="mt-2">
                {user.isLogin ? (
                  <img
                    className="rounded-circle"
                    width="60"
                    height="60"
                    src="https://picsum.photos/id/1027/200/200"
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded-circle"
                    width="60"
                    height="60"
                    src="https://picsum.photos/id/433/200/200"
                    alt=""
                  />
                )}
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="#">
                <LogOutIcon
                  onClick={() => dispatch(userLogin(!state.user.isLogin))}
                ></LogOutIcon>
              </NavLink>
            </NavList>
          </Ul>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
