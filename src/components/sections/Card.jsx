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
  const { poster_path, title, release_date } = props;
  return (
    <CardContainer>
      <CardBody>
        <ImgContainer>
          <Img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
        </ImgContainer>
        {/* <Text>{genres.name}</Text> */}
        <Title>{title}</Title>
        <Text>{release_date}</Text>
        <CardButton>MORE DETAIL</CardButton>
      </CardBody>
    </CardContainer>
  );
};
export default Card;
