const cart = ["shirt", "pant", "tshirt", "kurta"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
}).catch(function (err) {
  console.log(err.message);
});


//producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if(!validateCart(cart)){
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if(orderId){
      setTimeout(function(){
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
