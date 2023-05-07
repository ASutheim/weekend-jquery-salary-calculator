$(document).ready(onReady);

function onReady() {
  console.log("Ready!");
  $(`#submit-btn`).on(`click`, handleSubmit);
  $(`#employee-info-table`).on(`click`, `.delete-button`, handleDelete);
}

let allEmployeeInfo = [];

function handleSubmit(event) {
  event.preventDefault();

  let firstNameInput = $("#first-name-input").val();
  let lastNameInput = $("#last-name-input").val();
  let idInput = $("#id-input").val();
  let titleInput = $("#title-input").val();
  let salaryInput = $("#salary-input").val();

  //This code sends the submitted info plus a delete button to a new line on the table
  $(`#employee-info-table`).append(
    `<tr><td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${salaryInput}</td>
    <td><button class = "delete-button">❌</button></td>`
  );

  //This code saves the inputted info to an object
  let employeeInfo = {
    firstName: firstNameInput,
    lastName: lastNameInput,
    idNumber: idInput,
    title: titleInput,
    salary: parseInt(salaryInput),
  };

  //This code pushes the new object to the array allEmployeeInfo
  allEmployeeInfo.push(employeeInfo);

  console.log("New info submitted:", employeeInfo);

  updateSalaryTotal(allEmployeeInfo);

  //This code clears the input fields

  $("#first-name-input").val(" ");
  $("#last-name-input").val(" ");
  $("#id-input").val(" ");
  $("#title-input").val(" ");
  $("#salary-input").val(" ");
}

function handleDelete() {
  //this makes the delete button work
  console.log("employee deleted");
  $(this).parent().parent().remove();
}

function updateSalaryTotal() {
  console.log("Inside update salary function");
  let annualTotalCost = 0;
  for (let employee of allEmployeeInfo) {
    console.log(employee);
    annualTotalCost += employee.salary;
  }
  let monthlyTotalCost = annualTotalCost / 12;
  console.log("Monthly Total Costs:", monthlyTotalCost);
  $("#totalMonthly").append(`<p>Total Monthly Costs: ${monthlyTotalCost}</p>`);
  if ((monthlyTotalCost > 20, 000)) {
    ('document.getElementById(`#totalMonthly`).style.background = "red"');
  }
  return monthlyTotalCost;
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
