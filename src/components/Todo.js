import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super()
    this.state = {
      todos: [],
      todo: {title: ''},
      todoValue: ''
    }

    this.handleTodoChange = this.handleTodoChange.bind(this)
    this.addNewTodo = this.addNewTodo.bind(this)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) =>
          <li key={todo.id}>
            <span className={todo.completed ? 'strikethrough' : ''}>{todo.title}</span>
            <input type="checkbox" name={todo.id} onChange={this.handleTodoChange} value={todo.completed} defaultChecked={todo.completed} />
            <button>Edit todo</button>
          </li>
          )}
        </ul>
        <h2>{this.state.todo.title}</h2>
        <form onSubmit={this.addNewTodo}>
          <input className="new-todo" ref="newTodo"/> 
          <button type="submit">Add new todo</button>
        </form>

      </div>  
    )
  }

  handleTodoChange(event) {
    let todos = [...this.state.todos];
    let todoId = parseInt(event.target.name);
    let idx = todos.findIndex(todo => todo.id === todoId);
    let isChecked = event.target.checked;

    todos[idx].completed = isChecked;

    this.setState({
      todos
    })
  }

  addNewTodo(event) {
    event.preventDefault();
    let lastTodo = this.state.todos[this.state.todos.length - 1]

    if(this.refs.newTodo.value === '') return false

    let todo = {
      title: this.refs.newTodo.value,
      id: lastTodo.id + 1,
      completed: false,
      userId: 1
    }

    let allTodos = [...this.state.todos, todo] 


    this.setState({
      todos: allTodos
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(json => {
      this.setState(() => {
        return { todos: json }
      })
    })
  }
}

export default Todo
