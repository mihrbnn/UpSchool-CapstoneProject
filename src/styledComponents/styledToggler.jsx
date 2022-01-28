// import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme } from "../reduxStore/theme";

// const Button = styled.button`
//   background: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
//   color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
//   font-size: 1em;
//   margin-bottom: 1em;
//   margin-left: 2em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: flex;
//   justify-content: center;
// `;

// function ChangeThemeButton(props) {
//   const { theme } = props;
//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Button onClick={() => dispatch(changeTheme(state.theme))}>
//         Change Theme
//       </Button>
//     </div>
//   );
// }

// export default ChangeThemeButton;
