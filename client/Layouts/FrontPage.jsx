FrontPage = React.createClass({
	render(){
		return(
			<div className="ui internally celled stackable grid container">
			 
		    <div className="sixteen wide mobile ten wide tablet twelve wide computer column">
		    	<ProductsList />
		    </div>
		    <div className="sixteen wide mobile six wide tablet four wide computer column">
		    	<Cart />
		    </div>
		    

		
			</div>
			)
	}
});