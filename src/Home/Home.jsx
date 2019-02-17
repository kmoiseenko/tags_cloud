import React from 'react';

import './Home.css';

import data from '../data/tags_cloud.json';

const Home = () => {
	return (
		<div className="App">
			<ul>
				{data.map((item) =>
					<li key={item.id}>
						<a
							href={item.id}
							style={{'fontSize': item.sentimentScore / 2}}
						>
						{item.label}
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Home;
