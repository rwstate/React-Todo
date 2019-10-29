import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const tasks = [

]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    })
    console.log(this.state.todos)
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(el => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed
          }
        } else {
          return el;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(el => !el.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTask={this.addTask}/>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
