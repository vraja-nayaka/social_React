import { connect } from "react-redux";
import Header from "./Header";
import { addTodo } from "../../actions";
import {
  requestTodoLists,
  addTodoLists,
  postTodoLists,
  setTodoLists
} from "../../../../redux/todo-reducer";

const mapStateToProps = state => ({
  todoLists: state.todo.todoLists
});

export default connect(mapStateToProps, {
  addTodo,
  requestTodoLists,
  addTodoLists,
  postTodoLists,
  setTodoLists
})(Header);
