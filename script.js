function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = task;

  listItem.onclick = function () {
    listItem.remove(); // Remove on click
  };

  document.getElementById("taskList").appendChild(listItem);
  input.value = "";
}