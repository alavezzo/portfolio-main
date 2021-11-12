import React from 'react';
import { FaLinkedin, FaUserNinja, FaGithub, FaSun } from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { HStack, Link, Button } from '@chakra-ui/react';
import Pdf from "../../assets/documents/AnthonyLavezzoResume.pdf"

const Footer = ({ home }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark"

    return (

        <footer>
        <HStack>
            <IconButton icon={isDark ? <FaSun/> : <FaUserNinja /> } isRound="true" onClick={toggleColorMode}></IconButton>
            <Link href={'https://linkedin.com/in/lavezzoae'} isExternal>
            <IconButton icon={<FaLinkedin />} isRound="true">
            </IconButton>
            </Link>
            <Link href={'https://github.com/alavezzo'} isExternal>
            <IconButton icon={<FaGithub />} isRound="true"></IconButton>
            </Link>
            {!home && (
                <Button onClick={()=> window.open(Pdf)}>Resume</Button>

            )}
        </HStack>
        </footer>

    )
}

export default Footer;