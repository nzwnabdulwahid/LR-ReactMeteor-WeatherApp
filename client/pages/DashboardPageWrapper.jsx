import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, Button, Input,Label, Row, ButtonGroup, Card } from 'reactstrap';
import TrackerReact from 'meteor/ultimatejs:tracker-react';




export default class DashboardPageWrapper extends TrackerReact(React.Component) {



	constructor(){
		super();
		this.state = {
			subscription: {
				meepList: Meteor.subscribe('meepslists')
				
			}
		}
	}

	meepList() {
		return Meeps.find().fetch();
	}


	submitMeep(event){
		event.preventDefault();
		let meep_text = this.refs.meeptext.value;

		Meteor.call("postNewMeep", meep_text, function(err, success){
			this.refs.meeptext.value = '';
			if(err){
				console.log(err);
			}

		})

	}

	renderUserMeeps(){
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
			
			<div className="dashboard-wrapper">
				<Row>
					<Col md={{ size: 9, offset: 3 }}>
						<Card>
							<Form onSubmit={this.submitMeep.bind(this)}>
								<Row className="meep-container">
									<Col md="12">										
										<input type="text" ref="meeptext" className="form-control"/>									
									</Col>
									<Col md={{ size: 2, offset: 10  }}>										
										<Button color="secondarDashboardPageWrappery" className="pull-right" block>Meep!</Button>										
									</Col>
								</Row>
							</Form>
						</Card>
					</Col>
				</Row>
				<Row className="MeepListContainer">

					<Col md={{ size: 9, offset: 3 }}>
						
							{this.renderUserMeeps()}
						
					</Col>

					<Col>
						
					</Col>
				</Row>
			</div>
			

			
		)
	}

} 