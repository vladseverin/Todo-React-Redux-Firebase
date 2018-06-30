import React, { Component } from "react";

class ToDoListItem extends Component {
  handleClickRemove = (todoId) => {
    this.props.completeToDo(todoId)
  }

  render() {
    const { todoId, todo } = this.props;
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <span
            onClick={() => this.handleClickRemove(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default ToDoListItem;