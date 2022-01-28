import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.TEXT_COLOR};
  background-color: ${(props) => props.theme.BUTTON_COLOR};
  display: block;
  font-size: 1em;
  margin-left: 5em;
  margin-bottom: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export { Button };
