import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsMoonFill } from "react-icons/bs";
import { SiThemoviedatabase } from "react-icons/si";
import { Container } from "./globalStyles";

const ThemeButton = styled(BsMoonFill)`
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: 1.4em;
  display: d-flex;
  align-items: center;
  &:hover {
    transform: traslateY(-3rem);
    color: #a6a3befb;
  }
`;

const Nav = styled.nav`
  background: ${(props) => props.theme.BACKGROUND_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
  position: sticky;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 80x; */
  ${Container};
`;

const NavLogo = styled(Link)`
  color: ${(props) => props.theme.TEXT_COLOR};
  display: flex;
  text-decoration: none;
  align-items: center;
  font-size: 2.2rem;
  &:hover {
    transform: traslateY(-3rem);
    color: #a6a3befb;
  }
`;

const NavIcon = styled(SiThemoviedatabase)`
  margin-right: 0.8rem;
  &:hover {
    transform: traslateY(-3rem);
    color: #a6a3befb;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const NavList = styled.li`
  list-style: none;
  height: 80px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => props.theme.TEXT_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    transform: traslateY(-3rem);
    color: #a6a3befb;
  }
`;

const DropDownList = styled.div`
  display: ${(props) => props.display};
  top: 4.1em;
  width: 9rem;
  position: absolute;
  transition: all 0.15s linear;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 5px 15px;;
  border-radius: 0 0 5px 5px;
  z-index: 10;
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color:${(props) => props.theme.BACKGROUND_COLOR}
    & > li {
      padding: 10px 0;
      width: 100%;
      cursor: pointer;
      color:${(props) => props.theme.TEXT_COLOR}
      &:hover {
        color: ${(props) => props.theme.TEXT_COLOR};
        font-weight: 600;
      }
    }
  }
  }
`;

const DropDown = styled.div`
  width: 9rem;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ThemeButton,
  Ul,
  NavList,
  NavLink,
  DropDownList,
  DropDown,
};
