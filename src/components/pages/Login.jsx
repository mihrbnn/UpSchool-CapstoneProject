import {
  InputContainer,
  LoginContainer,
  Button,
  Input,
} from "../../styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userLogin } from "../../reduxStore/userLogin";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user.isLogin) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div className="d-flex justify-content-center">
      <LoginContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="mt-3"
            type="submit"
            onClick={() => {
              dispatch(userLogin(userName, password));
            }}
          >
            LOGIN
          </Button>
        </InputContainer>
      </LoginContainer>
    </div>
  );
};

export default Login;
