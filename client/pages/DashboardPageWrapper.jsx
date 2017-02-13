import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup } from 'reactstrap';

export default class DashboardPageWrapper extends React.Component {

	render(){
		return(
			
			<div>
				<Row>
					<Col md="7">
						<ButtonGroup size="lg">
						
							<Button>Text</Button>
							<Button>Image</Button>
							<Button>Video</Button>


						</ButtonGroup>
					</Col>
				</Row>
			</div>
			

			
		)
	}

} 