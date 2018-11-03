import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super()
    this.state = {
      todos: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) =>
          <li key={todo.id}>
            <span className={todo.completed ? 'strikethrough' : ''} >{todo.title}</span>
            <input type="checkbox" name={todo.id} onChange={this.handleChange} value={todo.completed} defaultChecked={todo.completed} />
          </li>
          )}
        </ul>
      </div>  
    )
  }

  handleChange(event) {
    let todos = [...this.state.todos];
    let todoId = parseInt(event.target.name);
    let idx = todos.findIndex(todo => todo.id === todoId);
    let isChecked = event.target.checked;

    todos[idx].completed = isChecked;

    this.setState({
      todos
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
