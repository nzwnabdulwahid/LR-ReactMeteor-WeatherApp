import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Col } from 'reactstrap';

export default class MainPageWrapper extends React.Component {

	render() {
		return(
			<div>
				
				<Col md={{size:6, offset:3}} ><a href="/login"><Button color="primary" block>Login</Button></a></Col> 
				<Col md={{size:6, offset:3}} ><a href="/register"><Button color="primary" block>Register</Button></a></Col>
			
			</div>
			
		)
	}
}