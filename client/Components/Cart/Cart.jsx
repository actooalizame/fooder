

Cart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('userCart');
		Meteor.subscribe('userOrders');

		return {
			userCart: Carts.find({}).fetch(),
			userOrders: Orders.find({status:'alive'}).fetch()
		}
	},

	remove(){
		console.log('ok');
	},

	getItems(){
		
		let items = this.data.userCart[0].items;
		
			return items.map((item) =>{
				let cartId = this.data.userCart[0]._id;
      	return <ItemList key={item.id} item={item} cartId={cartId}  />
    });
	
	},

	getTotal(){
	
		let cartItems = this.data.userCart[0].items;
		let mapped = cartItems.map(function(a) {
			return a.unit_price;
		});
		return eval(mapped.join('+'));
	
	},

	createOrder(){
		let cartContent = this.data.userCart[0].items,
				orderData = cartContent.map(function(a) {return a.url;});
		Meteor.call('createOrder',cartContent);
	},

	payOrder(){
		let orderLenght = this.data.userOrders.length,
				url = this.data.userOrders.map(function(a) {return a.url;});		
		
		if(orderLenght>0){
			return (
				<a href={url} target="_blank" className="ui animated button" tabIndex="0" onClick={this.openModal}>
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

	openModal(){
		let url = this.data.userOrders.map(function(a) {return a.url;}),
				cartId = this.data.userCart[0]._id;
		Meteor.call('removeCart',cartId);
		window.open(url, 'newwindow', 'width=767, height=390'); return false;
		
	},
	
	render(){
		return(
			<div>
				<h1>{this.data.userCart.length}</h1>
				{this.data.userCart.length > 0 ?
					<div>
						{this.getItems()}
						<h4>{this.getTotal()}</h4>
						<button className="ui secondary button" onClick={this.createOrder}>Okay</button>
						{this.payOrder()}
					</div>
				:
					<span></span>
				}
				
			</div>
			
			)
	}
});

