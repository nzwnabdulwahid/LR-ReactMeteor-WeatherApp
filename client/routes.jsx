import React from "react";
import {mount} from "react-mounter";
import {MainLayout} from './App.jsx';
import {AppHeaderLayout} from './AppWithHeader.jsx'
import MainPageWrapper from './pages/MainPageWrapper.jsx'
import LoginPageWrapper from './pages/LoginPageWrapper.jsx'
import RegisterPageWrapper from './pages/RegisterPageWrapper.jsx'
import DashboardPageWrapper from './pages/DashboardPageWrapper.jsx'


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

