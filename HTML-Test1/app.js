document.getElementById("addButton").addEventListener("click", function () {
  const input = document.getElementById("todoInput");
  if (input.value) {
    const newTodo = document.createElement("li");
    newTodo.textContent = input.value;
    document.getElementById("todoList").appendChild(newTodo);
    input.value = "";
  }
});
