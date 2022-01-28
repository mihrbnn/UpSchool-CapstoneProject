import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import { ImBookmark } from "react-icons/im";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const FavoriteIcon = styled(BsStar)`
  font-size: 25px;
  position: absolute;
`;

const WatchedIcon = styled(ImBookmark)`
  font-size: 25px;
  position: absolute;
`;

const LightIcon = styled(BsMoon)`
  transition: transform 3s ease-out;
  &:hover {
    transform: rotate(360deg);
    color: white;
  }
`;

const DarkIcon = styled(BsMoonFill)`
  transition: transform 2s ease-out;
  &:hover {
    transform: rotate(360deg);
    color: white;
  }
`;

export { FavoriteIcon, WatchedIcon, LightIcon, DarkIcon };
