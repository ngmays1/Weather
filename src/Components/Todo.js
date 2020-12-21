import React from 'react';
import { useSpring, animated } from 'react-spring';

function Todo({ todo, index, completeTodo, removeTodo }){
    const flyin = useSpring({
        opacity: 1, from: { opacity: 0 },
        });
    return (
        <animated.div 
            className="todo"
            style={flyin}
        >
            { todo.text }    
            <div>
                <button  onClick={() => completeTodo(index)}>Complete</button>
                <button  onClick={() => removeTodo(index)}>x</button>
            </div>
        </animated.div> 
    )
}

export default Todo