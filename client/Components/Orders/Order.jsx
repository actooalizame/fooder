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
				{this.getOrders()}
				
				
			</div>
			)
	}

});