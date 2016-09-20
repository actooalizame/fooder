ProductsList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){		

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

	displayModal(){
		return this.data.products.map((product) =>{
      return <ProductModal key={product._id} product={product}  />
    });
	},



	render(){
		return(
			<div className="ui stackable four column grid container">
				<div className="row">
					{this.getProduct()}
				</div>
				{this.displayModal()}
			</div>
			
			)
	}
});