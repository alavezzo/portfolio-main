import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Text } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useColorMode } from '@chakra-ui/color-mode'

function Nav({ sections, setHome, home, currentSection, setCurrentSection }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"

    return (
        <>
            <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Box>
            <Box display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }} >
                <Stack spacing={8} align='center' justify={['center', 'space-between', 'flex-end', 'flex-end']} direction={['column', 'row', 'row', 'row']} pt={[4, 4, 0, 0]}
                >

                    {sections.map((section) => {
                        return (
                            <Link
                            style= {{ textDecoration: 'none' }}
                            key={section.name}
                            onClick={() => {setCurrentSection(section.name); setHome(false)}}
                            className={`${currentSection === section.name && isDark && !home && 'navActive'} ${currentSection !== section.name && isDark && 'platinum'} ${currentSection === section.name && isDark && home && 'platinum'} ${currentSection === section.name && !isDark && !home && 'navActive'} ${currentSection !== section.name && !isDark && 'midnightGreen'} ${currentSection === section.name && !isDark && home && 'midnightGreen'} ` } to={`/${section.name}`}
                            >
                                <Text display="block" >{section.name}</Text>
                            </Link>
                        )
                    })}
             
            </Stack>
           
        </Box>
        </>
    )


};

export default Nav;