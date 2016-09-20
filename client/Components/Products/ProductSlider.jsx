ProductSlider = React.createClass({

  componentDidMount(){
  	let identifier = '#carousel.'+this.props.slideId;
    jQuery(identifier).slick({
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      //initialSlide: 1
      lazyLoad: 'progressive',
      autoplay: true,
      autoplaySpeed: 1000
    });
  },

	render(){
		return(
			<div id="carousel" className={this.props.slideId}>
        <div><img src="http://placehold.it/400x350"/></div>
        <div><img src="http://placehold.it/400x350"/></div>
        <div><img src="http://placehold.it/400x350"/></div>
      </div>
			)
	}
});