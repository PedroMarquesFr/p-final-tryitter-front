import axios, { AxiosError } from "axios";
// import dotenv from 'dotenv';
// import 'dotenv/config'
// dotenv.config();
// require('dotenv').config()
type User = {
  Nickname: string;
  Login: string;
  Password: string;
};

type UserLogin = {
  Login: string;
  Password: string;
};

const registerNewUser = async (newUser: User) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://localhost:7272/user",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: newUser,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response);
      return error.response;
    }
  }
};

const loginUser = async (login: UserLogin) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://localhost:7272/user/Authentication",
      data: login,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response);
      return error.response;
    }
  }
};

export { registerNewUser, loginUser };
