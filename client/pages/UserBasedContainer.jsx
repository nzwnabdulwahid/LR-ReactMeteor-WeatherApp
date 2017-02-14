import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup, Card } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MeepsCard from './MeepsCard.jsx';

export default class UserBasedContainer extends TrackerReact(React.Component) {


	constructor(props){
		super(props);
		console.log(this.props);
		this.state = {
			subscription: {
				getUserName: Meteor.subscribe('userBasedOnId', this.props.meepsId),
				meepList: Meteor.subscribe('meepslists')
				
			}
		}
	}
	meepList() {
		return Meeps.find({user: this.props.meepsId}).fetch();
	}

	getUserName(){
		return Meteor.users.find({_id: this.props.meepsId}).fetch(); 

	}

	renderUserMeeps(){
		console.log(this.meepList().length);
		if(this.meepList().length > 1){
			return (
					<div>

					{	
						this.meepList().map(function (meep){
							return <MeepsCard key={meep._id} Meep={meep} />
						})
					}
					</div>
				
			)
		}

		else if (this.meepList().length == 1) {
			return <div><MeepsCard key={this.meepList()._id} Meep={this.meepList()} /></div>
		}
	}

	render(){
		return(
			
			<div>
				<h1>This is for the user {this.getUserName()}</h1>
				<Row className="MeepListContainer">
					<Col md={{ size: 9, offset: 3 }}>
						
							{this.renderUserMeeps()}
						
					</Col>
				</Row>
			</div>
			
		)
	}
}