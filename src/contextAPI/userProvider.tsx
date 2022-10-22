import React, { createContext, useState } from "react";
import { getPostsByUserService } from "../service/TrytterService";
import { PostEntity, UserEntity } from "../types";
import UserContext from "./userContext";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const PAGE_SIZE = 7;
  const [userData, setUser] = useState<{ token: string; user: UserEntity }>({
    token: "",
    user: {
      userId: "",
      login: "",
      nickname: "",
      password: "",
      posts: {},
    },
  });

  const [userPosts, setUserPosts] = useState<PostEntity[]>([]);
  const [postsLoading, setPostsLoading] = useState<boolean>(false);
  const [doesPostsExists, setDoesPostsExists] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(true);

  const getPostsByUser = async (userId: string, page: number): Promise<void> => {
    setPostsLoading(true);
    const result = await getPostsByUserService(userId, page);
    if (result.error) {
      console.log("Cai aqui")
      setPostsLoading(false);
      setDoesPostsExists(false);
      return;
    }
    if(result.length < PAGE_SIZE || result.length === 0){
      setHasMore(false)
    }
    setPostsLoading(false);
    setDoesPostsExists(true);
    setUserPosts([...userPosts, ...result]);
  };

  const values = {
    userData,
    setUser,
    getPostsByUser,
    userPosts,
    postsLoading,
    doesPostsExists,
    hasMore
  };

  return (
    <>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
