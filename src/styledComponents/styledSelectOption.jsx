import styled from "styled-components";
const Select = styled.select`
  width: 25%;
  height: 35px;
  background: ${(props) => props.theme.CARD};
  color: ${(props) => props.theme.TEXT_COLOR};
  padding-left: 10px;
  font-size: 16px;
  border: none;
  margin: 20px;

  option {
    background: ${(props) => props.theme.CARD};
    color: ${(props) => props.theme.TEXT_COLOR};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export { Select };
