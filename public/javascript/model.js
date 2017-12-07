$( () => {
  console.log("Peaches");
// Variables
const $addRecButton = $('#addRecButton')
const $closeAddRecButton = $('#closeAddRecBut');

  $addRecButton.on('click', () => {
    $('.addRec').css('display', 'block');

  });
  $closeAddRecButton.on('click', () => {
    $('.addRec').css('display', 'none');
  });
});
console.log("HEY");
