import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false
    },
    colors: {
        darkPurple: '#351431',
        rossoCorso: '#21A0A0',
        rocketMetallic: '#887880',
        midnightGreen: '#02394A',
        platinum: '#DFE0DC',
        end: '#02444A'
    }
})