import React from 'react';
import {useSpring, animated} from 'react-spring';


function HunterCard({ hunter }) {
    const props = useSpring({
    })
    return (
        <div>
            <h1>{ hunter.name }</h1>
            <h2>Ability: { hunter.ability }</h2>
            <h2>Type: { hunter.type }</h2>
            <h2>Health: { hunter.health }</h2>
            <h2>Nen: { hunter.nen }</h2>
        </div>
    )
}

export default HunterCard
