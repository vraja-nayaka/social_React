import { connect } from "react-redux";
import Header from "./Header";
import { addTodo } from "../../actions";
import {
  requestTodoLists,
  addTodoList,
  postTodoList,
  deleteTodoList
} from "../../../../redux/todo-reducer";

const mapStateToProps = state => ({
  todoLists: state.todo.todoLists
});

export default connect(mapStateToProps, {
  addTodo,
  requestTodoLists,
  addTodoList,
  postTodoList,
  deleteTodoList
})(Header);
