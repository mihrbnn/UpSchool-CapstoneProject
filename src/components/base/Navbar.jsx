import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ThemeButton,
  Ul,
  NavList,
  NavLink,
  dropDiv,
  dropUl,
  dropLink,
  dropLi,
  dropButton,
} from "../../styledComponents";
// import ChangeThemeButton from "../../styledComponents/styledToggler";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../reduxStore/theme";
const Navbar = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Movie
          </NavLogo>
          {/* <Ul>
          <NavList>
            <NavLink to="/">TOP</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/">POPULAR</NavLink>
          </NavList>
        </Ul> */}
          <Ul>
            <NavList>
              <NavLink to="/">Home</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/about">About</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/profile">Profile</NavLink>
            </NavList>
            <NavList>
              <NavLink to="/login">Login</NavLink>
            </NavList>
            <NavList>
              <NavLink to="#">
                <ThemeButton
                  onClick={() => dispatch(changeTheme(state.theme))}
                />
              </NavLink>
            </NavList>
          </Ul>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
