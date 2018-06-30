import { todosRef } from "../config/firebase";
import * as types from "../constants/types";

export const addToDo = newToDo => async dispatch => {
  dispatch({
    type: types.ADD_TODO,
  });
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDo => async dispatch => {
  dispatch({
    type: types.REMOVE_TODO,
  });
  todosRef.child(completeToDo).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: types.FETCH_TODOS,
      payload: snapshot.val()
    });
  });
}