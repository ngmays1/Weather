import React, { useState }from 'react';
import {Link} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Pedia() {
    const [hunters, setHunters] = useState([
        {
            name:"Gon",
            ability:"Rock",
            type:"Enhancer",
            health:100,
            nen:200
        },
        {
            name:"Kurapika",
            ability:"Chains",
            type:"Conjurer",
            health:100,
            nen:300
        }
    ]);

    const flyin = useSpring({
        from: {opacity: 0, marginLeft: -100, marginRight: 100},
        to: { opacity: 1, marginLeft: 0, marginRight: 0 } 
    });

    
/*
    const drainAura = (index, amount=10) => {
        const newHunters = hunters;
        let nen = newHunters[index].nen - amount;
        console.log(nen);
        newHunters[index].nen = nen;
        console.log(newHunters);
        setHunters(newHunters);
    }

    const getName = (index) => {
        console.log(hunters[index].name);
    }
    const addHunter = hunter =>{
        let newHunters = [...hunters];
        newHunters = [...hunters, hunter];
        setHunters(newHunters);
    }

   */ 

   const sendHunter = hunter => {
       console.log(hunter);
   }
    return (
        <div>
            <div>
                <h1>HunterPedia:</h1>
                {hunters.map((hunter, index) => (  
                    <animated.div
                    key={index}
                    style={flyin}>
                    <Link to={{
                        pathname:`/hunter/${index, hunter.name}`,
                        state:{ hunter }}}
                    >
                        <h2> { hunter.name } </h2>
                    </Link>
                    <input type='checkbox' name='hunter' value={sendHunter(hunter)}></input>

                    </animated.div>
                ))}
                <button type='submit'></button>
            </div>
        </div>
    )
}


export default Pedia
