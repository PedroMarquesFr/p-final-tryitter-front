import React, { useState, useEffect } from "react";
import { Container, Form, TextInput, Submit } from "./styles";
import { useCookies } from "react-cookie";
import { registerNewUser } from "../../service/TrytterService";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    // const [cookies, setCookie] = useCookies(['token']);
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    const MIN_NUMBER_PASSWORD = 8;
    const MAX_NUMBER_PASSWORD = 15;
    if (
      regexEmail.test(String(login).toLowerCase()) &&
      password.length > MIN_NUMBER_PASSWORD &&
      password.length < MAX_NUMBER_PASSWORD &&
      nickname.length !== 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [nickname, login, password]);

  const registerNewUserAndRedirect = async () => {
    const result = await registerNewUser({
      Nickname: nickname,
      Login: login,
      Password: password,
    });
    console.log(result);
    if (result?.status === 400) {
      return enqueueSnackbar(result.data, { variant: "error" });
    }
    enqueueSnackbar("User Created.", { variant: "success" });
    navigate("/login");
  };

  return (
    <Container>
      <Form>
        <TextInput
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <TextInput
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
          type="text"
        />
        <TextInput
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form>
      <Submit disabled={!isValid} onClick={registerNewUserAndRedirect}>
        Register
      </Submit>
    </Container>
  );
};

export default Register;
