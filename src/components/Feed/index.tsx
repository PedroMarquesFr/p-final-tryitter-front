import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import UserContext from "../../contextAPI/userContext";
import { PostEntity, UserEntity } from "../../types";

import { Container, Tabs, Tab, Tweets } from "./styles";
import Tweet from "./Tweet/index";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed: React.FC<{ byUser: boolean }> = ({ byUser }) => {
  const { getPostsByUser, userPosts, postsLoading, doesPostsExists, hasMore } =
    useContext(UserContext);
  const [page, setPage] = useState(0);

  const cookies = new Cookies();
  const user: UserEntity = cookies.get("user");

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    if (byUser) {
      await getPostsByUser(user.userId, page);
    }
    setPage(page + 1);
  };

  return (
    <Container>
      <Tabs>
        <Tab choosen>Tweets</Tab>
      </Tabs>

      {postsLoading && <span>Loading...</span>}
      {doesPostsExists && (
        <Tweets>
          {userPosts.length === 0 ? (
            <span>usuario nao tem posts</span>
          ) : (
            <InfiniteScroll
              dataLength={userPosts.length}
              next={getPost}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              // height={400}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {userPosts.map((post: PostEntity) => (
                <Tweet
                  key={post.postId}
                  content={post.content}
                  login={user.login?.split("@")[0]}
                  nickname={user.nickname}
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
