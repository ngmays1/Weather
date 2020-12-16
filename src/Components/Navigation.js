import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useSpring, animated} from 'react-spring';


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      });
      
    const fadeIn = useSpring({
        //config: { ...config.stiff },
        from: { opacity: 0 },
        to: {
          opacity: showMenu ? 1 : 0
        }
      });

      const fadeOut = useSpring({
        //config: { ...config.stiff },
        from: { opacity: 1 },
        to: {opacity:  0 }
      });

    return (
        <div 
        className='menu'>
            <FontAwesomeIcon icon={faBars} onClick={() => {setShowMenu(!showMenu)}}/>
            <animated.div
            style={showMenu ? fadeIn : fadeOut}>
                {showMenu &&
                <ul>
                    <animated.li style={props}>
                        <Link to="/">Home</Link>
                    </animated.li>
                    <li>
                        <Link to="/stack">Stack</Link>
                    </li>
                    <li>
                        <Link to="/hunter">HunterPedia</Link>
                    </li>
                    <li>
                        <Link to="/rock">Rock-Paper-Scissors</Link>
                    </li>
                </ul>
            }
            </animated.div>
               
        </div>
    )
}

export default Navigation
