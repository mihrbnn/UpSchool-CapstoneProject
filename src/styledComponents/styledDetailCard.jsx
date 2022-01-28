import styled from "styled-components";

const MovieContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7rem;
`;

const MovieContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const MovieImgDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MovieImg = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 4px;
  height: 300px;
  @media only screen and (min-width: 300px) {
    width: 300px;
  }
  @media only screen and (min-width: 400px) {
    width: 400px;
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
  @media only screen and (min-width: 800px) {
    width: 800px;
  }
  @media only screen and (min-width: 1000px) {
    width: 500px;
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
  @media only screen and (min-width: 1500px) {
    width: 750px;
  }
  @media only screen and (min-width: 1800px) {
    width: 900px;
  }
`;

const MovieContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
  @media only screen and (min-width: 1500px) {
    padding: 3rem 9rem;
  }
`;

const MovieContentTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
`;

const MovieText = styled.p`
  font-size: 1.8rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export {
  MovieContainer,
  MovieContent,
  MovieImgDiv,
  MovieImg,
  MovieContentText,
  MovieContentTitle,
  MovieText,
};
