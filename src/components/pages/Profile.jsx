import { useState } from "react";
import { useSelector } from "react-redux";
import Inituser from "../../user.json";
import {
  InstagramIcon,
  TwitterIcon,
  ProfileContent,
  ProfileImgDiv,
  ProfileImg,
  ProfileContentText,
  ProfileContentTitle,
  ProfileText,
  ProfileLink,
  StyledTable,
  THead,
  TBody,
  TR,
  TH,
  TD,
} from "../../styledComponents";
import { useQuery } from "react-query";
import { fetchMovieGenres } from "../../data";

const Profile = () => {
  const seenMovies = useSelector((state) => state.seenMovies);
  const favorites = useSelector((state) => state.favorites);
  const { user } = useSelector((state) => state);
  const films = [...seenMovies, ...favorites]

    .filter((obj, index, arr) => {
      return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index;
    })
    .sort(function (a, b) {
      return new Date(b.release_date) - new Date(a.release_date);
    });
  const [items, setItems] = useState(films);

  const selectHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "fav") {
      setItems(favorites);
    } else if (e.target.value === "seen") {
      setItems(seenMovies);
    } else {
      setItems(films);
    }
  };

  //genres
  const { data: genres } = useQuery(
    "genres",
    fetchMovieGenres,
    {
      retry: false,
    },
    {
      select: (data) => data.data.genres,
    }
  );

  return (
    <div>
      {user.isLogin ? (
        <>
          <ProfileContent>
            <ProfileImgDiv>
              {" "}
              <ProfileImg width={"200px"} src={Inituser.avatarUrl} alt="" />
            </ProfileImgDiv>

            <ProfileContentText>
              <ProfileContentTitle className="username">
                {" "}
                {Inituser.username.toUpperCase()}{" "}
              </ProfileContentTitle>
              <ProfileText> Join Date: {Inituser.joinDate} </ProfileText>
              <ProfileText>Seen Movies: {seenMovies.length} </ProfileText>
              <ProfileText>Favorite Movies: {favorites.length} </ProfileText>

              <ProfileLink to={Inituser.socials.instagram}>
                <InstagramIcon />
              </ProfileLink>
              <ProfileLink to={Inituser.socials.twitter}>
                <TwitterIcon />
              </ProfileLink>
            </ProfileContentText>
          </ProfileContent>

          <select
            className="form-select w-50 my-5 mx-auto"
            onChange={selectHandler}
            aria-label="Default select example"
          >
            <option value="date">Closest Release Date</option>
            <option value="seen">Seen Movies</option>
            <option value="fav">Favorite Films</option>
          </select>

          <StyledTable className="table w-75 mx-auto border">
            <THead>
              <TR>
                <TH scope="col">FILM ID</TH>
                <TH scope="col">TTITLE</TH>
                <TH scope="col">GENRE</TH>
              </TR>
            </THead>
            <TBody>
              {items?.map((film) => {
                return (
                  <TR key={film.id}>
                    <TH scope={film.id}>{film.id}</TH>
                    <TD>{film.title}</TD>
                    <TD>
                      {film?.genre?.map(
                        (item, index) => (index ? " / " : "") + item.name
                      )}
                    </TD>
                  </TR>
                );
              })}
            </TBody>
          </StyledTable>
        </>
      ) : (
        <div className="h-100  container d-flex justify-content-center">
          <h1 className="d-flex align-items-center justify-content-center">
            Please Log In
          </h1>
        </div>
      )}
    </div>
  );
};
export default Profile;
