import React, { useState } from 'react';
import { FormControl, Flex, Box, FormLabel, Input, Textarea, Button, Spacer} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { createContact  } from '../../utils/API';

const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const {name, email, message } = formState;

    function handleChange(e) {

        setFormState({...formState, [e.target.id]: e.target.value})
        console.log(formState)

    }
    function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const response = createContact(formState);

            if (!response.ok) {
                throw new Error('something went wrong')
            }  
        } catch (err) {
            console.error(err)
        }

        setFormState({
            name: '',
            email: '',
            message: '',
          });
    }

    return (
        <>
        <Spacer padding="5vh"></Spacer>
        <Box p='4' borderRadius='md' bg={useColorModeValue()} w={["75%", "60%", "60%", "40%"]}>
            <form onSubmit={handleSubmit}>
                    <FormControl paddingRight={["0","0","10", "10"]} isRequired >
                        <Flex flexDirection={['column','column','row','row']}>
                            <FormLabel textAlign={'center'} width={["100%", "100%", "33%", "33%"]} box-sizing={"border-box"}  display={"inline-block"} color={useColorModeValue('midnightGreen')} htmlFor="name">Name:</FormLabel>
                            <Input borderRadius={'none'} borderColor={"midnightGreen"} box-sizing={"border-box"} display={"inline-block"} bg='white' color='black' type="text" id="name" value={name} onChange={handleChange} onBlur={handleChange} ></Input>
                        </Flex>
                    </FormControl>
                    <FormControl paddingRight={["0","0","10", "10"]} mt="2vh" isRequired>
                        <Flex flexDirection={['column','column','row','row']}>
                            <FormLabel align={'middle'} textAlign={'center'} width={["100%", "100%", "33%", "33%"]} box-sizing={"border-box"}  display={"inline-block"} color={useColorModeValue('midnightGreen')} htmlFor="email">Email address:</FormLabel>
                            <Input borderRadius={'none'} borderColor={"midnightGreen"} box-sizing={"border-box"} display={"inline-block"} bg='white' color='black' type = "email" id="email" value={email} onChange={handleChange}></Input>
                        </Flex>
                    </FormControl>
                    <FormControl mt="2vh" paddingRight={["0","0","10", "10"]}  isRequired>
                    <Flex flexDirection={['column','column','row','row']}>
                            <FormLabel textAlign={'center'} width={["100%", "100%", "33%", "33%"]} box-sizing={"border-box"}  display={"inline-block"} color={useColorModeValue('midnightGreen')} htmlFor="message">Message:</FormLabel>
                            <Textarea borderRadius={'none'} borderColor={"midnightGreen"}  box-sizing={"border-box"} display={"inline-block"} bg="white" color='black'id="message" rows="5" value={message} onChange={handleChange}/>
                        </Flex>
                    </FormControl>
                    <Box display="flex">
                    <Button border={"1px"} box-sizing={"border-box"} borderColor={'midnightGreen'} width={["100px", "150px", "200px", "250px"]} margin={"auto"} color={useColorModeValue('midnightGreen')} bg={"white"} mt="2vh" data-testid='button' type="submit">Submit</Button>
                    </Box>
            </form>
        </Box>
        <Spacer padding="4vh"></Spacer>
        </>
    )
}

export default ContactForm;