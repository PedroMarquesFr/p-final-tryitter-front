import axios, { AxiosError } from "axios";
import Cookies from "universal-cookie";
import { PostEntity } from "../types";
// require('dotenv').config();
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
      url: `${process.env.REACT_APP_API_URL}/user`,
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
      url: `${process.env.REACT_APP_API_URL}/user/Authentication`,
      data: login,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error;
    }
  }
};

const getPostsByUserService = async (
  userToken: string,
  page: number
): Promise<PostEntity[] | any> => {
  try {
    const cookies = new Cookies();
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/post/user/${userToken}?page=${page}&take=20`,
      headers: { authorization: `Bearer ${cookies.get("token")}` },
    });
    return response.data;
  } catch (error: unknown) {
    console.log("AAAAAA", error);
    if (error instanceof AxiosError) {
      return { error };
    }
  }
};

const getPostsService = async (page: number): Promise<PostEntity[] | any> => {
  try {
    const cookies = new Cookies();
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/post?page=${page}&take=15`,
      headers: { authorization: `Bearer ${cookies.get("token")}` },
    });
    return response.data;
  } catch (error: unknown) {
    console.log("AAAAAA", error);
    if (error instanceof AxiosError) {
      return { error };
    }
  }
};

const postTweetService = async (tweetContent: string) => {
  try {
    const cookies = new Cookies();
    const user = cookies.get("user");
    console.log(user)
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/post`,
      headers: { authorization: `Bearer ${cookies.get("token")}` },
      data: {
        content: tweetContent,
        userId: user.userId,
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.log("AAAAAA", error);
    if (error instanceof AxiosError) {
      return { error };
    }
  }
};

export {
  registerNewUser,
  loginUser,
  getPostsByUserService,
  getPostsService,
  postTweetService,
};
