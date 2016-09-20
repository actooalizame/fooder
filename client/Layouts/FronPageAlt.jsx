FrontPageAlt = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('userCart');
		Meteor.subscribe('userOrders');
		Meteor.subscribe('allProducts');

		return {
			userId: Meteor.userId()
		}
	},


	render(){
		return(
			
			<div>
				
			
			  <div className="ui wide right sidebar inverted vertical menu">
			    <a className="item">
			      <Cart />
			    </a>
			    
			  </div>

			  <div className="ui wide left sidebar inverted vertical menu">
			    <a className="item">
			      <Order />
			    </a>
			    
			  </div>
			  <div className="pusher">
			   <ProductsList />
			  </div>
			</div>
			)
	}
});