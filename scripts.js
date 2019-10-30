$( document ).ready(function() {
  

//Global variables

let firstNumber = ""; //sets to empty string
let secondNumber = ""; //sets to empty string
let result = 0; //sets to zero
let operator = "";
let isOperatorClicked = false;  //When we start, we want to make sure Operator is not clicked.
let isEqualPushed = false;
const firstnumshow = $("#first-number-printout");
const secondnumshow = $("#second-number-printout");
const resultsshow=  $("#result-printout");
const equalshow=  $("#show-equals");

const operatorshow = $("#operator-printout");
const operatorbutton = $( ".operator" );
const equalsbutton = $( ".equals" );
const numbersbutton = $(".number");


/*This function clears and resets everything. It is called at the bottom to initialize the calculator */
function clearAll() {

    firstNumber = ""; //sets to empty string
    secondNumber = ""; //sets to empty string
    result = 0; //sets to zero
    isOperatorClicked = false;
    isEqualPushed = false;
   

   firstnumshow.empty();
   secondnumshow.empty();
   resultsshow.empty();
   operatorshow.empty();

   equalshow.hide();

   equalsbutton.attr("disabled", true);
   operatorbutton.attr("disabled", false);
   numbersbutton.attr("disabled", false);
  

}

/*Creates an on click event for the numbers */

numbersbutton.click(function() {
    console.log("number clicked")
    if(isOperatorClicked) {
        secondNumber = secondNumber + $(this).val();
        secondnumshow.text(secondNumber)
        equalsbutton.attr("disabled", false);
    } else {
        firstNumber = firstNumber + $(this).val();
        firstnumshow.text(firstNumber)
    }
  });

/*Creates an on click event for the operator */
  operatorbutton.click(function() {
    isOperatorClicked = true;
    operatorbutton.attr("disabled", true);
    operator = $(this).val();
    
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
  equalsbutton.click(function() {
     
   equalshow.show();
   numbersbutton.attr("disabled", true);
    equalsbutton.attr("disabled", true);
    if (isOperatorClicked) {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        switch(operator) {
            case "add":
              result = firstNumber + secondNumber;
              resultsshow.text(result);
              break;
            case "subtract":
                result = firstNumber - secondNumber;
                resultsshow.text(result);
              break;
              case "multiply":
                result = firstNumber * secondNumber;
                resultsshow.text(result);
                break;
              case "divide":
                result = firstNumber/ secondNumber;
                resultsshow.text(result);
                break;
                case "power":
                    result = Math.pow(firstNumber, secondNumber)
                    resultsshow.text(result);
                    break;
            default:
              resultshow.empty();
          }
    }
  });

/*Creates an on click event for the clear */
$( ".clear" ).click(function() {
    clearAll();
   

   
    console.log("clear pushed");
 
  });




clearAll();
});//This is for the document ready. It has to be last. 