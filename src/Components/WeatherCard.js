import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes }  from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';



function WeatherCard({weather, removeNode, i, getTemp, tempType}) {
    useEffect(() => {
        console.log(tempType);
    }, [tempType]);

    const getdata = () => {
        console.log(weather);
    }

    const fadein = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        ,config: {duration: 2000}
      });


    return (
        <animated.div style={fadein}>
            <Container style={fadein} className='m-4'>
                <Row
                className="rounded mb-0 block-example border border-light">
                    <Col
                    className="rounded mb-0 block-example border border-light">
                    <h4>{weather.city} Today</h4>
                    <h6>Current Temp: {getTemp(weather.data.current.temp)} {' ' + tempType}°</h6>
                    </Col>
                    <Col
                    className="rounded mb-0 block-example border border-light">
                        <h4>3-day</h4>
                        <FontAwesomeIcon className='deletebutton' icon={faTimes} onClick={() => removeNode(i)}/>
                        <Row className="justify-content-md-center">
                        {weather.data.daily.map((temp, index) => (
                            <h6 className='m-1'
                            key={index}>
                                {index <=2 &&
                                getTemp(temp.temp.day)
                                +' '+tempType+'°'}
                            </h6>
                        ))}
                        </Row>
                    </Col>
                </Row>
                <Col className="justify-content-md-center rounded mb-0 block-example border border-light">
                    <Row className='mt-2 justify-content-center'>
                        <h4>Weekly</h4>
                    </Row>
                    <Row
                    className='justify-content-center'>
                    {weather.data.daily.map((temp, index) => (
                        <h6 className='m-2' key={index}>
                            {index <=6 &&
                            getTemp(temp.temp.day)
                            +' '+tempType+'°'}
                        </h6>
                    ))}
                    </Row>
                </Col>
            </Container>
            </animated.div>
    )
}

export default WeatherCard