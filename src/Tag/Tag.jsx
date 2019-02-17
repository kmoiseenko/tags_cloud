import React from 'react';

import './Tag.css';

import API from '../data/tags_cloud.json';

const Tag = ({ match }) => {
	const tagIdFromParams = match.params.id;
	let tag = API.find(item => item.id === tagIdFromParams);

	if(tag) {
		let totalMentions = Object.values(tag.sentiment).reduce((sum, value) => {
			return sum + value;
		});
		const pageTypeList = Object.keys(tag.pageType).map(key => {
			const val = tag.pageType[key];
			return <li key={key}>{key}: {val}</li>
		});

		return(
			<ul>
				<li>Label: {tag.label}</li>
				<li>Total mentions: {totalMentions}</li>
				<li>Positive Mentions: {tag.sentiment.positive}</li>
				<li>Neutral Mentions: {tag.sentiment.neutral}</li>
				<li>Negative Mentions: {tag.sentiment.negative}</li>
				<li>
					List of page types:
					<ul>
						{pageTypeList}
					</ul>
				</li>
			</ul>
		);
	} else {
		return <h1>Tag was not found</h1>
	}
}

export default Tag;
