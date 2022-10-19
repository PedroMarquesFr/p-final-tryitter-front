import Cookies from "universal-cookie";

const checkIfTokenExists = () => {
  const cookies = new Cookies();
  const token = cookies.get("user");
  return token !== undefined;
};

export { checkIfTokenExists };
