import React from 'react'
import {Link} from 'react-router-dom';


function Hunter({ hunter, index }) {
        


    return (
        <div>
            <Link to={{
                pathname:`/hunter/${index}`,
                state:{ hunter }}}
            >
                <h2> { hunter.name } </h2>
            </Link>
        </div>
    )
}
//ten
//zetsu
//ren
//hatsu
export default Hunter
