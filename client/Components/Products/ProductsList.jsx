ProductsList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		Meteor.subscribe('allProducts');
		

		return {
			products: Products.find({}).fetch(),
			userCart: Carts.find({}).fetch(),
		}
	},

	

	getProduct(){
		return this.data.products.map((product) =>{
      return <Product key={product._id} product={product} userCart={this.data.userCart} />
    });
	},

	



	render(){
		return(
			<div>
				{this.getProduct()}

			</div>
			
			)
	}
});