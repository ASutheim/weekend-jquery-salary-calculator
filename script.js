$(document).ready(onReady);

function onReady() {
  $(`#submit.btn`).on(`click`, handleSubmit);
}

function handleSubmit(event) {
  console.log("Submit button clicked");
  event.preventDefault();

  let firstNameInput = $("#first-name-input").val();
  let lastNameInput = $("#last-name-input").val();
  let idInput = $("#id-input").val();
  let titleInput = $("#title-input").val();
  let salaryInput = $("#salary-input").val();

  console.log(firstNameInput, lastNameInput, idInput, titleInput, salaryInput);
}
