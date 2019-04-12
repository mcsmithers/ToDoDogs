import React from 'react';

// import TodoItem from './TodoItem';
import PupperCard from './PupperCard';
import todosData from '../mocks/todosData';


class MainContent extends React.Component {
    constructor() {
        super ();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
        return (
            todosData.map(todo => (
                <div key={todo.id} className="todo-list">
                    <div className="todo-item">
                        <input type="checkbox" checked={todo.completed} onChange={() => this.handleChange(todo.id)}/>
                        <p className='task'>{todo.task}</p>
                    </div>
                </div>
            )))
    }

}

export default MainContent

