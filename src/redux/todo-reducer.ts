import { todoAPI } from "./../api/api";

export const SET_TODO_LISTS = "SET_TODO_LISTS";
export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const ERR_TODO_LIST = "ERR_TODO_LIST";
export const SET_TODO_TASKS = "SET_TODO_TASKS";
export const ADD_TODO_TASK = "ADD_TODO_TASK";
export const DELETE_TODO_TASK = "DELETE_TODO_TASK";
export const EDIT_TODO_TASK = "EDIT_TODO_TASK";
export const ERR_TODO = "ERR_TODO";



type InitialStateType = typeof initialState

type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
  id: string
  todoListId: string
  order: number
  addedDate: Date
}

type TodolistType = {
  id: string
  addedDate: Date
  order: number
  title: string
}

const initialState = {
  todoLists: [] as Array<TodolistType>,
  tasks: [] as Array<TaskType>
};

export default function todoReducer(state = initialState, action: any): InitialStateType {
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
          action.todoList
        ]
      };

    // TODO_TASKS

    case SET_TODO_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };

    case ADD_TODO_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task,
          {
            description: action.description,
            title: action.title,
            completed: action.completed,
            status: action.status,
            priority: action.priority,
            startDate: action.startDate,
            deadline: action.deadline,
            id: action.id,
            todoListId: action.todoListId,
            order: action.order,
            addedDate: action.addedDate
          }
        ]
      };

    case DELETE_TODO_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(todo => todo.id !== action.id)
      };
    case EDIT_TODO_TASK:
      return {
        ...state,
        tasks: state.tasks.map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        )
      };
    default:
      return state;
  }
}

type SetTodoListsActionType = {
  type: typeof SET_TODO_LISTS
  todoLists: Array<TodolistType>
}
export const setTodoLists = (todoLists: Array<TodolistType>): SetTodoListsActionType => ({ type: SET_TODO_LISTS, todoLists });

type AddTodoListsActionType = {
  type: typeof ADD_TODO_LIST
  todoList: TodolistType
}
export const addTodoList = (todoList: TodolistType): AddTodoListsActionType => ({ type: ADD_TODO_LIST, todoList });


export const setTodoListTasks = (tasks: Array<TaskType>) => ({ type: SET_TODO_TASKS, tasks });


export const errTodoList = (err: string) => ({ type: ERR_TODO_LIST, err });


export const addTodo = (title: string) => ({ type: ADD_TODO_TASK, title });


export const deleteTodo = (todoListId: string, taskId: string) => ({ type: DELETE_TODO_TASK, todoListId, taskId });

type EditTask = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
}

export const editTodo = (todoListId: string, taskId: string, task: EditTask) => ({ type: EDIT_TODO_TASK, todoListId, taskId, task });

export const errTodo = (err: any) => ({ type: ERR_TODO, err });

const errMessage = (response: any, dispatch: any, action: any) => {
  let message =
    response.data.messages.length > 0
      ? response.data.messages[0]
      : "Some error";
  dispatch(action({ error: message }));
};

export const requestTodoLists = () => async (dispatch: any) => {
  const response = await todoAPI.getTodoLists();
  if (response.data) {
    dispatch(setTodoLists(response.data));
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const postTodoList = (title: string) => async (dispatch: any) => {
  const response = await todoAPI.postTodoList(title);
  if (response.data.resultCode === 0) {
    dispatch(addTodoList(response.data.data.item));
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const deleteTodoList = (todolistId: string) => async (dispatch: any) => {
  const response = await todoAPI.deleteTodoList(todolistId);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const putTodoList = (todolistId: string, title: string) => async (dispatch: any) => {
  const response = await todoAPI.putTodoList(todolistId, title);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const putTodoListReorder = (
  todolistId: string,
  putAfterItemId: string
) => async (dispatch: any) => {
  const response = await todoAPI.putTodoList(todolistId, putAfterItemId);
  if (response.data.resultCode === 0) {
    dispatch(requestTodoLists());
  } else {
    errMessage(response, dispatch, errTodoList);
  }
};

export const requestTodoListTasks = (todolistId: string, count: number, page: number) => async (dispatch: any) => {
  const response = await todoAPI.getTodoListTasks(todolistId, count, page);
  if (response.data.resultCode === 0) {
    dispatch(setTodoListTasks(response.data));
  } else {
    dispatch(setTodoListTasks([]));
  }
};

export const postTodoListTasks = (todolistId: string, title: string ) => async (dispatch: any) => {
  const response = await todoAPI.postTodoListTask(todolistId, title);
  if (response.data.resultCode === 0) {
    dispatch(setTodoListTasks(response.data));
  } else {
    dispatch(setTodoListTasks([]));
  }
};
