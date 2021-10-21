import React from 'react';
import { Flex, Text } from "@chakra-ui/react";

import Earth from '../../img/earth.jpg';
import Mars from '../../img/mars.jpg';
import Selection from './Selection';

const Home = () => {

    return (
        <Flex 
            flexDir='row' 
            justifyContent='space-between' 
            height='100%'
        >
            {/* Earth */}
            <Selection bgImage={Earth} content="Earth" />
            {/* Mars */}
            <Selection bgImage={Mars} content="Mars" />
        </Flex>
    )
}

export default Home
