import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label } from 'reactstrap';

export default class RegisterPageWrapper extends React.Component {
	
	submitRegisterForm(event){
		event.preventDefault();		
		let email = this.refs.email.value;
		let password = this.refs.password.value;
		
		console.log(email + " " + password );

		Meteor.call('createNewUser', email, password,  function(err, result){
			if(err){
				console.log(err);
			}
			else {
				Meteor.loginWithPassword(email, password, function(err){
					if(err){
						console.log("Error Logging In");
					}
					else {
						FlowRouter.go("/dashboard");
					}
				});
			}
		})		
	}

	render(){
		return (

			<Form onSubmit={this.submitRegisterForm.bind(this)}>
				<FormGroup >
					<Label>Email</Label>
					<input type="email" ref="email" className="form-control"/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<input type="password" ref="password"  className="form-control"/>
				</FormGroup>
				
				<FormGroup>
					<Button type="submit" color="primary">Register</Button>
				</FormGroup>
			</Form>

		)
	}
}

