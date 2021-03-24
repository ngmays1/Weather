import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faWind }  from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';



function WeatherCard({weather, removeNode, i, getTemp, tempType}) {

    const [forecast, setForecast] = useState('daily');
    const options = ['daily', '3day', 'weekly'];

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

    const ForecastToggle = () => {
        return (
            <ToggleButtonGroup  className='ml-3 corner-caret' name='forecastGroup' type="radio">
                            <ToggleButton className='m-1' variant='secondary' name='forecast' value='0' onChange={(e) => setForecast(options[e.target.value])}>Daily</ToggleButton>
                            <ToggleButton className='m-1' variant='secondary' name='forecast' value='1' onChange={(e) => setForecast(options[e.target.value])}>3-day</ToggleButton>
                            <ToggleButton className='m-1' variant='secondary' name='forecast' value='2' onChange={(e) => setForecast(options[e.target.value])}>Weekly</ToggleButton>
                            <ToggleButton className='m-1' variant='secondary'  onClick={() => removeNode(i)}>Remove</ToggleButton>
            </ToggleButtonGroup>
        )
    }//

    return (
        <animated.div style={fadein} className='position-relative mt-3 mb-5'>
{//            <button className='position-absolute right-0' onClick={getdata}> get weather object</button>
}            <ForecastToggle/>
            <Row className='mt-2'>
                {forecast === 'daily' ?
                    <Col style={fadein} className="justify-content-md-center rounded mb-0 block-example border border-light">
                        <h4>{weather.days.city_name} Today</h4>
                        <h5>{weather.days.data[0].weather.description}</h5>
                        <h6>Current Temperature: {getTemp(weather.days.data[0].temp)} {' ' + tempType}°</h6>
                        <h6>High: {getTemp(weather.days.data[0].high_temp) + '\nLow: '+ getTemp(weather.days.data[0].low_temp)}</h6>
                    </Col> 
                    : forecast === '3day' ?
                    <Col style={fadein} className="justify-content-md-center rounded mb-0 block-example border border-light">
                            <h4>{weather.days.city_name} 3-day</h4>
                        <Row>
                        {weather.days.data.map((day, index) => (
                            index <=2 &&
                            <Col key={index} className='m-2 justify-content-md-center rounded mb-0 block-example border border-light'>
                        <h5>{day.weather.description}</h5>
                        <h6>Current Temperature: {getTemp(day.temp)} {' ' + tempType}°</h6>
                        <h6>High: {getTemp(day.high_temp) + '\nLow: '+ getTemp(day.low_temp)}</h6>
                            </Col>
                        ))}
                        </Row>
                    </Col> 
                    : forecast === 'weekly' ?
                    <Col style={fadein} className="justify-content-md-center rounded mb-0 block-example border border-light">
                    <Row className='mt-2 justify-content-center'>
                        <h4>{weather.days.city_name} Weekly</h4>
                    </Row>
                    <Row>
                    {weather.days.data.map((day, index) => (
                        index <=6 &&
                        <Col key={index} className='m-1 justify-content-md-center rounded mb-0 block-example border border-light'>
                        <h6>{day.weather.description}</h6>
                        <p>Current Temperature: {getTemp(day.temp)} {' ' + tempType}°</p>
                        <p>High: {getTemp(day.high_temp) + '\nLow: '+ getTemp(day.low_temp)}</p>
                        </Col>
                            ))}
                    </Row>
                     </Col> 
                    : <Col>
                        <h5>other</h5>
                    </Col>
                }
                </Row>
            </animated.div>
    )
}

export default WeatherCard