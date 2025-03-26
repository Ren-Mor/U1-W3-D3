document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("new-task");
  const taskInput = document.getElementById("insert-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Cancella";
      deleteButton.classList.add("cancella");
      taskItem.appendChild(deleteButton);

      taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("Fatto");
      });

      deleteButton.addEventListener("click", function (e) {
        taskList.removeChild(taskItem);
      });

      taskList.appendChild(taskItem);

      taskInput.value = "";
    } else {
      alert("Aggiungi un promemoria.");
    }
  });

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });
});
