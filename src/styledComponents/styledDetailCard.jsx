import styled from "styled-components";

const MovieContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7rem;
  overflow: hidden;
  box-shadow: 0 30px 30px rgba(165, 161, 161, 0.08);
`;

const MovieContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const MovieImgDiv = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  width: 342px;
`;

const MovieImg = styled.img`
  //background-size: cover;
  //background-position: center;
  /* background-repeat: no-repeat; */
  /* object-fit: cover; */
  border-radius: 8px;
  height: 500px;
  margin-left: 4rem;
  display: flex;
  justify-content: center;

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
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
`;

const MovieText = styled.p`
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

//cast

const CastContainer = styled.section`
  width: 100%;
  margin-top: 4rem;
`;

const CastContent = styled.div`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

const CastImgDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CastImg = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 10px;
  height: 300px;
`;

const CastContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const CastText = styled.p`
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
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
  CastContainer,
  CastContent,
  CastImgDiv,
  CastImg,
  CastContentText,
  CastText,
};
