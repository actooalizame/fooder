ItemList = React.createClass({

	removeItem(){
		let cartId = this.props.cartId,
				item = this.props.item;
		Meteor.call('removeItem', cartId, item)
	},

	render(){

		return(
			<h4>{this.props.item.title} - ${this.props.item.unit_price} <i className="delete icon" onClick={this.removeItem}></i></h4>
			)
	}
});