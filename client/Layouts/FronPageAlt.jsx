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
			    <div className="item">
			      <Cart />
			    </div>
			    
			  </div>

			  <div className="ui wide left sidebar inverted vertical menu">
			    <div className="item">
			      <Order />
			    </div>
			    
			  </div>
			  <div className="pusher">
			   <ProductsList />
			  </div>
			</div>
			)
	}
});