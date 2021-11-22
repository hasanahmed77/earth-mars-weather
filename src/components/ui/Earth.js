import React, { useEffect, useState } from 'react'

import {
    FormControl,
    Flex,
    Text,
    Input,
    Box,
    Image,
    Button
  } from "@chakra-ui/react";

import Night from '../../img/night.svg'
import Day from '../../img/day.svg'
import { SearchOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';
import Weather from './Weather';


// global variables
const {REACT_APP_API_KEY} = process.env;

const api = {
    key: REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/" 
}

// the component

const Earth = () => {
        // useStates
        const [query, setQuery] = useState('');
        const [bgIcon, setBgIcon] = useState('');
    
        // custom hooks
        const { weather, loading, fetchItems } = useFetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    
        // functions
        const search = evt => {
            if(evt.key === "Enter") {
                fetchItems();
            }
        }
    
        // useEffects
        // useEffect(() => {
        //     setIcon((((weather.data?.weather[0].icon.includes('d'))) ? 'white' : '#EFCF6E'))
        // }, [Weather])
    
        // main
    return (
        <Flex 
            mt={["6rem", "7rem", "8rem","11rem", "8rem"]}
            maxW={['75%', "85%", '90%', "100%", "100%"]}
            maxH="100%" 
            flexDir="column" 
            justifyContent="space-between"
            alignSelf="center"
        >
            {/* form */}
            <FormControl id="text" mb="2rem">
                <Text 
                    mb="1rem" 
                    textAlign="center"
                    fontSize={['l', 'xl', "xl", "xl", "xl"]}
                    fontWeight="regular"
                    colorScheme="red"
                >
                    Enter a location for weather information
                </Text>
                <Flex>
                {/* search */}
                <Input 
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                <Button ml="0.5rem"  onClick={fetchItems} border="black"><SearchOutlined rotate="90"/></Button>
                </Flex>
            </FormControl>
            {/* Hero section */}
            {
                loading &&
                <Weather 
                    data={weather.data}
                    bgImage={weather.data?.weather[0].icon.includes('d') ? Day : Night}
                    icon={`http://openweathermap.org/img/wn/${weather.data?.weather[0].icon}@2x.png`}
                    setBgIcon={setBgIcon}
                    bgIcon={bgIcon}
                    name={weather.data?.name}
                    weatherLike={weather.data?.weather[0].main}
                    temp={Math.round(weather.data?.main.temp)}
                 />
            }
        </Flex>
    )
}

export default Earth;
