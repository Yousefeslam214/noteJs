// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on input field
window.onload = function () {
       theInput.focus()
}

//adding task
theAddButton.onclick = function () {
       
       //if input empty
       if (theInput.value === '' ) {
              console.log("no value")
       } else {
              let noTasksMsg = document.querySelector(".no-tasks-message");
              // Check If Span With No Tasks Message Is Exist
              if (document.body.contains(document.querySelector(".no-tasks-message"))) {
                     
                     // Remove No Tasks Message
                     noTasksMsg.remove();
              }
              // Create Main Span Ele
              let mainSpan = document.createElement("span");

              //create delete button
              let deleteEle = document.createElement("span")
              
              //create  main span text
              let text = document.createTextNode(theInput.value)
              
              //create delete button
              let deleteText = document.createTextNode("delete")

              //Add Text To Main Span
              mainSpan.appendChild(text)

              //add class to main span
              mainSpan.className = 'task-box';
              
              //add text to delete button
              deleteEle.appendChild(deleteText)

              //add class to deleteEle
              deleteEle.className = 'delete';

              //add delete button to main Span
              mainSpan.appendChild(deleteEle);

              // Add The Task To The Container
              tasksContainer.appendChild(mainSpan);

              // Empty The Input
              theInput.value = '';

              // Focus On Field
              theInput.focus();

              // Calculate Tasks
              calculateTasks();

       }
}
document.addEventListener('click',function (e) {
       //delete Task
       if (e.target.className == 'delete') {

              // Remove Current Task
              e.target.parentNode.remove();

               // Check Number Of Tasks Inside The Container
              if (tasksContainer.childElementCount == 0) {

                     createNoTasks();

              }
       }
        // Finish Task
       if (e.target.classList.contains('task-box')) {

       // Toggle Class 'finished'
       e.target.classList.toggle("finished");
       }
       // Calculate Tasks
       calculateTasks();
})


// Function To Create No Tasks Message
function createNoTasks() {

       // Create Message Span Element
       let msgSpan = document.createElement("span");

       // Create The Text Message
       let msgText = document.createTextNode("No Tasks To Show");

       // Add Text To Message Span Element
       msgSpan.appendChild(msgText);

       // Add Class To Message Span
       msgSpan.className = 'no-tasks-message';

       // Append The Message Span Element To The Task Container
       tasksContainer.appendChild(msgSpan);

}

     // Function To Calculate Tasks
function calculateTasks() {

       // Calculate All Tasks
       tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

       // Calculate Completed Tasks
       tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}