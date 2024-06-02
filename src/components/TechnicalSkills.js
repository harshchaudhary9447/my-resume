import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'


const TechnicalSkills = () => {
    return (
        <Box p={'.5rem'}>
            <Heading pl={'.5rem'} color={"black"} fontSize={'16px'}>TECHNICAL SKILLS</Heading>
            <hr style={{ border: "2px solid black", background: "#025050", borderRadius: "50px" }} />
            <Box color={"#444654"} p={'.5rem'} fontSize={'15px'}>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Programming languages: </span>JavaScript, Python, Java, MySQL
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Web Technologies:: </span>  HTML, CSS, JavaScript
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Version Control & Collaboration: </span> Git, GitHub, Vercel, Netlify, VS Code
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Library/Framework: </span> Reactjs, Tailwind CSS, Bootstrap,SCSS,Chakra UI, Redux toolkit

                </Text>
            </Box>
        </Box>
    )
}

export default TechnicalSkills
