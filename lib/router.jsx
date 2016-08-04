import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'react-mounter'

FlowRouter.route('/', {
	name: 'home',
	action(){
		mount(MainLayout, {content: <FrontPage  />});
	}
});

FlowRouter.route('/success', {
	name: 'home',
	action(){
		mount(FrontLayout, {content: <PayDone  />});
	}
});

FlowRouter.route('/failure', {
	name: 'home',
	action(){
		mount(FrontLayout, {content: <PayFail  />});
	}
});