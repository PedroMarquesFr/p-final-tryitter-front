import React from 'react';

import { Container, Tabs, Tab, Tweets } from './styles';
import Tweet from './Tweet/index';

const Feed: React.FC = () => {
	return (
		<Container>
			<Tabs>
				<Tab choosen>Tweets</Tab>
			</Tabs>

			<Tweets>
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
			</Tweets>
		</Container>
	);
};

export default Feed;
