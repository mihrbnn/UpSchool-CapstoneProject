import {
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
} from "../../styledComponents";
import Slider from "react-slick";
import CastSliderSettings from "../sections/castSlider";

const DetailCard = (props) => {
  const {
    poster_path,
    title,
    release_date,
    overview,
    runtime,
    crewName1,
    crewName2,
    crewName3,
    crewDepart1,
    crewDepart2,
    crewDepart3,
    cast,
    genresMovie,
  } = props;

  console.log("detaygenres::", genresMovie);
  return (
    <>
      <MovieContainer>
        <MovieContent>
          <MovieImgDiv>
            <MovieImg
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="Movie Poster"
            />
          </MovieImgDiv>
          <MovieContentText>
            <MovieContentTitle>
              {title} ({release_date})
              <MovieText className="p-2">{runtime} min</MovieText>
              <MovieText>
                {genresMovie?.map(
                  (item, index) => (index ? " / " : "") + item.name
                )}
              </MovieText>
            </MovieContentTitle>
            <MovieText>{overview}</MovieText>

            <MovieContentText className="d-flex flex-row ps-0">
              <div className="pe-5 me-4">
                <MovieText className="mb-1 fw-bold">{crewName1}</MovieText>
                <MovieText>{crewDepart1}</MovieText>
              </div>
              <div className="pe-5 me-4">
                <MovieText className="mb-1 fw-bold">{crewName2}</MovieText>
                <MovieText>{crewDepart2}</MovieText>
              </div>
              <div>
                <MovieText className="mb-1 fw-bold">{crewName3}</MovieText>
                <MovieText>{crewDepart3}</MovieText>
              </div>
            </MovieContentText>
          </MovieContentText>
        </MovieContent>
      </MovieContainer>

      {/* cast  */}

      <CastContainer>
        <Slider {...CastSliderSettings}>
          {cast?.map((item) => (
            <CastContent>
              <CastImgDiv>
                <CastImg
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt="Cast Photo"
                />
              </CastImgDiv>
              <CastContentText>
                <CastText className="fw-bold">{item.name}</CastText>
                <CastText>{item.character}</CastText>
              </CastContentText>
            </CastContent>
          ))}
        </Slider>
      </CastContainer>
    </>
  );
};

export default DetailCard;
