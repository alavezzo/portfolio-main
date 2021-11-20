import React, { useState } from 'react';
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';
import yellow from './assets/backgrounds/yellow.jpg'
import pink from './assets/backgrounds/pink.jpg'
import blue from './assets/backgrounds/blue.jpg'


function App() {
  const photos = [
    {
      title: 'Toilet SOS',
      text:
          "This app locates nearby public restrooms. Users can view details pertaining to each restroom and leave reviews. User also can submit a new restroom entry that will populate to their current location. Built with the MERN stack, Apollo Client, GraphQL, Google Maps API, and the navigator.geolocation API",
      image: yellow,
      name: 'Toilet SOS',
      href: 'project-toilet.herokuapp.com',
      github: 'https://github.com/eisforgene/project-toilet#readme',
      alt: 'Interface Depiction',
      src: require('./assets/projects/ToiletSOS.gif').default,
      bg: 'blue.300'
    },
    // {
    //     text: 'Crowdsourced Covid-19 safety reviews of local venues. Built with a MVC framework using Handlebars, Express, MySql, and Node',
    //     image: blue,
    //     name: 'Covid Venue Tracker',
    //     href: 'https://venue-covid-tracker.herokuapp.com/',
    //     github: 'http://github.com/alavezzo/covid-app#readme',
    //     alt: 'Covid Venue Tracker SplashPage',
    //     src: 'https://media.giphy.com/media/onjwSpvcs1dGqyrrkv/giphy.gif',
    //     bg: 'red.300'
    //   },
      {
        title: 'Cocktail and Music Pairings',
        text:
          "This application returns a list of music recommended to pair with a selected cocktail. Users can add their favorite music to a favorites list that is stored locally. Built with JQuery, HTMl, and Bootstrap CSS.",
        image: blue,
          name: 'Cocktail and Music Pairings',
          href: 'https://alavezzo.github.io/prism/',
          github: 'https://github.com/alavezzo/prism#readme',
          alt: 'Cocktail and Music Pairings SplashPage',
          src: 'https://media.giphy.com/media/pPirlhtP77nifbTuPc/giphy.gif',
          bg: 'green.200'
      },
      {
        title: 'Employee Database Interface',
        text:
          "This command line application guides users as they interface with a MySql database storing Employee information. Built with node.js, inquirer, and MySql.",
        image: pink,
        name: 'Employee Database Interface',
        href: 'https://github.com/alavezzo/employee-tracker#readme',
        github: 'https://github.com/alavezzo/employee-tracker#readme',
        alt: 'Interface Depiction',
        src: 'https://media.giphy.com/media/qAVT2mN2FY1FJgp8tg/giphy.gif',
        bg: 'blue.300'
      }
]
  

  const [home, setHome] = useState(true)

  return (
 
    <Router>
    <VStack minHeight={"100vh"} bg={useColorModeValue('platinum', 'darkPurple')} p={10}>
      <Header home={home} setHome={setHome} />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Portfolio photos={photos} />} />
      </Routes>
      <Footer home={home} ></Footer>
    </VStack>
    </Router>
  );
}

export default App;
