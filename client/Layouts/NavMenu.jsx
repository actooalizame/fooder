NavMenu = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			userCart: Carts.find({}).fetch()			
		}
	},

	cartExists(){
		if(this.data.userCart[0]!==undefined){
			let strLength = this.data.userCart[0].items.length;
			if(strLength==0){
				return false;
			}
			else if(strLength>0){
				return true;
			}
		}
	},

	openRightSidebar(){
		jQuery('.ui.right.sidebar').sidebar('toggle');
	},

	openLeftSidebar(){
		jQuery('.ui.left.sidebar').sidebar('toggle');
	},

	render(){
		return(

			<div className="ui menu">
				<div className="right menu">
					<div className="item">
						<button className="ui black button" onClick={this.openLeftSidebar}>
						  <i className="icon shopping bag"></i>
						  Ver Pedidos
						</button>
					</div>
					<div className="item">
						<button className="ui grey button" onClick={this.openRightSidebar}>
						  <i className="icon cart"></i>
						  <div className="floating ui teal label">
						  	{this.cartExists() ?
						  		<div>
						  			{this.data.userCart[0].items.length}
						  		</div>
						  		
						  	:
						  		<span>0</span>
						  	}

						  </div>
						  Ver Carrito
						</button>
					</div>
					<div className="item">
				    <LoginBtn />
				  </div>
				</div>			  
			</div>
			)
	}
});