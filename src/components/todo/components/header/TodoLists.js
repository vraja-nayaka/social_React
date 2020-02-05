import React from 'react'
import TodoTextInput from "../common/TodoTextInput";
import Button from "@material-ui/core/Button"

const TodoLists = ({ todoLists, addTodoLists, requestTodoLists }) => {
    const newTodoList = label => {
        if (label.length !== 0) {
          addTodoLists(label);
        }
      };
    return (
      <>
        <Button variant="contained" color="primary" onClick={requestTodoLists}>
          Request Lists
        </Button>
  
        <ul>
          {todoLists.map(item => (
            <li key={item.id}> {item.text}</li>
          ))}
        </ul>
  
        <div>
          <TodoTextInput
            label="New todo List"
            onSave={newTodoList}
            placeholder="New todo List?"
          />
        </div>
      </>
    );
  };

  export default TodoLists
