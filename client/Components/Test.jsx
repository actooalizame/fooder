Test = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			initPoint: Session.get('initPoint')
		}
	},

	componentWillMount(){
		Session.setDefault('initPoint', undefined);
	},

	makePay(){

		Meteor.call('createOrder');
	},

	getReference(){
		
		
	Meteor.call('getPreference');
	},

	render(){
		return(
			<div className="ui card">
			  <div className="image">
			    
			  </div>
			  <div className="content">
			    <a className="header">Kristyna</a>
			    <div className="meta">
			      <span className="date">Joined in 222</span>
			    </div>
			    <div className="description">
			      <button onClick={this.makePay}>pagar!</button>
			      <button onClick={this.getReference}>ver!</button>
			      {this.data.initPoint ?
			      	<a className="lightblue-ar-s-ov" mp-mode="modal" href={this.data.initPoint}>Ahora</a>
			      :
			      <span></span>
			      }
			    </div>
			  </div>
			  <div className="extra content">
			    <a>
			      <i className="user icon"></i>
			      22 okkk
			    </a>
			  </div>
			</div>
			)
	}
});