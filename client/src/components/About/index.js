import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image, Spacer, VStack } from '@chakra-ui/react';
import {useColorModeValue} from '@chakra-ui/color-mode'
import { useState} from 'react';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button"
import { useMediaQuery } from '@chakra-ui/react';

export default function About() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:760px)")
  const [photo, setPhoto]  = useState(2)
  
    function forwardPhoto() {
      
          if (photo === 3) {
            setPhoto(1)
          } else {
            setPhoto(photo+1);
          }
      } 
  function backwardPhoto() {
      
        if (photo === 1) {
          setPhoto(3)
        } else {
          setPhoto(photo-1);
        }
      }

  return (
    <>
    <VStack >
    <Spacer padding={4}></Spacer>
    <Text
            color={useColorModeValue('darkPurple','platinum')}
            fontSize={{ base: 'xl', md: '2xl' }}
            align={'left'}
            width={['xs','md', '2xl', '4xl']}>
              My paintings are my first introduction...
        </Text>
    <Spacer padding={2}></Spacer>
    <Flex direction={['column', 'column', 'row', 'row']} paddingBottom={[10, 10, 0, 0]} >
        
    {isNotSmallerScreen && (<IconButton icon={<FaArrowLeft />} alignSelf='center' onClick={backwardPhoto}></IconButton>)}
        {!isNotSmallerScreen && (<Box align='center'> <IconButton icon={<FaArrowLeft />} alignSelf='center' onClick={backwardPhoto}></IconButton><IconButton icon={<FaArrowRight />} alignSelf='center'  onClick={forwardPhoto}></IconButton><Spacer padding={2}/></Box>)}
          <Box height={'250px'} width={'400px'} align={'center'}>
              {photo === 1 && (<Image height={'250px'} src={require('../../assets/paintings/supermarket.JPG').default}/>)} 
              {photo === 2 && (<Image height={'250px'} src={require('../../assets/paintings/storybook.JPG').default}/>)}
              {photo === 3 && (<Image height={'250px'}   src={require('../../assets/paintings/bluedaydream.JPG').default}/>)}
              </Box>

        {isNotSmallerScreen && (<IconButton icon={<FaArrowRight />} alignSelf='center' onClick={forwardPhoto}></IconButton>)}

            
  
    </Flex>
    <Spacer padding={10}></Spacer>
    </VStack>
    </>
  );
}