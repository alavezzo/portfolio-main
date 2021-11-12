import React from 'react';
import { Text, Icon, Box, Circle, Image, Flex, Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaGithub } from 'react-icons/fa';


const Project = (props) => {

        
    return (
        <>
        <Flex flexDirection={"row"}>
           <Link href={props.href} isExternal>
                        <Box  p="8">
                            <Box d="flex">
                                <Text color={useColorModeValue('midnightGreen')} m={"auto"}>
                                    {props.name}
                                </Text>
                            </Box>
                        </Box>
            </Link>
            <Flex p={50} alignItems="center" justifyContent="center">
                    <Box
                        bg={useColorModeValue('_','midnightGreen')}
                        _hover= {{ boxShadow: "dark-lg"}}
                        rounded="lg"
                        position="relative">
                        <Circle
                            size="40px"
                            position="absolute"
                            top={4}
                            right={4}
                            bg="red.200"
                        ><Link href={props.github} isExternal>
                        <Icon as={FaGithub}/>
                        </Link> </Circle>
                        <Image
                            src={props.src || "https://media.giphy.com/media/93MrPOAnnWuNdnyDVZ/giphy.gif"}
                            alt={props.alt}
                            roundedTop="lg"
                            width="450px"
                            height="300px"
                        />
                    </Box>
                </Flex>
            </Flex>
        </>
        )
    }

export default Project;