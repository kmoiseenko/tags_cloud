import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

import data from '../data/tags_cloud.json';

const Home = () => {
	return (
		<div className="App">
			<ul>
				{data.map((item) =>
					<li key={item.id}>
						<Link
							to={item.id}
							style={{'fontSize': item.sentimentScore / 2}}
						>
						{item.label}
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Home;
