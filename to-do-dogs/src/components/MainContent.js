import React from 'react';
import TodoItem from './TodoItem'

function MainContent() {
    return (
        <div className="todo-list">
            <h1>Todos with Doggos</h1>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default MainContent
