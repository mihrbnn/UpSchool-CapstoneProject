import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  /* padding: 0 0 32px; */
  margin: 20px 20px 40px;
  width: 342px;
  box-shadow: 0 0 5px rgba(226, 219, 219, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
  border: 10px;
  border-radius: 8px;
  height: 680px;
  text-align: center;
  display: flex;
  background-color: ${(props) => props.theme.CARD};
`;

const CardBody = styled.div`
  /* padding-bottom: 30px; */
  border-width: 10px;
  border-color: black;
  text-align: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 342px;
  border-radius: 8px;
  height: 450px;
`;
const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 342px;
  height: 450px;
  border-radius: 8px 8px 0px 0px;
`;

const Title = styled.h4`
  margin-top: 3px;
  padding-left: 8px;
  font-weight: bold;
  text-align: start;
  text-align: center;
  color: ${(props) => props.theme.CARD_TITLE};
`;

const Text = styled.p`
  padding-left: 8px;
  font-weight: bold;
  text-align: start;
  color: grey;
  text-align: center;
`;
const CardButton = styled.button`
  display: d-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5px 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.BUTTON_COLOR};
  border: 2px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

export {
  CardContainer,
  CardBody,
  ImgContainer,
  Img,
  Title,
  Text,
  CardButton,
  CardLink,
};
