import { Spacer, Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode'
import { useColorModeValue } from '@chakra-ui/color-mode';
import React from 'react';
import Pdf from '../../assets/documents/AnthonyLavezzoResume.pdf';

const Hero = () => {

    const { colorMode } = useColorMode();

    const isDark = colorMode === "dark"
    // src='https://avatars.githubusercontent.com/u/84944528?v=4'
    return (
            <Stack pt="2">
                <Circle position="absolute" bg={useColorModeValue("rocketMetallic", "platinum")} opacity="0.1" alignSelf="flex-end" w="300px" h="300px"/>
                <Flex direction={["column", "column", "row", "row"]}
                    spacing="200px" p={["0","0", "32", "32"]}
                    alignSelf="flex-start">
                    <Box mt={["16", "16", "0", "0"]} align='flex-start'>
                        <Text color={useColorModeValue("midnightGreen", "platinum")} fontSize="5xl" fontWeight="semiBold">Hi, I am</Text>
                        <Text className={ !isDark ? "gradient" : ''} bgGradient={ isDark ? "linear(to-r, midnightGreen, pink)" : ''} fontSize="7xl" fontWeight="Bold" bgClip="text" >Anthony</Text>
                        <Text color={useColorModeValue("midnightGreen", "platinum")} > Driven and passionate Full Stack Developer. Volunteer Product Manager at Develop For Good. Looking to deepen my knowledge of cutting-edge programming technologies and develop impactful applications.</Text>
                        <Spacer p={2}></Spacer>
                        <Button onClick={()=> window.open(Pdf)}>Resume</Button>
                        </Box>  
                        <Image alignSelf="center" mt={["12", "12", "0", "0"]}
                        mb={["12", "12", "0", "0"]} borderRadius='full'
                        backgroundColor={useColorModeValue("darkPurple", "rocketMetallic")} boxShadow="lg"
                        boxSize="300px" src={'https://github.com/alavezzo/portfolio-main/blob/main/client/src/assets/icons/my_character.svg?raw=true'} />
                </Flex> 
            </Stack>

    )
}

export default Hero;