import { createStore } from "redux";

const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD: {
      state.push(action.text);
      return state;
    }
    case DELETE: {
      state.splice(action.id - 1, 1);
      return state;
    }
    default: {
      return state;
    }
  };
};

const todoStore = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  todoStore.dispatch({ type: ADD, text: todoInput.value });
  todoInput.value = "";
}
todoButton.addEventListener("click", onSubmit);

const deleteTodo = (e) => {
  todoStore.dispatch({ type: DELETE, id: e.target.parentNode.id });
};

const onTodosChange = () => {
  let id = 0;
  todoList.innerHTML = "";
  todoStore.getState().forEach(todo => {
    const todoItem = document.createElement("li");
    id += 1;
    todoItem.id = id;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", deleteTodo);
    todoItem.innerText = todo;
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
};

todoStore.subscribe(onTodosChange);