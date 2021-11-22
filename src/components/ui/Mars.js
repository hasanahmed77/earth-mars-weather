import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch';

import {
    FormControl,
    Flex,
    Text,
    Input,
    Box,
    Image,
    Button
  } from "@chakra-ui/react";
import Weather from './Weather';
import MarsBackground from '../../img/mars.jpg'
import Night from '../../img/weather/night.svg'
import Nightday from '../../img/night.svg'

const Mars = () => {
    const {REACT_APP_MARS_API_KEY} = process.env;

    const api = {
        key: REACT_APP_MARS_API_KEY,
        base: "https://api.nasa.gov/planetary/" 
    }

    // const { weather, loading, fetchItems } = useFetch(`${api.base}apod?api_key=${api.key}&feedtype=json&ver=1.0`)

    useEffect(() => {

    }, [])

    
    return (
        <Flex
            mt={["6rem", "7rem", "8rem","11rem", "10rem"]}
            maxW={['75%', "85%", '90%', "100%", "20%"]}
            maxH="100%" 
            flexDir="column" 
            justifyContent="space-between"
            alignSelf="center"
        >
                <Weather 
                    bgImage={MarsBackground}
                    icon={Night}
                    setBgIcon=''
                    bgIcon='white'
                    name="Mars"
                    weatherLike="Hot"
                    temp="56"
                 />
        </Flex>
    )
}

export default Mars





