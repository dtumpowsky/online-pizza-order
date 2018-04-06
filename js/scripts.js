//Backend
function Customer (first, last) {
  this.firstName = first;
  this.lastName = last;
}

function Topping (selection) {
  this.selection = selection;
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

  $("#toppings").submit(function() {
    event.preventDefault();

    var inputtedTopping = $("input#toppingSelect").val();
    var newPizzaTopping = new Topping (inputtedTopping);


    $(toppingArr.push(inputtedTopping))

    $("ul#choiceList").append("<li>" + newPizzaTopping.selection + "</li>");
    console.log(toppingArr)

  });







});
