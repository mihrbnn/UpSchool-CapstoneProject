import {
  CardContainer,
  CardBody,
  ImgContainer,
  Img,
  Title,
  Text,
  CardButton,
} from "../../styledComponents";

const Card = (props) => {
  const { poster_path, title, release_date, genresMovie } = props;
  return (
    <CardContainer>
      <CardBody>
        <ImgContainer>
          <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        </ImgContainer>
        <Title>{title}</Title>
        <Text>
          {genresMovie?.map((item, index) => (index ? " / " : "") + item.name)}
        </Text>
        <Text>{release_date}</Text>
        <CardButton>MORE DETAIL</CardButton>
      </CardBody>
    </CardContainer>
  );
};
export default Card;
