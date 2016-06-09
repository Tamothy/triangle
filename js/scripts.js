// Business (or back-end) logic:
var triangle = function(a, b, c) {
  var result;
  if (a + b <= c || a + c <= b || b + c <= a) {
     result = "Not a triangle fool, revise your math!"
  } else if (a ===  b && a === c && b === c) {
    result = "Equilateral";
  } else if (a === b || a === c || b === c) {
    result = "Isosceles";
  } else if (a !== b && a !== c && b !== c) {
    result = "Scalene";
  }
  return result;
};

// User interface (or front-end) logic
$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var inputs = triangle(number1, number2, number3);
    $("#output").text(inputs);
  });
});
