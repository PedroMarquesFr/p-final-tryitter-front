import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import UserContext from "../../contextAPI/userContext";

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  ButtonA,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Avatar,
} from "./styles";

const MenuBar: React.FC = () => {
  let navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get("user");
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton onClick={() => navigate("/")}>
          <HomeIcon />
          <span>PaginaInical</span>
        </MenuButton>
        <MenuButton
          className="active"
          onClick={() => {
            navigate(`/perfil/${user.userId}`);
          }}
        >
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <ButtonA>
          <span>Tweetar</span>
        </ButtonA>
      </Topside>
      <Avatar onClick={() => navigate("/perfil")} />
    </Container>
  );
};

export default MenuBar;
