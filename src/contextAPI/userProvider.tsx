import React, { createContext, useState } from "react";
import { getPostsByUserService, getPostsService } from "../service/TrytterService";
import { PostEntity, UserEntity } from "../types";
import UserContext from "./userContext";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const PAGE_SIZE = 20;
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
  const [homePosts, setHomePosts] = useState<PostEntity[]>([]);
  const [postsLoading, setPostsLoading] = useState<boolean>(false);
  const [doesPostsExists, setDoesPostsExists] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(true);

  const getPostsByUser = async (userId: string, page: number): Promise<void> => {
    // if(userPosts.length !== 0 && page === 0){
    //   return;
    // }
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
    if(userPosts.length !== 0 && page === 0){
      setUserPosts(result);
      return;
    }
    setUserPosts([...userPosts, ...result]);
  };

  const getPosts = async (page: number): Promise<void> => {
    if(userPosts.length !== 0 && page === 0){
      return;
    }
    setPostsLoading(true);
    const result = await getPostsService(page);
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

    if(userPosts.length !== 0 && page === 0){
      setHomePosts(result);
      return;
    }
    setHomePosts([...homePosts, ...result]);
  };

  const values = {
    userData,
    setUser,
    getPostsByUser,
    userPosts,
    postsLoading,
    doesPostsExists,
    hasMore,
    getPosts,
    homePosts
  };

  return (
    <>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
