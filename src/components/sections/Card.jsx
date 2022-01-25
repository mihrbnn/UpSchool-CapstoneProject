import {
  CardBody,
  ImgContainer,
  Img,
  // Header,
  // Text,
  // CardButton,
} from "../../styledComponents";

const Card = (props) => {
  const { poster_path } = props;
  return (
    <CardBody>
      <ImgContainer>
        <Img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
      </ImgContainer>
    </CardBody>
  );
};
export default Card;
