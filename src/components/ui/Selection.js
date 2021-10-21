import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router';

const Selection = ({ bgImage, content }) => {
    const history = useHistory();
    const handleClick = () => history.push(`/${content.toLowerCase()}`);

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
            onClick={handleClick}
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
