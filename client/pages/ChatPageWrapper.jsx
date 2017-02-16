import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup, Card } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import UserNameComponent from './UserNameComponent.jsx'


export default class ChatPageWrapper extends TrackerReact(React.Component){

	constructor(){
		super();
		this.state = {
			subscription: {
				MessageList: Meteor.subscribe('MessageList'),
				UserName: Meteor.subscribe('users')
				
			}
		}
	}

	MessageList(){
		 return Messages.find(
		 	{$or: 
		 		[
			 		{from: this.getUserID(), to:Meteor.userId()}, 
			 		{to: this.getUserID()}
		 		]
		 	}
		 )
	}

	componentDidUpdate() {
	  ReactDOM.findDOMNode(this.refs.scrolled).scrollTop =  ReactDOM.findDOMNode(this.refs.scrolled).scrollHeight;
	  	}



	getUserID(){
		return FlowRouter.getParam("id");
	}

	submitMessage(event) {
		event.preventDefault();
		Meteor.call("postNewMessage", this.getUserID(), this.refs.message.value, function(err, success){
			this.refs.message.value="";
			if(err){
				console.log("err sending message" + err);
			}
			else {

			}
		}.bind(this))
	}



	getUserName(id){
		user = Meteor.users.find({_id: id}).fetch()
		return user.profile.name;
	}


	render(){
		return (
			<div>
				<Row>
					<Col md="12">
						<div ref="scrolled" style= {{'overflowY': 'auto', 'height':'500px', 'maxHeight': '500px', 'border': '1px solid #e4d4d4'}}>
							{
								this.MessageList().map(function (message){
									return (
										<Card key={message._id} >
											<UserNameComponent id={message.from} />
											<Col md="12">{message.message}</Col>
										</Card>
									)
								})
			

							}
						</div>
					</Col>
					
				</Row>
				<Row>
					<Col md="12">
					<Card>
							<Col md="12">		
								<form onSubmit={this.submitMessage.bind(this)}>						
									<input type="text" ref="message" className="form-control"/>		
									<Button block >M</Button>
								</form>	
							</Col>
							
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}