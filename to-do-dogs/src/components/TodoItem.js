import React from 'react';

class TodoItem extends React.Component {
    render (){
        return (
            <div className="todo-item">
                <input type="checkbox"/>
                <p>Let's add some things to do!</p>
            </div>
        )
    }
}

export default TodoItem
