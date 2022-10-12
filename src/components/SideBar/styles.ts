import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const Container = styled.div`
	display: none;
	@media (min-width: 1000px) {
		display: flex;
		flex-direction: column;

		width: 350px;
		height: 500px;
		margin: 0 24px;
		position: relative;
	}
`;

export const SearchWrapper = styled.div`
	padding: 10px 0;
	position: fixed;
	z-index: 2;
	width: min(399px, 26%);
	background-color: var(--primary);
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  height: 27px;
  width:27px;
  fill: var(--gray);
  top:18px;
  left:8px; 
`;
export const SearchInput = styled.input`
	padding: 12px;
	width: 88%;
	padding-left: 44px;

	font-size: 14px;
	line-height: 16px;

	border-radius: 100px; /*hmmmm qualquer valor que tu colocar aqui vai ficar de mesmo jeito desde que seja grande o suficiente*/
	background-color: var(--search);

	&:focus {
		border: 1px solid var(--twitter);
	}
`;

export const Recomendations = styled.div`
	display: flex;
	flex-direction: column;
	padding: 57px 24px 200px;
	position: sticky;
	top: 100px;
	height: 10px;
`;
