import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { faFistRaised, faHandPaper, faHandPeace, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rock({ complete }) {

    const [message, setMessage] = useState('Pick a selection to play?');
    const [health, setHealth] = useState(100);
    const [enHealth, setEnHealth] = useState(100);
    const [running, setRunning] = useState({
        playing:true,
        won:false
    });
    const [color, setColor] = useState('green');

    //const messages = []
    const colors = ['green', 'orange', 'red'];
    
    const HealthBar = styled(animated.div)`
    width:${props => props.health}px;
    height:100%;
    background:${props => props.color};
    border-radius:25px;
    position: absolute;
    top:0;
    left:0;
    `;

    const props = useSpring({
        from: {width: health},
        to: { width: health},
        config: {duration: 2000}
    })

    useEffect(() => {

        if (health < 1 ) {
            setRunning({...running, playing:false});
            setMessage('You\'ve lost, play again?');
        } else if(enHealth < 1) {
            setRunning({ playing:false, won:true });
            setMessage('You\'ve won play again?');
        }

        if (health >75){
            setColor(colors[0]);
        } else if (health > 45){
            setColor(colors[1]);
        } else {
            setColor(colors[2]);
        }

    }, [health, enHealth, running]);

    const fadein = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
      });

    const fall = useSpring({
        opacity: 1,
        delay: 500,
        transform: 'translateY(0)',
        from: {
            transform: 'translateY(100px)',
            opacity: 0
        },
    });

    const flash = useSpring({
        from: { opacity: 0},
        to: []
    })

    const reset = () => {
        setHealth(100);
        setEnHealth(100);
        setMessage('Make a selection to play!');
        setRunning({playing:true, won:false});
    }

    const play = (choice) => {
        const num = Math.floor(Math.random() * Math.floor(3));
        if (choice === 0 && num === 0){
            setMessage('Both Rock, it\'s a tie');
        } else if (choice === 0 && num === 1){
            setMessage('Rock loses to paper, you lose');
            setHealth(prevHealth => prevHealth - 20);
        } else if (choice === 0 && num === 2){
            setMessage('Rock beats scissors, you win');
            setEnHealth(prevHealth => prevHealth - 20);
        } else if (choice === 1 && num === 0){
            setMessage('Paper beats Rock, you win');
            setEnHealth(prevHealth => prevHealth - 20);
        } else if (choice === 1 && num === 1){
            setMessage('Both Paper, it\'s a tie');
        } else if (choice === 1 && num === 2){
            setMessage('Paper loses to scissors, you lose');
            setHealth(prevHealth => prevHealth - 20);
        } else if (choice === 2 && num === 0){
            setMessage('Scissors loses to rock, you lose');
            setHealth(prevHealth => prevHealth - 20);
        } else if (choice === 2 && num === 1){
            setMessage('Scissors beats paper, you win');
            setEnHealth(prevHealth => prevHealth - 20);
        } else if (choice === 2 && num === 2){
            setMessage('Both scissors, it\s, a tie');
        } else {
            setMessage('pick a valid selection');
        }
    }


    return (
        <animated.div style={fadein}>
            <div >
            <h1 className='rock'>{message}</h1>
                <div className='row'>
                    <h3 className='user'>Health: {health} </h3>
                    <h3 className='enemy'>Enemy Health: {enHealth} </h3>
                </div>
            </div>
            <div className='row'>
            {running.playing ?
            <animated.div style={fall}>
                    <FontAwesomeIcon className='choice' onClick={() => play(0)} icon={faFistRaised} size='9x'/>
                    <FontAwesomeIcon className='choice' onClick={() => play(1)} icon={faHandPaper} size='9x'/>
                    <FontAwesomeIcon className='choice' onClick={() => play(2)} icon={faHandPeace} size='9x'/>
            </animated.div> :<div>
            <FontAwesomeIcon icon={faRedoAlt} onClick={reset} size='9x'/>
            {running.won &&
            <button onClick={complete}>Complete Todo</button>  
            }
            </div>
            }
            </div>
        </animated.div>
    )
        }

export default Rock
