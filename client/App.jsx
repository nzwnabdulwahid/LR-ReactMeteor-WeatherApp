import React from 'react';
import ReactDOM from 'react-dom';


import {Route, Router, IndexRoute, hashHistory} from 'react-router';

export const MainLayout = ({content}) => (
	<div className="main-layout">


		<nav>Header Component</nav>
		<main>
			{content}
		</main>
		
		
	</div>

)

