import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Zap } from "@styled-icons/octicons";
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
const FilterButton = styled.button`
  display: block;
  width: 25%;
  padding: 12px 0;
  margin-top: 50px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
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
  height: 80px;
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

export {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ThemeButton,
  FilterButton,
  Ul,
  NavList,
  NavLink,
};
