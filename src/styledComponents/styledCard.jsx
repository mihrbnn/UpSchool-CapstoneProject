import styled from "styled-components";

const CardContainer = styled.div`
  padding: 0 0 32px;
  margin: 20px;
  width: 342px;
  box-shadow: 0 0 5px rgba(226, 219, 219, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
  border: 10px;
  border-radius: 5px;
  height: 650px;
  text-align: center;
  /* background-color: ${(props) => props.theme.cardWrapperBg}; */
`;

const CardBody = styled.div`
  padding-bottom: 30px;
  border-width: 10px;
  border-color: black;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 342px;
`;
const Img = styled.img`
  display: flex;
  justify-content: center;
`;

const Title = styled.h4`
  margin-top: 3px;
  padding-left: 8px;
  font-weight: bold;
  text-align: start;
`;

const Text = styled.p`
  padding-left: 8px;
  font-weight: bold;
  text-align: start;
  color: grey;
`;
const CardButton = styled.button`
  display: block;
  width: 25%;
  padding: 12px 0;
  margin-top: 50px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  /* color: ${(props) => props.theme.cardButtonColor};
  background-color: ${(props) => props.theme.cardButtonBg}; */
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export { CardContainer, CardBody, ImgContainer, Img, Title, Text, CardButton };
