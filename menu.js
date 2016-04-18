// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(orderQuestion) {
  var answerInput = prompt(orderQuestion);
  order += answerInput + ", ";
  console.log(order);
}

// call the QUESTION function with the order options
question("What kind of burger would you like?  Hamburger, Cheeseburger, Bacon burger, or Bacon cheeseburger?", order);
question("What size would you like?  Little or Regular sized?", order);
question("What kind of fries would you like with it?  Five Guys style, Cajun style, or no fries?", order);


// output their order
document.write("<p>You ordered: " + order + "<p>");
