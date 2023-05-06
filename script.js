$(document).ready(onReady);

function onReady() {
  console.log("Ready!");
  $(`#submit-btn`).on(`click`, handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  //This code sends the submitted info to the console
  console.log("Submit button clicked");

  let firstNameInput = $("#first-name-input").val();
  let lastNameInput = $("#last-name-input").val();
  let idInput = $("#id-input").val();
  let titleInput = $("#title-input").val();
  let salaryInput = $("#salary-input").val();

  console.log(firstNameInput, lastNameInput, idInput, titleInput, salaryInput);

  //This code sends the submitted info plus a delete button to the table on the DOM

  $(`#employee-info-table`).append(
    `<tr><td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${salaryInput}</td>
    <td><button class = "delete-btn">❌</button></td>`
  );
}
