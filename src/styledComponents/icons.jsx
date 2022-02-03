import styled from "styled-components";
import {
  BsBookmarkFill,
  BsTwitter,
  BsInstagram,
  BsBookmark,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const FavoriteIcon = styled(BsHeart)`
  font-size: 25px;
`;

const WatchedIcon = styled(BsBookmark)`
  font-size: 25px;
`;

const FavoriteIconFill = styled(BsHeartFill)`
  font-size: 25px;
`;

const WatchedIconFill = styled(BsBookmarkFill)`
  font-size: 25px;
`;

const InstagramIcon = styled(BsInstagram)`
  font-size: 25px;
  color: ${(props) => props.theme.BUTTON_COLOR};
`;

const TwitterIcon = styled(BsTwitter)`
  font-size: 25px;
  margin-left: 18px;
  color: ${(props) => props.theme.BUTTON_COLOR};
`;

const LogOutIcon = styled(FiLogOut)`
  font-size: 25px;
`;

export {
  FavoriteIcon,
  WatchedIcon,
  FavoriteIconFill,
  WatchedIconFill,
  InstagramIcon,
  TwitterIcon,
  LogOutIcon,
};
