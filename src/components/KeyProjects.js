import React from 'react'
import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa";


const KeyProjects = () => {
    return (
        <Box w={'100%'}>
            <Heading pl={'.5rem'} color={"black"} fontSize={'16px'}>KEY PROJECTS </Heading>
            <hr style={{ border: "2px solid black", background: "#025050", borderRadius: "50px" }} />
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>YouTube Lite | React.js | React-Router | Redux Toolkit | JavaScript</Heading>
                {/* <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px" }} href=" https://github.com/sachinsingh2020/My-Full-Stack-Chat-App" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a> */}
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://you-tube-lite-eight.vercel.app/" target='_blank' rel="noreferrer">
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend Hosted on Vercel 
                        </li>
                        <li>
                        Developed a scalable and performant video streaming app using React,  powered by <b>Youtube’s Live API</b>
                        </li>
                        <li>
                        Implemented <b>debouncing</b> for dynamic search and optimized it by storing results in the cache using Redux
                        </li>
                      <li> Made <b>nested comments</b> using Recursion and implemented <b>live chat</b> using API polling.</li> 
                    </ul>
                </Text>
            </Box>
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>
                    Gemini | React.js | CSS | Gemini API</Heading>
                {/* <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px", paddingLeft: "4.5rem" }} href=" https://github.com/sachinsingh2020/GBU-Movies-Full-Stack-App" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a> */}
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://gemini-tau-eight.vercel.app/" target='_blank' rel="noreferrer">
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend Hosted on Vercel
                        </li>
                        <li>
                        Developed a conversational AI web application emulating the functionality of Google Gemini using the Gemini API
                        </li>
                        <li>
                        Leveraged React hooks for efficient state management and to handle API calls, ensuring up-to-date market information
                        </li>
                        <li>
                        Designed and implemented responsive UI components using CSS for seamless user experience across devices
                        </li>
                        {/* <li>
                            Tech Used: React.js, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript.
                        </li> */}
                    </ul>
                </Text>
            </Box>
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>
                Cryptotracker | React.js |  Chart js |  React-router</Heading>
                {/* <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px", paddingLeft: "8rem" }} href=" https://github.com/sachinsingh2020/gbu-job-portal-frontend" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a> */}
                <a rel="noreferrer" style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://crypto-tracker-app-main.vercel.app/" target='_blank'>
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend & Backend Both Hosted on Vercel
                        </li>
                        <li>
                        Developed a <b>React-based</b> CryptoTracker application for <b>real-time tracking</b> of cryptocurrency prices
                        </li>
                        <li>
                        Implemented <b>dynamic charts for data visualization</b>, created charts using <b>Chart.js</b>
                        </li>
                        {/* <li>
                            Technologies used: React.js, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript.
                        </li> */}
                    </ul>
                </Text>
            </Box>
        </Box>
    )
}

export default KeyProjects
