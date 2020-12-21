import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { useForm } from "react-hook-form";
import { useSpring, useTransition, animated } from 'react-spring';

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

    const [counter, setCounter] = useState(
        {
            count:0,
            value:"Keep on working"
        }
    );

    const flyin = useSpring({
        from: {opacity: 0, marginLeft: -100, marginRight: 100},
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    useEffect(() => {
        if (counter.count > 3) {
            setCounter(counter => ({ ...counter, value:"You've had a busy day!" }));
        }
        console.log(counter.value);
    }, [counter.count, counter.value])

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data, e) => {
        //console.log(data.todo);
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
        newTodos[index].isCompleted = (!newTodos[index].isCompleted);
        setTodos(newTodos);
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setCounter(counter => ({ ...counter, count:counter.count+1 }));
        //console.log(counter.count);
    }

    const removeTodos = () => {
        let selects = [];
        let addCount = 0;
        const check = document.getElementById('tododiv');
        const checks = check.getElementsByTagName('input');
        for (var i=0; i<checks.length; i++){
            if (checks[i].checked){
                selects.push(checks[i].value);
                checks[i].checked=false;
            }
        }
        addCount = selects.length;
        const newTodos = [...todos];
        console.log(newTodos);
        for (var i=selects.length; i>0; i--){
                console.log(selects);
                console.log('removed' +selects[i-1]);
                newTodos.splice(selects[i-1], 1);
                selects.pop();
                console.log(newTodos);
        }
        setTodos(newTodos);
        setCounter(counter => ({...counter, count:counter.count+addCount}));
    }

    return (
        <div>
            <div 
            className="todo-list"                    
            id='tododiv'>
                <h1>{ counter.value }</h1>
                {todos.map((todo, index) => (
                    <div 
                    key={index}
                    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                    >
                        <Todo 
                        index={index} 
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}></Todo>
                        <input className='chks' type='checkbox' value={index}/>
                    </div>
                ))}
                <input type='submit' value='Remove Selected' onClick={removeTodos}/>

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