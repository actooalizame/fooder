FrontPage = React.createClass({

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
			<div className="ui internally celled stackable grid">
			 
		    <div className="sixteen wide mobile ten wide tablet twelve wide computer column">
		    	<ProductsList />
		    </div>
		    <div className="sixteen wide mobile six wide tablet four wide computer column">
		    	<div className="ui horizontal divider">Carrito</div>
		    	<Cart />
		    	<hr/>
		    	<div className="ui horizontal divider">Pedidos</div>
		    	<Order />
		    </div>
		    

		
			</div>
			)
	}
});