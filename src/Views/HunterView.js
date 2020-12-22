import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import HunterCard from '../Components/HunterCard';

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
            <HunterCard
                hunter={ location.state.hunter }>
            </HunterCard>
            <button type="button" onClick={goback}>
                Back
            </button>
        </div>
    )
}

export default HunterView
