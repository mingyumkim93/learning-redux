// import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// CONSIDER USING createSlice !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([],{
    // it's ok to mutate state here with toolkit
    [addToDo]: (state, action) => {state.push({text: action.payload, id:Date.now()})},
    [deleteToDo]: (state, action) => {return state.filter(todo=> todo.id !== action.payload)}
});

//without toolkit
// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text
//     };
// };
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id
//     };
// };
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD:
//             return [{ text: action.text, id: Date.now() }, ...state];
//         case DELETE:
//             return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     };
// };
export const actionCreators = {
    addToDo,
    deleteToDo
};

const store = configureStore({reducer});

export default store;