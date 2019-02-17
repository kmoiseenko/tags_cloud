import React from 'react';

import './Tag.css';

import API from '../data/tags_cloud.json';

const Tag = (props) => {
	const id = props.location.pathname.split('/').pop();
	let tag = null;
	let TotalMentions = null;
	let pageTypeList = [];

	for(let i = 0; i < API.length; i++) {
		if(API[i].id === id) {
			tag = API[i]
			break;
		}
	}

	for(let key in tag.sentiment) {
		TotalMentions += tag.sentiment[key]
	}

	for(let key in tag.pageType) {
		pageTypeList.push(
			<li key={id + key}>{key}: {tag.pageType[key]}</li>
		);
	}

	return (
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
}

export default Tag;
