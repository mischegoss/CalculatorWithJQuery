$( document ).ready(function() {
  

//Global variables

let firstNumber = ""; //sets to empty string
let secondNumber = ""; //sets to empty string
let result = 0; //sets to zero
let isOperatorClicked = false;  //When we start, we want to make sure Operator is not clicked.
let firstnumshow = $("#first-number-printout");
let secondnumshow = $("#second-number-printout");
let resultsshow=  $("#result-printout");
let operatorshow = $("#operator-printout");

/*This function clears and resets everything. It is called at the bottom to initialize the calculator */
function clearAll() {

    firstNumber = ""; //sets to empty string
    secondNumber = ""; //sets to empty string
     result = 0; //sets to zero
    isOperatorClicked = false;
    $(".operator").attr("disabled", false);

   firstnumshow.empty();
   secondnumshow.empty();
   resultsshow.empty();
   operatorshow.empty();

}

/*Creates an on click event for the numbers */

$( ".number" ).click(function() {
    if(isOperatorClicked) {
        secondNumber = secondNumber + $(this).val();
        secondnumshow.text(secondNumber)
    } else {
        firstNumber = firstNumber + $(this).val();
        firstnumshow.text(firstNumber)
    }
  });

/*Creates an on click event for the operator */
  $( ".operator" ).click(function() {
    isOperatorClicked = true;
    $(".operator").attr("disabled", true);
    let operator = $(this).val();
    
    switch(operator) {
        case "add":
          operatorshow.text("+");
          break;
        case "subtract":
          operatorshow.text("-");
          break;
          case "multiply":
            operatorshow.text("x");
            break;
          case "divide":
            operatorshow.text("/");
            break;
            case "power":
                operatorshow.text("^");
                break;
        default:
          operatorshow.empty();
      }

  });

/*Creates an on click event for the equals */
  $( ".equals" ).click(function() {
    $("#show-equals").toggleClass("hidden");
  });

/*Creates an on click event for the clear */
$( ".clear" ).click(function() {
    console.log("clear pushed")
  });




clearAll();
});//This is for the document ready. It has to be last. 