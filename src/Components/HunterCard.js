import React, {useEffect} from 'react';
//import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';


function HunterCard({ hunter }) {

    const colors = ['green', 'orange', 'red'];
    let nenColor = colors[0];
    let nen = hunter.nen;

    let NenBar = styled.div`
        width:${hunter.nen};
        height:35;
        background:${nenColor};
        border-radius:25px;
        top:0;
        left:0;
    `;

    useEffect(() => {
        if (nen >150){
            NenBar.background = colors[0];
        } else if (nen > 75){
            NenBar.background = colors[1];
        } else {
            NenBar.background = colors[2];
        }
        console.log(nen);
    }, [nen]);

    const drain = (num) => {
        nen -= num ;
        console.log(nen);
    }


    return (
        <div>
            <h1>{ hunter.name }</h1>
            <h2>Ability: { hunter.ability }</h2>
            <h2>Type: { hunter.type }</h2>
            <h2>Health: { hunter.health }</h2>
            <div
                className='slider_background'>
                <NenBar>
                    <h3 className='center_white'>{ nen }</h3>
                </NenBar>
            </div>
            <input
                type='number'
                value={nen}
                onChange={e => nen =e.target.value}
            />
            <button onClick={drain}>Drain</button>
        </div>
    )
}

export default HunterCard
