//var MP = Npm.require('mercadopago');

ProductsList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('allProducts');
		Meteor.subscribe('userCart');
		Meteor.subscribe('userOrders');

		return {
			products: Products.find({}).fetch(),
			userCart: Carts.find({}).fetch(),
			userOrders: Orders.find({status:'alive'}).fetch()
		}
	},

	createOrder(){
		let cartContent = this.data.userCart[0].items,
				orderData = cartContent.map(function(a) {return a.url;});
		Meteor.call('createOrder',cartContent);
		//console.log(cartContent);
	},

	getProduct(){
		return this.data.products.map((product) =>{
      return <Product key={product._id} product={product} userCart={this.data.userCart} />
    });
	},

	payOrder(){
		let orderLenght = this.data.userOrders.length,
				url = this.data.userOrders.map(function(a) {return a.url;});
		
		if(orderLenght>0){
			return (
				<a href={url} className="ui animated button" tabIndex="0">
				  <div className="visible content">Pagar</div>
				  <div className="hidden content">
				    <i className="right arrow icon"></i>
				  </div>
				</a>
				)
		} else if (orderLenght==0) {
			return <span></span>
		}
	},


	render(){
		return(
			<div>
				{this.getProduct()}

				<button className="ui secondary button" onClick={this.createOrder}>Okay</button>
				{this.payOrder()}
			</div>
			
			)
	}
});