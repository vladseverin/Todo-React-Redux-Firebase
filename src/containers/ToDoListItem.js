import { connect } from 'react-redux';
import ToDoListItem from '../components/ToDoListItem';
import { completeToDo } from "../actions";

const mapDispatchToProps = dispatch => ({
  completeToDo: (todoId) => dispatch(completeToDo(todoId))
});

export default connect(
  null,
  mapDispatchToProps
)(ToDoListItem);