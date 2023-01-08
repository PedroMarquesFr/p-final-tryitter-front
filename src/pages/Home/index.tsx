import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "../../components/Feed";
import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";
import { checkIfTokenExists } from "../../service/CookieService";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkIfTokenExists()) {
      navigate("/login");
    }
  }, []);
  return (
    <Container>
      <MenuBar />
      <Content>
        <Feed byUser={false} />
      </Content>
      <SideBar />
    </Container>
  );
};

export default Home;
