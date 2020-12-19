import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useSpring, animated} from 'react-spring';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const sitelinks = [
        {
            name:"Home",
            link:"/",
            selected:true
        },
        {
            name:"Stack",
            link:"/stack",
            selected:false
        },
        {
            name:"HunterPedia",
            link:"/hunter",
            selected:false
        },
        {
            name:"Rock-Paper-Scissors",
            link:"/rock",
            selected:false
        }];

    const [links, setLinks] = useState(sitelinks);

      const fade = useSpring({
        opacity: showMenu ? 1 : 0
    });

    const setNav = (selected) => {
        sitelinks.forEach((item, index) =>  {
            if(index === selected){
                item.selected=true;
            }
            else{
                item.selected=false;
            }
        });
        setLinks(sitelinks);
        setShowMenu(false);
    }

    return (
        <div
        className='menu'>
            <FontAwesomeIcon icon={faBars} onClick={() => {setShowMenu(!showMenu)}}/>
            <animated.div
            style={fade}>
                {showMenu &&
                    links.map((item, index) => ((!item.selected) &&
                            <Link className='menulinks' key={index} index={index} to={item.link} onClick={() => {setNav(index)}}>{item.name}{'\n'}</Link>
                    ))}
            </animated.div>
               
        </div>
    )
}

export default Navigation
