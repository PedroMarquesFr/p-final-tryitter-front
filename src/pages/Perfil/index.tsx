import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Feed from "../../components/Feed";
import MenuBar from "../../components/MenuBar";
import ProfilePage from "../../components/ProfilePage";
import SideBar from "../../components/SideBar";
import UserContext from "../../contextAPI/userContext";
import { checkIfTokenExists } from "../../service/CookieService";
import { UserEntity } from "../../types";

import {
  BackIcon,
  Container,
  Header,
  PerfilWrapper,
  ProfileInfo,
} from "./styles";

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(UserContext);
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
    if (context.user.userId === id) {
      setUser(context.user);
    } else {
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
            <strong>Pedro Marques</strong>
            <span>Perfil</span>
          </ProfileInfo>
        </Header>
        <ProfilePage nickname="Pedro Marques" login="pedromarques1011"/>
        <Feed />
      </PerfilWrapper>
      <SideBar />
    </Container>
  );
};

export default Perfil;
