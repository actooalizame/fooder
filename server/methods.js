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

  createOrder(cartContent){
    var cart = {
      "items": cartContent
    }

    var merca = MercadoPago.createPreference(cart);
    
     Orders.insert({
        userId: this.userId,
        url: merca.response.init_point,
        items: cart.items,
        status: 'alive'
        });
    },

  /*
    {
      "items": [
        {
          "currency_id": "ARS",
          "quantity": 2,
          "title": 'item 1',
          "unit_price": 32, 
        },
        {
          "currency_id": "ARS",
          "quantity": 1,
          "title": 'item 2',
          "unit_price": 15, 
        }
      ]
    };*/

  getPreference(){
   var refe = MercadoPago.getPreference('#2076438190');
   console.log(refe);

  }


});