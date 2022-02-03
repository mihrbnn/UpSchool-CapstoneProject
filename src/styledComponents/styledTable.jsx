import styled from "styled-components";

const StyledTable = styled.table`
  border: 2px;
  background-color: ${(props) => props.theme.CARD};
`;

const THead = styled.thead`
  // custom css goes here
`;

const TBody = styled.tbody`
  // custom css goes here
`;

const TR = styled.tr`
  // custom css goes here
`;

const TH = styled.th`
  text-align: center;
  color: ${(props) => props.theme.CARD_TITLE};
`;

const TD = styled.td`
  text-align: center;
  color: ${(props) => props.theme.CARD_TITLE};
`;

export { StyledTable, THead, TBody, TR, TH, TD };
