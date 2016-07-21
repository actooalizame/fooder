Meteor.methods({
  
  createCart(productData){
    Carts.insert({
      userId: this.userId,
      createdAt: new Date(),
      items: [
        {
        "title": productData.title,
        "unit_price": productData.unit_price,
        "quantity": 1,
        "currency_id": "ARS"
        }
      ]
    })
  },
  insertCartItem(cartId,productData){
    Carts.update(
      { _id: cartId },
      {$push: 
        {items: {
          "title": productData.title,
          "unit_price": productData.unit_price,
          "quantity": 1,
          "currency_id": "ARS"
        }} 
      }
    );
  },
  updateCartItem(cartId,productData){
   Carts.update(
      { _id: cartId,"items.title":productData.title},
      {$inc : { "items.$.quantity" : 1}}
    );
  },

  createOrder(){
    var cart = {
    "items": [
      {
        "title": "Test",
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": 10
      }
    ]
  };

  var merca = MercadoPago.createPreference(cart);
  console.log(merca);
   Preferences.insert({
      url: merca.response.init_point
      });
  },

  getPreference(){
   var refe = MercadoPago.getPreference('#2076438190');
   console.log(refe);

  }


});