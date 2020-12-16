import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useSpring, animated} from 'react-spring';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const links = [
        {
            name:"Home\n",
            link:"/",
            selected:true
        },
        {
            name:"Stack\n",
            link:"/stack",
            selected:false
        },
        {
            name:"HunterPedia\n",
            link:"/hunter",
            selected:false
        },
        {
            name:"Rock-Paper-Scissors\n",
            link:"/rock",
            selected:false
        }];

      const fade = useSpring({
        opacity: showMenu ? 1 : 0});


    return (
        <div 
        className='menu'>
            <FontAwesomeIcon icon={faBars} onClick={() => {setShowMenu(!showMenu)}}/>
            <animated.div
            style={fade}>
                    {links.map((item, index) => (
                            <Link to={item.link}>{item.name}</Link> 
                    ))}
            </animated.div>
               
        </div>
    )
}

export default Navigation
