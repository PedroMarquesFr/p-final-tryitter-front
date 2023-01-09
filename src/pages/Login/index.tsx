import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import UserContext from "../../contextAPI/userContext";
import { loginUser } from "../../service/TrytterService";
import { TextInput } from "../Register/styles";
import Cookies from "universal-cookie";

import { Container } from "../Register/styles";

const Login: React.FC = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState({ Login: "", Password: "" });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleClick = async () => {
    const result = await loginUser(user);
    if (result.message) {
      return enqueueSnackbar(
        result?.response?.data ? result?.response?.data : result.message,
        { variant: "error" }
      );
    }
    context.setUser(result);
    const cookies = new Cookies();
    cookies.set("user", result.user, { path: "/" });

    const numOfHours = 8;
    const timeToExpire = numOfHours * 60 * 60 * 1000;
    cookies.set("token", result.token, {
      path: "/",
      expires: new Date(Date.now() + timeToExpire),
    });
    console.log(context);
    enqueueSnackbar("User Logged In.", { variant: "success" });

    navigate("/");
  };
  return (
    <Container>
      <TextInput
        onChange={(e) => setUser({ ...user, Login: e.target.value })}
        placeholder="Email"
        type="email"
      />
      <TextInput
        onChange={(e) => setUser({ ...user, Password: e.target.value })}
        placeholder="Password"
        type="password"
      />
      <Button onClick={handleClick}>Login</Button>
    </Container>
  );
};

export default Login;
