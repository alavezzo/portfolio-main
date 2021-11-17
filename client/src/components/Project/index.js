import React from 'react';
import { Text, Icon, Box, Circle, Image, Flex, Link } from '@chakra-ui/react';
import { useColorModeValue, useColorMode } from '@chakra-ui/color-mode';
import { FaGithub } from 'react-icons/fa';


const Project = (props) => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"

    return (
        <>

            <Flex flexDirection={"column"}>
                {props.display && (
                    <Flex pt={16} alignItems="center" justifyContent={"center"} flexDirection={"column"}>
                        
                            <Box pb={10}>
                                <Link href={props.href} isExternal>
                                    <Text className={isDark ? 'project-name' : 'project'} fontWeight="Bold" bgClip="text" color={!isDark ? 'midnightGreen' : 'platinum'} fontSize={'large'} m={"auto"}>
                                        {props.name}
                                    </Text>
                                </Link>
                            </Box>
                            <Circle
                                    size="40px"
                                    bg="red.200"
                                ><Link href={props.github} isExternal>
                                        <Icon as={FaGithub} />
                                    </Link> </Circle>
                    </Flex>
                )}
                <Flex p={[10]} alignItems="center" justifyContent="center">
                    <Box
                        bg={useColorModeValue('_', 'midnightGreen')}
                        _hover={{ boxShadow: "dark-lg" }}
                        rounded="lg"
                        position="relative">
                        <Image
                            height="250px"
                            width={["100%"]}
                            src={props.src || "https://media.giphy.com/media/93MrPOAnnWuNdnyDVZ/giphy.gif"}
                            alt={props.alt}
                            roundedTop="lg"
                        />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Project;