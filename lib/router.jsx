import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'react-mounter'

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {content: <FrontPageAlt  />});
	}
});

FlowRouter.route('/success', {
	name: 'success',
	action(){
		mount(MainLayout, {content: <PayDone  />});
	}
});

FlowRouter.route('/failure', {
	name: 'failure',
	action(){
		mount(MainLayout, {content: <PayFail  />});
	}
});