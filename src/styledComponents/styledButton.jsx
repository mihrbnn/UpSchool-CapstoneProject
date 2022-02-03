import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.TEXT_COLOR};
  background-color: ${(props) => props.theme.BUTTON_COLOR};
  display: flex;
  justify-content: center;
  font-size: 1em;
  margin-left: 0;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 0;
  margin-bottom: 40px;
  width: 150px;
`;

export { Button };
