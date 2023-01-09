import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Tabs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	text-align: center;

	outline: 0;
	cursor: pointer;
	border-bottom: 1px solid var(--outline);
`;

interface Props {
	choosen?: boolean;
}

export const Tab =
	styled.div <Props >`
	font-weight: bold;
	font-size: 15px;
	color: var(--gray);

	margin-top: 10px;
	width: 100%;
	padding: 16px 0;

	transition: background .2s, color .2s;
	&:hover {
		background: var(--twitter-dark-hover);
		color: var(--twitter);
	}
	&:active {
		border-bottom: 2px solid var(--twitter);
	}

	border-bottom: 2px ${(props) => (props.choosen ? 'solid' : 'none')} var(--twitter);

`;

export const Tweets = styled.div`
	display: flex;
	flex-direction: column;

	flex-shrink: 0;
`;
