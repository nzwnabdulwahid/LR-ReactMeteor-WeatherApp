import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup, Card } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class UserNameComponent extends TrackerReact(React.Component){

	constructor(props){
		super(props);
		this.state = {
			subscription: {
			
				UserName: Meteor.subscribe('users')
				
			}
		}
	}

	UserName(){
		// console.log("ayam"+ this.props.id)
		user = Meteor.users.findOne({_id: this.props.id})
		return user.profile.name;
	}

	render(){

		return(
			<p>{this.UserName()}</p>
		)
	}
}