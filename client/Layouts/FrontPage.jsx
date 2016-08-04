FrontPage = React.createClass({
	render(){
		return(
			<div className="ui internally celled stackable grid container">
			 
		    <div className="twelve wide column">
		    	<ProductsList />
		    </div>
		    <div className="four wide column">
		    	<Cart />
		    </div>
		    

		
			</div>
			)
	}
});