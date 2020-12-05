import React, {useState, useEffect} from 'react';
import Block from './Block'
function Stack() {

    const [stack, setStack] = useState(
        {
            position:0,
            lives:1,
            level:[true, false, false, false, false],
            direction:true

        }
    );

    useEffect(() => {
        getDirection();
        move();
    }, [stack.level]);

    const getDirection = (direction=stack.direction) =>{
        //if ((stack.position === 0 && direction) || ((stack.position === stack.level.length - stack.lives) && !stack.direction)){
        if (stack.position === 4 && direction===true){
            setStack(stack => ({...stack, direction:false }));
            console.log('direction switched to' + stack.direction);
        }
        else if(stack.position === 0 && direction===false){
            setStack(stack => ({...stack, direction:true }));
            console.log('direction switched to' + stack.direction);
        }
        else{
            console.log('no direction changed');
        }
        return stack.direction;
    }

    const move = () => {
        const newLevel = stack.level;
        if(stack.direction===true)
        {
            newLevel[stack.position]=false;
            newLevel[stack.position +1]=true;
            setStack(stack => ({...stack, position:stack.position+1, level:newLevel}));
        }
        else
        {
            newLevel[stack.position]=false;
            newLevel[stack.position - 1]=true;
            setStack(stack => ({...stack, position:stack.position-1, level:newLevel}));

        }
        console.log(stack);
        console.log(stack.level);
        getDirection();
    }

    return (
        <div>
            <div
                className="block-border"    
            >
                {stack.level.map((block, index) => (
                    <Block
                        key={index}
                        block={block}
                    >
                    </Block>
                ))}
            </div>
            <div>
                <button
                onClick={move}
                >
                    Move
                </button>
            </div>
        </div>

    )
}

export default Stack