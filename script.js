$(document).ready(onReady);

function onReady() {
  console.log("Ready!");
  $(`#submit-btn`).on(`click`, handleSubmit);
  $(`#employee-info-table`).on(`click`, `.delete-button`, handleDelete);
}

function handleSubmit(event) {
  event.preventDefault();

  let firstNameInput = $("#first-name-input").val();
  let lastNameInput = $("#last-name-input").val();
  let idInput = $("#id-input").val();
  let titleInput = $("#title-input").val();
  let salaryInput = $("#salary-input").val();

  //This code sends the submitted info to the console
  console.log("Submit button clicked");
  console.log(firstNameInput, lastNameInput, idInput, titleInput, salaryInput);

  //This code sends the submitted info plus a delete button to the table on the DOM
  $(`#employee-info-table`).append(
    `<tr><td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${salaryInput}</td>
    <td><button class = "delete-button">❌</button></td>`
  );
}

function handleDelete() {
  //this makes the delete button work
  console.log("employee deleted");
  $(this).parent().parent().remove();
}

/*
ideas about how to create the monthly costs sum: 

-grab the values from the #salary-input column of the table 
  and push them to an array
-loop over the array to add all the values and return the result
-create a conditional that checks the result from above against the 
  20,000 budget threshold and, if over that threshold, 
  turns the background color red (not sure how to make js talk to css though!)
*/

let salaryArray = [];
let monthlyCost = 0;

function addMonthlyCost() {}

console.log($(`#salary-input`).text());
/* ideas about how to update the total when an employee is deleted

*/
