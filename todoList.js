
let btnAdd = document.querySelector(".btnAdd");
const tasklist = document.querySelector(".task");
const tasklistContainer = document.querySelector(".tasklistContainer");
let msgBox = document.querySelector(".msgBox");
const showMsg = document.querySelector("#msg");


btnAdd.addEventListener("click", () => {
    addtoList();
});

// Check if input is blank
function chkblank() {
    msgBox.style.display = 'contents';
    showMsg.innerText = "Plese enter your task";;
}
// add task to list
const addtoList = () => {

    let userInput = document.getElementById("userText").value;
    if (userInput == "") {
        chkblank();
    } else {
        msgBox.style.display = 'none';
        let newDiv = document.createElement('div');      
        newDiv.innerHTML = `<div class="taskList"><p class="task">${userInput}</p><button class="btnEdit" onclick="editTask(this)">Edit</button><button class="btnRemove" onclick="removeTask(this)">Remove</button></div>`;
        tasklist.textContent = userInput;
        tasklistContainer.append(newDiv);
    }
};
// Remove the task from the list
const removeTask = (curntElement) => {
    curntElement.parentElement.remove();
}
// Upate the user task
const editTask = (curntElement) => {

    if (curntElement.textContent == "Save") {
        curntElement.textContent = "Edit";
        let currentTexttoEdit = curntElement.previousElementSibling.value;
        let editedInput = document.createElement('p');
        editedInput.className = 'task';
        editedInput.textContent = currentTexttoEdit;
        curntElement.parentElement.replaceChild(editInput, curntElement.previousElementSibling)

    } else {
        curntElement.textContent = "Save";
        let currentTexttoEdit = curntElement.previousElementSibling.textContent;
        let editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'task';
        editInput.value = currentTexttoEdit;
        curntElement.parentElement.replaceChild(editInput, curntElement.previousElementSibling)

    }

}