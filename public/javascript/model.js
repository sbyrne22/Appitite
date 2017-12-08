$( () => {
  // console.log("Peaches");
// Variables

const $editModel = $('.editModel');

const $addRecButton = $('#addRecButton')
const $closeAddRecButton = $('#closeAddRecBut');

const $newUserBtn = $('#newUserBtn')
const $existUserBtn = $('#existUserBtn');

// Add Recipes Model -------------------------------------
  $addRecButton.on('click', () => {
    $('#addRecModel').css('display', 'block');

  });
  $closeAddRecButton.on('click', () => {
    $('#addRecModel').css('display', 'none');
  });

// Login/Register Model ----------------------------------

  $newUserBtn.on('click', () => {
    $('#registerBox').css('display', 'block');
    $('#logInBox').css('display', 'none');

  });
  $existUserBtn.on('click', () => {
    $('#registerBox').css('display', 'none');
    $('#logInBox').css('display', 'block');
  });

// Edit Recipes Model ------------------------------------
  for (let i = 0; i < $editModel.length; i++) {

    // console.log('editModel', $('.editModel' + i));
    $('#openEditRecBut' + i).on('click', () => {
      // console.log('Clicked');
      $('#editRecModel' + i).css('display', 'block');

    });
    $('#closeEditRecBut' + i).on('click', () => {
      $('#editRecModel' + i).css('display', 'none');
    });
  }


});
// console.log("HEY");



// <a href='/profile/<%= oneUser[0]._id %>'>Nevermind!</a>
// <a href="/recipes/<%= recipes[i]._id %>/edit">Edit</a>
// <% for (let i = 0; i < recipes.length; i++) { %>

// <% for (let j = 0; j < instuctArray[i].length; j++) { %>
// <%= instuctArray[i][j] %>
// <% } %>
