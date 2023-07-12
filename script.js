$(document).ready(function () {

  var displayToDoEl = $('.description');
  var displayChangeColorEl = $('#listContent');
  var saveButton = $('#saveBtn');


  // This connects the ID in the html
  var date = $('#currentDay');
  // This uses day.js to display the current date
  var now = dayjs().format('dddd, MMMM D');
  // This makes var now populate the text area of the var date
  date.text(now);


  function readToDosFromStorage() {
    var todos = localStorage.getItem('todos');
    if (todos) {
      todos = JSON.parse(todos);
      console.log("This is a filled Array" + todos);
    } else {
      todos = [];
      console.log("This is an Empty Array" + todos);
    }
    return todos;
  }
  
  function saveToDosToStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function printToDoData() {
    displayToDoEl.empty();

    var todos = readToDosFromStorage();
    console.log("This is the printToDoData f " + todos);

    displayToDoEl.text(todos);
  }

  function handleAddToToDo() {
    // event.preventDefault();

    var todoInput = displayToDoEl.val();

    var newToDo = {
      item: todoInput
    }

    // add todo to local storage
    var todos = readToDosFromStorage();
    todos.push(newToDo);


    printToDoData();
  }

  saveButton.on('click', handleAddToToDo);

});








// add local storage to DOM

// set to local storage

// colors change according to time























 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
