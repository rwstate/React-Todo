import React from "react";

const Todo = props => {
  return (
    <>
      <p
        className={`task${props.todo.completed ? " completed" : ""}`}
        onClick={() => props.toggleCompleted(props.todo.id)}
      >
        {props.todo.task}
      </p>
    </>
  );
};

export default Todo;
