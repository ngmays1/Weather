import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import WeatherCard from './WeatherCard';
import { Navbar, Dropdown, DropdownButton, Button, Container, Form, InputGroup, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useSpring, config, animated } from 'react-spring';


function Weather() {
    const { register, handleSubmit, errors } = useForm();
    const [nodes, setNodes] = useState([]);
    const [tempType, setTempType] = useState('K');

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

    const getWeather = (lat, lon, city) => {
        let match = false;
        nodes.forEach(node => { if (node.city === city) { match=true}});
        if (match === true) { return };
        const exclude_parts = 'minutely,alerts';
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude_parts}&appid=b0298b7bf6f1829b60d400d5964f1577`;
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data);
            const newNodes = [...nodes, { data:data, city:city, visible:false }];
            setNodes(newNodes);
            console.log(nodes)
            return (nodes);
        })
    } 

    const getWeather2 = (days) => {
        let match = false;
        //for (var i = 0; i < nodes.length; i++){ if(nodes[i].city === days[i])}
        nodes.forEach(node => { if (node.days.city_name === days.city_name) { match=true}});
        if (match === true) { return };
        console.log('gotw2');
        const newNodes = [...nodes, { days }]
        console.log(days);
        //console.log(days.lon);
        //console.log(days.city_name);
        console.log(newNodes);
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
        //const zip = data.zip;
        const country = 'US';
        console.log(data);
        //let proxy = 'https://cors-anywhere.herokuapp.com/';
        //let zipURL = `https://thezipcodes.com/api/v1/search?zipCode=${data.zip}&countryCode=US&apiKey=66c226ba3fe4c8478980cc65133d3c22`;
        //fetch(proxy + zipURL)
        const key = '1f153d85308b440292f952df7be43f1e'
        let zipUrl = `https://api.weatherbit.io/v2.0/current?postal_code=${data.zip}&key=${key}`;
        let forecast = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${data.zip}&key=${key}`;
        console.log(forecast);
        fetch(forecast)
        .then(response => response.json())
        .then(data => {
            const params = data.location;
            console.log(data.data);
            console.log(data);
            //console.log(params);
            console.log('sending lon/lat to getweather');
            return getWeather2(data);
            //return getWeather(params.latitude, params.longitude, params.city);
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
                <ToggleButtonGroup  className='ml-3 corner-caret' name='tempgroup' type="radio">
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


        <Col>                    {errors.zip && <p>{errors.zip.message}</p>}
</Col>

        <Form className='justify-content-md-center'>
                <Row>
                </Row>
            </Form>
            {//nodes.length >=1 &&
                nodes.map((node, index) => (
                    <div key={index}>
                    <WeatherCard
                        weather={node}
                        removeNode={removeNode}
                        i={index}
                        getTemp={getTemp}
                        tempType={tempType}
                        />
                        </div>
                )) }
    </Container>
    )}

export default Weather