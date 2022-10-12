import React from 'react';
import StickyBox from 'react-sticky-box';

import List from './List/index';
import News from './News/index';
import FollowSuggestion from './FollowSuggestion';

import { Container, Recomendations, SearchWrapper, SearchInput, SearchIcon } from './styles';

const SideBar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchIcon />
				<SearchInput type="text" placeholder="Buscar no twitter" />
			</SearchWrapper>
			<StickyBox>
				<Recomendations>
					<List
						title="Talvez você curta"
						elements={[
							<FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
							<FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
							<FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl" />
						]}
					/>
					<List
						title="O que está acontecendo"
						elements={[
							<News />,
							<News />,
							<News />,
							<News />,
							<News />,
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
				</Recomendations>
			</StickyBox>
		</Container>
	);
};

export default SideBar;
