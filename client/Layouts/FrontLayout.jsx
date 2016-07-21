FrontLayout = React.createClass({


	render(){
		return(
			<div>
				<NavMenu />
				{this.props.content}
			
			</div>
			)
	}
});