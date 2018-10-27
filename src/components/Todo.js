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
        <h2>Todos</h2>
        <ul>
          {this.state.todos.map((todo) =>
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" name={todo.id} onChange={this.handleChange} value={todo.completed} defaultChecked={todo.completed} />
          </li>
          )}
        </ul>
      </div>  
    )
  }

  handleChange(event) {
    let idx = event.target.name;
    let isChecked = event.target.checked;
    let todo = this.state.todos.find(obj => {
      return obj => obj.id === idx;
    })

    todo.completed = isChecked;
    
    this.setState({
      todos: [
        ...this.state.todos
      ]
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(json => {
      //console.log(json)
      this.setState(() => {
        return { todos: json }
      })
    })
  }
}

export default Todo
