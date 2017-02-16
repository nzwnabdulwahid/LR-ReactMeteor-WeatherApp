import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup, Card } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ChatPageWrapper extends TrackerReact(React.Component){

	constructor(){
		super();
		this.state = {
			subscription: {
				userList: Meteor.subscribe('users')
				
			}
		}
	}

	userList(){
		return Meteor.users.find().fetch();
	}






	render(){
		return (
			<div>
				<Row>
					<Col md="12">
						<Card>
							<input type="text" />
						</Card>
					</Col>
					
				</Row>

				<Row>
					<Col>
						{
							this.userList().map(function(user){
							return(
								<Card key={user._id}>
									<Row>
										<Col md="11">
											<b>{user.profile.name}</b>
										</Col>
										<Col md='1'>
											<Button><a href={'chat/' + user._id }>M</a></Button>
										</Col>
									</Row>
									

								</Card>
							)
							}) 


						}
					</Col>
				</Row>
			</div>
		)
	}
}