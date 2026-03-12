function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}