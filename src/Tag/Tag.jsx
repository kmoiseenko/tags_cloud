import React from 'react';

import './Tag.css';

import API from '../data/tags_cloud.json';

const Tag = ({ match }) => {
	const tagId = match.params.id;
	let tag = null;

	for(let i = 0; i < API.length; i++) {
		if(API[i].id === tagId) {
			tag = API[i]
			break;
		}
	}

	if(tag) {
		let TotalMentions = null;
		let pageTypeList = [];

		for(let key in tag.sentiment) {
			TotalMentions += tag.sentiment[key]
		}

		for(let key in tag.pageType) {
			pageTypeList.push(
				<li key={tagId + key}>{key}: {tag.pageType[key]}</li>
			);
		}

		return(
			<ul>
				<li>Label: {tag.label}</li>
				<li>Total mentions: {TotalMentions}</li>
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
