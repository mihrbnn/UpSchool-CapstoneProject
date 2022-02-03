import {
  CardContainer,
  CardBody,
  ImgContainer,
  Img,
  Title,
  Text,
  CardButton,
  CardLink,
  FavoriteIcon,
  WatchedIcon,
  FavoriteIconFill,
  WatchedIconFill,
} from "../../styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../../reduxStore/favorites";
import { addSeenMovies, removeSeenMovies } from "../../reduxStore/seen";

const Card = (props) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const { seenMovies } = useSelector((state) => state);
  const { user } = useSelector((state) => state);

  const { poster_path, title, release_date, genresMovie, id } = props;

  return (
    <CardContainer>
      <CardBody>
        <ImgContainer>
          <Img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </ImgContainer>
        <Title>{title}</Title>
        <Text>
          {genresMovie?.map((item, index) => (index ? " / " : "") + item.name)}
        </Text>
        <Text>{release_date}</Text>

        {user.isLogin && favorites.some((film) => film.id === id) ? (
          <FavoriteIconFill onClick={() => dispatch(removeFavorites(id))} />
        ) : (
          <FavoriteIcon
            onClick={() =>
              dispatch(addFavorites(id, title, genresMovie, release_date))
            }
          />
        )}

        <CardButton>
          <CardLink className="text-white" to={`${id}`}>
            MORE DETAIL
          </CardLink>
        </CardButton>

        {user.isLogin && seenMovies.some((film) => film.id === id) ? (
          <WatchedIconFill onClick={() => dispatch(removeSeenMovies(id))} />
        ) : (
          <WatchedIcon
            onClick={() =>
              dispatch(addSeenMovies(id, title, genresMovie, release_date))
            }
          />
        )}
      </CardBody>
    </CardContainer>
  );
};
export default Card;
