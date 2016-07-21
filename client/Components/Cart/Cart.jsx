Cart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('userCart');

		return {
			userCart: Carts.find({}).fetch()
		}
	},

	
	render(){
		return(
			<div>
				<h1>{this.data.userCart.length}</h1>
			</div>
			
			)
	}
});