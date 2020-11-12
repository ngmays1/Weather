import React, {useState} from 'react'

function TodoForm( { addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add To-Do..."
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm