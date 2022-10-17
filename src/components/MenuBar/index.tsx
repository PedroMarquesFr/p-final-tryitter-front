import React from 'react';
import { useNavigate } from "react-router-dom";

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
	Avatar
} from './styles';

const MenuBar: React.FC = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Topside>
				<Logo />
				<MenuButton onClick={() => navigate("/")}>
					<HomeIcon />
					<span>PaginaInical</span>
				</MenuButton>
				<MenuButton className="active" onClick={() => navigate("/perfil")}>
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
