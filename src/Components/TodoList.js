import React, {useState} from 'react';
import Todo from './Todo';
import { useForm } from "react-hook-form";

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

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data.todo);
        if (!data) return;
        addTodo(data.todo);
        e.target.reset();
    };

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Add todo"
                    ref={register({required: "Please Enter a Todo!"})}
                />
                {errors.todo && <p>{errors.todo.message}</p>}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default TodoList