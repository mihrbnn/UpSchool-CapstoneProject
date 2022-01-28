import styled from "styled-components";
import { Link } from "react-router-dom";

const dropDiv = styled.div`
  height: 10em;
  width: 3em;
`;

const dropButton = styled.button`
  display: block;
  width: 25%;
  padding: 12px 0;
  margin-top: 50px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  background: ${(props) => props.theme.BACKGROUND_COLOR};
  color: ${(props) => props.theme.TEXT_COLOR};
`;

const dropUl = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

const dropLi = styled.li`
  list-style: none;
  height: 80px;
`;

const dropLink = styled(Link)`
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

export { dropDiv, dropUl, dropLink, dropLi, dropButton };
