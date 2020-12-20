import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';


const NenBar = styled(animated.div)`
    width:${props => props.nenWidth}px;
    height:100%;
    background:${props => props.nenColor};
    border-radius:25px;
    position: absolute;
    top:0;
    left:0;
    `

function HunterCard({ hunter }) {
    const colors = ['green', 'orange', 'red'];

    const [nenWidth, setNenWidth] = useState(hunter.nen);
    const [nenColor, setNenColor] = useState(colors[0]);
    const [draining, setDraining] = useState(true);

    useEffect(() => {
        if (hunter.nen >150){
            setNenColor(colors[0]);
        } else if (hunter.nen > 75){
            setNenColor(colors[1]);
        } else {
            setNenColor(colors[2]);
        }
        console.log(nenColor);
    }, [NenBar, hunter.nen, colors]);

     const drain = () => {
        hunter.nen-=50;
        const newWidth = hunter.nen;
        setNenWidth(newWidth);
        console.log(nenWidth);
     }

     const props = useSpring({
         from: {width: nenWidth},
         to: {width: 0}
     });

     const empty = () => {
            while (draining) {
                if(hunter.nen >=5){
                    hunter.nen-=1;
                    const newWidth = hunter.nen;
                    setNenWidth(newWidth);
                    setTimeout(() => { console.log(nenWidth); }, 300);                    
              } else {
                console.log('done draining')
                setDraining(false); 
                break;
            }
        }
     };

    return (
        <div>
            <h1>{ hunter.name }</h1>
            <h2>Ability: { hunter.ability }</h2>
            <h2>Type: { hunter.type }</h2>
            <h2>Health: { hunter.health }</h2>
            <div
                className='slider_background'>
                <NenBar
                nenWidth={nenWidth}
                nenColor={nenColor}
                //style={{width: props.width}}
                >
                    <animated.h3 className='center_white'>{ hunter.nen /*props.width.interpolate(nen => Math.floor(nen * 100 / nenWidth))*/}</animated.h3>
                </NenBar>
                
            </div>
            <input
                type='number'
                //value={hunter.nen}
                onChange={e => hunter.nen =e.target.value}
            />
                <button onClick={drain}>Drain</button>
                <button onClick={empty}>empty</button>
        </div>
    )
}

export default HunterCard
