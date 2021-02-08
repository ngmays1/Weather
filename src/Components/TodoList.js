import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { useForm } from "react-hook-form";
import Rock from './Rock';

function TodoList(){
    const [todos, setTodos] = useState([
        { 
            text: "Learn React",
            isCompleted: false 
        },
        { 
            text: "Win Rock, Paper, Scissors",
            isCompleted: false 
        },
        { 
            text: "Create Fun Projects!",
            isCompleted: false 
        }
    ]);

    const [counter, setCounter] = useState(
        {
            count:0,
            value:"Keep on working"
        }
    );

    const [showGame, setShowGame] = useState(false);

    useEffect(() => {
        if (counter.count > 3) {
            setCounter(counter => ({ ...counter, value:"You've had a busy day!" }));
        }
        console.log(counter.value);
    }, [counter.count])

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data.todo);
        if (!data) return;
        addTodo(data.todo);
        e.target.reset();
    };

    const addTodo = text => {
        //append newtodo to list of todos
        const newTodos = [...todos, { text:text, isCompleted:false }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    const removeTodo = (index, count=counter.count) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setCounter(counter => ({ ...counter, count:count+1 }));
        console.log(counter.count);
    }

    const completeGame = () => {
        let index = '';
        todos.forEach((todo, i) => {
            if (todo.text === 'Win Rock, Paper, Scissors') {
                index = i;
            }
        });
        try {
        completeTodo(index);
        setTimeout(() => {
            removeTodo(index);
        }, 2000);
    } catch (error) {
        console.log(error);
    }
    }

    return (
        <div>
            <div className="todo-list">
                <h1>{ counter.value }</h1>
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
            <button onClick={() => setShowGame(!showGame)}>{showGame ? 'Hide ' : 'Show '} Game</button>
            {showGame &&
            <Rock
                complete={completeGame}
            />
            }
        </div>
    )
}

export default TodoList