import React from "react";
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button";

const TodoLists = ({ todoLists, postTodoLists, requestTodoLists }) => {
  const newTodoList = title => {
    if (title.length !== 0) {
      postTodoLists(title);
    }
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={requestTodoLists}>
        Request Lists
      </Button>

      <ul>
        {todoLists.map(item => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>

      <div>
        <TodoTextInput
          newTodo
          label="New todo List"
          onSave={newTodoList}
          placeholder="New todo List?"
        />
      </div>
    </>
  );
};

export default TodoLists;
