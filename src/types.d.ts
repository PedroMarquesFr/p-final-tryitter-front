type UserEntity = {
  userId: string;
  nickname: string;
  login: string;
  password: string;
  posts: PostEntity | any;
};

type PostEntity = {
  postId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: UserEntity | null;
};

export { UserEntity, PostEntity };
