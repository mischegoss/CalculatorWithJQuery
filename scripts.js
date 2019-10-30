$(document).ready(function() {


  //Global variables


 /*These variables are here to simplify the code */
  const firstnumshow = $("#first-number-printout");
  const secondnumshow = $("#second-number-printout");
  const resultsshow = $("#result-printout");
  const equalshow = $("#show-equals");

  const operatorshow = $("#operator-printout");
  const operatorbutton = $(".operator");
  const equalsbutton = $(".equals");
  const numbersbutton = $(".number");

  /*These are variables that we are going to manipulate in our code */

  let firstNumber = ""; //sets to empty string
  let secondNumber = ""; //sets to empty string
  let result = 0; //sets to zero
  let operator = ""; //sets to empty string
  let isOperatorClicked = false; //When we start, we want to make sure Operator is not clicked.

  /*I used const and let here. In a bad nutshell, const are used when stuff isn't going to change. For things that will change
   * you want to use let. In our class, we have used var so far. It would be perfectly fine if all of these were var */

  /*This function clears and resets everything. It is called at the bottom to initialize the calculator */
  function clearAll() {

      firstNumber = ""; //sets to empty string
      secondNumber = ""; //sets to empty string
      result = 0; //sets to zero
      isOperatorClicked = false; //this is the default
     

     //This clears out anything that has been printed to the screen
      firstnumshow.empty();
      secondnumshow.empty();
      resultsshow.empty();
      operatorshow.empty();

      //We don't want to see the equal sign until we push the button. So, we can hide it.

      equalshow.hide();

      //We want the equals button to be disabled until a second Number is entered. 

      equalsbutton.attr("disabled", true);
      operatorbutton.attr("disabled", false);
      numbersbutton.attr("disabled", false);


  }

  /*Creates an on click event for the numbers */
  /*The reason you are not seeing the dollar sign here is because I used a variable. So numbersbutton is standing in
   * for the dollar sign code you may have expected. When you are going to target an item more than once, it is
   * often more readable to use a variable like above */ 

  numbersbutton.click(function() {
      //This first tests if the Operator has been clicked.
      if (isOperatorClicked) { //If has been clicked, we add to the second number
          secondNumber = secondNumber + $(this).val();
          secondnumshow.text(secondNumber)
          //since there is now a second number, the equals button should be enabled
          equalsbutton.attr("disabled", false);
      } else { //if not true, we add to the first number
          firstNumber = firstNumber + $(this).val();
          firstnumshow.text(firstNumber)
      }
  });

  /*Creates an on click event for the operator */
  operatorbutton.click(function() {
    //When the operator is clicked, we want to set the isOperatorClicked to true so we can get to the second button
      isOperatorClicked = true;
      //We also want to disable the operator buttons so they can't be pushed again
      operatorbutton.attr("disabled", true);

      //This sets the value of the operator button to the value of the button pushed
      operator = $(this).val();
     //A switch statement is a great way to not have to write else if's here. (But else/ifs work too!)
     //In this case, I want the actual operator (+, -, etc), not the name to print on the screen so I use a switch statement.
      switch (operator) {
          case "add":
             //This is printing it to the span. It will show up on the sccreen. 
              operatorshow.text("+");
            //break is an important part of a switch statement that says "stop here if the condition is met"
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
          default: //If none of the conditions are met (not actually possible, we are going to print nothing)
              operatorshow.empty();
      }

  });

  /*Creates an on click event for the equals */
  
  equalsbutton.click(function() {
      //When the equals button is pushed, we want to show the span that holds the equal sign.
      equalshow.show();
      //We also want to make sure that the numbers can't be pushed again, so we disable the numbers nad equals button.
      numbersbutton.attr("disabled", true);
      equalsbutton.attr("disabled", true);

      //This is a failsafe. Only if an operator is clicked and there is at least one number in the second number should it give results
      if (isOperatorClicked && secondNumber != "") {

        //Our numbers are a string. parseInt makes them integers.
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);

          //Another switch statement. Again, this could also be an if/else statement.
          switch (operator) {
              case "add":
                  result = firstNumber + secondNumber;
                  //This is what prints the results on the screen
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
                  result = firstNumber / secondNumber;
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
  //Since we used clearAll to initialize, we can just call it here to clear everything out. 
  $(".clear").click(function() {
      clearAll();
  });




  clearAll();
}); //This is for the document ready. It has to be last. 