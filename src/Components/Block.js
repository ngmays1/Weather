import React from 'react'

function Block(block, index) {
    console.log(block);
    let place = "";
    if(block.block === true){
        place = "O";
    }
    else{
        place = "X"
    }
    return (
        <h1
            className="block"
        >
            {place}
        </h1>
    )
}

export default Block
