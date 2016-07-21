Meteor.publish('allProducts', function(){
	return  Products.find({});
});

Meteor.publish('userCart', function(){
  return Carts.find({userId:this.userId}, {'limit':1});
});