import { createContext } from "react";
import { UserEntity } from "../types";

const UserContext = createContext<UserEntity | any>("initial");
export default UserContext;
