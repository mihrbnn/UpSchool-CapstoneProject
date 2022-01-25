import { StyledUl, StyledNavList, StyledNavLink } from "../../styledComponents";
const Navbar = (props) => {
  return (
    <StyledUl>
      <StyledNavList>
        <StyledNavLink as="a" href="/">
          Home
        </StyledNavLink>
      </StyledNavList>
      <StyledNavList>
        <StyledNavLink as="a" href="/about">
          About
        </StyledNavLink>
      </StyledNavList>
      <StyledNavList>
        <StyledNavLink as="a" href="/contacts">
          Contact
        </StyledNavLink>
      </StyledNavList>
    </StyledUl>
  );
};

export default Navbar;
