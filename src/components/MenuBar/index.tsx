import React from 'react';

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
	return (
		<Container>
			<Topside>
				<Logo />
				<MenuButton>
					<HomeIcon />
					<span>PaginaInical</span>
				</MenuButton>
				<MenuButton>
					<BellIcon />
					<span>Notificacoes</span>
				</MenuButton>
				<MenuButton>
					<EmailIcon />
					<span>Mensagens</span>
				</MenuButton>
				<MenuButton>
					<FavoriteIcon />
					<span>Favoritado</span>
				</MenuButton>
				<MenuButton className="active">
					<ProfileIcon />
					<span>Perfil</span>
				</MenuButton>
				<ButtonA>
					<span>Tweetar</span>
				</ButtonA>
			</Topside>
			<Avatar />
		</Container>
	);
};

export default MenuBar;
