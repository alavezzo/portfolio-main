import React from 'react';
import Project from '../Project';
import {
  Link,
  Box,
  Spacer,
  Stack,
  Heading,
  Text,
  Flex,
  Container,
  Icon,
  Circle
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';


export default function PortfolioCards( {photos}) {

  return (
    <>
    <Spacer padding={10}></Spacer>
    {photos.map((card, index) => (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
          <Box
            key={index}
            height={'4xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}>
            {/* This is the block you need to change, to customize the caption */}
            <Flex paddingLeft={20} paddingRight={20} flexDirection={"row"}>
            <Container size="container.lg" height="400px" position="relative">
              <Stack
                spacing={6}
               w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.name}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="Black">
                  {card.text}
                </Text>
                <Circle
                          size="40px"
                          top={4}
                          right={4}
                          bg={card.bg}
                      ><Link href={card.github} isExternal>
                      <Icon as={FaGithub}/>
                      </Link> </Circle>
              </Stack>
              </Container>
              <Project 
              alt={card.alt}
         key={card.name}
         name={card.name}
         github={card.github}
         href={card.href}
         src={card.src} display={false}></Project>
            </Flex>
          </Box>
    </Box>
      ))}
        </>
  );
}