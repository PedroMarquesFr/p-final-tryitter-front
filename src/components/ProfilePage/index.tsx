import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

type profileProps = {
  nickname: string;
  login: string;
};

const ProfilePage: React.FC<profileProps> = ({ nickname, login }) => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton>Editar perfil</EditButton>
        <h1>{nickname}</h1>
        <h2>@{login}</h2>

        <p>Cool tryber student 😆</p>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
