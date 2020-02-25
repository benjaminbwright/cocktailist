// Elements
const ingredientNameInputEl = $("#name");
const ingredientTypeInputEl = $("#type");
const ingredientSubmitButton = $("#submit-ingredient")
const addForm = $(".add-form")

$(document).ready(() => {

  addForm.submit(handleSubmitIngredients)

})


// Handles the submission 
const handleSubmitIngredients = (e) => {
  e.preventDefault()
  const name = ingredientNameInputEl.val().trim();
  const type = ingredientTypeInputEl.val().trim();
  console.log(name, type)

  $.ajax({
    url:"/api/ingredients",
    method: "POST",
    data: {name, type}
  })
  .done((response) => {
    console.log(response)
    location.reload();
  })

}
