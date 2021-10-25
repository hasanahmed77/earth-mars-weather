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
    const [icon, setIcon] = useState('');

    // custom hooks
    const { weather, loading, fetchItems } = useFetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

    // functions
    const search = evt => {
        if(evt.key === "Enter") {
            fetchItems();
        }
    }

    // useEffects
    useEffect(() => {
        setIcon((((weather.data?.weather[0].icon.includes('d'))) ? 'white' : '#EFCF6E'))
    }, [weather.data])

    // main
    return (
        <Flex 
            mt={["7rem", "7rem", "8rem","11rem", "8rem"]}
            maxW={['85%', "85%", '90%', "100%", "100%"]}
            maxH="70%" 
            flexDir="column" 
            justifyContent="space-between"
            alignSelf="center"
        >
            {/* form */}
            <FormControl id="text" mb="2rem">
                <Text 
                    mb="1rem" 
                    textAlign="center"
                    fontSize="xl"
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
            <Box
                width={['100%', "100%", "100%", "35rem", "100%"]}
                height={['92%', '92%', "100%", "100%", "100%"]}
                bg="btnColor.200"
                shadow="2xl"
            >
                {/* background image */}
                <Flex>
                    <Image src={(weather.data?.weather[0].icon.includes('d')) ? Day : Night} w="100%" />
                </Flex>
                <Flex 
                >
                    {/* weather icon */}
                    <Image 
                        src={`http://openweathermap.org/img/wn/${weather.data?.weather[0].icon}@2x.png`}
                        w="20%" 
                        ml="auto"
                        mr="auto"
                        mt="-10%"
                        background={icon}
                        borderRadius="20rem"
                    />
                </Flex>
                    {/* weather info */}
                 <Flex 
                    flexDir="column" 
                    justifyContent="space-around"
                    textAlign="center"
                    fontSize="3xl" 
                    mb="10%"
                 >
                    <Text fontWeight="regular" pb="0.5rem" pt="0.5rem">{weather.data?.name}</Text>
                    <Text fontWeight="light" fontSize="2xl">{weather.data?.weather[0].main}</Text>
                    <Text fontWeight="light" fontSize="5xl">{Math.round(weather.data?.main.temp)}°C</Text>
                 </Flex>
            </Box>
            }
        </Flex>
    )
}

export default Earth;
