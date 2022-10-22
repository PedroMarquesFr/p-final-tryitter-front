import Cookies from "universal-cookie";
import { UserEntity } from "../types";

const checkIfTokenExists = () => {
  const cookies = new Cookies();
  const token = cookies.get("user");
  return token !== undefined;
};

const getUserCookie = (): UserEntity => {
  const cookies = new Cookies();
  return cookies.get("user");
};

export { checkIfTokenExists, getUserCookie };
