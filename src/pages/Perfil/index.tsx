import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Feed from "../../components/Feed";
import MenuBar from "../../components/MenuBar";
import ProfilePage from "../../components/ProfilePage";
import SideBar from "../../components/SideBar";
import UserContext from "../../contextAPI/userContext";
import { checkIfTokenExists, getUserCookie } from "../../service/CookieService";
import { UserEntity } from "../../types";

import {
  BackIcon,
  Container,
  Header,
  PerfilWrapper,
  ProfileInfo,
} from "./styles";

const Perfil: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const context = useContext(UserContext);
  const userInfo = getUserCookie();
  const [user, setUser] = useState<UserEntity>({
    userId: "",
    login: "",
    nickname: "",
    password: "",
    posts: {},
  });

  useEffect(() => {
    if (!checkIfTokenExists()) {
      navigate("/login");
    }
    if (context.userData.user.userId === id) {
      setUser(context.userData.user);
    } else {
      //pegar info da api
    }
  }, []);
  return (
    <Container>
      <MenuBar />
      <PerfilWrapper>
        <Header>
          <button>
            <BackIcon />
          </button>
          <ProfileInfo>
            <strong>{userInfo.nickname}</strong>
            <span>Perfil</span>
          </ProfileInfo>
        </Header>
        <ProfilePage nickname={userInfo.nickname} login={userInfo.login?.split("@")[0]} />
        <Feed byUser={true} />
      </PerfilWrapper>
      <SideBar />
    </Container>
  );
};

export default Perfil;
