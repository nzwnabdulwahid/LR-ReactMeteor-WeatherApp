import React from "react";
import {mount} from "react-mounter";
import {MainLayout} from './App.jsx';
import HelloPageWrapper from './pages/HelloPageWrapper.jsx'

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<HelloPageWrapper />),
			
		})

	}
});