import React from 'react'
import { Image, Flex } from "@chakra-ui/react";

import Logo from '../img/logo.png'

const Header = () => {
    return (
        <Flex flexDir="row" justifyContent="center">
            <Image 
                className="header"
                src={Logo} 
                position="absolute"
                height="10%"
                mt="1rem"
            />
        </Flex>
    )
}

export default Header
