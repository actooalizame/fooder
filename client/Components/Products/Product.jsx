Product = React.createClass({


	componentDidMount(){
		jQuery('.special.cards .image').dimmer({
		  on: 'hover'
		});
	},

	addProduct(){
		let cartLength = this.props.userCart.length,
				itemId = Math.floor(Math.random()*100000000);
				productData = {
					"title": this.props.product.name,
	        "unit_price": Number(this.props.product.price),
	        "id": itemId,
	        "description": this.props.product.description
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

	openModal(){
		let modalId = '.ui.modal#'+this.props.product._id;
		jQuery(modalId)
	  .modal('show');
	  console.log(modalId);
	},

	render(){
		return(

			<div className="four wide column">
			  <div className="ui special cards">
				  <div className="card">
				    <div className="blurring dimmable image">
				      <div className="ui dimmer">
				        <div className="content">
				          <div className="center">
				            <div className="ui inverted button" onClick={this.openModal}>Ver Detalles</div><br/><br/>
				            <div className="ui positive button" onClick={this.addProduct}>Agregar al Carrito</div>

				          </div>
				        </div>
				      </div>
				      <img src="http://placehold.it/400x350" />
				    </div>
				    <div className="content">
				      <a className="header">{this.props.product.name}</a>
				      <div className="meta">
				        <span className="date">{this.props.product.description}</span>
				      </div>
				    </div>
				    <div className="extra content">
				      <h4>
				        <i className="dollar icon"></i>
				        <strong>{this.props.product.price}</strong>
				     	</h4>
				    </div>
				  </div>
				  
				</div>
			</div>
		
			)
	}
});