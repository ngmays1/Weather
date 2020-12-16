import React, {useState, useEffect, useMemo} from 'react';
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

    const moveLevel = () => {
        move();
        return stack.level;
    };
    

    useEffect(() => {
        //getDirection()
        setTimeout(() =>{
        /*if (stack.position >= 4 && stack.direction===true){
            setStack(stack => ({...stack, direction:false }));
            console.log('direction switched to' + stack.direction);
        }
        else if(stack.position <= 0 && stack.direction===false){
            setStack(stack => ({...stack, direction:true }));
            console.log('direction switched to' + stack.direction);
        }
        else{
            console.log('no direction changed');
        }*/
    //}, 2000);
        //move();
        
    //    setTimeout(() => {
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
        }, 2000);
        //console.log(stack);
        console.log(stack.level);
        //getDirection();
        //await new Promise(r => setTimeout(r, 1000));
        //await new Promise(r => setTimeout(r, 1000))
    }, [stack.level, stack.direction, stack.position]);

    useEffect(() => {
        if (stack.position >= 4 && stack.direction===true){
            setStack(stack => ({...stack, direction:false }));
            console.log('direction switched to' + stack.direction);
        }
        else if(stack.position <= 0 && stack.direction===false){
            setStack(stack => ({...stack, direction:true }));
            console.log('direction switched to' + stack.direction);
        }
        else{
            console.log('no direction changed');
        }
    }, [stack.position, stack.direction]);

    const getDirection = () =>{
        //if ((stack.position === 0 && direction) || ((stack.position === stack.level.length - stack.lives) && !stack.direction)){
        if (stack.position >= 4 && stack.direction===true){
            setStack(stack => ({...stack, direction:false }));
            console.log('direction switched to' + stack.direction);
        }
        else if(stack.position <= 0 && stack.direction===false){
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