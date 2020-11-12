import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm.js'

function TodoList(){
    const [todos, setTodos] = useState([
        { 
            text: "Learn react",
            isCompleted: false 
        },
        { 
            text: "Build profile",
            isCompleted: false 
        },
        { 
            text: "make money",
            isCompleted: false 
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


    return (
        <div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo 
                        key={index} 
                        index={index} 
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    >
                    </Todo>
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList