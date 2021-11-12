import Nav from '../Nav';
import { Flex, Box, Heading } from '@chakra-ui/react';
import {Link } from "react-router-dom";
import React, {useState} from 'react';

const Header = ({ home, setHome }) => {   
  
    const [sections] = useState([
      {
        name: 'About'
      },
      {
        name: 'Portfolio'
      },
      {
        name: 'Contact'
      }
    ]);
    
    const [currentSection, setCurrentSection] = useState('')

    
    return (
      <>
        <Flex w="100%" p="0" ml="20">
            <Link onClick={()=> setHome(true)} to={'/'}>
                <img alt={'logo'} width="20px" height="20px" src={require(`../../assets/icons/AL_logo.png`).default}/>
            </Link>
            
        </Flex>
        <Nav setHome={setHome} home={home} sections={sections} currentSection={currentSection} setCurrentSection = {setCurrentSection}></Nav>
        {/* {!home && (
        <Flex>
          <Box>
            <Heading>{currentSection}</Heading>
          </Box>
        </Flex>
        )} */}
      </>
    )
    }

export default Header;