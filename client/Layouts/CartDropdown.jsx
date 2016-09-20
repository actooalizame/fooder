CartDropdown = React.createClass({

	
	componentDidMount(){
		jQuery('.ui.dropdown').dropdown();
	},

	

	render(){
		return(
			<div className="ui dropdown">
			  <div className="text"><i className="cart icon"></i> Carrito</div>

			  <i className="dropdown icon"></i>
			  <div className="menu">
			  	<div className="item">
			  		
			  		<Cart />
		
			  	</div>
			    
			  </div>
			</div>
			)
	}
});