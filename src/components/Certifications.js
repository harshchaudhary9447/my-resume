import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'


const Certifications = () => {
    return (
        <Box display={'flex'} flexDir={'column'} w={'100%'} p={'0 1rem'} >
            <Heading pl={'.5rem'} color={"black"} fontSize={'16px'}>CERTIFICATIONS</Heading>
            <hr style={{ border: "2px solid black", background: "#025050", borderRadius: "50px" }} />
            <Text color={"#444654"} p={'.5rem'} fontSize={'16px'} >
                <ul>
                    <li>Code Crafters Web design Competition --2nd Position</li>
                    <li>PortFolio Contest --3rd Position</li>
                    <li>Java Programming Quiz -- CyberKart --1st Rank</li>
                    <li>KIMO's-Edge'23 Tech Competition -- 2nd Rank</li>
                </ul>
            </Text>
        </Box>
    )
}

export default Certifications
