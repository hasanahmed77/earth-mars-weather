import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import axios from 'axios';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Text,
    Input,
    Container,
    Box,
    Image,
    Button
  } from "@chakra-ui/react";

import Night from '../../img/night.svg'
import Day from '../../img/day.svg'
import Thunderstorm from '../../img/weather/thunderstorm.svg';

const {REACT_APP_API_KEY} = process.env;

const api = {
    key: REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/" 
    // weather?q={city name}&appid={API key}
}

const Earth = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const search = evt => {
        if(evt.key === "Enter") {
            const fetchItems = async () => {
                const result = await axios(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
    
                console.log(result);
                setWeather(result);
                setQuery('');
                setLoading(true);
            }
            fetchItems();
        }
    }

    const handleClick = () => {
        const fetchItems = async () => {
            const result = await axios(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);

            console.log(result);
            setWeather(result);
            setQuery('');
            setLoading(true)
        }
        fetchItems();
    }

    return (
        <Flex 
            mt="8rem" 
            maxW="20%" 
            maxH="90%" 
            flexDir="column" 
            justifyContent="space-between"
            alignSelf="center"
        >
            <FormControl id="text" mb="2rem">
                <Text 
                    mb="1rem" 
                    textAlign="center"
                    fontSize="xl"
                    fontWeight="light"
                    colorScheme="red"
                >
                    Enter a location for weather information
                </Text>
                <Flex>
                <Input 
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                <Button ml="0.5rem" colorScheme="red" onClick={handleClick}>Search</Button>
                </Flex>
            </FormControl>
            {
                loading &&
            <Box
                width="100%"
                bg="tomato"
                maxH="67vh"
                height="67vh"
                shadow="2xl"
            >
                <Flex>
                    <Image src={Night} w="100%" />
                </Flex>
                <Flex
                >
                    <Image 
                        src={Thunderstorm} 
                        w="20%" 
                        ml="auto"
                        mr="auto"
                        mt="-10%"
                        background="white"
                        borderRadius="20rem"
                    />
                </Flex>

                 <Flex 
                    flexDir="column" 
                    justifyContent="space-between"
                    textAlign="center"
                    fontSize="3xl"
                 >
                    <Text fontWeight="medium" pb="0.5rem">{weather.data?.name}</Text>
                    <Text fontWeight="light" fontSize="2xl">{weather.data?.weather[0].main}</Text>
                    <Text fontSize="5xl">{weather.data?.main.temp}°C</Text>
                 </Flex>

            </Box>
            }
        </Flex>
    )
}

export default Earth
