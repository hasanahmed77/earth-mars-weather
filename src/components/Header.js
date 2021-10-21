import React from 'react'
import { Image, Flex } from "@chakra-ui/react";
import { useHistory } from 'react-router';

import Logo from '../img/logo.png'

const Header = () => {
    const history = useHistory();
    const handleClick = () => history.push('/');

    return (
        <Flex flexDir="row" justifyContent="center">
            <Image 
                className="header"
                src={Logo} 
                position="absolute"
                height="10%"
                mt="1rem"
                onClick={handleClick}
            />
        </Flex>
    )
}

export default Header
