import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  border-bottom: 2px solid ${(props) => props.theme.BUTTON_COLOR};
`;

const ProfileImgDiv = styled.div`
  display: flex;
  align-items: Center;
`;

const ProfileImg = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 2rem;
`;

const ProfileContentText = styled.div`
  align-items: center;
  padding: 2rem;
  width: 100%;
  margin-left: 3em;
`;

const ProfileContentTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  width: 100%;
  margin-top: 2em;
  padding-bottom: 1.5em;
`;

const ProfileText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1em;
`;

const ProfileLink = styled(Link)``;

export {
  ProfileContent,
  ProfileImgDiv,
  ProfileImg,
  ProfileContentText,
  ProfileContentTitle,
  ProfileText,
  ProfileLink,
};
