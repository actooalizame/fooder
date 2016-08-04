

Cart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('userCart');

		return {
			userCart: Carts.find({}).fetch()
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
	
	render(){
		return(
			<div>
				<h1>{this.data.userCart.length}</h1>
				{this.data.userCart.length > 0 ?
					<div>
						{this.getItems()}
						<h4>{this.getTotal()}</h4>
					</div>
				:
					<span></span>
				}
				
			</div>
			
			)
	}
});

