import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <p>No todos found. Add one to get started!</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
