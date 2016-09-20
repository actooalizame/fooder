ProductModal = React.createClass({

  render(){
    return(
      <div className="ui modal" id={this.props.product._id}>
        <i className="close icon"></i>
        <div className="header">
          Profile Picture
        </div>
        <div className="image content">
          <div className="ui medium image">
            <ProductSlider slideId={this.props.product._id}/>
          </div>
          <div className="description">
            <div className="ui header">{this.props.product.name}</div>
            <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </div>
        </div>
        <div className="actions">
         
          <div className="ui primary deny right labeled icon button">
            OK
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
      )
  }
});