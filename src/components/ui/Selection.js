import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'

const Selection = ({ bgImage, content }) => {
    return (
        <Flex 
            width='50%' 
            backgroundImage={bgImage}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            alignItems="center"
            _hover={{ width: "55%", transition: "all 500ms" }}
            transition="all 500ms"
        >
        <Text 
            ml="auto" 
            mr="auto" 
            fontSize="10rem" 
            fontWeight="bold" 
            color={(content === "Earth") ? "black" : "white"}
        >
            {content}
        </Text>
    </Flex>
    )
}

export default Selection
