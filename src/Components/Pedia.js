import React, { useState }from 'react';
import {Link} from 'react-router-dom';

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
    return (
        <div>
            <div>
                <h1>HunterPedia:</h1>
                {hunters.map((hunter, index) => (
                    
                    <div
                    key={index}>
                    <Link to={{
                        pathname:`/hunter/${index, hunter.name}`,
                        state:{ hunter }}}
                    >
                        <h2> { hunter.name } </h2>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Pedia
