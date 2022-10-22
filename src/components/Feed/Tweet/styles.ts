import styled, { css } from 'styled-components';
import { Chat3, Retweet, HeartOutline } from '../../../styles/Icons';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 14px 16px;
	border-bottom: 1px solid var(--outline);

	max-width: 100%;
`;

export const Retweeted = styled.div`
	display: flex;
	align-items: center;

	font-size: 13px;
	color: var(--gray);
`;

export const RetweetIconR = styled(Retweet)`
  height: 16px;
  width: 16px;
  margin-left: 35px;
  margin-right: 9px;
  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
	display: flex;
	margin-top: 3px;

	position: relative;
`;

export const Avatar = styled.div`
	width: 49px;
	height: 49px;
	background: var(--gray);
	border-radius: 50%;

	flex-shrink: 0;

	position: absolute;
	top: 0;
	left: 0;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%; /*para a imagem ficar legal e acupar toda a tela e isso q tu tem q fazer */
	padding-left: 60px;
	margin-top: 2px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;

	font-size: 15px;
	white-space: nowrap; /* pra nao quebrar linha */

	> strong {
		margin-right: 5px;
	}

	> span,
	time {
		color: var(--gray);
		font-weight: lighter;
	}

	> strong,
	span {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden; /*o que passar do espaco vai sumir*/
	}
`;

export const Dot = styled.div`
	background: var(--gray);
	height: 2px;
	width: 2px;
	border-radius: 50%;
	margin: 0 10px;
`;

export const TweetText = styled.p`
	font-size: 14px;
	margin-top: 3px;
`;

export const TweetImg = styled.div`
	margin-top: 10px;
	height: min(285px, max(175px, 41vw));
	background-color: var(--gray);
	border-radius: 14px;

	cursor: pointer;
	&:hover {
		opacity: .7;
	}
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap; /*pra ficar o texto se ajustando quanto menor a tela*/
	margin: 11px auto 0;

	width: 100%; /*tela pequena*/

	@media (min-width: 500px) {
		/* enquanto width for maior que 500px isso e valido*/
		width: 63%;
	}
`;

export const Status = styled.div`
	display: flex;
	align-items: center;
	color: var(--gray);

	&,
	> svg path {
		color: var(--gray);
	}

	transition: background .3s, color .3s;

	&:nth-child(1) {
		&:hover {
			&,
			> svg path {
				color: var(--twitter);
			}
			> svg {
				background: rgb(51, 161, 242, .1);
			}
		}
	}
	&:nth-child(2) {
		&:hover {
			&,
			svg path {
				color: var(--retweet);
			}
			> svg {
				background: rgb(0, 192, 107, .1);
			}
		}
	}
	&:nth-child(3) {
		&:hover {
			&,
			svg path {
				color: var(--like);
			}
			> svg {
				background: rgb(232, 38, 94, .1);
			}
		}
	}
`;

const iconCSS = css`
	width: 19px;
	height: 19px;
	border-radius: 50%;
	padding: 10px;
`;

export const CommentIcon = styled(Chat3)`${iconCSS}`;

export const RetweetIcon = styled(Retweet)`${iconCSS} `;

export const LikeIcon = styled(HeartOutline)`${iconCSS} `;
