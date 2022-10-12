import styled, { css } from 'styled-components';
import { Home, Notifications, Email, FavoriteBorder, Person, Twitter } from '../../styles/Icons';
import Button from '../Button/index';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	right: 0;
	height: 100vh;
	@media (max-width: 500px) {
		display: none;
	}
`;

export const Topside = styled.div`margin: 14px 21px;`;

export const MenuButton = styled.div`
	display: flex;
	align-items: center;
	flex-shrink: 0;
	> span {
		@media (max-width: 1000px) {
			display: none;
		}
		font-size: 19px;
		padding-left: 15px;
		font-weight: bold;
	}

	&:hover {
		background-color: var(--twitter-dark-hover);
	}

	&:hover,
	&.active {
		> span,
		svg {
			color: var(--twitter);
			fill: var(--twitter);
		}
	}
	padding: 15px 10px;
	border-radius: 50px;

	& + button:last-child {
		margin-top: 33px;
	}
`;

export const ButtonA = styled(Button)`
  > span {
		@media (max-width: 1000px) {
			display: none;
      width:36px;
      height:36px;
      border-radius: 50%;
		}
  }
  margin-left: 9px;
  @media (min-width:1000px){
    width: 100%;
  }
`;

const iconsCSS = css`
	flex-shrink: 0;

	width: 30px;
	height: 30px;
	color: var(--white);
`;

export const Logo = styled(Twitter)`
  flex-shrink:0;
  width:35px;
  height: 35px;
  color: var(--white);
  margin-bottom: 15px;
  padding-left: 15px;
`;

export const Avatar = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: var(--gray);
	margin: 20px 15px;
`;

export const HomeIcon = styled(Home)`${iconsCSS}`;

export const BellIcon = styled(Notifications)`${iconsCSS}`;

export const EmailIcon = styled(Email)`${iconsCSS}`;

export const FavoriteIcon = styled(FavoriteBorder)`${iconsCSS}`;

export const ProfileIcon = styled(Person)`${iconsCSS}`;
