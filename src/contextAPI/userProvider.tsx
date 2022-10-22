import React, { createContext, useState } from "react";
import { UserEntity } from "../types";
import UserContext from "./userContext";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserEntity>({
    userId: "",
    login: "",
    nickname: "",
    password: "",
    posts: {},
  });

  const values = {
    user,
    setUser,
  };

  return (
    <>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
