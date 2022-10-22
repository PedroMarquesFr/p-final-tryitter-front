import React from 'react';

import {
	Container,
	Retweeted,
	Body,
	Avatar,
	Content,
	Header,
	TweetText,
	TweetImg,
	Status,
	Icons,
	CommentIcon,
	RetweetIcon,
	RetweetIconR,
	LikeIcon,
	Dot
} from './styles';

const Tweet: React.FC = () => {
	return (
		<Container>
			<Retweeted>
				<RetweetIconR />Voce Retweetou
			</Retweeted>
			<Body>
				<Avatar />
				<Content>
					<Header>
						<strong>Fulano</strong>
						<span>@fulano10</span>
						<Dot />
						<time> 27 de jun</time>
					</Header>
					<TweetText>comentario top</TweetText>
					<TweetImg />
					<Icons>
						<Status>
							<CommentIcon />
							18
						</Status>
						<Status>
							<RetweetIcon />
							20
						</Status>
						<Status>
							<LikeIcon />
							999
						</Status>
					</Icons>
				</Content>
			</Body>
		</Container>
	);
};

export default Tweet;
