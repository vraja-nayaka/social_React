import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer/Footer";
import VisibleTodoListContainer from "./visibleTodoList/VisibleTodoListContainer";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const MainSection = ({ todosCount, completedCount, actions }) => (
  <Paper>
    {!!todosCount && (
      <span>
        <Checkbox
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
          onChange={actions.completeAllTodos}
        />
        <label onClick={actions.completeAllTodos}>Complete all</label>
      </span>
    )}
    <VisibleTodoListContainer />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </Paper>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
