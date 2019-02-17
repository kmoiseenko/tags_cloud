import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

import data from '../data/tags_cloud.json';

const Home = () => {
	const tagsList = data.map(item => {
		let fontSize = item.sentimentScore / 2;

		if (fontSize < 14) {
			fontSize = 14;
		}

		if (fontSize > 100) {
			fontSize = 100;
		}

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
