import { Box, Image, Flex, useColorModeValue, Text } from '@chakra-ui/react';


export default function About() {
  
  

  return (
    <Flex w="80%" direction={['column', 'column', 'row', 'row']} align={'center'}>
        <Box>
        <Text
            color={useColorModeValue('darkPurple','platinum')}
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign={'center'}
            maxW={'3xl'}>
        Full Stack Engineer. Product Manager at Develop For Good, The Pathway Initiative.
        </Text>
    
        </Box>
        <Box>
        <Image boxSize={"500px"} maxH='50%' alignSelf='center' src={require('../../assets/icons/my_character (1).svg').default}/>
        </Box>
    </Flex>
  );
}