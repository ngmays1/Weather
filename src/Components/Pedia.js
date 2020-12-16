import React, { useState }from 'react';
import Hunter from './Hunter';

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

    const addHunter = hunter =>{
        let newHunters = [...hunters];
        newHunters = [...hunters, hunter];
        setHunters(newHunters);
    }
    return (
        <div>
            <div>
                <h1>HunterPedia:</h1>
                {hunters.map((hunter, index) => (
                    
                    <Hunter
                        key={index}
                        index={index}
                        hunter={hunter}
                    >
                    </Hunter>
                

                ))}

            </div>
        </div>
    )
}


export default Pedia
