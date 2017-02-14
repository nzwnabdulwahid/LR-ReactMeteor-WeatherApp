import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Col } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SpecificMeepsContainer extends TrackerReact(React.Component) {

	constructor(){
		super();
		this.state = {
			subscription: {
				meep: Meteor.subscribe('meepsBasedOnId', this.props.meepsId)
				
			}
		}
	}

	meep(){
		return Meeps.find({_id: this.props.meepsId});
	}


	render() {
		return (

			<div>
				<Card>
					<Row>
						<Col md="12"> 
							<p>{this.meep()}</p>
						</Col>
						
					</Row>
				</Card>
			</div>

		)
	}
}