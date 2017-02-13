import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Form, FormGroup, Col, Button, Input,Label } from 'reactstrap';

export default class LoginPageWrapper extends React.Component {

	submitLoginForm(event){
		event.preventDefault();		
		let email = this.refs.email.value;
		let password = this.refs.password.value;
		
		console.log(email + " " + password );
		
		Meteor.loginWithPassword(email, password, function(err){
			if(err){
				console.log("erorr");
			}
			else {
				FlowRouter.go("/dashboard");
			}
		});
	}	
	

	render(){
		return (

			<Form onSubmit={this.submitLoginForm.bind(this)}>
				<FormGroup>
					<Label>Email</Label>
					<input type="email" ref="email" className="form-control" />
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<input type="password" ref="password" className="form-control" />
				</FormGroup>
				<FormGroup>
					<Button type="submit" color="primary">Login</Button>
				</FormGroup>
			</Form>

		)
	}
}