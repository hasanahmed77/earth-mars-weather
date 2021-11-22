import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';

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


const Weather = ({ data, bgImage, icon, setBgIcon , bgIcon, name, weatherLike, temp }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/earth'){
            setBgIcon((((icon.includes('d'))) ? 'white' : '#EFCF6E'))
        } else {
        }

    }, [data])

    return (
        <Flex>
            <Box
                width={['100%', "100%", "100%", "35rem", "100%"]}
                height={['100%', '100%', "100%", "100%", "100%"]}
                bg="btnColor.200"
                shadow="2xl"
            >
                {/* background image */}
                <Flex>
                    <Image src={bgImage} w="100%" />
                </Flex>
                <Flex 
                >
                    {/* weather icon */}
                    <Image 
                        src={icon}
                        w="20%" 
                        ml="auto"
                        mr="auto"
                        mt="-10%"
                        background={bgIcon}
                        borderRadius="20rem"
                    />
                </Flex>
                    {/* weather info */}
                 <Flex 
                    flexDir="column" 
                    justifyContent="space-around"
                    textAlign="center"
                    fontSize={['2xl', '3xl', "3xl", "5xl", "3xl"]}
                    height="25%"
                 >
                    <Text fontWeight="regular" pb="0.5rem" pt="0.5rem">{name}</Text>
                    <Text fontWeight="light" fontSize={['xl', '2xl', "2xl", "2xl", "2xl"]} >{weatherLike}</Text>
                    <Text fontWeight="light" fontSize={['3xl', '5xl', "5xl", "7xl", "5xl"]} pb="0.5rem">{Math.round(temp)}°C</Text>
                 </Flex>
            </Box>
        </Flex>
    )
}

export default Weather
