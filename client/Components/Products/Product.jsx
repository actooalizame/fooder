Product = React.createClass({

	addProduct(){
		let cartLength = this.props.userCart.length,
				itemId = Math.floor(Math.random()*100000000);
				productData = {
					"title": this.props.product.name,
	        "unit_price": Number(this.props.product.price),
	        "id": itemId
				}
		if(cartLength==0){
			Meteor.call('createCart', productData);
		}
		else if(cartLength>0){
			let cart = this.props.userCart[0],
				cartId = cart._id;
			Meteor.call('insertCartItem',cartId,productData);
			/*let cart = this.props.userCart[0],
				cartId = cart._id,
				repeatedItems = cart.items.filter(function (item) { return item.title == productData.title });
				
			if(repeatedItems.length==0){
				Meteor.call('insertCartItem',cartId,productData);
			}
			else if(repeatedItems.length>0){
				Meteor.call('updateCartItem',cartId,productData);
			}*/
		}
	},

	render(){
		return(
			<div className="ui items">
			  <div className="item">
			    <div className="ui small image">
			      <img src="http://placehold.it/400x350" />
			    </div>
			    <div className="content">
			      <div className="header">{this.props.product.name}</div>
			      <div className="meta">
			        <span className="price">${this.props.product.price}</span>
			        
			      </div>
			      <div className="description">
			        <p>{this.props.product.description}</p>
			        <a>
					     <div className="ui vertical animated button" tabIndex="0" onClick={this.addProduct}>
							  <div className="hidden content">Shop</div>
								  <div className="visible content">
								    <i className="shop icon"></i>
								  </div>
								</div>
					    </a>
			      </div>
			    </div>
			  </div>
		  </div>
			)
	}
});