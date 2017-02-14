import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Col } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class MeepsCard extends TrackerReact(React.Component) {

	constructor(){
		super();
		this.state = {
			subscription: {
				userName: Meteor.subscribe('users')
				
			}
		}
	}

	userName(){
		return Meteor.users.find({ _id: this.props.Meep.user}).fetch();
	}


	render() {
		return (

			<div>
			
				<Card>
					<Row>
						<Col md="12">
							<a href={'/user/' + this.props.Meep.user}><b>{this.props.Meep.username} </b></a>
						</Col>
						
					</Row>
					<Row>
						<Col md="12"> 
							<p>{this.props.Meep.meep}</p>
						</Col>
						
					</Row>
				</Card>
			
			</div>

		)
	}
}