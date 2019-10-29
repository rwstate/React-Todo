import React from "react";
import Todo from "./Todo.js"

const TodoList = props => {

  return (
    <div>
    {props.todos.map(el => <Todo key ={el.id} todo={el} toggleCompleted={props.toggleCompleted} />)}
    </div>
  )
}

export default TodoList;
