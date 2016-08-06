Cart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){

		return {
			userCart: Carts.find({}).fetch(),
			userOrders: Orders.find({status:'pendiente'}).fetch(),
			
		}
	},

	getItems(){
		let cart = this.data.userCart[0],
				cartId = cart._id,
				items = cart.items;
			return items.map((item) =>{
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
				orderData = cartContent.map(function(a) {return a.url;}),
				cartId = this.data.userCart[0]._id;
		Meteor.call('createOrder',cartContent);
		Meteor.call('removeCart',cartId);
	},

	

	clearCart(){
		let cartId = this.data.userCart[0]._id;
		Meteor.call('removeCart',cartId);
	},

	pluralizeString(){
		let strLength = this.data.userCart[0].items.length;
		if(strLength==1){return 'elemento';}
		else if(strLength>1){return 'elementos';}
	},
	
	render(){
		return(
			<div>
				
				{this.data.userCart.length > 0 ?
					<div>
						<p>Tienes <strong>{this.data.userCart[0].items.length}</strong> {this.pluralizeString()} en tu carrito</p>
						{this.getItems()}
						<hr/>
						<h3>Total: ${this.getTotal()}</h3>
						<div className="ui buttons">
						  <button className="ui positive button" onClick={this.createOrder}>Crear Pedido</button>
						  <div className="or" data-text="o"></div>
						  <button className="ui button" onClick={this.clearCart}>Vaciar Carrito</button>
						</div>
						
						
					</div>
				:
					<h5>Tu carrito de compras esta vacio</h5>
				}
				
			</div>
			
			)
	}
});

