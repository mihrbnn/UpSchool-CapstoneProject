import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 0;
  padding: 2em;
  /* background-color: ${(props) => props.theme.navbarBg}; */
`;

const StyledNavList = styled.li`
  display: flex;
`;

const StyledNavLink = styled(Link)`
  font-size: 1.25em;
  text-decoration: none;
  /* color: ${(props) => props.theme.navbarColor}; */
  padding: 0.5em;
`;

export { StyledUl, StyledNavList, StyledNavLink };
