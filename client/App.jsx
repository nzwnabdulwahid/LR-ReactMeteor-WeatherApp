import React from 'react';
import ReactDOM from 'react-dom';
import { Container} from 'reactstrap';


import {Route, Router, IndexRoute, hashHistory} from 'react-router';

export const MainLayout = ({content}) => (
	<div className="main-layout">


		
		<main>
			<Container>
				{content}
			</Container>
			
		</main>
		
		
	</div>

)

