OrderList = React.createClass({

	formatDate(){
		let raw = this.props.order.createdAt;
		return moment(raw).format('DD/MM/YY - h:mm:ss a');
	},

	getItems(){
		let items = this.props.order.items;
		
		return items.map((item) =>{
      return <ItemList  key={item.id} item={item}  />
    });
	},

	payOrder(){
		let url = this.props.order.url;		
		
			return (
				<div className="center">
					<a href={url} target="_blank" className="small ui animated blue button" tabIndex="0" onClick={this.openModal}>
					  <div className="visible content">Pagar</div>
					  <div className="hidden content">
					    <i className="right arrow icon"></i>
					  </div>
					</a>
					<button className="small ui red button">Cancelar</button>
				</div>
				
				)
		
	},

	openModal(){
		let url = this.props.order.url;
		window.open(url, 'newwindow', 'width=767, height=390'); return false;
	},


	render(){
		return(
			
			      <div className="ui card">
			        <div className="content">
			          <div className="header"><h3>Total: {this.props.order.cartTotal}</h3></div>
			          <div className="meta">
			            <a>{this.formatDate()}</a>
			          </div>
			          <div className="description">			            
			            {this.getItems()}
			            <small>Estado: {this.props.order.status}</small>
			          </div>
			        </div>
			        <div className="extra content">
			          {this.payOrder()}
			        </div>
			      </div>
			    
			)
	}
});
