import React from "react";
import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";

import { Container } from "./styles";

const Perfil: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <div>Perfil</div>
      <SideBar />
    </Container>
  );
};

export default Perfil;
