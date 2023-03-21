// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    Some further requirements:
    - the input field must be reset when the add button is clicked on 
    - the todo list must show the most recent first
 */


    let todoList = [];

   document.getElementById('add-button').onclick =

    function addItem () {
      if(document.getElementById('new-task').value.length !== 0){
         document.getElementById('incomplete-tasks').innerHTML += `<li>
                <p>${document.getElementById('new-task').value}</p>
                <button id="edit-button">Edit</button>
                <button id="delete-button">Delete</button>
      </li>`
      }
    }
    
    function editItem (item) {
    
    }
    
    function deleteItem (item) {
    
    }
    