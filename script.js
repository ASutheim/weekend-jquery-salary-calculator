$(document).ready(onReady);

function onReady() {
  //This code adds event listeners to the DOM on page load
  console.log("Ready!");
  $(`#submit-btn`).on(`click`, handleSubmit);
  $(`#employee-info-table`).on(`click`, `.delete-button`, handleDelete);
}

//This array is where all the submitted information will be stored
let allEmployeeInfo = [];

function handleSubmit(event) {
  //This code keeps the page from refreshing by default
  console.log("hit it once");
  event.preventDefault();
  console.log("twice");

  //This code grabs the literal values entered into the input fields and intializes them as js variable
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
    <td><button class="delete-button">Delete</button></td>`
  );

  //This code saves the inputted info as a new object
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

  //This code calls the function to update the salary total when a new employee is added

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

  //Loops over employee info array and adds all of the salaries to get the yearly costs

  let annualTotalCost = 0;
  for (let employee of allEmployeeInfo) {
    console.log(employee);
    annualTotalCost += employee.salary;
  }

  //Divides the annual costs by twelve to get the monthly costs

  let monthlyTotalCost = annualTotalCost / 12;
  console.log("Monthly Total Costs:", monthlyTotalCost);
  $("#totalMonthly").append(monthlyTotalCost);

  //Checks monthly cost against budget and resets background color to red if cost is greater than 20k

  if (monthlyTotalCost > 20000) {
    document.getElementById("totalMonthly").style.backgroundColor = "red";
  }
  return monthlyTotalCost;
}
