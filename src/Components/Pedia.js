import React, { useState }from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useForm } from 'react-hook-form';

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

   const {register, handleSubmit, errors } = useForm();

   const onSubmit = (data, e) => {
       if (data.hunter.length === 0) return;
       const hunters = data.hunter;
       console.log(hunters);
       e.target.reset();
       //possibly cannot call redirect outside of render
       return <Redirect to={{
           pathname:'/battle',
           state: { hunters }}} />    
   }

   const sendHunter = hunter => {
       console.log(hunter);
   }

   const toStack = () => {
       console.log('prereturn'); 
       return <Link to={{ pathname:'/rock'}}/>

   }
    return (
        <div>
            <div>
                <h1>HunterPedia:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input 
                        className='chks' 
                        type='checkbox' 
                        name='hunter' 
                        value={JSON.stringify(hunter)}
                        ref={register}
                        />
                    </animated.div>
                ))}
                <input type='submit' name='battle' type='submit'/>
                </form>
            </div>
            <button type='button' onClick={toStack} >Rockkkkkk</button>
        </div>
    )
}


export default Pedia
