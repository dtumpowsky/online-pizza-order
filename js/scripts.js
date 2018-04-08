//Backend
function Customer (first, last) {
  this.firstName = first;
  this.lastName = last;

}

function Topping (selection) {
  this.selection = selection;
}

var toppingArr=[]

function SubmitOrder (first, last, topping, size) {
  this.firstName = first;
  this.lastName = last;
  this.topping = toppingArr;
  this.size = size;

}



//Front End
$(document).ready(function() {

    $("#new-order").submit(function() {
      event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var patron = new Customer(inputtedFirstName, inputtedLastName);

    if (patron === "") {
      alert("Please complete your name")
    }

    console.log(patron)

    });

    $("#toppings").submit(function() {
      event.preventDefault();

      var inputtedTopping = $("input#toppingSelect").val();
      var newPizzaTopping = new Topping (inputtedTopping);


      $(toppingArr.push(inputtedTopping))

      $("ul#choiceList").append("<li>" + newPizzaTopping.selection + "</li>");
      console.log(toppingArr)

      $("input#toppingSelect").val("");

    });






  $("#getOrder").submit(function() {
    event.preventDefault();


    var size = $("input:checkbox[name=question1]:checked").val();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newPizzaTopping = new Topping (inputtedTopping);
    $(toppingArr.push(inputtedTopping))

      if (size == ("#twelve")) {
        alert("$7");
      } else if(size == ("#fourteen")) {
        alert("$10");
      } else {
        alert("$12");
      }

    var order = new SubmitOrder (inputtedFirstName, inputtedLastName, toppingArr, size)
    console.log(order)

  });
});
