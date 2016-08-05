

Cart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('userCart');
		Meteor.subscribe('userOrders');

		return {
			userCart: Carts.find({}).fetch(),
			userOrders: Orders.find({status:'alive'}).fetch(),
			
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
						
						{this.payOrder()}
					</div>
				:
					<h3>Tu carrito de compras esta vacio</h3>
				}
				
			</div>
			
			)
	}
});

