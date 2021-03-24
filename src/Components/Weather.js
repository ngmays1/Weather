import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import WeatherCard from './WeatherCard';
import { Navbar, Dropdown, DropdownButton, Button, Container, Form, InputGroup, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useSpring, config, animated } from 'react-spring';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Weather() {
    const { register, handleSubmit, errors } = useForm();
    const [nodes, setNodes] = useState([]);
    const [tempType, setTempType] = useState('K');

    useEffect(() => {
        console.log(nodes)
    }, [nodes])

    const removeNode = (index) => {
        const newNodes = [...nodes];
        newNodes.splice(index, 1);
        setNodes(newNodes);
        console.log(newNodes);
    }

    const flyIn = useSpring({
        from: {opacity: 0, marginLeft: -100, marginRight: 100},
        to: { opacity: 1, marginLeft: 0, marginRight: 0 },
        config: config.slow
    });

    const getWeather2 = (days) => {
        let match = false;
        //for (var i = 0; i < nodes.length; i++){ if(nodes[i].city === days[i])}
        nodes.forEach(node => { if (node.days.city_name === days.city_name) { match=true}});
        if (match === true) { return };
        const newNodes = [...nodes, { days }]
        setNodes(newNodes);
        return (nodes);
    }

    const getTemp = (temp) => {
        if(tempType === 'K') {
            return (temp + 273).toFixed(2);
        } else if (tempType === 'F'){
            return ((9/5) * temp +32).toFixed(0);
        } else {
            return temp.toFixed(2);
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        const key = '1f153d85308b440292f952df7be43f1e'
        let zipUrl = `https://api.weatherbit.io/v2.0/current?postal_code=${data.zip}&key=${key}`;
        let forecast = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${data.zip}&key=${key}`;
        console.log(forecast);
        fetch(forecast)
        .then(response => response.json())
        .then(data => {
            console.log('sending lon/lat to getweather');
            return getWeather2(data);
        })
        .catch(e => {
            console.log(e);
            return e;
        });
    };
    
    return (
    <Container>
        <animated.div style={flyIn}>
            <Navbar className='justify-content-center'>
                <ToggleButtonGroup  className='' name='tempgroup' type="radio">
                            <ToggleButton className='m-1' variant='secondary' name='K' value='K' onChange={() => setTempType('K')}>K°</ToggleButton>
                            <ToggleButton className='m-1' variant='secondary' name='F' value='F' onChange={() => setTempType('F')}>F°</ToggleButton>
                            <ToggleButton className='m-1' variant='secondary' name='C' value='C ' onChange={() => setTempType('C')}>C°</ToggleButton>
                </ToggleButtonGroup>
                <InputGroup onSubmit={handleSubmit(onSubmit)} as='form' className='m-2 w-25 justify-content-center'>
                    <Form.Control 
                        className=' rounded mb-0 block-example border border-light'
                        variant='secondary'
                        type="text"
                        name="zip"
                        placeholder="Zip"
                        ref={register({ maxLength: { value: 5, message: "error message1" }, minLength: {value: 4, message:'error 2'}})}
                        />
                    <InputGroup.Append>
                        <Button variant='secondary' size='sm' type="submit">Submit</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Navbar>
        </animated.div>

        <Col>       
            {errors.zip && <p>{errors.zip.message}</p>}
        </Col>

            {
                nodes.map((node, index) => (
                    <Container key={index}>

                    <WeatherCard
                        weather={node}
                        removeNode={removeNode}
                        i={index}
                        getTemp={getTemp}
                        tempType={tempType}
                        />
                        </Container>
                )) }
    </Container>
    )}

export default Weather