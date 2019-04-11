import React from 'react';
import TodoItem from './TodoItem'

import todos from '../mocks/todos';


function MainContent() {
    console.log(Object.keys(todos))
    return(
    todos.map(todo => (
        <div key={todo.id} className="todo-list">
        <div className="todo-item">
         <input type="checkbox" checked={todo.completed}/>
        <p className='task'>{todo.task}</p>
        </div>
        </div>
    )))
}

export default MainContent

