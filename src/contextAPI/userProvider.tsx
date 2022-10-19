import React, { createContext, useState } from "react";
import UserContext from "./userContext";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState({});

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
