import React from "react";
import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <Content>Home</Content>
      <SideBar />
    </Container>
  );
};

export default Home;
