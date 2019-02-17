import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

import data from '../data/tags_cloud.json';

const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 100;

const getFontSize = (value) => {
	if(value < MIN_FONT_SIZE) return MIN_FONT_SIZE;
	if(value > MAX_FONT_SIZE) return MAX_FONT_SIZE;
	return value;
}

const Home = () => {
	const tagsList = data.map(item => {
		const fontSize = getFontSize(item.sentimentScore / 2);

		return (
			<li key={item.id}>
				<Link
					to={encodeURIComponent(item.id)}
					style={{'fontSize': fontSize}}
				>
				{item.label}
				</Link>
			</li>
		);
	});

	return (
		<div className="App">
			<ul className="app_tags-list">
				{tagsList}
			</ul>
		</div>
	);
}

export default Home;
