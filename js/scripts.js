//Backend
function Customer (first, last) {
  this.firstName = first;
  this.lastName = last;
}



function Pizza (crust, sauce, toppings) {
  this.crust = crust
  this.sauce = sauce
  this.toppings = toppings
}

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var toppingArr=[]


// Pizza.prototype.this = function() {
//
// }


//Front End
$(document).ready(function() {
  $("#new-order").submit(function() {
    event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();

  var patron = new Customer(inputtedFirstName, inputtedLastName);

  console.log(patron)

  });

  $("ul.topping-list").click(function() {
    var choice = $(this).attr('id')

    $(toppingArr.push(choice));

  console.log(toppingArr)
console.log(choice)

  });







});
