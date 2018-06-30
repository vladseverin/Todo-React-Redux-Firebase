import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { addToDo, fetchToDos } from "../actions";

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  addToDo: (newToDo) => dispatch(addToDo(newToDo)),
  fetchToDos: () => dispatch(fetchToDos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);