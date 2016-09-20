Order = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			userOrders: Orders.find({status:'pendiente'},{sort:{createdAt: -1}}).fetch(),
			userCart: Carts.find({}).fetch()
		}
	},

	getOrders(){
		return this.data.userOrders.map((order) =>{
      return <OrderList key={order._id} order={order} />
    });
	},

	



	render(){
		return(
			<div>
				{this.data.userOrders.length > 0 ?
					<div>
						{this.getOrders()}
					</div>
					
				:
				<h3>Aun no realizaste ningun pedido</h3>

				}
				
				
				
			</div>
			)
	}

});