import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form className="input-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="add-button">
                Add
            </button>
        </form>
    );
}

export default TodoInput;
