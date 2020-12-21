import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import HunterCard2 from '../Components/HunterCard2';

function HunterView() {

    const { index, naame } = useParams();
    console.log(index);
    let location = useLocation();
    console.log(location.state.hunter);

    let history = useHistory();
    
    function goback(){
        console.log(location.state);
        history.push("/hunter");
    }

    return (
        <div>
            <HunterCard2
                hunter={ location.state.hunter }>
            </HunterCard2>
            <button type="button" onClick={goback}>
                Back
            </button>
        </div>
    )
}

export default HunterView
