import { todoAPI } from "./../api/api";

export const SET_TODO_LISTS = "SET_TODO_LISTS";
export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const ERR_TODO_LIST = "ERR_TODO_LIST";
export const SET_TODO_LIST_TASKS = "SET_TODO_LIST_TASKS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const COMPLETE_ALL_TODOS = "COMPLETE_ALL_TODOS";
export const ERR_TODO = "ERR_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SHOW_ALL = "show_all";
export const SHOW_COMPLETED = "show_completed";
export const SHOW_ACTIVE = "show_active";

export const setTodoLists = todoLists => ({ type: SET_TODO_LISTS, todoLists });
export const addTodoList = todoLists => ({ type: ADD_TODO_LIST, todoLists });
export const setTodoListTasks = tasks => ({ type: SET_TODO_LIST_TASKS, tasks });
export const errTodoList = err => ({ type: ERR_TODO_LIST, err });
export const addTodo = text => ({ type: ADD_TODO, text });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS });
export const errTodo = err => ({ type: ERR_TODO, err });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

const initialState = {
  todoLists: [],
  tasks: [{ id: 0, completed: false, text: "My first TODO" }]
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // TODO_LISTS

    case SET_TODO_LISTS:
      return {
        ...state,
        todoLists: action.todoLists
      };

    case ADD_TODO_LIST:
      return {
        ...state,
        todoLists: [
          ...state.todoLists,
          {
            id:
              state.todoLists.reduce(
                (maxId, list) => Math.max(list.id, maxId),
                -1
              ) + 1,
            title: action.todoLists.title
          }
        ]
      };

    // TODO_TASKS

    case SET_TODO_LIST_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };

    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id:
              state.tasks.reduce(
                (maxId, todo) => Math.max(todo.id, maxId),
                -1
              ) + 1,
            completed: false,
            text: action.text
          }
        ]
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(todo => todo.id !== action.id)
      };
    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        )
      };

    case COMPLETE_TODO:
      return {
        ...state,
        tasks: state.tasks.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.tasks.every(todo => todo.completed);
      return {
        ...state,
        tasks: state.tasks.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter(todo => todo.completed === false)
      };

    default:
      return state;
  }
}

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const errMessage = (response, dispatch, action) => {
  let message =
    response.data.messages.length > 0
      ? response.data.messages[0]
      : "Some error";
  dispatch(action({ error: message }));
};

export const requestTodoLists = () => async dispatch => {
  const response = await todoAPI.getTodoLists();
  if (response.data !== null) {
    dispatch(setTodoLists(response.data));
  } else {
    dispatch(setTodoLists([{ id: 0, title: "Create your first TODOLIST" }]));
  }
};

export const postTodoList = title => async dispatch => {
  const response = await todoAPI.postTodoList(title);
  if (response.data.resultCode === 0) {
    dispatch(addTodoList(response.data.data.item));
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const deleteTodoList = todolistId => async dispatch => {
  const response = await todoAPI.deleteTodoList(todolistId);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const putTodoList = (todolistId, title) => async dispatch => {
  const response = await todoAPI.putTodoList(todolistId, title);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const putTodoListReorder = (
  todolistId,
  putAfterItemId
) => async dispatch => {
  const response = await todoAPI.putTodoList(todolistId, putAfterItemId);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const requestTodoListTasks = (todolistId, count, page) => async dispatch => {
  const response = await todoAPI.getTodoListTasks(todolistId, count, page);
  if (response.data.resultCode === 0) {
    dispatch(setTodoListTasks(response.data));
  } else {
    dispatch(setTodoListTasks([{ id: 0, title: "Create your first Task!" }]));
  }
};

export const postTodoListTasks = (todolistId, title) => async dispatch => {
  const response = await todoAPI.postTodoListTasks(todolistId, title);
  if (response.data.resultCode === 0) {
    dispatch(setTodoListTasks(response.data));
  } else {
    dispatch(setTodoListTasks([{ id: 0, title: "Create your first Task!" }]));
  }
};
