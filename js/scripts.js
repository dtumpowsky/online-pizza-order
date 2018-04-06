//Backend
function Pizza (crust, sauce, toppings) {
  this.crust = crust
  this.sauce = sauce
  this.toppings = toppings
}



// Pizza.prototype.this = function() {
//
// }


//Front End
$(document).ready(function() {
  $("#toppings").click(function() {
    console.log(this)
  });





});
