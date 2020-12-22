import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { useMeasure } from 'react-use';


const NenBar = styled(animated.div)`
    width:${props => props.nenwidth}px;
    height:100%;
    background:${props => props.nencolor};
    border-radius:25px;
    position: absolute;
    top:0;
    left:0;
    `

function HunterCard({ hunter }) {
    const colors = ['green', 'orange', 'red'];

    const [nenWidth, setNenWidth] = useState(hunter.nen);
    const [nenColor, setNenColor] = useState(colors[0]);

    const [health, setHealth] = useState(hunter.health);
    const [showDrain, setShowDrain] = useState(true);
    let prevWidth = nenWidth;

    useEffect(() => {
        if (hunter.nen >150){
            setNenColor(colors[0]);
        } else if (hunter.nen > 75){
            setNenColor(colors[1]);
        } else {
            setNenColor(colors[2]);
        }

        //if (hunter.nen===0) setShowDrain(false);
        console.log(nenColor);
        setHealth(300);
    }, [NenBar, hunter.nen, colors]);

    //const [props, set, stop] = useSpring(() => ({width: nenWidth}));

    const props = useSpring({
        from: {width: 0},
        to: { width: hunter.health},
        config: {duration: 2000}
    });

    const props2 = useSpring({
        from: {width: nenWidth},
        to: { width: nenWidth},
        config: {duration: 2000}
    })

     const drain = () => {
        hunter.nen-=50;
        const newWidth = hunter.nen;
        //set({width: nenWidth});
        setNenWidth(newWidth);
        console.log(nenWidth);
        prevWidth = hunter.nen;
     }
/*
     const props = useSpring({
        from: {width: nenWidth},
        to: {width: nenWidth-50},
        config: {duration: 1000}
    });


     const empty = () => {
            while (draining) {
                if(hunter.nen >=5){
                    hunter.nen-=1;
                    const newWidth = hunter.nen;
                    setNenWidth(newWidth);
                    setTimeout(() => { console.log(nenWidth); }, 300);                    
              } else {
                console.log('done draining');
                setDraining(false); 
                break;
            }
        }
     };
 */   

    return (
        <div
        className='card'>
            <h1>{ hunter.name }</h1>
            <h2>Ability: { hunter.ability }</h2>
            <h2>Type: { hunter.type }</h2>
            <h2>Health: { hunter.health }</h2>
            {/*
            <div
                className='slider_background'>
                <NenBar
                style={props}
                nenwidth={health}
                nencolor={colors[0]}
                >
                    <animated.h3 className='center_white'>{ props.width.interpolate(nen => Math.floor(nen * 300 / nenWidth))}</animated.h3>
                </NenBar>
                
            </div>
            */}
            <div
                className='slider_background'>
                <NenBar
                style={props2}
                nenwidth={nenWidth}
                nencolor={nenColor}
                >
                    <animated.h3 className='center_white'>{ nenWidth /*props.width.interpolate(nen => Math.floor(nen * 300 / nenWidth))*/}</animated.h3>
                </NenBar>
                
            </div>
            
                { nenWidth >= 1 &&
                    <button onClick={drain}>Drain</button>
                }
                
        </div>
    )
}

export default HunterCard
