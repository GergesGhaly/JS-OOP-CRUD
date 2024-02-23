const todoForm = document.querySelector("[data-form]");
const formInput = document.querySelector("[data-input]");
const todoLists = document.querySelector("[data-lists]");

let todosArray = [];

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

class Ui {
  static displayTodos(array) {
    let displayTodos = array.map(
      (todo) =>
        `
        <div class="todo" style=" display: flex;gap: 10px; background: #dfe0d4; align-items: center;justify-content: space-between;margin-top: 0.5rem;padding: 1.5rem 0 1.5rem 1.5rem;">
        <p>
        ${todo?.todo}
            </p>
      <span class="remove" style="cursor: pointer; background: #ffff; padding:10px; " data-id=${todo?.id} onclick="removeTodo.removeArrayTodo(${todo.id})">x</span>
       </div>
      `
    );
    todosUi.displayTodos(todoLists, displayTodos);
  }
}

class todosUi {
  static displayTodos(itesmList, sigleItem) {
    itesmList.innerHTML = sigleItem.join(" ");
  }
}

class formInputClass {
  static clearFormInput() {
    formInput.value = "";
  }
}

class removeTodo {
  static removeArrayTodo(id) {
    todoLists.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
      }
    });

    todosArray = todosArray.filter((item) => item.id !== +id);
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formInput.value) return;
  const newTodo = new Todo(Date.now(), formInput.value);
  todosArray = [...todosArray, newTodo];
  Ui.displayTodos(todosArray);
  formInputClass.clearFormInput();
});
