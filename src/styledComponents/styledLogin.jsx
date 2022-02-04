import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: center;
  height: 50vh;
  width: 30vw;
  margin: 100px;
  background-color: ${(props) => props.theme.CARD};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const InputContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  width: 80%;
`;

export { InputContainer, LoginContainer };
