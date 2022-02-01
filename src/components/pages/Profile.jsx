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
} from "../../styledComponents";

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
  // const genres = useQuery("genres", fetchMovieGenres, {
  //   retry: false,
  // });

  // console.log("genres", genres?.data?.data?.genres);
  // console.log("films", films);

  return (
    <>
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
          <table className="table w-75 mx-auto border">
            <thead>
              <tr>
                <th scope="col">Film ID</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((film) => {
                return (
                  <tr key={film.id}>
                    <th scope={film.id}>{film.id}</th>
                    <td>{film.title}</td>
                    <td>
                      {/* <h1>
                    {genres?.data?.data?.genres
                      ?.filter((genre) => film?.genre?.id?.includes(genre.id))
                      .map((item, index) => (index ? " / " : "") + item.name)}
                  </h1> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <div className="h-100  container d-flex justify-content-center">
          <h1 className="d-flex align-items-center justify-content-center">
            Please Log In
          </h1>
        </div>
      )}
    </>
  );
};
export default Profile;
