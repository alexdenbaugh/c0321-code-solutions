import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => {
        this.setState({ todos: todos });
      });
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const body = JSON.stringify(newTodo);
    const init = {
      method: 'POST',
      headers: header,
      body: body
    };
    fetch('/api/todos', init)
      .then(response => response.json())
      .then(todo => {
        const newTodos = this.state.todos;
        newTodos.push(todo);
        this.setState({ todos: newTodos });
      });
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const targetTodo = this.state.todos.filter(todo => {
      if (todo.todoId === todoId) {
        return true;
      } else {
        return false;
      }
    })[0];
    const isCompletedStatus = {};
    if (targetTodo.isCompleted) {
      isCompletedStatus.isCompleted = false;
    } else {
      isCompletedStatus.isCompleted = true;
    }

    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const body = JSON.stringify(isCompletedStatus);
    const init = {
      method: 'PATCH',
      headers: header,
      body: body
    };

    fetch(`/api/todos/${todoId}`, init)
      .then(response => response.json())
      .then(responseTodo => {
        const newTodos = this.state.todos.map(todo => {
          if (todo.todoId === todoId) {
            return responseTodo;
          } else {
            return todo;
          }
        });
        this.setState({ todos: newTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
