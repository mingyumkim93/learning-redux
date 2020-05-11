import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer is a function that modifies data.
const reducer = (count = 0, action) => {
  // whatever it returns, that is the data in my application.
  switch (action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}
const countStore = createStore(reducer);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type:ADD});
};

const handleMinus = () => {
  countStore.dispatch({type:MINUS});
}

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);
