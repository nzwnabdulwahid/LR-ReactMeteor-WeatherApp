import React from "react";
import {mount} from "react-mounter";
import {MainLayout} from './App.jsx';
import {AppHeaderLayout} from './AppWithHeader.jsx'
import MainPageWrapper from './pages/MainPageWrapper.jsx'
import LoginPageWrapper from './pages/LoginPageWrapper.jsx'
import RegisterPageWrapper from './pages/RegisterPageWrapper.jsx'
import DashboardPageWrapper from './pages/DashboardPageWrapper.jsx'

import UserBasedContainer from './pages/UserBasedContainer.jsx'


import 'bootstrap/dist/css/bootstrap.css';

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<MainPageWrapper />),			
		})
	}
});

FlowRouter.route('/login', {
	action(){
		mount(MainLayout, {
			content: (<LoginPageWrapper />),			
		})
	}
});

FlowRouter.route('/register', {
	action(){
		mount(MainLayout, {
			content: (<RegisterPageWrapper />),			
		})
	}
});

FlowRouter.route('/dashboard', {
	action(){
		if(Meteor.userId()){
			mount(AppHeaderLayout, {
			content: (<DashboardPageWrapper />),			
			})
		}
		
	}
});

FlowRouter.route('/logout', {
  name: 'logout',
  action() {
    Accounts.logout();
    FlowRouter.go('/');
  }
});

// FlowRouter.route('/meep/:_id', {
//   name: 'meepwithId',
//   subscriptions: function(params) {
//     this.register('meepsBasedOnId', Meteor.subscribe('meepsBasedOnId', params._id));
//   },
//   action(){
		
// 		mount(AppHeaderLayout, {
// 		content: (<SpecificMeepsContainer meepsId={params._id} />),			
// 		})
		
	
// 	}
// });

FlowRouter.route('/user/:_id', {
  name: 'userwithId',
  subscriptions: function(params) {
    this.register('userBasedOnId', Meteor.subscribe('userBasedOnId', params._id));

  },
  action(params){
		 
		mount(AppHeaderLayout, {
		content: (<UserBasedContainer meepsId={params._id} />),			
		})
		
	
	}
});



