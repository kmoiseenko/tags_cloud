import React from 'react';

import './Tag.css';

import API from '../data/tags_cloud.json';

const Tag = ({ match }) => {
	const tagIdFromParams = decodeURIComponent(match.params.id);
	const tag = API.find(item => item.id === tagIdFromParams);

	if(tag) {
		const totalMentions = Object.values(tag.sentiment).reduce((sum, value) => {
			return sum += value;
		}, 0);
		const mentions = Object.keys(tag.sentiment).map(key => {
			const val = tag.sentiment[key];
			return(
				<div key={key} className="tag-row">
					<div>
						<span className="text-cap">{key}</span> mentions:
					</div>
					<div><b>{val}</b></div>
				</div>
			);
		});
		const pageTypeList = Object.keys(tag.pageType).map(key => {
			const val = tag.pageType[key];
			return(
				<div key={key} className="tag-row">
					<div>{key}:</div>
					<div><b>{val}</b></div>
				</div>
			);
		});

		return(
			<div className="tag">
				<h1 className="text-center">{tag.label}</h1>
				<div className="tag-info">
					<div className="tag-row">
						<div>Total mentions:</div>
						<div><b>{totalMentions}</b></div>
					</div>
					{mentions}
					<h3 className="text-center">List of page types</h3>
					{pageTypeList}
				</div>
			</div>
		);
	} else {
		return <h1>Tag was not found</h1>
	}
}

export default Tag;
