

Meteor.methods({
  
  createCart(productData){
    Carts.insert({
      userId: this.userId,
      createdAt: new Date(),
      items: [
        {
        "id": productData.id,
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
          "id": productData.id,
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

  createOrder(cartContent,cartId){
    let price = cartContent.map(function(a) {return a.unit_price;}),
        priceTotal =  eval(price.join('+'));
    let names = cartContent.map(function(a) {return a.title;});
        namesTotal = names.join(', ');
        //namesTotal = names.split('- ').join("\n")
    let quantity = cartContent.map(function(a) {return a.quantity;}),
        quantityTotal = eval(quantity.join('+'));
    
    
    var cart = {
      //"items": cartContent
      
       "items": [
        {
          "currency_id": "ARS",
          "quantity": quantityTotal/quantityTotal,
          "title": namesTotal,
          "unit_price": priceTotal, 
        }
      ]
    }

    var merca = MercadoPago.createPreference(cart);
    Orders.insert({
      userId: this.userId,
      url: merca.response.sandbox_init_point,
      status: 'alive'
      });
    
  },

  removeCart(cartId){
    Carts.remove(cartId);

  },
  
  'removeItem': function(cartId,item){
    Carts.update(
      { _id: cartId },
      {$pull: {items: item}}
    );
    var cart = Carts.findOne({_id:cartId}),
        itemsLength = cart.items.length;
    if(itemsLength==0){Carts.remove(cartId);}
  },


});