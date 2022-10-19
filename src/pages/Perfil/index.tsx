import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import SideBar from "../../components/SideBar";
import { checkIfTokenExists } from "../../service/CookieService";

import { Container } from "./styles";

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkIfTokenExists()) {
      navigate("/login");
    }
  }, []);
  return (
    <Container>
      <MenuBar />
      <div>Perfil</div>
      <SideBar />
    </Container>
  );
};

export default Perfil;
