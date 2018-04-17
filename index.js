'use strict'

// This function handles the addition of a new location
function handleInput(event) {
    event.preventDefault(); //prevents page reload

    var textInput = event.target.textInput.value;
  //Verify that we have valid value
    if (!textInput) {
    return alert('No value!');
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
var inputListener = document.getElementById('ui-form');
inputListener.addEventListener('submit', handleInput);