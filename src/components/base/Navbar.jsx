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
        <StyledNavLink as="a" href="/login">
          Login
        </StyledNavLink>
      </StyledNavList>
      <StyledNavList>
        <StyledNavLink as="a" href="/profile">
          Profile
        </StyledNavLink>
      </StyledNavList>
    </StyledUl>
  );
};

export default Navbar;
