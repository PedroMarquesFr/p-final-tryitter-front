import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import UserContext from "../../contextAPI/userContext";
import { PostEntity, UserEntity } from "../../types";

import { Container, Tabs, Tab, Tweets } from "./styles";
import Tweet from "./Tweet/index";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBall from "../LoadingBall";

const Feed: React.FC<{ byUser: boolean }> = ({ byUser }) => {
  const {
    getPostsByUser,
    userPosts,
    homePosts,
    postsLoading,
    doesPostsExists,
    hasMore,
    getPosts,
  } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const posts = byUser ? userPosts : homePosts;

  const cookies = new Cookies();
  const user: UserEntity = cookies.get("user");

  useEffect(() => {
    getRelavitePost();
  }, []);

  const getRelavitePost = async () => {
    if (byUser) {
      await getPostsByUser(user.userId, page);
    } else {
      await getPosts(page);
    }
    setPage(page + 1);
  };

  return (
    <Container>
      <Tabs>
        <Tab choosen>Tweets</Tab>
      </Tabs>

      {postsLoading && userPosts.length === 0 && <LoadingBall />}
      {doesPostsExists && (
        <Tweets>
          {posts.length === 0 ? (
            <span>usuario nao tem posts</span>
          ) : (
            <InfiniteScroll
              dataLength={posts.length}
              next={getRelavitePost}
              hasMore={hasMore}
              loader={<LoadingBall />}
              // height={400}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {posts.map((post: PostEntity) => (
                <Tweet
                  key={post.postId}
                  content={post.content}
                  login={
                    byUser
                      ? user.login?.split("@")[0]
                      : post.user?.login?.split("@")[0]
                  }
                  nickname={byUser ? user.nickname : post.user.nickname}
                  updatedAt={post.updatedAt}
                />
              ))}
            </InfiniteScroll>
          )}
        </Tweets>
      )}
      {!postsLoading && !doesPostsExists && <span>Posts nao encontrados</span>}
    </Container>
  );
};

export default Feed;
