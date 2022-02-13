import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { changeTheme } from "../../reduxStore/theme";
import { userLogin } from "../../reduxStore/userLogin";
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

const Navbar = (props) => {
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.user);
  const [movieToggle, setMovieToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const popular = "popular";
  const topRated = "top_rated";
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Movie
          </NavLogo>

          {!isMobile && (
            <div>
              <Ul>
                <NavList>
                  <NavLink to="#">
                    <div
                      align="center"
                      justify="center"
                      onClick={() => setMovieToggle(!movieToggle)}
                    >
                      <DropDown>
                        <span>Movies</span>
                      </DropDown>
                      <DropDownList
                        display={movieToggle === true ? "block" : "none"}
                      >
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
                  </NavLink>
                </NavList>
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
                {user.isLogin ? (
                  <>
                    <NavList>
                      <NavLink to="/profile" className="mt-2">
                        {user.isLogin && (
                          <img
                            className="rounded-circle"
                            width="60"
                            height="60"
                            src="https://picsum.photos/id/1027/200/200"
                            alt=""
                          />
                        )}
                      </NavLink>
                    </NavList>
                    <NavList>
                      <NavLink to="#">
                        <LogOutIcon
                          onClick={() =>
                            dispatch(userLogin(!state.user.isLogin))
                          }
                        ></LogOutIcon>
                      </NavLink>
                    </NavList>
                  </>
                ) : (
                  <>
                    <NavList>
                      <NavLink to="/login">Login</NavLink>
                    </NavList>
                    <NavList>
                      <NavLink to="/signup">Sign Up</NavLink>
                    </NavList>
                  </>
                )}
              </Ul>
            </div>
          )}
          {isMobile && (
            <>
              <li className="list-unstyled">
                <Link to="#">
                  <ThemeButton
                    onClick={() => dispatch(changeTheme(state.theme))}
                  />
                </Link>
              </li>
              <div
                align="center"
                justify="center"
                onMouseLeave={() => setMenuToggle(!menuToggle)}
                onMouseEnter={() => setMenuToggle(!menuToggle)}
              >
                <DropDown>
                  <span>Menu</span>{" "}
                </DropDown>
                <DropDownList display={menuToggle === true ? "block" : "none"}>
                  <ul>
                    {routes
                      .filter((item) => item.isNav)
                      .map((item, index) => (
                        <li>
                          <Link to={item.path}>{item.title}</Link>
                        </li>
                      ))}
                    <li>
                      <Link to="sortfilter/popular">Popular</Link>
                    </li>
                    <li>
                      <Link to="sortfilter/top_rated">Top Rated</Link>
                    </li>
                    {user.isLogin ? (
                      <>
                        <li>
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() =>
                              dispatch(userLogin(!state.user.isLogin))
                            }
                          >
                            Log Out
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/signup">Sign Up</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </DropDownList>
              </div>
            </>
          )}
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
