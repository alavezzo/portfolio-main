import React, {useState} from 'react';
import Project from '../Project';
import {
  Link,
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Flex,
  Container,
  Icon,
  Circle
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      text: 'Crowdsourced Covid-19 safety reviews of local venues. Built with a MVC framework using Handlebars, Express, MySql, and Node',
      image:
        'https://images.unsplash.com/photo-1636898611447-56ddc118a834?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjMwNTg&ixlib=rb-1.2.1',
      name: 'Covid Venue Tracker',
      href: 'https://venue-covid-tracker.herokuapp.com/',
      github: 'covid-app',
      alt: 'Covid Venue Tracker SplashPage',
      src: 'https://media.giphy.com/media/onjwSpvcs1dGqyrrkv/giphy.gif'
    },
    {
      title: 'Design Projects 2',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjE1NTg&ixlib=rb-1.2.1',
        name: 'Cocktail and Music Pairings',
        href: 'https://alavezzo.github.io/prism/',
        github: 'prism',
        alt: 'Cocktail and Music Pairings SplashPage',
        src: 'https://media.giphy.com/media/pPirlhtP77nifbTuPc/giphy.gif'
    },
    {
      title: 'Design Projects 3',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1636896760747-41ebf945701f?ixid=MnwyNzU2MjJ8MHwxfGFsbHx8fHx8fHx8fDE2MzY5MjE3NjQ&ixlib=rb-1.2.1',
      name: 'Employee Database Interface',
      href: 'https://github.com/alavezzo/employee-tracker#readme',
      github: 'employee-tracker',
      alt: 'Interface Depiction',
      src: 'https://media.giphy.com/media/qAVT2mN2FY1FJgp8tg/giphy.gif'
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'} paddingTop={16}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'4xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Flex paddingLeft={20} paddingRight={20} flexDirection={"row"}>
            <Container size="container.lg" height="600px" position="relative">
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
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
                <Circle
                          size="40px"
                          top={4}
                          right={4}
                          bg="red.200"
                      ><Link href={card.github} >
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
        ))}
      </Slider>
    </Box>
  );
}